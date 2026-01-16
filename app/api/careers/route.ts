import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Job from "@/models/Job";

export async function GET() {
  await connectDB();
  const jobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newJob = await Job.create(body);
  return NextResponse.json(newJob, { status: 201 });
}