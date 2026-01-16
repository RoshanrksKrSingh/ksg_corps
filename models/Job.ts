import mongoose, { Schema, models, model } from "mongoose";

const JobSchema = new Schema(
  {
    title: { type: String, required: true }, // e.g. Senior Accountant
    location: { type: String, required: true }, // e.g. Dubai
    type: { type: String, default: "Full Time" },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default models.Job || model("Job", JobSchema);