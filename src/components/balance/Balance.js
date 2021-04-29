import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import './Balance.css';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(el => el.amount);

    const income = amounts.filter(el => el > 0).reduce((acc, curr) => {
        return acc += curr
    }, 0);

    const expence = amounts.filter(el => el < 0).reduce((acc, curr) => {
        return acc += curr
    }, 0);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <section className="balance wrapper">
            <h3>YOUR BALANCE</h3>
            <h1>${total}</h1>

            <div className="data">
                <p>INCOME<br /><span className="income-span">${income.toFixed(2)}</span></p>
                <p>EXPENCE<br /><span className="expence-span">${Math.abs(expence).toFixed(2)}</span></p>
            </div>

        </section>
    )
}

export default Balance;