import './Statistics.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StatisticsSongbox from '../statistics-songbox/StatisticsSongbox'
import axios from 'axios'
import { useEffect, useState } from 'react'
import cookies from 'js-cookie'
import { estabBest } from '../../../utils/Establishment'
import { getPlaylist, conversionRate } from '../../../utils/Statistics'
import Loader from '../loader/Loader';
import timeDate from '../time&date/timeDate';



function Statistics() {

    const [value, onChange] = useState(new Date());
    const [best, setBest] = useState()
    const [date, setDate] = useState()
    const [playlist, setPlaylist] = useState()
    const [conversion, setConversion] = useState({ daily: '', overall: '' })
    const [loader, setLoader] = useState(false)

    useEffect(() => {

        if (date) {
            setLoader(true)
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
                    setLoader(false)
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
        let month = shittyDate.slice(0, 3).toString()
        switch (month) {
            case ('Jan'):
                month = '01'
                break;
            case ('Feb'):
                month = '02'
                break;
            case ('Mar'):
                month = '03'
                break;
            case ('Apr'):
                month = '04'
                break;
            case ('May'):
                month = '05'
                break;
            case ('Jun'):
                month = '06'
                break;
            case ('Jul'):
                month = '07'
                break;
            case ('Aug'):
                month = '08'
                break;
            case ('Sep'):
                month = '09'
                break;
            case ('Oct'):
                month = '10'
                break;
            case ('Nov'):
                month = '11'
                break;
            case ('Dec'):
                month = '12'
        }

        setDate(`${day}/${month}/${year}`)
    }

    return (
        <div id='statistics-container'>
            <div className='statistics-containers' id='statistics-overall-container'>
                <div className='statistics-headers' id='statistics-overall-header'>כללי</div>
                <div id='overall-conversion'>אחוז המרה: {conversion.overall && `${Math.round(conversion.overall)}`}%</div>
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
                <div className='statistics-headers' id='statistics-by-day-header'>לפי יום {date ? `(${date})` : ''}</div>
                <div id='statistics-calendar-container'>
                    <Calendar onChange={onChange} value={value} onClickDay={handleDate} calendarType='hebrew' />
                </div>
                {
                    loader ?
                        <Loader />
                        :
                        <div id='statistics-by-day-inner'>
                            <div className='statistics-inners' id='statistics-inner-right'>
                                <div>אחוז המרה: {conversion.daily && `${Math.round(conversion.daily)}%`}</div>
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
                }
            </div>
        </div>
    )
}

export default Statistics