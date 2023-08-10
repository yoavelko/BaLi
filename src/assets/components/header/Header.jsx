import './Header.css'
import { Link } from 'react-router-dom'
import LOGO from './../../../media/LOGO.png'

function Header() {
    
    return (
        <div id='header-container' dir='rtl'>
            <img width={'80px'} src={LOGO} alt="" />
            <Link to={'/statistics'} target={'blank'}><div className='header-content'>ניתוחי נתונים</div></Link>
            <Link to={'/admin'}><div className='header-content'>ניהול מוזיקה</div></Link>
        </div>
    )
}

export default Header