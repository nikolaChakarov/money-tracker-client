import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import './Transaction.css';

const Transaction = (props) => {

    const { onDeleteTransaction } = useContext(GlobalContext);
    const { _id, name, amount } = props;

    const additional = amount >= 0 ? "positive transaction" : "negative transaction";

    const sign = amount >= 0 ? '' : '-';

    return (
        <div className={additional}>
            <p>{name}</p>
            <p>{sign}${Math.abs(amount)}
                <span><button
                    onClick={() => onDeleteTransaction(_id)}
                    className="delete-btn"
                >X</button></span></p>
        </div>
    )
}

export default Transaction;
