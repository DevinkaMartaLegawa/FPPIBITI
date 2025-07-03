import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Balance from '../components/Balance'
import TransactionItem from '../components/TransactionItem'
import TransactionList from '../components/Transactionlist'

function App() {
  return (
    <>
      <Header Title="DevLedger" />
      <Balance amount={
        [
          { id: 1, text: "Gaji", amount: 5000000 },
          { id: 2, text: "Makan", amount: -50000 },
          { id: 3, text: "Transportasi", amount: -75000 }
        ].reduce((sum, tx) => sum + tx.amount, 0)
      } />
      <TransactionList transactions={[
        { id: 1, text: "Gaji", amount: 5000000 },
        { id: 2, text: "Makan", amount: -50000 },
        { id: 3, text: "Transportasi", amount: -75000 }
      ]} />
    </>
  )
}

export default App
