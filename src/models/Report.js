import mongoose from "mongoose";

const reportsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    testName: {
      type: String,
      required: true,
      trim: true,
    },
    files: [
      {
        name: String,
        url: String,
      },
    ],
    hospital: {
      type: String,
      required: true,
      trim: true,
    },
    doctor: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      trim: true,
    },

    systolic: Number,
    diastolic: Number,
    temperature: Number,
    sugar: Number,
    height: Number,
    weight: Number,

    aiPrompt: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reports = mongoose.model("Report", reportsSchema);

export default Reports;
