import './User.css'
import SuggestionBox from '../suggestion-box/SuggestionBox'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import axios from 'axios'
import { getDummyIsrael, getDummyOverall, searchSong, newUser } from '../../../utils/UserRoutes'


function User() {

    const [data, setData] = useState();
    const [section, setSection] = useState(true);
    const [input, setInput] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState();

    useEffect(() => {
        axios.get(section ? getDummyIsrael : getDummyOverall)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [section])

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            axios.get(newUser)
                .then((res) => {
                    localStorage.setItem('userId', res.data._id)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [])

    function handleSearch() {
        axios.post(searchSong, {
            input: input
        })
            .then((res) => {
                setData(res.data)
                console.log(res);
            })
    }

    console.log(data);
    return (
        <>
            <div id='user-container' dir='rtl'>
                <div id='bali-logo'>BaLi</div>
                <Link to={'/admin'}>admin</Link>
                <div id='user-establishment-container'>
                    <div id='establishment-logo'>ESTAB LOGO</div>
                    <div id='establishment-slogan'>"עשה לך רב וקנה לך חבר"</div>
                </div>
                <div id='user-search-container'>
                    <input id='user-searchbar' type="text" placeholder='חפש...' onChange={(e) => { setInput(e.target.value) }} />
                    <button onClick={handleSearch}>חפש</button>
                </div>
                <div id='user-suggestion-container'>
                    {data && data.map((value, index) => {
                        return <SuggestionBox key={index} video={value} setShowModal={setShowModal} setModalContent={setModalContent}/>
                    })}
                </div>
                <div id='user-footer'>
                    <div onClick={() => setSection(true)}>ישראל</div>
                    <div onClick={() => setSection(false)}>עולמי</div>
                    <div>עסק זה</div>
                </div>
            </div>
            {showModal && createPortal(
                <Modal onClose={() => setShowModal(false)} modalContent={modalContent}/>,
                document.body
            )}
        </>
    )
}

export default User