import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, 
    thumbnail: { type: String, required: true }, 
    description: { type: String, required: true },
    category: { 
      type: String, 
      required: true, 
      enum: ['news', 'blogs', 'audit', 'events'], 
      default: 'blogs' 
    },
    // ✅ NEW: Author Field
    author: { type: String, default: "KSG Team" },

    // Content Blocks
    content: [
      {
        // ✅ NEW: Added 'table' to enum
        type: { type: String, enum: ['heading', 'paragraph', 'image', 'table'], default: 'paragraph' },
        value: { type: String, required: true }
      }
    ],
  },
  { timestamps: true }
);

export default models.Blog || model("Blog", BlogSchema);