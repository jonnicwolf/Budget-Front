const Transaction = ({ transaction }) => {
    return (
        <>
            {transaction.date}
            {transaction.name}
            {transaction.amount}
        </>
    )
}

export default Transaction;
