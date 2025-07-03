import TransactionItem from "./TransactionItem";

function TransactionList(props) {
    return (
        <div>
            <h3>Daftar Transaksi</h3>
            <ul>
                {props.transactions.map((item) => (
                    <TransactionItem 
                        key={item.id}
                        text={item.text}
                        amount={item.amount}
                    />
                ))}
            </ul>
        </div>
    );
}
export default TransactionList;
