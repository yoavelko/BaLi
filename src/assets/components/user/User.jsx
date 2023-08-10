import './User.css'
import SuggestionBox from '../suggestion-box/SuggestionBox'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import axios from 'axios'
import { getDummyIsrael, getDummyOverall, searchSong, newUser } from '../../../utils/UserRoutes'
import { estabBest } from '../../../utils/Establishment';
import LOGO from './../../../media/LOGO.png'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cookies from 'js-cookie'
import Loader from '../loader/Loader';

function User() {

    const [style, setStyle] = useState({
        israel: 'rgb(89, 147, 184)',
        overall: '',
        establishment: ''
    })
    const [data, setData] = useState();
    const [section, setSection] = useState('israel');
    const [input, setInput] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState();
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (!cookies.get('establishment')) navigate('/error')
        if (!cookies.get('userId')) {
            axios.get(newUser)
                .then((res) => {
                    console.log(res);
                    cookies.set('userId', res.data._id, { expires: 0.25 })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [])

    useEffect(() => {
        setLoader(true)
        if (section === 'israel' || section === 'overall') {
            axios.get(section === 'israel' ? getDummyIsrael : section === 'overall' && getDummyOverall)
                .then((res) => {
                    setData(res.data);
                    setLoader(false)
                })
                .catch((err) => {
                    console.log(err);
                })
        } else if (section === 'establishment') {
            axios.post(estabBest, {
                establishment: cookies.get('establishment')
            })
                .then((res) => {
                    setData(res.data);
                    setLoader(false)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [section])

    function handleSearch() {
        setLoader(true)
        axios.post(searchSong, {
            input: input
        })
            .then((res) => {
                setData(res.data)
                setSection('search')
                window.scrollTo({ top: 0, behavior: 'smooth' })
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

    showModal ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
        <>
            <div id='user-container' dir='rtl'>
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
                {
                    loader ?
                        <div id='loader-filler'>
                            <Loader />
                        </div>
                        :
                        <div id='user-suggestion-container'>
                                {/* data ?
                                    <div id='no-history-page'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC40lEQVR4nO2YW0tUURTHjxppOH4A+wDZV8gub2EGQeEXKEPo4lNZj1JU0r3UMtB6iQiCSPwIhVYPXT5AVx1D7bEGuhD9YjHr0Gp79jiN+8w4cP5wYDhnzX/9995r//c6J4oyZFh7AJqA7cBl4BmwBPzUa0nvXQK2SWy0VgBsAE6qyHKxCAwALbUW3wPMUTlmgX21EN4AnAF+JwgaBrqADqBVrw69N5IwYOE4LZzVEt8I3HdEiKgD5dQ2xb3SC+QdjntVGYTOvMVDmeUKeHLApMN1Kh3V/9a8LZsrq5k1iqV4zSmnvWFV/03WojUe45GUUwDeBuCB4f2YijupVdqabw3InQPmDf/xUNx241mf358Qcx4oAEMleLwxwEHDvxBidS25nLAxZpPcBviqz7+U4PHG6CRZi90acgDSHsQY9sQMqcCzJXhKxgCjJs/FkAOQPiZGVzBiB0C3yTMThQLw2RBvCkbsQE/sGItRKAA/DHEuGHGyG8X4HoWC2XyCthVi1wP9wHN1nIKW4FF5FpX+b1taA3hbTgkBG4HX+PESaK9FCT0xxLs8Mc3AK1bGC99KALtN3HTIAZwzxCOemH67/HKaymzrNaD3YhzxcNxIy0Z3GOI5z0EmNe9tBYAT5vnThOfrnBa7M+QAhPy9Ie9dYaO3e/ZHjKSTuC+1VkITHDYJ8iHtlKL7fDL8x0Jxu+20daPJQO10IzBleGWlm8OoXp6sE/hlkl1dzSAoir/uvNDsCat6ecIZkzBeiVyFZTPlcA2mLX6cZMxrP99UpiH0OTUvuJvaS71H/IxTTrHFjmpXuVl7m5z+7lafzzv/kbIZTFv8hJN0XO9vAd5QOT5Uo+YTxTstxCHg3X8IXxCrTM1tSoif8LmO+bgr340e68oUtIWQb6HTwAV1srCHlOdTx5gj/k7qiUMgE18rkJVNbWf+Vl1uWAFw0xF/u27EC4CdwLe6m3kL7VPG6lJ8hgwZMkTVxh9duoVdPSe70wAAAABJRU5ErkJggg==" />
                                        <div>עדיין אין היסטורה לעסק זה</div>
                                    </div>
                                    : */}
                            {
                                    data && data.map((value, index) => {
                                        return <SuggestionBox key={index} video={value} setShowModal={setShowModal} setModalContent={setModalContent} />
                                    })
                            }
                        </div>
                }
                <div id='user-footer'>
                    <div style={{ color: style.israel }} onClick={() => { setStyle({ ...style, israel: 'rgb(89, 147, 184)', overall: '', establishment: '' }), setSection('israel'), window.scrollTo({ top: 0, behavior: 'smooth' }) }}>ישראל</div>
                    <div>|</div>
                    <div style={{ color: style.overall }} onClick={() => { setStyle({ ...style, overall: 'rgb(89, 147, 184)', israel: '', establishment: '' }), setSection('overall'), window.scrollTo({ top: 0, behavior: 'smooth' }) }}>עולמי</div>
                    <div>|</div>
                    <div style={{ color: style.establishment }} onClick={() => { setStyle({ ...style, establishment: 'rgb(89, 147, 184)', israel: '', overall: '' }), setSection('establishment'), window.scrollTo({ top: 0, behavior: 'smooth' }) }}>UP2U</div>
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