import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Notification from "@/models/Notification";

// PUT: Update specific notification
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const { text, isActive } = await req.json();
    
    const updated = await Notification.findByIdAndUpdate(
      params.id,
      { text, isActive },
      { new: true }
    );

    return NextResponse.json({ message: "Updated", notification: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

// DELETE: Delete specific notification
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    await Notification.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}