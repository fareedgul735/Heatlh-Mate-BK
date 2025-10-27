import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  date: String,
  type: String,
  inputValue: String,
  summary_en: String,
  summary_ru: String,
  highlights: [String],
  doctor_questions: [String],
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
