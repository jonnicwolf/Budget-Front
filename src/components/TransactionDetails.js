import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import axios from "axios"

const API = apiURL()

const TransactionDetails = () => {
    [oneTransaction, setOneTransaction] = useState([]);

    const { index } = useParams();
    let history = useHistory();

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then(
                response =>
                    setOneTransaction(response.data))
            .catch(e => {
                console.error(e)
                history.push("/not-found");
            });
    }, []);
    return (
        <div>
            <h1>{oneTransaction.name}</h1>
            <div>
                {oneTransaction.date}{oneTransaction.amount}{oneTransaction.from}
            </div>
        </div>
    )
};

export default TransactionDetails;
