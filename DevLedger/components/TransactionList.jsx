import { useState } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "" || transaction.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Daftar Transaksi ({filteredTransactions.length})
        </h3>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Cari transaksi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Semua Kategori</option>
          <option value="income">Pemasukan</option>
          <option value="food">Makanan</option>
          <option value="transport">Transportasi</option>
          <option value="entertainment">Hiburan</option>
          <option value="health">Kesehatan</option>
          <option value="other">Lainnya</option>
        </select>
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            {searchTerm || filterCategory ? "Tidak ada transaksi yang sesuai filter" : "Belum ada transaksi"}
          </p>
        ) : (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TransactionList;