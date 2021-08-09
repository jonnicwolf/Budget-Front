import React from 'react';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction, index }) => {
    console.log(transaction, index)
    return (
        <>
            <Link to={`/transactions/${index}`}>
                <div>{transaction.date}</div>
            </Link>
            <div>{transaction.name}</div>
            <div>{transaction.amount}</div>
        </>
    )
};

export default Transaction;
