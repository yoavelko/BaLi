import './User.css'
import SuggestionBox from '../suggestion-box/SuggestionBox'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getDummyIsrael, getDummyOverall } from '../../../utils/UserRoutes'
function User() {

    const [data, setData] = useState()
    const [section, setSection] = useState(true)

    useEffect(() => {
        axios.get(section ? getDummyIsrael : getDummyOverall)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [section])
    console.log(section);


    return (
        <div id='user-container' dir='rtl'>
            <div id='bali-logo'>BaLi</div>
            <Link to={'/admin'}>admin</Link>
            <div id='user-establishment-container'>
                <div id='establishment-logo'>ESTAB LOGO</div>
                <div id='establishment-slogan'>"עשה לך רב וקנה לך חבר"</div>
            </div>
            <div id='user-search-container'>
                <input id='user-searchbar' type="text" placeholder='חפש...' />
            </div>
            <div id='user-suggestion-container'>
                {data && data.map((value, index) => {
                    return <SuggestionBox key={index} video={value} />
                })}
            </div>
            <div id='user-footer'>
                <div onClick={() => setSection(true)}>ישראל</div>
                <div onClick={() => setSection(false)}>עולמי</div>
                <div>עסק זה</div>
            </div>
        </div>
    )
}

export default User