import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: String,
    type: String,
    notes: String,
    fileUrl: String,
    aiSummary: Object, // store Gemini output (English + Urdu)
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
