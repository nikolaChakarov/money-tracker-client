import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import './isError.css';

const isError = (WrppedComponent) => {

    const Wrapper = (props) => {

        const { error, resetError } = useContext(GlobalContext);

        useEffect(() => {
            resetError();
        }, []);

        const deleteError = (e) => {
            resetError();
            e.target.display = 'none';
        }

        if (error[0]) {
            return (
                <>
                    <div onClick={deleteError} className="error-div">
                        <span>{error[0]}</span>
                    </div>
                    <WrppedComponent {...props} />
                </>
            )
        }
        return <WrppedComponent {...props} />
    }

    return Wrapper;
}

export default isError;