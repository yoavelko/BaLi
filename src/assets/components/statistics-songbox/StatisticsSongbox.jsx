import './StatisticsSongbox.css'

function StatisticsSongbox({ value, index }) {

    let title
    index = index + 1

    if (value && value?.name?.length > 20) {
        title = value.name.slice(0, 26) + '...'
    }

    return (
        <div id='songbox-outer'>
            <div>{index}.</div>
            <div id='statistics-songbox-container'>
                <div id='songbox-img-container'>
                    <img src={value.img} alt="" />
                </div>
                <div id='songbox-detail-container'>
                    <div id='songbox-video-name'>{title}</div>
                    <div id='songbox-small-row-container'>
                        <div className='songbox-small-row'>{value.artist}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StatisticsSongbox