import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    
    return (
        <div id='header-container' dir='rtl'>
            <div>LOGO</div>
            <Link to={'/statistics'} target={'blank'}><div>סטטיסטיקות</div></Link>
            <Link to={'/admin'}><div>ניהול מוזיקה</div></Link>
            <div>היסטוריית נגינה</div>
        </div>
    )
}

export default Header