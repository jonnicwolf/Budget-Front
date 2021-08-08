import { Link } from 'react-router-dom';
const Transaction = ({ transaction, index }) => {
    return (
        <>
            <Link to={`/transactions/${index}`}>
                <div>{transaction.date}</div>
            </Link>
            <div>{transaction.name}</div>
            <div>{transaction.amount}</div>
            <div>{transaction.from}</div>
        </>
    )
}

export default Transaction;
