import './SuggestionBox.css'

function SuggestionBox({video}) {

    const time = video.publishedAt.slice(0, 4)

    return (
        <div id='suggestion-box-container' dir='rtl' onClick={() => console.log(video.title)}>
            <div id='suggestion-img-container'>
                <img src={video.thumbnails.default.url} alt="" />
            </div>
            <div id='suggestion-detail-container'>
                <div id='suggestion-video-name'>{video.title}</div>
                <div id='suggestion-small-row-container'>
                    <div className='suggestion-small-row'>{video.videoOwnerChannelTitle}</div>
                    <div className='dots'>&#x2022;</div>
                    <div className='suggestion-small-row'>הועלה בשנת {time}</div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionBox