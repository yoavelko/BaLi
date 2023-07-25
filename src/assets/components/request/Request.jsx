import './Request.css'

function Request({ request }) {
    return (
        <div id='single-request-container'>
            <div id='request-adjust' className='request-spacers'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGBRASkrqP6l4oN086IDUaCBSDqRGdiACALgqMrxHDJ9hAAAAAElFTkSuQmCC" />
            </div>
            <div id='request-box-container'>
                <div>{request.name}</div>
                <div id='request-small-detail'>
                    <div>{request.artist}</div>
                    <div>{request.timeSent}</div>
                </div>
            </div>
            <div id='request-input'  className='request-spacers'>
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default Request