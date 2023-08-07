import './StatisticsSongbox.css'

function StatisticsSongbox(params) {
    
    return (
        <div id='statistics-songbox-container'>
            <div id='songbox-img-container'>
                IMG
                <img src="" alt="" />
            </div>
            <div id='songbox-detail-container'>
                <div id='songbox-video-name'>שם השיר</div>
                <div id='songbox-small-row-container'>
                    <div className='songbox-small-row'>אומן</div>
                    <div className='dots'>&#x2022;</div>
                    <div className='songbox-small-row'>נשלח ב-</div>
                </div>
            </div>
        </div>
    )
}


export default StatisticsSongbox