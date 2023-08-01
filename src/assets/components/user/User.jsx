import './User.css'
import SuggestionBox from '../suggestion-box/SuggestionBox'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import axios from 'axios'
import { getDummyIsrael, getDummyOverall, searchSong, newUser } from '../../../utils/UserRoutes'
import LOGO from './../../../media/UP2U.png'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cookies from 'js-cookie'

function User() {

    const [data, setData] = useState();
    const [section, setSection] = useState('israel');
    const [input, setInput] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        if(!cookies.get('establishment')) navigate('/error')
        if (!cookies.get('userId')) {
            axios.get(newUser)
                .then((res) => {
                    console.log(res);
                    cookies.set('userId', res.data._id, {expires: 1})
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [])

    useEffect(() => {
        if (section === 'israel' || section === 'overall') {
            axios.get(section === 'israel' ? getDummyIsrael : section === 'overall' && getDummyOverall)
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [section])

    function handleSearch() {
        axios.post(searchSong, {
            input: input
        })
            .then((res) => {
                setData(res.data)
                setSection('search')
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

    showModal ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
        <>
            <div id='user-container' dir='rtl'>
                <div id='bali-logo'>

                </div>
                <Link to={'/admin'}>admin</Link>
                <div id='user-establishment-container'>
                    <div id='establishment-preslogan'>IT'S</div>
                    <div id='establishment-logo'>
                        <img width={80} src={LOGO} alt="" />
                    </div>
                    <div id='establishment-slogan'>SHARE YOUR TASTE</div>
                </div>
                <div id='user-search-container'>
                    <input id='user-searchbar' type="text" placeholder=' חפש...' onChange={(e) => { setInput(e.target.value) }} onKeyDown={handleKeyPress} />
                    <div id='user-search-breaker'></div>
                    <button id='search-button' onClick={handleSearch}>חפש</button>
                </div>
                <div id='user-suggestion-container'>
                    {data && data.map((value, index) => {
                        return <SuggestionBox key={index} video={value} setShowModal={setShowModal} setModalContent={setModalContent} />
                    })}
                </div>
                <div id='user-footer'>
                    <div onClick={() => setSection('israel')}>ישראל</div>
                    <div>|</div>
                    <div onClick={() => setSection('overall')}>עולמי</div>
                    <div>|</div>
                    <div>עסק זה</div>
                </div>
            </div>
            {showModal && createPortal(
                <Modal onClose={() => setShowModal(false)} modalContent={modalContent} />,
                document.body
            )}
        </>
    )
}

export default User