import './Statistics.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StatisticsSongbox from '../statistics-songbox/StatisticsSongbox'
import axios from 'axios'
import { useEffect, useState } from 'react'
import cookies from 'js-cookie'
import { estabBest } from '../../../utils/Establishment'
import { getPlaylist, conversionRate } from '../../../utils/Statistics'



function Statistics() {

    const [value, onChange] = useState(new Date());
    const [best, setBest] = useState()
    const [date, setDate] = useState()
    const [playlist, setPlaylist] = useState()
    const [conversion, setConversion] = useState({ daily: '', overall: '' })

    useEffect(() => {

        if (date) {
            axios.post(getPlaylist, {
                establishment: cookies.get('establishment'),
                date: date
            })
                .then((res) => {
                    setPlaylist(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })

            axios.post(conversionRate, {
                establishment: cookies.get('establishment'),
                date: date
            })
                .then((res) => {
                    setConversion({ ...conversion, daily: res.data.daily, overall: res.data.overall });
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [date])


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

    function handleDate() {
        let shittyDate = value.toString()
        shittyDate = shittyDate.slice(4, 15)
        const day = shittyDate.slice(4, 6)
        const year = shittyDate.slice(7, 11)
        let month = shittyDate.slice(0, 3)
        switch (month) {
            case ('jan'):
                month = '01'
                break;
            case ('feb'):
                month = '02'
                break;
            case ('mar'):
                month = '03'
                break;
            case ('apr'):
                month = '04'
                break;
            case ('may'):
                month = '05'
                break;
            case ('jun'):
                month = '06'
                break;
            case ('jul'):
                month = '07'
                break;
            case ('aug'):
                month = '08'
                break;
            case ('sep'):
                month = '09'
                break;
            case ('oct'):
                month = '10'
                break;
            case ('nov'):
                month = '11'
                break;
            case ('dec'):
                month = '12'
        }

        console.log(month);
    }

    return (
        <div id='statistics-container'>
            <div className='statistics-containers' id='statistics-overall-container'>
                <div className='statistics-headers' id='statistics-overall-header'>כללי</div>
                <div id='overall-conversion'>אחוז המרה: {conversion.overall}</div>
                <div id='top-ten-select'>
                    החמים ביותר&nbsp;
                    <select onChange={handleSelect}>
                        <option value="today">היום</option>
                        <option value="week">השבוע</option>
                        <option value="month">החודש</option>
                        <option value="overall">בכל הזמנים</option>
                    </select>
                </div>
                <div id='hottest-container'>
                    {
                        best && best.map((value, index) => {
                            return <StatisticsSongbox key={index} index={index} value={value} />
                        })
                    }
                </div>
            </div>
            <div className='statistics-containers' id='statstics-by-day-container'>
                <div className='statistics-headers' id='statistics-by-day-header'>לפי יום</div>
                <div id='statistics-calendar-container' dir='ltr'>
                    <Calendar onChange={onChange} value={value} onClickDay={handleDate} />
                </div>
                <div id='statistics-by-day-inner'>
                    <div className='statistics-inners' id='statistics-inner-right'>
                        <div>אחוז המרה: {conversion.daily}</div>
                    </div>
                    <div className='statistics-inners' id='statistics-inner-left'>
                        <div id='daily-playlist-header'>
                            <div>הפלייליסט של {playlist && playlist[0].today}</div>
                            <button>ייבא פלייליסט</button>
                        </div>
                        <div id='daily-playlisy-container'>
                            {
                                playlist && playlist.map((value, index) => {
                                    return (
                                        <div id='single-playlist-song'>
                                            {value.timeRequested} - {value.name}
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