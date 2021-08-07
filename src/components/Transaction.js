const Transaction = ({ transaction }) => {
    return (
        <>
            <div>{transaction.date}</div>
            <div>{transaction.name}</div>
            <div>{transaction.amount}</div>
        </>
    )
}

export default Transaction;
