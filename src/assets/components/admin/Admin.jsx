import './Admin.css'
import Request from '../request/Request'
import Accepted from '../accepted/Accepted';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { getRequested, getAccepted, acceptSong, removeRequest, removeAccept } from '../../../utils/UserRoutes';
import { SocketContext } from '../../../contexts/SocketContext';

function Admin() {

    const [requests, setRequests] = useState([])
    const [accepted, setAccepted] = useState()
    const [toPush, setToPush] = useState([])
    const [render, setRender] = useState(false)
    const [checked, setChecked] = useState(false)
    const [checkedAccept, setCheckedAccept] = useState([])
    const { socket } = useContext(SocketContext);
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;  
    const today = dd + '/' + mm + '/' + yyyy

    useEffect(() => {
        axios.post(getRequested, {
            establishment: "Forcing you",
            today: today
        })
            .then((res) => {
                setRequests(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        axios.post(getAccepted, {
            establishment: "Forcing you",
            today: today
        })
            .then((res) => {
                setAccepted(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        socket.on('song-request', obj => {
            setRequests(previous => [...previous, obj])
        })
    }, [])

    function handlePush() {
        axios.patch(acceptSong, {
            establishment: "Forcing you",
            today: today,
            acceptedSong: toPush.map(value => value._id)
        })
            .then((res) => {
                const render = requests.filter(x => !toPush.some(j => x._id === j._id))
                setRequests(render)
                const render2 = accepted.concat(toPush)
                setAccepted(render2)
                document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
                setToPush([])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleRequestDelete() {
        axios.patch(removeRequest, {
            establishment: "Forcing you",
            today: today,
            checkedSong: toPush
        })
            .then((res) => {
                const render = requests.filter(x => !toPush.some(j => x._id === j._id))
                setRequests(render)
                document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
                setToPush([])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleAcceptDelete() {
        axios.patch(removeAccept, {
            establishment: "Forcing you",
            today: today,
            checkedSong: checkedAccept
        })
            .then((res) => {
                const render = accepted.filter(x => !checkedAccept.some(j => x._id === j._id))
                document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
                setCheckedAccept([])
                setAccepted(render)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(requests);
    console.log(toPush);


    return (
        <div id='admin-container' dir='rtl'>
            <div id='requests-container'>
                <div className='admin-headers'>בקשות ממתינות</div>
                <div id='requests-control-container'>
                    <button className='requests-controls' onClick={() => console.log(requests)}>filter</button>
                    <button className='requests-controls' onClick={handleRequestDelete}>delete marked</button>
                    <button className='requests-controls' onClick={handlePush}>push marked</button>
                </div>
                <div id='requests-map-container'>
                    {requests && requests.map((value, index) => {
                        return <Request key={index} request={value} toPush={toPush} setToPush={setToPush} />
                    })}
                </div>
            </div>
            <div id='playlist-container'>
                <div className='admin-headers'>תור השמעה</div>
                <div id='requests-control-container'>
                    <button className='requests-controls' onClick={() => console.log('filter')}>filter</button>
                    <button className='requests-controls' onClick={handleAcceptDelete}>delete marked</button>
                    <button className='requests-controls' onClick={() => console.log('push marked')}>push marked</button>
                </div>
                <div id='requests-map-container'>
                    {accepted && accepted.map((value, index) => {
                        return <Accepted key={index} accept={value} checkedAccept={checkedAccept} setCheckedAccept={setCheckedAccept} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Admin