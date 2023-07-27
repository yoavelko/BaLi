import './Request.css'

function Request({ request, toPush, setToPush }) {

    function hadnlePush() {
        if (toPush.includes(request._id)) {
            setToPush(toPush.filter(e => e != request._id))
        } else {
            setToPush([...toPush, request._id])
        }
    }

    return (
        <div id='single-request-container'>
            <div id='request-adjust' className='request-spacers'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGBRASkrqP6l4oN086IDUaCBSDqRGdiACALgqMrxHDJ9hAAAAAElFTkSuQmCC" />
            </div>
            <div id='request-img-container'>
                <img id='request-img' src={request.img} alt="" />
            </div>
            <div id='request-box-container'>
                <div>{request.name}</div>
                <div id='request-small-detail'>
                    <div>{request.artist}</div>
                    <div>נשלח בשעה: {request.timeRequested}</div>
                </div>
            </div>
            <div id='request-input'  className='request-spacers'>
                <input type="checkbox" onChange={hadnlePush} />
            </div>
        </div>
    )
}

export default Request