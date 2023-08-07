import './Statistics.css'
import StatisticsSongbox from '../statistics-songbox/StatisticsSongbox'

function Statistics() {

    const topten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div id='statistics-container'>
            <div className='statistics-containers' id='statistics-overall-container'>
                <div className='statistics-headers' id='statistics-overall-header'>כללי</div>
                <div id='overall-conversion'>אחוז המרה: %X</div>
                <div id='top-ten-select'>
                    החמים ביותר
                    <select name="" id="">
                        <option value="">היום</option>
                        <option value="">השבוע</option>
                        <option value="">החודש</option>
                        <option value="">בכל הזמנים</option>
                    </select>
                </div>
                <div id='hottest-container'>
                    {
                        topten && topten.map((value, index) => {
                            return <StatisticsSongbox key={index} value={value} />
                        })
                    }
                </div>
            </div>
            <div className='statistics-containers' id='statstics-by-day-container'>
                <div className='statistics-headers' id='statistics-by-day-header'>לפי יום</div>
                <div id='statistics-calendar-container'></div>
                <div id='statistics-by-day-inner'>
                    <div className='statistics-inners' id='statistics-inner-right'>
                        <div>אחוז המרה: %Y</div>
                        <div>
                            <div>טופ 10 של DD/MM:</div>
                            <div id='hottest-container'>
                                {
                                    topten && topten.map((value, index) => {
                                        return <StatisticsSongbox key={index} value={value} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='statistics-inners' id='statistics-inner-left'>
                        <div id='daily-playlist-header'>
                            <div>הפלייליסט של DD/MM</div>
                            <button>ייבא פלייליסט</button>
                        </div>
                        <div id='daily-playlisy-container'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics