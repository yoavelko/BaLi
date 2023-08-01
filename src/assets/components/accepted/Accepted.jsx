import './Accepted.css'
import { Draggable } from 'react-beautiful-dnd'

function Accepted({ accept, checkedAccept, setCheckedAccept, index }) {

    function handlePush() {
        if (checkedAccept.includes(accept._id)) {
            setCheckedAccept(checkedAccept.filter(e => e != accept._id))
        } else {
            setCheckedAccept([...checkedAccept, accept._id])
        }
    }

    return (
        <Draggable key={accept._id} draggableId={accept._id} index={index}>
            {(provided) => (
                <div id='single-accept-container'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div id='accept-adjust' className='accept-spacers'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGBRASkrqP6l4oN086IDUaCBSDqRGdiACALgqMrxHDJ9hAAAAAElFTkSuQmCC" />
                    </div>
                    <div id='accept-img-container'>
                        <img id='accept-img' src={accept.img} alt="" />
                    </div>
                    <div id='accept-box-container'>
                        <div>{accept.name}</div>
                        <div id='accept-small-detail'>
                            <div>{accept.artist}</div>
                            <div>נשלח בשעה: {accept.timeRequested}</div>
                        </div>
                    </div>
                    <div id='accept-input' className='request-spacers'>
                        <input type="checkbox" onChange={handlePush} />
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Accepted