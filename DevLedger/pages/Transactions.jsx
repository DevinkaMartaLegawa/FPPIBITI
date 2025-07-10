import { useState } from "react";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";

function Transactions({ transactions, onAdd, onUpdate, onDelete }) {
  const [editTransaction, setEditTransaction] = useState(null);

  const handleEdit = (transaction) => {
    setEditTransaction(transaction);
  };

  const handleUpdate = (id, updatedData) => {
    onUpdate(id, updatedData);
    setEditTransaction(null);
  };

  const handleCancel = () => {
    setEditTransaction(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus transaksi ini?")) {
      onDelete(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TransactionForm
          onAdd={onAdd}
          editTransaction={editTransaction}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
        />
        
        <TransactionList
          transactions={transactions}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Transactions;