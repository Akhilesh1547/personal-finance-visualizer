import { useEffect, useState } from "react";
import TransactionForm from "@/components/TransactionForm";
import CategoryChart from "@/components/CategoryChart";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleTransactionAdded = () => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  };

  const handleDeleteTransaction = async (id) => {
    try {
      const res = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete transaction");
      }

      // Remove the deleted transaction from the UI
      setTransactions((prev) => prev.filter((txn) => txn._id !== id));
    } catch (error) {
      console.error("Error deleting transaction:", error);
      alert("Error deleting transaction: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Personal Finance Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Track your expenses with ease</p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Total Expenses</h2>
            <p className="text-2xl font-bold text-red-500">
              ₹{transactions.reduce((sum, txn) => sum + txn.amount, 0)}
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Highest Expense</h2>
            <p className="text-2xl font-bold text-red-600">
              ₹{transactions.length ? Math.max(...transactions.map(txn => txn.amount)) : 0}
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Lowest Expense</h2>
            <p className="text-2xl font-bold text-green-500">
              ₹{transactions.length ? Math.min(...transactions.map(txn => txn.amount)) : 0}
            </p>
          </div>
        </div>
  
        <div className="mt-6 w-full max-w-2xl card p-6">
          <h2 className="text-xl font-semibold mb-4">Spending Breakdown</h2>
          <div className="flex justify-center">
            <CategoryChart transactions={transactions} />
          </div>
        </div>
  
        <div className="mt-6 w-full max-w-lg card p-6">
          <TransactionForm onTransactionAdded={handleTransactionAdded} />
        </div>
  
        <h2 className="text-xl font-semibold mt-6">Transaction History</h2>
        <ul className="mt-4 space-y-2 w-full max-w-2xl">
          {transactions.map((txn) => (
            <li key={txn._id} className="p-4 border-b bg-white dark:bg-gray-700 rounded shadow flex justify-between items-center">
              <div className="text-left">
                <p className="font-medium">{txn.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {txn.category} - {new Date(txn.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold">
                  {txn.amount >= 0 ? `+₹${txn.amount}` : `-₹${txn.amount}`}
                </p>
                <button
                  onClick={() => handleDeleteTransaction(txn._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  
}
