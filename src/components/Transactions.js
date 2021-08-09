import Transaction from './Transaction.js';

const Transactions = ({ transactions }) => {
    return (
        <section className='transactions'>
            {transactions.map(
                (transaction, index) =>
                    <Transaction
                        key={index}
                        index={index}
                        transaction={transaction}
                        
                         />
            )}
        </section>
    )
};

export default Transactions;
