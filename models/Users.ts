import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // In production, hash this!
    role: { type: String, default: "admin" }
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);