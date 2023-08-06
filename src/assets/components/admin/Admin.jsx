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
import { changeAccepted, changeRequested } from '../../../utils/Establishment';

function Admin() {

    const [requests, setRequests] = useState([])
    const [accepted, setAccepted] = useState()
    const [toPush, setToPush] = useState([])
    const [checkedAccept, setCheckedAccept] = useState([])
    const { socket } = useContext(SocketContext);
    const [songList, setSongList] = useState();
    const [display, setDisplay] = useState(true);
    const [muted, setMuted] = useState(true);
    const [currentSong, setCurrentSong] = useState();
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const today = dd + '/' + mm + '/' + yyyy
    const [duration, setDuration] = useState();
    const navigate = useNavigate();

    function getSongIndex() {
        return parseInt(localStorage.getItem('songIndex'))
    }

    function setSongIndex(value) {
        if (typeof (value) !== 'number') return Error('value must be number')
        localStorage.setItem('songIndex', value)
    }
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
        !getSongIndex() && setSongIndex(0)
    }, [])

    useEffect(() => {
        if (accepted) {
            (accepted[0]?.today !== today) && setSongIndex(0)
        }
        accepted && setSongList(accepted.filter((v, i) => i >= getSongIndex()))
    }, [accepted])
    useEffect(() => {
        if (!display) {
            if (songList) {
                if (accepted && accepted[getSongIndex()]._id !== songList[0]._id) {
                    setSongList(accepted.filter((v, i) => i >= getSongIndex()))
                    setCurrentSong(accepted.filter((v, i) => i >= getSongIndex())[0].url)
                }
                else {
                    setCurrentSong(songList[0]?.url)
                }
            }
            else {
                setCurrentSong(accepted.filter((v, i) => i >= getSongIndex())[0]?.url)
            }
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
                axios.post(changeRequested, {
                    establishment: cookies.get('establishment'),
                    today,
                    requested: updatedRequests.map(v => v._id)
                })
                    .then(({ data }) => console.log(data))
                    .catch(err => {
                        alert('An error has occured: ' + err.response.data)
                    })
            } else {
                const updatedAccepted = Array.from(songList);
                const [removed] = updatedAccepted.splice(source.index, 1);
                updatedAccepted.splice(destination.index, 0, removed);
                setSongList(updatedAccepted);
                axios.patch(changeAccepted, {
                    establishment: cookies.get('establishment'),
                    today,
                    accepted: accepted.slice(0, getSongIndex()).concat(updatedAccepted).map(v => v._id)
                })
                    .then(({ data }) => {
                        if (data.history[today].accepted[0]._id !== songList[0]._id) setDisplay(false)
                        setAccepted(data.history[today].accepted)
                    })
            }
        } else {
            const updatedRequests = Array.from(requests);
            const updatedAccepted = Array.from(songList);
            if (source.droppableId === 'req-drop') {
                const [removed] = updatedRequests.splice(source.index, 1);
                const filter = updatedRequests.filter(a => a != removed)
                updatedAccepted.splice(destination.index, 0, removed);
                setRequests(filter);
                setSongList(updatedAccepted);
                axios.patch(changeAccepted, {
                    establishment: cookies.get('establishment'),
                    today,
                    accepted: accepted.slice(0, getSongIndex()).concat(updatedAccepted).map(v => v._id)
                })
                    .then(({ data }) => {
                        if (data.history[today].accepted[0]._id !== songList[0]._id || !data.history[today].accepted[0]) setDisplay(false)
                        setAccepted(data.history[today].accepted)
                    })
                    .catch(err => {
                        alert('An error has occured: ' + err.response.data)
                    })
            }
        }

    }

    function handleProgress(e) {
        if ((duration - e.playedSeconds) < 3) {
            setSongIndex(getSongIndex() + 1)
            setSongList(accepted.filter((v, i) => i >= getSongIndex()))
            setDisplay(false)
        }
    }

    function playNext() {
        setSongIndex(getSongIndex() + 1);
        setDisplay(false)
    }
    console.log(requests);
    return (
        <DragDropContext onDragEnd={handleDrop}>
            <div id='admin-container' dir='rtl'>
                <div id='requests-container'>
                    <div className='admin-headers'>בקשות ממתינות</div>
                    <div id='requests-control-container'>
                        <div className='requests-controls' onClick={() => console.log('mark all')}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVR4nO3XzYtNcRwG8GvBeFmgzJAojJEa/wBKJpQsWFmIjZWSFGWh2WBvocRGETFTsvBSFjZkZ6MMU5MS2SFkzOT9o5/7Lcd1Hefce+dKzVNnc3/P93me3/vvVir/KzANs9tlNgUbcBwPMeonPuARTqIvcVttvg33/Y5xvKnz+zC2tsJ4FgYyws9wDGswPcPrwGocwdPg3saMZsznYyjE3mJvmvMCdVOxM2uOrvSV7fm9ME8heproSFdoDBUOgYthPoJ5LTBXOADWRcE7dLfVPCEz9Icr/8C8N4peZFd5W8wTYoslnKpMgHlM78E8gVtRvHkCzHswljzyRB6HwPI64l3NDDsWR/vzvADjQeqoI/4AnY2YZ07LhNG8AK+CNKfGIJmrDVFmwWFm8MbyAowE6Zf9n0wzIX4YlV3tmR02nEe6EaQdddo6awxLbTVsD/71PNL+IJ3/Q3s2RKl9jsGoOZBH6sa32C4LWnW5pPsE7/EVi/5GvhxJT+RwSl2vOB2a14qQV+FLfJuKmuTo9YXWR6woWtQfiV+mQE2Y92aebEfLPkCvZl5DGxsw34LXoTFY+qGqenJdCoG0MM9hYYG6JTgTCy7hSqM3ayVGoj9zRH/GTezBeizDSqzFvjhH0lwnfMKhljzRVXs1kBHPQwp5FkubNq4F5mJ3GNzBk/gPcBcXsKvUA2QSk6hU8R1JikRUQUXaOwAAAABJRU5ErkJggg==" />
                        </div>
                        <div className='requests-controls' onClick={handleRequestDelete}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVR4nO2X0QqAIAxFfeqXIvy/rP9Uf+OGtSAoqLkJFTtvOue97D7NOeMhADoAM4CMM+VuKm9cK7CJ3xFaGsgk0l/UBqqllgZWautsIW2+Y2CnulGp373OAIRnM8AGFgGhNRGLgA0sAkJrIhbB9yPgomEg0R++otdTb5QYCJAzSheRcJgEh1jEmy4qxm9YAOFdIIezfl43AAAAAElFTkSuQmCC" />
                        </div>
                        <div className='requests-controls' onClick={handlePush}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuklEQVR4nO3XzWoUURAF4F4oCRgUt4quoiMoBEcXgvgE4s/LJONKlKgP4B8uIj6DO1EniJBnEN2IBhI3KhiNippPLlakhTh9u6dHIeQsu6vOObfm0nWmKLaQCXTQw2M8w0d8wXI8u4ypom3gOPry8RSn2hDejptYC+K3mMPZmMYOjGEfTkftu6hNPXcw3lR8N+aD7BNmsTOjL5m6hm/Ru5C4mpx8Pghe42jDn+1VyUT+JPwa5br4nrriJZ5JLAXX7TrO12LstU++Ad8UvuIHTuQ09MPx7LDiJc6rwfmgqrBTuu0DLxwutWXwN3AhDMwVFeKpqGgbeBQGzlWJj8rAi+CerBIflYGV4J6oEh8Ggwx8GGCg9y8MPI+ag395/4eJYjNewpngvltR1xuVgc5//RAlRLJJuFK0hEhKCfdzio/FMlpFtwXxbsS27zic23QjHC9i75Dr+E2tdVwKJP2SiW7DNfyyFEjGmkSyfhCsxkrdldE3gYv4XBKv7NsQ2IbrpVCaAuc9nMehEBvHfpyJEPo+alPPrdonH3CR1j9SOXiCk0XbwAFM42H8MVmJUS+FwTT6I60Lb2HT4ye69MSmF9ojPQAAAABJRU5ErkJggg==" />
                        </div>
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
                        {display && <ReactPlayer width={'90%'} playing={true} muted={muted} url={currentSong} controls={true} onDuration={(e) => setDuration(e)} onProgress={e => handleProgress(e)} />}
                    </div>
                    <div className='admin-headers' id='playlist-header'>תור השמעה</div>
                    <div id='requests-control-container'>
                        <div className='requests-controls' onClick={() => console.log('mark all')}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVR4nO3XzYtNcRwG8GvBeFmgzJAojJEa/wBKJpQsWFmIjZWSFGWh2WBvocRGETFTsvBSFjZkZ6MMU5MS2SFkzOT9o5/7Lcd1Hefce+dKzVNnc3/P93me3/vvVir/KzANs9tlNgUbcBwPMeonPuARTqIvcVttvg33/Y5xvKnz+zC2tsJ4FgYyws9wDGswPcPrwGocwdPg3saMZsznYyjE3mJvmvMCdVOxM2uOrvSV7fm9ME8heproSFdoDBUOgYthPoJ5LTBXOADWRcE7dLfVPCEz9Icr/8C8N4peZFd5W8wTYoslnKpMgHlM78E8gVtRvHkCzHswljzyRB6HwPI64l3NDDsWR/vzvADjQeqoI/4AnY2YZ07LhNG8AK+CNKfGIJmrDVFmwWFm8MbyAowE6Zf9n0wzIX4YlV3tmR02nEe6EaQdddo6awxLbTVsD/71PNL+IJ3/Q3s2RKl9jsGoOZBH6sa32C4LWnW5pPsE7/EVi/5GvhxJT+RwSl2vOB2a14qQV+FLfJuKmuTo9YXWR6woWtQfiV+mQE2Y92aebEfLPkCvZl5DGxsw34LXoTFY+qGqenJdCoG0MM9hYYG6JTgTCy7hSqM3ayVGoj9zRH/GTezBeizDSqzFvjhH0lwnfMKhljzRVXs1kBHPQwp5FkubNq4F5mJ3GNzBk/gPcBcXsKvUA2QSk6hU8R1JikRUQUXaOwAAAABJRU5ErkJggg==" />
                        </div>
                        <div className='requests-controls' onClick={handleAcceptDelete}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVR4nO2X0QqAIAxFfeqXIvy/rP9Uf+OGtSAoqLkJFTtvOue97D7NOeMhADoAM4CMM+VuKm9cK7CJ3xFaGsgk0l/UBqqllgZWautsIW2+Y2CnulGp373OAIRnM8AGFgGhNRGLgA0sAkJrIhbB9yPgomEg0R++otdTb5QYCJAzSheRcJgEh1jEmy4qxm9YAOFdIIezfl43AAAAAElFTkSuQmCC" />
                        </div>
                        <div className='requests-controls' onClick={playNext}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVR4nO2WTQrCMBBG4yFcGBeeSsED2MO5VHfeSKRiL/CkGK2IqfmZJKD5NqWLkDcvwzBK1dRYAuwBrSKDSejBFmhKAjwSbEMCoDPfE7AqAaCNgSAb0QBq+F+anvDqDTGAPsAM2PnYEAWw2LiM2UgCYLFx+GQjGYCrjeQAIzbm2QD6ABNgA1zN0TOwzgZge45cT6DfhtWzIZMCcNfevGjP14TAAjh+G0riAAxVdy5jWRQAx6rFAfCsWhSAgKp/biEpupK1JZfSLTCNuTwKoOZvcgMNuAN9+8nzgAAAAABJRU5ErkJggg==" />
                        </div>
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