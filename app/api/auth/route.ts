import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import User from "@/models/User"; // Use this if you want DB auth later

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Simple Production Hardcoded Auth (env variables recommended)
    // You can replace this with DB check later
    const ADMIN_USER = process.env.ADMIN_USER || "admin";
    const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // Return success (Frontend sets cookie)
      return NextResponse.json({ success: true, message: "Login Successful" }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: "Invalid Credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}