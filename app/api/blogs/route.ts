import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

// GET ALL BLOGS
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// CREATE NEW BLOG
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newBlog = await Blog.create(body);
    return NextResponse.json({ message: "Blog Created", blog: newBlog }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}