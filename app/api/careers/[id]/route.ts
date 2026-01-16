import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Job from "@/models/Job"; // Ensure this matches your actual Model file name

// ✅ 1. GET Single Job (Edit ke liye data fetch karne ke liye)
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const job = await Job.findById(params.id);

    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching job" }, { status: 500 });
  }
}

// ✅ 2. PUT (Update Job)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedJob = await Job.findByIdAndUpdate(params.id, body, {
      new: true, // Returns the updated document
      runValidators: true,
    });

    if (!updatedJob) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(updatedJob, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating job" }, { status: 500 });
  }
}

// ✅ 3. DELETE (Delete Job)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const deletedJob = await Job.findByIdAndDelete(params.id);

    if (!deletedJob) {
        return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job Deleted Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting job" }, { status: 500 });
  }
}