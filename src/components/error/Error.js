import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Error = () => {

    const { error } = useContext(GlobalContext);

    return (
        <div>
            {error}
        </div>
    )
}

export default Error;