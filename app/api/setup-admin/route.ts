import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import User from "../../../models/Users";

export async function GET() {
  await connectDB();
  
  const existingUser = await User.findOne({ username: "admin" });
  if (existingUser) {
    return NextResponse.json({ message: "Admin already exists" });
  }

  await User.create({
    username: "admin",
    password: "admin123", // Hardcoded for initial setup
    role: "admin"
  });

  return NextResponse.json({ message: "Admin Created: admin / admin123" });
}