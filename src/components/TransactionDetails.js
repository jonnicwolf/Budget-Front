import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import axios from "axios"

const API = apiURL()

const TransactionDetails = () => {
    [oneTransaction, setOneTransaction] = useState([]);

    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        axios
            .get(`${API}/transactions/${id}`)
            .then(
                response =>
                    setOneTransaction(response.data.payload))
            .catch(e => {
                console.error(e)
                history.push("/not-found");
            });
    }, []);
    return (
        <div>
            {oneTransaction.date}:{oneTransaction.name}:{oneTransaction.amount}:
            {oneTransaction.from}
        </div>
    )
}

export default TransactionDetails
