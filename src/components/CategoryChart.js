import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

export default function CategoryChart({ transactions }) {
  const categoryTotals = transactions.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([category, amount], index) => ({
    name: category,
    value: amount,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
