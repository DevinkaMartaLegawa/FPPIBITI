function TransactionItem({ transaction, onEdit, onDelete }) {
    const { id, text, amount, date, category } = transaction;
  
    const getCategoryLabel = (cat) => {
      const categories = {
        income: "Pemasukan",
        food: "Makanan",
        transport: "Transportasi",
        entertainment: "Hiburan",
        health: "Kesehatan",
        other: "Lainnya"
      };
      return categories[cat] || cat;
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h4 className="font-medium text-gray-800">{text}</h4>
            <p className="text-sm text-gray-500 mt-1">
              {getCategoryLabel(category)} • {date}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`text-lg font-semibold ${
              amount > 0 ? "text-green-600" : "text-red-600"
            }`}>
              {amount > 0 ? "+" : ""}Rp {Math.abs(amount).toLocaleString()}
            </span>
            <div className="flex space-x-1">
              <button
                onClick={() => onEdit(transaction)}
                className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(id)}
                className="text-red-600 hover:text-red-800 text-sm px-2 py-1"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TransactionItem;