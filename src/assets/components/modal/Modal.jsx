import './Modal.css'

function Modal({ onClose }) {
    return (
        <div id='modal-container'>
            <div>im a modal biatch</div>
            <button onClick={onClose}>close modal</button>
        </div>
    )
}

export default Modal