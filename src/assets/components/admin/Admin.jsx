import './Admin.css'
import Request from '../request/Request'
import Accepted from '../accepted/Accepted';
import { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios'
import { getRequested, getAccepted, acceptSong, removeRequest, removeAccept } from '../../../utils/UserRoutes';
import { SocketContext } from '../../../contexts/SocketContext';
import ReactPlayer from 'react-player/youtube'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import TimeComapre from '../functions/TimeCompare';

function Admin() {

    const [requests, setRequests] = useState([])
    const [accepted, setAccepted] = useState()
    const [toPush, setToPush] = useState([])
    const [checkedAccept, setCheckedAccept] = useState([])
    const { socket } = useContext(SocketContext);
    const [songList, setSongList] = useState();
    const [display, setDisplay] = useState(true);
    const [muted, setMuted] = useState(true);
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const today = dd + '/' + mm + '/' + yyyy
    const [duration, setDuration] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        if (!cookies.get('establishment')) navigate('/error')
        axios.post(getRequested, {
            establishment: cookies.get('establishment'),
            today: today
        })
            .then((res) => {
                setRequests(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        axios.post(getAccepted, {
            establishment: cookies.get('establishment'),
            today: today
        })
            .then((res) => {
                setAccepted(res.data);
                setDisplay(false)
            })
            .catch((err) => {
                console.log(err);
            })
        socket.on('song-request', obj => {
            setRequests(previous => [...previous, obj])
        })
        !localStorage.getItem('songIndex') && localStorage.setItem('songIndex', 0)
    }, [])

    useEffect(() => {
        if (accepted) {
            (accepted[0]?.today !== today) && localStorage.setItem('songIndex', 0)
        }
        accepted && setSongList(accepted.filter((v,i) => i >= parseInt(localStorage.getItem('songIndex'))))
    }, [accepted])
    useEffect(() => {
        if (!display) {
            // setSongList(accepted.filter((v, i) => i >= parseInt(localStorage.getItem('songIndex'))))
            setDisplay(true)
        }
        else {
            setMuted(false)
        }
    }, [display])

    function handlePush() {
        axios.patch(acceptSong, {
            establishment: cookies.get('establishment'),
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
            establishment: cookies.get('establishment'),
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
            establishment: cookies.get('establishment'),
            today: today,
            checkedSong: checkedAccept
        })
            .then((res) => {
                const render = accepted.filter(x => !checkedAccept.some(j => x._id === j))
                document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
                setAccepted([...render])
                setCheckedAccept([])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleDrop(result) {
        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        if (source.droppableId === destination.droppableId) {            
            if (source.droppableId === 'req-drop') {
                const updatedRequests = Array.from(requests);
                const [removed] = updatedRequests.splice(source.index, 1);
                updatedRequests.splice(destination.index, 0, removed);
                setRequests(updatedRequests);
            } else {
                const updatedAccepted = Array.from(accepted);
                const [removed] = updatedAccepted.splice(source.index, 1);
                updatedAccepted.splice(destination.index, 0, removed);
                setAccepted(updatedAccepted);
            }
        } else {
            const updatedRequests = Array.from(requests);
            const updatedAccepted = Array.from(accepted);
            if (source.droppableId === 'req-drop') {
                const [removed] = updatedRequests.splice(source.index, 1);
                const filter = updatedRequests.filter(a => a != removed)
                updatedAccepted.splice(destination.index, 0, removed);
                setRequests(filter);
                setAccepted(updatedAccepted);
            }
        }

    }

    function handleProgress(e) {
        if ((duration - e.playedSeconds) < 3) {
            localStorage.setItem('songIndex', parseInt(localStorage.getItem('songIndex')) + 1)
            setSongList()
            setDisplay(false)
        }
    }

    const actualSongList = useMemo(() => {
        songList && songList.map(v => v.url)
    }, [display])

    return (
        <DragDropContext onDragEnd={handleDrop} onDragStart={(result) => (console.log(result.source))}>
            <div id='admin-container' dir='rtl'>
                <div id='requests-container'>
                    <div className='admin-headers'>בקשות ממתינות</div>
                    <div id='requests-control-container'>
                        <button className='requests-controls' onClick={() => console.log(requests)}>filter</button>
                        <button className='requests-controls' onClick={handleRequestDelete}>delete marked</button>
                        <button className='requests-controls' onClick={handlePush}>push marked</button>
                    </div>
                    <Droppable droppableId='req-drop'>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}>
                                <div id='requests-map-container'
                                    style={{
                                        backgroundColor: snapshot.isDraggingOver ? '#3a4a58' : '',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                >
                                    {requests && requests.map((value, index) => {
                                        return <Request key={index} index={index} request={value} toPush={toPush} setToPush={setToPush} />
                                    })}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
                <div id='playlist-container'>
                    <div id='player-container'>
                        {display && <ReactPlayer playing={true} muted={muted} url={actualSongList} controls={true} onDuration={(e) => setDuration(e)} onProgress={e => handleProgress(e)} />}
                    </div>
                    <div className='admin-headers' id='playlist-header'>תור השמעה</div>
                    <div id='requests-control-container'>
                        <button className='requests-controls' onClick={() => console.log('filter')}>filter</button>
                        <button className='requests-controls' onClick={handleAcceptDelete}>delete marked</button>
                        <button className='requests-controls' onClick={() => console.log('push marked')}>push marked</button>
                    </div>
                    <Droppable droppableId='acc-drop'>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                <div id='requests-map-container'
                                    style={{
                                        backgroundColor: snapshot.isDraggingOver ? '#3a4a58' : '',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                >
                                {songList && songList.map((value, index) => {
                                    return <Accepted key={index} index={index} accept={value} checkedAccept={checkedAccept} setCheckedAccept={setCheckedAccept} />
                                })}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </DragDropContext>
    )
}

export default Admin