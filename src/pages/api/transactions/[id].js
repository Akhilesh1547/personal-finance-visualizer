import dbConnect from "@/utils/dbConnect";
import Transaction from "@/models/Transaction";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query; // Get ID from URL

  if (method === "DELETE") {
    try {
      const deletedTransaction = await Transaction.findByIdAndDelete(id);

      if (!deletedTransaction) {
        return res.status(404).json({ error: "Transaction not found" });
      }

      res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete transaction" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
