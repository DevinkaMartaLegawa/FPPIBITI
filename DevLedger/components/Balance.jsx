function Balance({ amount }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Saldo Kamu:
      </h3>
      <p className={`text-3xl font-bold ${
        amount >= 0 ? "text-green-600" : "text-red-600"
      }`}>
        Rp {amount.toLocaleString("id-ID")}
      </p>
    </div>
  );
}

export default Balance;