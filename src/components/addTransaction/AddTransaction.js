import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import './AddTransactions.css';

import isAuth from '../../middlewares/isAuth';

const AddTransaction = () => {

    const [transaction, setTransaction] = useState({
        name: '',
        amount: 0
    });

    const { addTransaction } = useContext(GlobalContext);

    const onInputChange = (e) => {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const { name, amount } = transaction;
        addTransaction({ name, amount });
        setTransaction({
            name: '',
            amount: 0
        });
    }

    return (
        <section className="wrapper add-transactions">
            <h3>Add new transaction</h3>
            <form
                className="form"
                onSubmit={onFormSubmit}
            >
                <div>
                    <label htmlFor="name">Transaction name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={transaction.name}
                        onChange={onInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="name"
                        name="amount"
                        value={transaction.amount}
                        onChange={onInputChange}
                    />
                </div>
                <p>(negative - expence, positive - income)</p>
                <button className="btn">Add transaction</button>
            </form>
        </section>
    )
}

export default isAuth(AddTransaction);
