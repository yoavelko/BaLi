import { useState } from 'react'
import './Request.css'
import { Draggable } from 'react-beautiful-dnd'

function Request({ request, toPush, setToPush, index }) {

    let title = request.name
    if (request.name.length > 20) {
        title = request.name.slice(0, 35) + '...'
    }

    function hadnlePush() {
        if (toPush.includes(request._id)) {
            setToPush(toPush.filter(e => e != request._id))
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
                        <div id='request-adjust' className='request-spacers'
                            {...provided.dragHandleProps}
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGBRASkrqP6l4oN086IDUaCBSDqRGdiACALgqMrxHDJ9hAAAAAElFTkSuQmCC" />
                        </div>
                        <div id='request-img-container'>
                            <img id='request-img' src={request.img} alt="" />
                        </div>
                        <div id='request-box-container'>
                            <div>{title}</div>
                            <div id='request-small-detail'>
                                <div>{request.artist}</div>
                                <div>נשלח בשעה: {request.timeRequested}</div>
                            </div>
                        </div>
                        <div id='request-input' className='request-spacers'>
                            <input type="checkbox" onChange={hadnlePush} />
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Request