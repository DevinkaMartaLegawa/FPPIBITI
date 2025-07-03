function Balance(props) {
    return (
        <div>
            <h2>Saldo Kamu:</h2>
            <p>Rp {props.amount.toLocaleString()}</p>
        </div>
    );
}

export default Balance;
