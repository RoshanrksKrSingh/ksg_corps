import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Notification from "@/models/Notification";

// GET: Fetch ALL notifications
export async function GET() {
  try {
    await connectToDB();
    const notifications = await Notification.find().sort({ createdAt: -1 });
    return NextResponse.json(notifications);
  } catch (error) {
    console.error("GET Notification Error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// POST: Create a NEW notification
export async function POST(req: Request) {
  try {
    await connectToDB();
    const { text, isActive } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const newNotification = await Notification.create({ text, isActive });

    return NextResponse.json({ message: "Created successfully", notification: newNotification }, { status: 201 });
  } catch (error) {
    console.error("POST Notification Error:", error); // Check your terminal for this!
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}