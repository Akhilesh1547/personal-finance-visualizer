<ul className="mt-4 space-y-2">
  {transactions.map((txn) => (
    <li key={txn._id} className="p-4 border-b bg-white dark:bg-gray-700 rounded shadow flex justify-between items-center">
      <div>
        <p className="font-medium">{txn.description}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{txn.category} - {new Date(txn.date).toLocaleDateString()}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold">{txn.amount >= 0 ? `+₹${txn.amount}` : `-₹${txn.amount}`}</p>
        <button onClick={() => handleDelete(txn._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
          🗑️
        </button>
      </div>
    </li>
  ))}
</ul>
