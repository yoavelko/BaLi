import './Header.css'
import { Link } from 'react-router-dom'
import LOGO from './../../../media/LOGO.png'

function Header() {
    
    return (
        <div id='header-container' dir='rtl'>
            <img width={'80px'} src={LOGO} alt="" />
            <Link to={'/statistics'} target={'blank'}><div>ניתוחי נתונים</div></Link>
            <Link to={'/admin'}><div>ניהול מוזיקה</div></Link>
        </div>
    )
}

export default Header