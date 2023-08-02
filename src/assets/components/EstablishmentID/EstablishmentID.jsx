import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { specificEstablishment } from '../../../utils/Establishment';
import cookies from 'js-cookie'
function EstablishmentID() {
    const navigate = useNavigate();
    const { id } = useParams()
    useEffect(() => {
        if (id.includes('admin-')) {
            console.log('what');
            axios.post(specificEstablishment, { name: id.replace('admin-', '') })
                .then(() => {
                    cookies.set('establishment', id.replace('admin-', ''), {expires: 365})
                    navigate('/admin')
                })
                .catch(e => navigate('/error'))
        }
        else {
            console.log('wrd');
            axios.post(specificEstablishment, { name: id })
                .then(() => {
                    cookies.set('establishment', id, { expires: 0.25 })
                    navigate('/')
                })
                .catch((e) => { navigate('/error') })
        }
    }, [])
}
export default EstablishmentID;