import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("/api/transactions").then((res) => setTransactions(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t._id} className="text-center">
              <td className="border p-2">{new Date(t.date).toLocaleDateString()}</td>
              <td className="border p-2">{t.description}</td>
              <td className="border p-2">${t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
