import './Modal.css'
import { useState, useContext } from 'react'
import axios from 'axios'
import { sendSong } from '../../../utils/UserRoutes'
import { SocketContext } from '../../../contexts/SocketContext'
import cookies from 'js-cookie'
import back from './../../../media/back.png'
import Loader from '../loader/Loader'
import SendButton from '../send-button/SendButton'

function Modal({ onClose, modalContent }) {

    const [checked, setChecked] = useState(false)
    const { socket } = useContext(SocketContext);
    const [loader, setLoader] = useState(false)

    function handleRequest() {

        if (checked === true) {
            setTimeout(() => {
                setLoader(true)
                axios.patch(sendSong, {
                    establishment: cookies.get('establishment'),
                    today: modalContent.today,
                    timeRequested: modalContent.timeRequested,
                    uploaded: modalContent.uploaded,
                    url: modalContent.url,
                    name: modalContent.name,
                    img: modalContent.img,
                    artist: modalContent.artist,
                    userId: cookies.get('userId')
                })
                    .then((res) => {
                    socket.emit('test', res.data, cookies.get('establishment'));
                    onClose()
                    setLoader(false)
                    alert('השיר נשלח בהצלחה')
                })
                    .catch((err) => {
                        setLoader(false)
                        alert('ניתן לשלוח עד 3 שירים')
                        onClose()
                    })
            }, 250);
        } else {
            alert('נא לאשר את תנאי השימוש לפני שליחה')
        }


    }

    return (
        <div id='modal-outer-container'>
            <div id='modal-container'>
                {
                    loader ?
                        <Loader />
                        :
                        <>
                            <div id='close-modal'>
                                <img src={back} alt="" onClick={onClose} />
                            </div>
                            <div dir='rtl' id='your-choice'>השיר שבחרת:</div>
                            <div id='modal-img-container'>
                                <img src={modalContent.img} alt="" />
                            </div>
                            <div id='modal-content-container'>
                                <div id='modal-detail-container'>
                                    <div id='modal-video-name'>{modalContent.name}</div>
                                    <div id='modal-small-row-container'>
                                        <div className='modal-small-row'>{modalContent.artist}</div>
                                        <div className='dots'>&#x2022;</div>
                                        <div className='modal-small-row'>הועלה בשנת {modalContent.uploaded}</div>
                                    </div>
                                </div>
                            </div>
                            <div id='term-of-use-container' dir='rtl'>
                                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                                <div>&nbsp;אני מאשר את תנאי השימוש</div>
                            </div>
                            <div>
                                <SendButton func={handleRequest}/>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Modal