import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const Transaction = ({ transaction, index }) => {
    console.log(transaction, index)
    return (
        <>
            <Link to={`/transactions/${index}`}>
                <div>{transaction.date}</div>
            </Link>
            {/* <Route to={`/transactions/${index}`}>
                <div>{transaction.date}</div>
            </Route> */}
            {/* <Redirect to={`/transactions/${index}`}>
                <div>{transaction.date}</div>
            </Redirect> */}
            <div>{transaction.name}</div>
            <div>{transaction.amount}</div>
        </>
    )
};

export default Transaction;
