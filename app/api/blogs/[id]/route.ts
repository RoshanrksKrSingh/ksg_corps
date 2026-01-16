import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

// ✅ 1. GET Single Blog (Edit Page के लिए यह बहुत जरूरी है)
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id);
    
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching blog" }, { status: 500 });
  }
}

// ✅ 2. PUT (Update) Blog
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const body = await req.json();
    
    // new: true return the updated document
    const updatedBlog = await Blog.findByIdAndUpdate(params.id, body, { new: true });

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating blog" }, { status: 500 });
  }
}

// ✅ 3. DELETE Blog
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const deletedBlog = await Blog.findByIdAndDelete(params.id);
    
    if (!deletedBlog) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog Deleted Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting blog" }, { status: 500 });
  }
}