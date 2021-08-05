import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL'
import Transaction from './Transaction.js'

const API = apiURL();

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then(
                response =>
                    setTransactions(response.data),
                error =>
                    console.log("get", error)
            )
            .catch((c) => console.warn("catch", c));
    }, []);
    return (
        <section className='transactions'>
            <ul>
                {transactions.map(transaction =>
                    <Transaction
                        key={transaction.key}
                        transaction={transaction} />)};
            </ul>
        </section>
    )
};

export default Transactions;
