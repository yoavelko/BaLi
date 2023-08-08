import './Admin.css'
import Request from '../request/Request'
import Accepted from '../accepted/Accepted';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { getRequested, getAccepted, acceptSong, removeRequest, removeAccept } from '../../../utils/UserRoutes';
import { SocketContext } from '../../../contexts/SocketContext';
import ReactPlayer from 'react-player/youtube'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { changeAccepted, changeRequested, pushToPlayed } from '../../../utils/Establishment';
import AdminSearch from '../admin-search/AdminSearch';

function Admin() {

    const [tooltip, setTooltip] = useState({
        reqCheck: false,
        reqDel: false,
        reqPush: false,
        accCheck: false,
        accDel: false,
        accNext: false
    })
    const [requests, setRequests] = useState([])
    const [accepted, setAccepted] = useState()
    const [toPush, setToPush] = useState([])
    const [checkedAccept, setCheckedAccept] = useState([])
    const { socket } = useContext(SocketContext);
    const [songList, setSongList] = useState();
    const [display, setDisplay] = useState(true);
    const [muted, setMuted] = useState(true);
    const [currentSong, setCurrentSong] = useState();
    const [wasSent, setWasSent] = useState(false)
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
            if (obj) {
                setRequests(previous => [...previous, obj])
            }
        })
        console.log(!getSongIndex());
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
                if (accepted && accepted[getSongIndex()]?._id !== songList[0]?._id) {
                    setSongList(accepted.filter((v, i) => i >= getSongIndex()))
                    setCurrentSong(accepted.filter((v, i) => i >= getSongIndex())[0].url)
                }
                else {
                    setCurrentSong(songList[0]?.url)
                }
            }
            else {
                setCurrentSong(accepted.filter((v, i) => i >= getSongIndex())[0]?.url)
                setSongList(accepted.filter((v, i) => i >= getSongIndex()))
                setDisplay(false)
            }
            setDisplay(true)
        }
        else {
            setMuted(false)
        }
    }, [display])

    useEffect(() => {
        currentSong && setWasSent(false)
    }, [currentSong])

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
                        console.log(data.history[today].accepted[0]._id, songList[0]._id);
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
                        console.log(data.history[today].accepted[0]?._id, songList[0]?._id, accepted.length);
                        if (data.history[today].accepted[getSongIndex()]?._id !== songList[0]?._id || accepted.length === 0) setDisplay(false)
                        setAccepted(data.history[today].accepted)
                    })
                    .catch(err => {
                        alert('An error has occured: ' + err)
                    })
            }
        }

    }

    function handleProgress(e) {
        if ((duration - e.playedSeconds) > 60 && !wasSent) {
            axios.post(pushToPlayed, {
                today,
                establishment: cookies.get('establishment'),
                song: songList[0]._id
            })
                .then(() => {
                    setWasSent(true)
                })
                .catch(err => console.log(err))
        }
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

    return (
        <DragDropContext onDragEnd={handleDrop}>
            <div id='admin-container' dir='rtl'>
                <div id='requests-container'>
                    <AdminSearch />
                    <div className='admin-headers'>בקשות ממתינות</div>
                    <div id='requests-control-container'>
                        <div className='requests-controls' onClick={() => console.log('mark all')} onMouseEnter={() => setTooltip({ ...tooltip, reqCheck: true })} onMouseLeave={() => setTooltip({ ...tooltip, reqCheck: false })}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO2WUQqAIBAFvYTSZ9frfHaShDrOhLRCpPURmEU734uzrPJcY5SvAFhgaCmf2Bhaymegqy3sAS9iBwSRxyZsof4WVw14qQk7eSjJazVgdyOPLNXHftHE8/KE3L8zbwHNgQ3NgQxukp8kaA4kNAfeug8sT+0DY3oDhy/ZtdwH3Em95sBPckBRTCVW5xngxlwryaIAAAAASUVORK5CYII=" />
                            {
                                tooltip.reqCheck ?
                                    <div id='req-tooltip' className='tooltip' onMouseEnter={() => setTooltip({ ...tooltip, reqCheck: false })}>סמן את כל השירים הממתינים</div>
                                    :
                                    <></>
                            }
                        </div>
                        <div className='requests-controls' onClick={handleRequestDelete} onMouseEnter={() => setTooltip({ ...tooltip, reqDel: true })} onMouseLeave={() => setTooltip({ ...tooltip, reqDel: false })}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVR4nO2X0QqAIAxFfeqXIvy/rP9Uf+OGtSAoqLkJFTtvOue97D7NOeMhADoAM4CMM+VuKm9cK7CJ3xFaGsgk0l/UBqqllgZWautsIW2+Y2CnulGp373OAIRnM8AGFgGhNRGLgA0sAkJrIhbB9yPgomEg0R++otdTb5QYCJAzSheRcJgEh1jEmy4qxm9YAOFdIIezfl43AAAAAElFTkSuQmCC" />
                            {
                                tooltip.reqDel ?
                                    <div id='req-tooltip' className='tooltip' onMouseEnter={() => setTooltip({ ...tooltip, reqDel: false })}>מחק את כל המסומנים</div>
                                    :
                                    <></>
                            }
                        </div>
                        <div className='requests-controls' onClick={handlePush} onMouseEnter={() => setTooltip({ ...tooltip, reqPush: true })} onMouseLeave={() => setTooltip({ ...tooltip, reqPush: false })}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuklEQVR4nO3XzWoUURAF4F4oCRgUt4quoiMoBEcXgvgE4s/LJONKlKgP4B8uIj6DO1EniJBnEN2IBhI3KhiNippPLlakhTh9u6dHIeQsu6vOObfm0nWmKLaQCXTQw2M8w0d8wXI8u4ypom3gOPry8RSn2hDejptYC+K3mMPZmMYOjGEfTkftu6hNPXcw3lR8N+aD7BNmsTOjL5m6hm/Ru5C4mpx8Pghe42jDn+1VyUT+JPwa5br4nrriJZ5JLAXX7TrO12LstU++Ad8UvuIHTuQ09MPx7LDiJc6rwfmgqrBTuu0DLxwutWXwN3AhDMwVFeKpqGgbeBQGzlWJj8rAi+CerBIflYGV4J6oEh8Ggwx8GGCg9y8MPI+ag395/4eJYjNewpngvltR1xuVgc5//RAlRLJJuFK0hEhKCfdzio/FMlpFtwXxbsS27zic23QjHC9i75Dr+E2tdVwKJP2SiW7DNfyyFEjGmkSyfhCsxkrdldE3gYv4XBKv7NsQ2IbrpVCaAuc9nMehEBvHfpyJEPo+alPPrdonH3CR1j9SOXiCk0XbwAFM42H8MVmJUS+FwTT6I60Lb2HT4ye69MSmF9ojPQAAAABJRU5ErkJggg==" />
                            {
                                tooltip.reqPush ?
                                    <div id='req-tooltip' className='tooltip' onMouseEnter={() => setTooltip({ ...tooltip, reqPush: false })}>העבר את כל המסומנים לתור השמעה</div>
                                    :
                                    <></>
                            }
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
                                        backgroundColor: snapshot.isDraggingOver ? 'rgba(255, 255, 255, 0.2)' : '',
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
                        <div className='requests-controls' onClick={() => console.log('mark all')} onMouseEnter={() => setTooltip({ ...tooltip, accCheck: true })} onMouseLeave={() => setTooltip({ ...tooltip, accCheck: false })}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO2WUQqAIBAFvYTSZ9frfHaShDrOhLRCpPURmEU734uzrPJcY5SvAFhgaCmf2Bhaymegqy3sAS9iBwSRxyZsof4WVw14qQk7eSjJazVgdyOPLNXHftHE8/KE3L8zbwHNgQ3NgQxukp8kaA4kNAfeug8sT+0DY3oDhy/ZtdwH3Em95sBPckBRTCVW5xngxlwryaIAAAAASUVORK5CYII=" />
                            {
                                tooltip.accCheck ?
                                    <div id='acc-tooltip' className='tooltip' onMouseEnter={() => setTooltip({ ...tooltip, accCheck: false })}>סמן את כל השירים בפלייליסט</div>
                                    :
                                    <></>
                            }
                        </div>
                        <div className='requests-controls' onClick={handleAcceptDelete} onMouseEnter={() => setTooltip({ ...tooltip, accDel: true })} onMouseLeave={() => setTooltip({ ...tooltip, accDel: false })}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVR4nO2X0QqAIAxFfeqXIvy/rP9Uf+OGtSAoqLkJFTtvOue97D7NOeMhADoAM4CMM+VuKm9cK7CJ3xFaGsgk0l/UBqqllgZWautsIW2+Y2CnulGp373OAIRnM8AGFgGhNRGLgA0sAkJrIhbB9yPgomEg0R++otdTb5QYCJAzSheRcJgEh1jEmy4qxm9YAOFdIIezfl43AAAAAElFTkSuQmCC" />
                            {
                                tooltip.accDel ?
                                    <div id='acc-tooltip' className='tooltip' onMouseEnter={() => setTooltip({ ...tooltip, accDel: false })}>מחק את כל המסומנים</div>
                                    :
                                    <></>
                            }
                        </div>
                        <div className='requests-controls' onClick={playNext} onMouseEnter={() => setTooltip({ ...tooltip, accNext: true })} onMouseLeave={() => setTooltip({ ...tooltip, accNext: false })}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOklEQVR4nO3WvS8EQRzG8SUXCYWoUCFRKYQOjUSi1fgDVAq1RqujFdW1Si3dJVQ6BSoKFdGJhgTBRy5mkz25c7O5Cy7Zb7OTnWdnnuzvmZckKSgoCOAE80kkOMRYrD5mwJQKpiP1T9hETzsNVHnHPsYj9eeYbZeBXbyEdvW5g8Ef9NcZ09Vv+1sykHy1R1DGW3j9iG0M1DHQG8qQmr7DSksGUjARSvERuu+xESat0WMyBDklX0jVMZDpm8NxZvCbBoa7sYaHzJ9bR6klAylYxGk2fUkdMIS9XCEVYSDourCEiwjDC7jMhLTcMKQiDWT0JaxG6PqwhdcwxS2WO9eA/CW4alsJxIdw+FsIzzDTectQ6xvRaNOJU/7NVqz2MHr+9cPoPxzHFUz9xYXkqOlSqdUf5ApZQUFBUp9PDcmNQzVLXigAAAAASUVORK5CYII=" />
                            {
                                tooltip.accNext ?
                                    <div id='acc-tooltip' className='tooltip' onMouseEnter={() => setTooltip({ ...tooltip, accNext: false })}>נגן את הבא בתור</div>
                                    :
                                    <></>
                            }
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
                                        backgroundColor: snapshot.isDraggingOver ? 'rgba(255, 255, 255, 0.2)' : '',
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