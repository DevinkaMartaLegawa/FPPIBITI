function TransactionItem(props) {
    return (
        <li>
            {props.text} <span>{props.amount > 0 ? "+" : "-"} Rp {Math.abs(props.amount).toLocaleString()}</span>
        </li>
    );
}

export default TransactionItem;
