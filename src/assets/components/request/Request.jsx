import './Request.css'
import { Draggable } from 'react-beautiful-dnd'
import TimeComapre from '../functions/TimeCompare'
import { useState } from 'react'

function Request({ request, toPush, setToPush, index }) {

    const [checked, setChecked] = useState(false)

    let title = request.name
    if (request.name.length > 50) {
        title = request.name.slice(0, 50) + '...'
    }

    function hadnlePush() {
        if (toPush.includes(request)) {
            setToPush(toPush.filter(e => e != request))
        } else {
            setToPush([...toPush, request])
        }
    }

    return (
        <Draggable key={request._id} draggableId={request._id} index={index}>
            {(provided, snapshot) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div id='single-request-container'
                        style={{
                            borderColor: snapshot.isDragging ? '#9DB2BF' : '',
                            backgroundColor: snapshot.isDragging ? '#9DB2BF' : '',
                            transition: 'background-color 0.2s ease'
                        }}
                    >
                        <div id='request-drag-container'
                            {...provided.dragHandleProps}
                        >
                            <div id='request-adjust' className='request-spacers'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nGNgGAXEgP///zf8pyJgwGKBA9QSqmCGUTACwX9ap6L/tM4Ho2AUUA5Gi+tRwEAJAABV5r4vuTw0OwAAAABJRU5ErkJggg==" />
                            </div>
                        </div>
                        <div id='request-img-container' onClick={() => {setChecked(!checked), hadnlePush()}}>
                            <img id='request-img' src={request.img} alt="" />
                        </div>
                        <div id='request-box-container' onClick={() => {setChecked(!checked), hadnlePush()}}>
                            <div>{title}</div>
                            <div id='request-small-detail'>
                                <div>{request.artist}</div>
                                <div>{TimeComapre(request.timeRequested)}</div>
                            </div>
                        </div>
                        <div id='request-input' className='request-spacers'>
                            <label class="checkBox">
                                <input id="ch1" type="checkbox" checked={checked} onChange={() => {setChecked(!checked), hadnlePush()}} />
                                <div class="transition"></div>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Request