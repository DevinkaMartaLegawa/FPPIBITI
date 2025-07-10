import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Statistics from "../pages/Statistics";
import Layout from "../components/Layout";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Gaji", amount: 5000000, date: "2025-01-01", category: "income" },
    { id: 2, text: "Makan", amount: -50000, date: "2025-01-02", category: "food" },
    { id: 3, text: "Transportasi", amount: -75000, date: "2025-01-03", category: "transport" }
  ]);

  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  function addTransaction(tx) {
    const newTx = {
      ...tx,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    setTransactions([...transactions, newTx]);
  }

  function updateTransaction(id, updatedTx) {
    setTransactions(transactions.map(tx => 
      tx.id === id ? { ...tx, ...updatedTx } : tx
    ));
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(tx => tx.id !== id));
  }

  useEffect(() => {
    console.log("Total saldo sekarang: ", total);
  }, [total]);

  return (
    <Layout>
      <Header title="DevLedger" />
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Dashboard 
              transactions={transactions} 
              total={total} 
              onAdd={addTransaction} 
            />
          } 
        />
        <Route 
          path="/transactions" 
          element={
            <Transactions 
              transactions={transactions} 
              onAdd={addTransaction}
              onUpdate={updateTransaction}
              onDelete={deleteTransaction}
            />
          } 
        />
        <Route 
          path="/statistics" 
          element={<Statistics transactions={transactions} />} 
        />
      </Routes>
    </Layout>
  )
}

export default App;