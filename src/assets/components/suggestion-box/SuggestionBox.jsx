import './SuggestionBox.css'

function SuggestionBox({ video }) {

    const time = video.uploaded.slice(0, 4)
    const uploaded = `${video.uploaded.slice(8, 10)}/${video.uploaded.slice(5, 7)}/${video.uploaded.slice(0, 4)}`

    function handleRequest() {

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;

        const hour = today.getHours();
        const min = today.getMinutes();
        const formattedTime = hour + ':' + min

        console.log(
            {
                url: video.url,
                name: video.name,
                img: video.img,
                artist: video.artist,
                uploaded: uploaded,
                today: formattedToday,
                timeRequested: formattedTime
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