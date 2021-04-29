import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import isError from '../../middlewares/isErrror';

import './Register.css';

const Register = ({ history }) => {

    const { registerUser, error } = useContext(GlobalContext);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: ''
    });

    const { username, password, password2 } = formData;

    const onInputChanged = (e) => {
        setFormData(prev => (
            { ...prev, [e.target.name]: e.target.value }
        ));
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        registerUser({ username, password, password2 });

    }

    return (
        <section className="wrapper register-form-section">
            <h1>Rregister Form</h1>

            <form
                onSubmit={onFormSubmit}
                className="form"
            >

                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={onInputChanged}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChanged}


                    />
                </div>

                <div>
                    <label htmlFor="password2">Reapeat Password</label>
                    <input
                        type="text"
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={onInputChanged}
                    />
                </div>

                <button className="btn">Register</button>
            </form>
        </section>
    )
}

export default isError(Register);
