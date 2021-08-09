import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { apiURL } from '../util/apiURL'
import Transaction from './Transaction.js';

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
    console.log(transactions)
    return (
        <section className='transactions'>
            {transactions.map(
                (transaction, index) =>
                    <Transaction
                        transaction={transaction}
                        index={index}
                        key={index}
                        />
            )}
        </section>
    )
};

export default withRouter(Transactions);
