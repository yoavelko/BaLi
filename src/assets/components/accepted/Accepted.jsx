import './Accepted.css'
import { Draggable } from 'react-beautiful-dnd'

function Accepted({ accept, checkedAccept, setCheckedAccept, index }) {

    let title = accept.name
    if (accept.name.length > 20) {
        title = accept.name.slice(0, 35) + '...'
    }

    function handlePush() {
        if (checkedAccept.includes(accept._id)) {
            setCheckedAccept(checkedAccept.filter(e => e != accept._id))
        } else {
            setCheckedAccept([...checkedAccept, accept._id])
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
                            borderColor: snapshot.isDragging ? '#9DB2BF' : '',
                            backgroundColor: snapshot.isDragging ? '#9DB2BF' : '',
                            transition: 'background-color 0.2s ease'
                        }}
                    >
                        <div id='accept-adjust' className='accept-spacers'
                            {...provided.dragHandleProps}
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGBRASkrqP6l4oN086IDUaCBSDqRGdiACALgqMrxHDJ9hAAAAAElFTkSuQmCC" />
                        </div>
                        <div id='accept-img-container'>
                            <img id='accept-img' src={accept.img} alt="" />
                        </div>
                        <div id='accept-box-container'>
                            <div>{title}</div>
                            <div>{accept.artist}</div>
                        </div>
                        <div id='accept-input' className='request-spacers'>
                            <input type="checkbox" onChange={handlePush} />
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Accepted