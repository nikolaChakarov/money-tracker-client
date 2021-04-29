import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Logout = ({ history }) => {

    const { logoutUser } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.clear();
        logoutUser();
        history.push('/');
    }, []);

    return (
        null
    )

}

export default Logout;