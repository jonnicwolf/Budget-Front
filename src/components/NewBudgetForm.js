import React, { useState, useEffect } from 'react';

const NewBudgetForm = () => {
    const [form, setForm] = useState({
        date: '',
        name: '',
        amount: 0,
        from: ''
    })

    // handleChange_String = () => { }
    return (
        <div>
            <form >
                <label htmlFor="date">Date of transaction: </label>
                <input
                    placeholder='mm/dd/yyyy'
                    type="text"
                    value={`foo`}
                    name='date'
                    id='date'
                />
                <label htmlFor="name">Item/Service: </label>
                <input
                    placeholder='eg. Gas'
                    type="text"
                    value={`foo`}
                    name='name'
                    id='name'
                />
                <label htmlFor="amount">Amount: </label>
                <input
                    placeholder='$'
                    type="text"
                    value={`foo$`}
                    name='amount'
                    id='amount'
                />
                <label htmlFor="from">From: </label>
                <input
                    placeholder='Expense/Income'
                    type="text"
                    value={'foo'}
                    name='from'
                    id='from'
                />

                <input type="button" value="Submit" />
            </form>
        </div>
    )
};

export default NewBudgetForm;
