import React, { useState, useEffect } from 'react';

const NewBudgetForm = () => {
    const [inputString, setInputString] = useState('')
    const [inputNumber, setInputNumber] = useState(0);

    const handleChange_String = (e) => {
        setInputString(e.target.value)
    }
    
    const handleChange_Number = (e) => {
        const number = e.target.value
        setInputNumber(number)
    }
    
    return (
        <div>
            <form >
                <label htmlFor="date">Date of transaction: </label>
                <input
                    placeholder='mm/dd/yyyy'
                    onChange={handleChange_String}
                    type="text"
                    name='date'
                    id='date'
                />
                <label htmlFor="name">Item/Service: </label>
                <input
                    placeholder='eg. Gas'
                    onChange={ handleChange_String}
                    type="text"
                    name='name'
                    id='name'
                />
                <label htmlFor="amount">Amount: </label>
                <input
                    placeholder='$'
                    onChange={ handleChange_Number}
                    type="text"
                    name='amount'
                    id='amount'
                />
                <label htmlFor="from">From: </label>
                <input
                    placeholder='Expense/Income'
                    onChange={handleChange_String}
                    type="text"
                    name='from'
                    id='from'
                />

                <input type="button" value="Submit" />
            </form>
        </div>
    )
};

export default NewBudgetForm;
