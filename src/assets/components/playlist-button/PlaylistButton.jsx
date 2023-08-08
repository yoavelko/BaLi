import './PlaylistButton.css'

function PlaylistButton({value, func}) {

    return (
        <button id='playlist-button' onClick={func}>{value.name}</button>
    )
}

export default PlaylistButton