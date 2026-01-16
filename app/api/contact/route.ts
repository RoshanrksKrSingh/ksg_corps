import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

// POST: Save Form Data & Send Email
export async function POST(req: Request) {
  try {
    // 1. Connect to DB
    await connectDB();
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Simple Validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // 2. Save to Database (For Admin Panel)
    const newContact = await Contact.create(body);

    // 3. Configure Nodemailer (For Email Notification)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // 4. Email Template (Styling included)
    const mailOptions = {
      from: `"KSG Website Inquiry" <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_TO, // Where you want to receive emails
      subject: `New Lead: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          
          <div style="background-color: #041D2D; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Website Inquiry</h2>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333;"><strong>Client Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #e65100;">${email}</a></p>
            <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> ${phone}</p>
            <p style="font-size: 16px; color: #333;"><strong>Service Interested:</strong> <span style="background-color: #e3f2fd; color: #0d47a1; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${service}</span></p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            
            <p style="font-weight: bold; color: #555;">Message:</p>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #444; border-left: 4px solid #e65100;">${message}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 10px; text-align: center; color: #888; font-size: 12px;">
            This email was sent automatically from the KSG Corporate Services website.
          </div>
        </div>
      `,
    };

    // 5. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: Saved & Emailed", data: newContact }, { status: 201 });

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ message: "Server Error", error }, { status: 500 });
  }
}

// GET: Fetch Leads (Admin Only)
export async function GET() {
  try {
    await connectDB();
    const leads = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}