import mongoose, { Schema, models, model } from "mongoose";

const PasswordSchema = new Schema(
  {
    userId: { type: String, required: true }, // Clerk user ID
    title: { type: String, required: true },
    category: { type: String }, // Wi-Fi, Credit Card, Code, etc.
    username: String,
    password: String,
    notes: String,
  },
  { timestamps: true }
);

export default models.Password || model("Password", PasswordSchema);
