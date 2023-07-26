import './Admin.css'
import Request from '../request/Request'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { getRequested } from '../../../utils/UserRoutes';

function Admin() {

    const [requests, setRequests] = useState()

    useEffect(() => {
        axios.post(getRequested, {
            establishment: "Forcing you",
            today: "26/07/2023"
        })
            .then((res) => {
                setRequests(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const [x, setX] = useState();
    const [y, setY] = useState();

    function handleStart() {
        console.log('start');
    }

    function handleDrag() {
        console.log('drag');
    }

    function handleStop() {
        console.log('stop');
    }

    const eventControl = (event, info) => {
        console.log('Event name: ', event);
        console.log(event, info);
    }

    return (
        <div id='admin-container' dir='rtl'>
            <div id='requests-container'>
                <div className='admin-headers'>בקשות ממתינות</div>
                <div id='requests-control-container'>
                    <button className='requests-controls' onClick={() => console.log(requests)}>filter</button>
                    <button className='requests-controls' onClick={() => console.log('delete marked')}>delete marked</button>
                    <button className='requests-controls' onClick={() => console.log('push marked')}>push marked</button>
                </div>
                <div id='requests-map-container'>
                    {requests.map((value, index) => {
                        return <Request key={index} request={value} />
                    })}
                </div>
            </div>
            <div id='playlist-container'>
                <div className='admin-headers'>תור השמעה</div>
                <div id='requests-control-container'>
                    <button className='requests-controls' onClick={() => console.log('filter')}>filter</button>
                    <button className='requests-controls' onClick={() => console.log('delete marked')}>delete marked</button>
                    <button className='requests-controls' onClick={() => console.log('push marked')}>push marked</button>
                </div>
                {/* <div id='requests-map-container'>
                    {playlist.map((value, index) => {
                        return <Request key={index} request={value} />
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default Admin