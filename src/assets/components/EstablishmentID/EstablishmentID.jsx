import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
function EstablishmentID() {
    const navigate = useNavigate();
    const { id } = useParams()
    useEffect(() => {
        localStorage.setItem('establishment', id);
        navigate('/')
    }, [])
}
export default EstablishmentID;