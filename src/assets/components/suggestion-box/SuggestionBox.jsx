import './SuggestionBox.css'

function SuggestionBox({video}) {

    const time = video.uploaded.slice(0, 4)

    function handleRequest() {
        console.log(
            {
                url: video.url,
                name: video.name,
                img: video.img,
                artist: video.artist,
                uploaded: video.uploaded,
                timeSent: new Date()
            }
        );
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
                    <div className='suggestion-small-row'>הועלה בשנת {time}</div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionBox