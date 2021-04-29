import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';

const isAuth = (WrappedComponent) => {

    const Wrapper = (props) => {
        const { token } = useContext(GlobalContext);
        const history = useHistory();

        if (!token) {
            history.push('/');
            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Wrapper;
}

export default isAuth;