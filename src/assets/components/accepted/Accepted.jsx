import './Accepted.css'

function Accepted({ accept, checkedAccept, setCheckedAccept }) {

    function handlePush() {
        if (checkedAccept.includes(accept._id)) {
            setCheckedAccept(checkedAccept.filter(e => e != accept._id))
        } else {
            setCheckedAccept([...checkedAccept, accept._id])
        }
    }

    return (
        <div id='single-accept-container'>
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
            <div id='accept-input'  className='request-spacers'>
                <input type="checkbox" onChange={handlePush}/>
            </div>
        </div>
    )
}

export default Accepted