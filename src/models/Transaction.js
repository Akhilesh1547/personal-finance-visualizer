import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, enum: ["Food", "Rent", "Shopping", "Bills", "Other"], required: true }
});

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
