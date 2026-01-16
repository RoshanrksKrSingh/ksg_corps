import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, default: "General" },
    message: { type: String, required: true },
    status: { type: String, default: "New", enum: ["New", "Contacted", "Closed"] }
  },
  { timestamps: true }
);

export default models.Contact || model("Contact", ContactSchema);