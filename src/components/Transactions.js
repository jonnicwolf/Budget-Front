import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL'
import { v4 as uuidv4 } from 'uuid';
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
            {transactions.map(
                transaction =>
                <Transaction
                    key={uuidv4()}
                    transaction={transaction} />
            )}
        </section>
    )
};

export default Transactions;
