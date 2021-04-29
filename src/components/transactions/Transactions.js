import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import Balance from '../balance/Balance';
import Transaction from '../transaction/Transaction';
import AddTransaction from '../addTransaction/AddTransaction';

import './Transactions.css';

const Transactions = () => {

    const { getAllTransactions, transactions } = useContext(GlobalContext);


    useEffect(() => {
        getAllTransactions();
    }, []);


    return (
        <>
            <Balance />
            <section className="wrapper transactions">
                <h3>History</h3>
                <ul>
                    {transactions.map(el => (
                        <li key={el._id}>{<Transaction {...el} />}</li>
                    ))}
                </ul>
            </section>
            <AddTransaction />
        </>
    )
}

export default Transactions;
