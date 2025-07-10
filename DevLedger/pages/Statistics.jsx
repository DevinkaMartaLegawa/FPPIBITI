function Statistics({ transactions }) {
    // Calculate statistics
    const totalIncome = transactions
      .filter(tx => tx.amount > 0)
      .reduce((sum, tx) => sum + tx.amount, 0);
    
    const totalExpense = transactions
      .filter(tx => tx.amount < 0)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  
    const balance = totalIncome - totalExpense;
  
    // Group by category
    const categoryStats = transactions.reduce((acc, tx) => {
      const category = tx.category || 'other';
      if (!acc[category]) {
        acc[category] = { total: 0, count: 0 };
      }
      acc[category].total += Math.abs(tx.amount);
      acc[category].count += 1;
      return acc;
    }, {});
  
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
  
    // Monthly statistics
    const monthlyStats = transactions.reduce((acc, tx) => {
      const month = tx.date ? tx.date.substring(0, 7) : '2025-01';
      if (!acc[month]) {
        acc[month] = { income: 0, expense: 0 };
      }
      if (tx.amount > 0) {
        acc[month].income += tx.amount;
      } else {
        acc[month].expense += Math.abs(tx.amount);
      }
      return acc;
    }, {});
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Statistik Keuangan</h2>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Transaksi
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {transactions.length}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Pemasukan
            </h3>
            <p className="text-3xl font-bold text-green-600">
              Rp {totalIncome.toLocaleString("id-ID")}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Pengeluaran
            </h3>
            <p className="text-3xl font-bold text-red-600">
              Rp {totalExpense.toLocaleString("id-ID")}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Saldo Bersih
            </h3>
            <p className={`text-3xl font-bold ${
              balance >= 0 ? "text-green-600" : "text-red-600"
            }`}>
              Rp {balance.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category Statistics */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Statistik per Kategori
            </h3>
            <div className="space-y-4">
              {Object.entries(categoryStats).map(([category, stats]) => (
                <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{getCategoryLabel(category)}</p>
                    <p className="text-sm text-gray-500">{stats.count} transaksi</p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    Rp {stats.total.toLocaleString("id-ID")}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Monthly Statistics */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Statistik Bulanan
            </h3>
            <div className="space-y-4">
              {Object.entries(monthlyStats).map(([month, stats]) => (
                <div key={month} className="p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-800 mb-2">{month}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Pemasukan</p>
                      <p className="font-semibold text-green-600">
                        Rp {stats.income.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pengeluaran</p>
                      <p className="font-semibold text-red-600">
                        Rp {stats.expense.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-500">Saldo</p>
                    <p className={`font-semibold ${
                      (stats.income - stats.expense) >= 0 ? "text-green-600" : "text-red-600"
                    }`}>
                      Rp {(stats.income - stats.expense).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Statistics;