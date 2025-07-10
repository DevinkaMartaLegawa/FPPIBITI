import { useState } from "react";

function TransactionForm({ onAdd, editTransaction, onUpdate, onCancel }) {
  const [text, setText] = useState(editTransaction?.text || "");
  const [amount, setAmount] = useState(editTransaction?.amount || 0);
  const [category, setCategory] = useState(editTransaction?.category || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim() || amount === 0) {
      alert("Harap isi semua field dengan benar!");
      return;
    }

    const transactionData = {
      text: text.trim(),
      amount: Number(amount),
      category: category
    };

    if (editTransaction) {
      onUpdate(editTransaction.id, transactionData);
    } else {
      onAdd(transactionData);
    }

    setText("");
    setAmount(0);
    setCategory("");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        {editTransaction ? "Edit Transaksi" : "Tambah Transaksi Baru"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Transaksi
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama transaksi"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nominal (gunakan - untuk pengeluaran)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nominal"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kategori
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih kategori</option>
            <option value="income">Pemasukan</option>
            <option value="food">Makanan</option>
            <option value="transport">Transportasi</option>
            <option value="entertainment">Hiburan</option>
            <option value="health">Kesehatan</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {editTransaction ? "Update" : "Tambah"}
          </button>
          {editTransaction && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;