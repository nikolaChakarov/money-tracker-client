import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import isError from '../../middlewares/isErrror';

import './Login.css';


const Login = ({ history }) => {

    const { loginUser, error } = useContext(GlobalContext);

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });

    const onInputChange = (e) => {
        setUserInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const { username, password } = userInfo;

        loginUser({ username, password });

    }

    return (
        <section className="wrapper login-form-section">
            <h1>Login Form</h1>

            <form
                className="form"
                onSubmit={onFormSubmit}
            >
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userInfo.username}
                        onChange={onInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={onInputChange}
                    />
                </div>

                <button className="btn">Login</button>
            </form>
        </section>
    )
}

export default isError(Login);
