import { useState, useEffect } from "react";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";
import Layout from "../components/Layout";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Gaji", amount: 5000000 },
    { id: 2, text: "Makan", amount: -50000 },
    { id: 3, text: "Transportasi", amount: -75000 }
  ]);

  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  function addTransaction(tx) {
    setTransactions([ ...transactions, tx ]);
  }

  useEffect(() => {
    console.log("Total saldo sekarang: ", total);
  }, [total]);

  return (
    <Layout>
      <Header title="DevLedger" />
      <Balance amount={total} />
      <TransactionList transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
    </Layout>
  )
}

export default App;
