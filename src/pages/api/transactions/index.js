import dbConnect from "@/utils/dbConnect";
import Transaction from "@/models/Transaction";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { amount, description, category, date } = req.body;
      const transaction = await Transaction.create({ amount, description, category, date });

      res.status(201).json(transaction);
    } catch (error) {
      console.error("Transaction creation failed:", error);
      res.status(400).json({ error: "Transaction creation failed" });
    }
  } 
  
  else if (req.method === "GET") {
    try {
      const transactions = await Transaction.find({}).sort({ date: -1 }); // Sort by date (latest first)
      res.status(200).json(transactions);
    } catch (error) {
      console.error("Fetching transactions failed:", error);
      res.status(500).json({ error: "Fetching transactions failed" });
    }
  } 
  
  else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
