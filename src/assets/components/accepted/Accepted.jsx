import { useState } from 'react'
import './Accepted.css'
import { Draggable } from 'react-beautiful-dnd'
import { useEffect } from 'react'
import gif from './../../../media/music-gif.gif'

function Accepted({ accept, checkedAccept, setCheckedAccept, index }) {

    const [checked, setChecked] = useState(false)
    const [first, setFirst] = useState(false)

    useEffect(() => {
        if (index === 0) {
            setFirst(true)
        }
    }, [])

    let title = accept.name
    if (accept.name?.length > 48) {
        title = accept.name.slice(0, 48) + '...'
    }

    function handlePush() {
        if (checkedAccept.includes(accept._id)) {
            setCheckedAccept(checkedAccept.filter(e => e != accept._id))
            console.log(checkedAccept)
        } else {
            setCheckedAccept([...checkedAccept, accept._id])
            console.log(checkedAccept)
        }
    }

    return (
        <Draggable key={accept._id} draggableId={accept._id} index={index}>
            {(provided, snapshot) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div id='single-accept-container'
                        style={{
                            borderColor: snapshot.isDragging ? 'rgb(40, 40, 40)' : '',
                            backgroundColor: snapshot.isDragging ? 'rgb(40, 40, 40)' : '',
                            transition: 'background-color 0.2s ease'
                        }}
                    >
                        <div id='accept-drag-container'
                            {...provided.dragHandleProps}
                        >
                            <div id='accept-adjust' className='accept-spacers'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nGNgGAXEgP///zf8pyJgwGKBA9QSqmCGUTACwX9ap6L/tM4Ho2AUUA5Gi+tRwEAJAABV5r4vuTw0OwAAAABJRU5ErkJggg==" />
                            </div>
                        </div>
                        <div id='accept-img-container' onClick={() => { setChecked(!checked), handlePush() }}>
                            <img id='accept-img' src={accept.img} alt="" />
                        </div>
                        <div id='accept-box-container' onClick={() => { setChecked(!checked), handlePush() }}>
                            <div>{title}</div>
                            <div id='now-playing-container'>
                                <div>{accept.artist}</div>

                            </div>
                        </div>
                        {
                            first ?
                                <div id='gif-container'>
                                    <img id='music-gif' src={gif} alt="" />
                                </div>
                                :
                                <div id='accept-input' className='request-spacers'>
                                    <label className="checkBox">
                                        <input id="ch1" type="checkbox" checked={checked} onChange={() => { setChecked(!checked), handlePush() }} />
                                        <div className="transition"></div>
                                    </label>
                                </div>
                        }
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Accepted