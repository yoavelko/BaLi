import './SendButton.css'

function SendButton({func}) {

    return (
        <button className="btn" onClick={func}>שלח</button>
    )
}

export default SendButton