import mongoose, { Schema, model, models } from "mongoose";

const NotificationSchema = new Schema(
  {
    text: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Notification = models.Notification || model("Notification", NotificationSchema);

export default Notification;