import { useState } from "react";

const categories = ["Food", "Rent", "Shopping", "Bills", "Other"];

export default function TransactionForm({ onTransactionAdded }) {
  const [formData, setFormData] = useState({ amount: "", description: "", category: "Food", date: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      onTransactionAdded();
      setFormData({ amount: "", description: "", category: "Food", date: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-gray-100 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount"
          className="p-2 border rounded w-full" required />
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description"
          className="p-2 border rounded w-full" required />
        <select name="category" value={formData.category} onChange={handleChange} className="p-2 border rounded w-full">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-2 border rounded w-full" required />
      </div>
      <button type="submit" className="mt-4 w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition">
        Add Transaction
      </button>
    </form>
  );
}
  