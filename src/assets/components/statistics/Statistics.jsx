import './Statistics.css'
import StatisticsSongbox from '../statistics-songbox/StatisticsSongbox'
import axios from 'axios'
import { useEffect, useState } from 'react'
import cookies from 'js-cookie'
import { estabBest } from '../../../utils/Establishment'
import { getPlaylist } from '../../../utils/Statistics'

function Statistics() {

    const topten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [best, setBest] = useState()
    const [date, setDate] = useState('06/08/2023')
    const [playlist, setPlaylist] = useState()

    function handleSelect(event) {
        const selectedValue = event.target.value

        if (selectedValue === 'overall') {
            axios.post(estabBest, {
                establishment: cookies.get('establishment'),
                splice: 10
            })
            .then((res) => {
                setBest(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        axios.post(getPlaylist, {
            establishment: cookies.get('establishment'),
            date: date
        })
        .then ((res) => {
            setPlaylist(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [date])

    return (
        <div id='statistics-container'>
            <div className='statistics-containers' id='statistics-overall-container'>
                <div className='statistics-headers' id='statistics-overall-header'>כללי</div>
                <div id='overall-conversion'>אחוז המרה: %X</div>
                <div id='top-ten-select'>
                    החמים ביותר
                    <select name="" id="" onChange={handleSelect}>
                        <option value="today">היום</option>
                        <option value="week">השבוע</option>
                        <option value="month">החודש</option>
                        <option value="overall">בכל הזמנים</option>
                    </select>
                </div>
                <div id='hottest-container'>
                    {
                        best && best.map((value, index) => {
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
                        <div id='daily-playlisy-container'>
                            {
                                playlist && playlist.map((value, index) => {
                                    return (
                                        <div id='single-playlist-song'>
                                            {value.name} - {value.timeRequested}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics