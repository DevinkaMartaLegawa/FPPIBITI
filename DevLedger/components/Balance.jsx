function Balance(props) {
    return (
      <div>
        <h3>Saldo Kamu:</h3>
        <p className={props.amount >= 0 ? "balance-positive" : "balance-negative"}>
          Rp {props.amount.toLocaleString("id-ID")}
        </p>
      </div>
    )
  }
  
  export default Balance;
  