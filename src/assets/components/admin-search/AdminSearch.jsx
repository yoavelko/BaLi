import { useState } from 'react'
import './AdminSearch.css'
import axios from 'axios'
import { searchSong } from '../../../utils/UserRoutes'
import AdminSuggestion from '../admin-suggestion/AdminSuggestion'
import cookies from 'js-cookie'
import back from './../../../media/back.png'
import LOGO from './../../../media/LOGO.png'
import Loader from '../loader/Loader'
import { adminSendSong } from '../../../utils/Establishment'

function AdminSearch({setAccepted}) {

    const [data, setData] = useState()
    const [input, setInput] = useState()
    const [adminModal, setAdminModal] = useState(true)
    const [adminModalContent, setAdminModalContent] = useState()
    const [hideSearch, setHideSearch] = useState(false)
    const [loader, setLoader] = useState(false)

    function handleSearch() {
        setLoader(true)
        axios.post(searchSong, {
            input: input
        })
            .then((res) => {
                setData(res.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    function handleRequest() {

        axios.post(adminSendSong, {
            establishment: cookies.get('establishment'),
            today: adminModalContent.today,
            timeRequested: adminModalContent.timeRequested,
            uploaded: adminModalContent.uploaded,
            url: adminModalContent.url,
            name: adminModalContent.name,
            img: adminModalContent.img,
            artist: adminModalContent.artist
        })
            .then((res) => {
                setAccepted(res.data)
                alert('השיר נשלח בהצלחה')
            })
            .catch((err) => {
                console.log(err.response);
                alert('ניתן לשלוח עד 3 שירים')
            })

    }

    return (
        <div id='admin-search-container'>
            <div id='admin-search'>
                <input id='admin-searchbar' type="text" placeholder=' חפש...' onChange={(e) => { setInput(e.target.value) }} onKeyDown={handleKeyPress} />
                <div className='admin-search-buttons' onClick={handleSearch}>חפש</div>
                <div className='admin-search-buttons' id='hide-button' onClick={() => setHideSearch(!hideSearch)}>
                    {
                        hideSearch ?
                            'הצג חיפוש'
                            :
                            'הסתר חיפוש'
                    }
                </div>
            </div>
            {
                hideSearch ?
                    <div id='admin-search-logo-placeholder'>
                        <img src={LOGO} alt="" />
                    </div>
                    :
                    adminModal ?
                        loader ?
                        <Loader />
                        :
                        <div id='admin-search-results'>
                            {data && data.map((value, index) => {
                                return <AdminSuggestion key={index} video={value} setAdminModal={setAdminModal} setAdminModalContent={setAdminModalContent} />
                            })}
                        </div>
                        :
                        <div id='admin-modal'>
                            <div id='modal-outer-container'>
                                <div id='modal-container'>
                                    <div id='close-modal'>
                                        <img src={back} alt="" onClick={() => setAdminModal(true)} />
                                    </div>
                                    <div dir='rtl' id='your-choice'>השיר שבחרת:</div>
                                    <div id='modal-img-container'>
                                        <img src={adminModalContent && adminModalContent.img} alt="" />
                                    </div>
                                    <div id='modal-content-container'>
                                        <div id='modal-detail-container'>
                                            <div id='modal-video-name'>{adminModalContent && adminModalContent.name}</div>
                                            <div id='modal-small-row-container'>
                                                <div className='modal-small-row'>{adminModalContent && adminModalContent.artist}</div>
                                                <div className='dots'>&#x2022;</div>
                                                <div className='modal-small-row'>הועלה בשנת {adminModalContent && adminModalContent.uploaded}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button id='modal-send-button' onClick={handleRequest}>שלח</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            }


        </div>
    )
}

export default AdminSearch