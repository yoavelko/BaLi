import './SuggestionBox.css'
import axios from 'axios';
import { sendSong } from '../../../utils/UserRoutes';
import { dateContext } from '../../../contexts/dateContext';
import { useContext } from 'react';

function SuggestionBox({ video }) {

    const { today, setToday, time, setTime } = useContext(dateContext);

    const uploadedYear = video.uploaded.slice(0, 4)
    const uploaded = `${video.uploaded.slice(8, 10)}/${video.uploaded.slice(5, 7)}/${video.uploaded.slice(0, 4)}`

    function handleRequest() {

        axios.patch(sendSong, {
            establishment: "Forcing you",
            today: today,
            timeRequested: time,
            uploaded: uploaded,
            url: video.url,
            name: video.name,
            img: video.img,
            artist: video.artist
        })
            .then((res) => {
                console.log(`sent: ${video.name}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div id='suggestion-box-container' dir='rtl' onClick={() => handleRequest()}>
            <div id='suggestion-img-container'>
                <img src={video.img} alt="" />
            </div>
            <div id='suggestion-detail-container'>
                <div id='suggestion-video-name'>{video.name}</div>
                <div id='suggestion-small-row-container'>
                    <div className='suggestion-small-row'>{video.artist}</div>
                    <div className='dots'>&#x2022;</div>
                    <div className='suggestion-small-row'>הועלה בשנת {uploadedYear}</div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionBox