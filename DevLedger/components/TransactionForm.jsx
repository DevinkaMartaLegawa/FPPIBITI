import { useState } from "react";

function TransactionForm(props) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newTx = {
      id: Math.random(),
      text: text,
      amount: Number(amount)
    };

    props.onAdd(newTx);

    setText("");
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama Transaksi</label>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div>
        <label>Nominal</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <button type="submit">Tambah</button>
    </form>
  )
}

export default TransactionForm;
