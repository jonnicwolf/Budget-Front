import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import { apiURL } from '../util/apiURL';
import axios from "axios";

const API = apiURL()

const TransactionDetails = () => {
    const [oneTransaction, setOneTransaction] = useState([]);
    
    const { index } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then(
                (response) => {
                    const { data } = response
                    setOneTransaction(data)
                })
            .catch(
                e => {
                console.error(e)
                history.push(`/transactions`)
            });
    }, [index, history]);
    console.log(index)
    return (
        <div>
            <h1>{oneTransaction.name}</h1>
            <div>
                {oneTransaction.date}{oneTransaction.amount}{oneTransaction.from}
            </div>
        </div>
    )
};

export default withRouter(TransactionDetails);
