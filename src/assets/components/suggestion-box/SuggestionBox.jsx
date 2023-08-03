import './SuggestionBox.css'

function SuggestionBox({ video, setShowModal, setModalContent }) {

    let title = video.name
    if (video.name.length > 20) {
        title = video.name.slice(0, 26) + '...'
    }

    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
  
    let hour = date.getHours();
    let min = date.getMinutes();
    if (hour.toString().length < 2) {
      hour = `0${date.getHours()}`
    }
    if (min.toString().length < 2) {
      min = `0${date.getMinutes()}`
    }
  
    const today = dd + '/' + mm + '/' + yyyy
    const time = hour + ':' + min
    const uploadedYear = video.uploaded.slice(0, 4)
    const uploaded = `${video.uploaded.slice(8, 10)}/${video.uploaded.slice(5, 7)}/${video.uploaded.slice(0, 4)}`
    const content = {
        establishment: "Forcing you",
        today: today,
        timeRequested: time,
        uploaded: uploadedYear,
        url: video.url,
        name: video.name,
        img: video.img,
        artist: video.artist,
        userId: localStorage.getItem('userId')
    }

    return (
        <div id='suggestion-box-container' dir='rtl' onClick={() => {setShowModal(true), setModalContent(content)}}>
            <div id='suggestion-img-container'>
                <img width={'100px'} src={video.img} alt="" />
            </div>
            <div id='suggestion-detail-container'>
                <div id='suggestion-video-name'>{title}</div>
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