import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    token: localStorage.getItem('userToken'),
    transactions: [],
    error: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const registerUser = async (user) => {

        try {
            const dbRegisterResponse = await (await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })).json();

            if (dbRegisterResponse.msg) {
                throw (dbRegisterResponse.msg)
            }

            localStorage.setItem('userToken', dbRegisterResponse.token);

            dispatch({
                type: 'REGISTER',
                payload: localStorage.getItem('userToken')
            });

        } catch (error) {
            dispatch({
                type: 'ERR',
                payload: error
            })
            console.error(error);
        }
    }

    const loginUser = async (user) => {

        try {

            const dbLoginResponse = await (await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })).json();


            if (dbLoginResponse.msg) {
                throw (dbLoginResponse.msg);
            }

            localStorage.setItem('userToken', dbLoginResponse.token);

            dispatch({
                type: 'LOGIN',
                payload: localStorage.getItem('userToken')
            });


        } catch (err) {
            console.log(err);
            dispatch({
                type: 'ERR',
                payload: err
            });
        }

    }

    const logoutUser = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    const resetError = () => {
        dispatch({
            type: 'RESET_ERROR'
        })
    }

    const getAllTransactions = async () => {
        try {
            const res = await (await fetch('http://localhost:5000/api/transactions', {
                headers: {
                    'x-auth-token': state.token
                }
            })).json();

            dispatch({
                type: 'GET_ALL',
                payload: res
            });

        } catch (err) {
            console.error(err);
        }
    }

    const addTransaction = async (transaction) => {

        try {

            const dbResult = await (await fetch('http://localhost:5000/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': state.token
                },
                body: JSON.stringify(transaction)
            })).json()

            if (dbResult.msg) {
                throw (dbResult.msg)
            }

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: dbResult
            });
        } catch (err) {
            console.error(err);
        }

    }

    const onDeleteTransaction = async (id) => {
        try {
            const deleted = await (await fetch(`http://localhost:5000/api/transactions/${id}`, {
                method: 'DELETE',
                headers: { 'x-auth-token': state.token }
            })).json()

            dispatch({
                type: 'DELETE',
                payload: id
            });

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <GlobalContext.Provider value={{
            token: state.token,
            error: state.error,
            transactions: state.transactions,
            registerUser,
            loginUser,
            logoutUser,
            getAllTransactions,
            addTransaction,
            onDeleteTransaction,
            resetError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}