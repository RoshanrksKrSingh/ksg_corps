"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash, Save, Type, AlignLeft, Image as ImageIcon, Link as LinkIcon, Layers, User, Table as TableIcon } from "lucide-react";
import Loader from "@/components/ui/Loader";

interface BlogFormProps {
  initialData?: any;
  isEditing?: boolean;
}

export default function BlogForm({ initialData, isEditing = false }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    description: initialData?.description || "",
    thumbnail: initialData?.thumbnail || "",
    category: initialData?.category || "blogs",
    author: initialData?.author || "KSG Team", 
  });

  const [blocks, setBlocks] = useState<{ type: string; value: string }[]>(
    initialData?.content || [{ type: "paragraph", value: "" }]
  );

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateSlug = () => {
    const slug = formData.title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");
    setFormData((prev) => ({ ...prev, slug }));
  };

  const addBlock = (type: string) => setBlocks([...blocks, { type, value: "" }]);
  const removeBlock = (index: number) => setBlocks(blocks.filter((_, i) => i !== index));
  const updateBlockValue = (index: number, value: string) => {
    const newBlocks = [...blocks];
    newBlocks[index].value = value;
    setBlocks(newBlocks);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if(!formData.title || !formData.slug) { alert("Title and Slug required!"); setLoading(false); return; }

    try {
      const url = isEditing ? `/api/blogs/${initialData._id}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, content: blocks }),
      });

      if (res.ok) {
        router.push("/dashboard/blogs");
        router.refresh();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader fullScreen text={isEditing ? "Updating..." : "Publishing..."} />}

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 animate-in fade-in">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Meta Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><Type size={16} className="text-orange-500" /> Blog Title</label>
              <input name="title" value={formData.title} onChange={handleChange} onBlur={!isEditing ? generateSlug : undefined} placeholder="Title..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><LinkIcon size={16} className="text-orange-500" /> Slug</label>
              <input name="slug" value={formData.slug} onChange={handleChange} placeholder="slug-url" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><ImageIcon size={16} className="text-orange-500" /> Thumbnail URL</label>
              <input name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="https://..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><Layers size={16} className="text-orange-500" /> Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none cursor-pointer">
                <option value="blogs">Latest Blogs</option>
                <option value="audit">Account & Audit</option>
                {/* ✅ UPDATED: Added new categories */}
                <option value="tax">Tax Advisory</option>
                <option value="business">Business Setup/PRO</option>
                <option value="risk">Risk Advisory</option>
                <option value="events">Events</option>
              </select>
            </div>
          </div>

          {/* Author Input */}
          <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><User size={16} className="text-orange-500" /> Author Name</label>
              <input name="author" value={formData.author} onChange={handleChange} placeholder="e.g. Nithila Kumar" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>

          {/* Thumbnail Preview */}
          {formData.thumbnail && (
              <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden border border-gray-200"><img src={formData.thumbnail} alt="Preview" className="w-full h-full object-cover" /></div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Short Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none resize-none" />
          </div>

          <div className="border-t border-gray-100 my-6"></div>

          {/* Content Builder */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Content Builder</h3>
            
            <div className="space-y-4">
              {blocks.map((block, index) => (
                <div key={index} className="relative group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        {block.type === "heading" && <Type size={12} />}
                        {block.type === "paragraph" && <AlignLeft size={12} />}
                        {block.type === "image" && <ImageIcon size={12} />}
                        {block.type === "table" && <TableIcon size={12} />}
                        {block.type}
                      </span>
                      <button type="button" onClick={() => removeBlock(index)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"><Trash size={16} /></button>
                  </div>

                  {block.type === "heading" && <input placeholder="Enter Heading..." value={block.value} onChange={(e) => updateBlockValue(index, e.target.value)} className="w-full text-xl font-bold text-gray-900 border-b border-gray-200 focus:border-orange-500 outline-none py-2" />}
                  
                  {block.type === "paragraph" && <textarea placeholder="Write content..." rows={4} value={block.value} onChange={(e) => updateBlockValue(index, e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" />}
                  
                  {block.type === "image" && <input placeholder="Image URL..." value={block.value} onChange={(e) => updateBlockValue(index, e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" />}

                  {block.type === "table" && (
                    <div className="space-y-2">
                        <textarea 
                            placeholder="Format: Header1, Header2 (New Line) Value1, Value2" 
                            rows={5} 
                            value={block.value} 
                            onChange={(e) => updateBlockValue(index, e.target.value)} 
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none" 
                        />
                        <p className="text-xs text-gray-400">Tip: Use commas to separate columns and new lines for rows.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <button type="button" onClick={() => addBlock("heading")} className="px-4 py-2 bg-white border border-gray-200 hover:border-orange-500 text-gray-600 rounded-xl shadow-sm font-bold flex items-center gap-2"><Type size={16}/> Heading</button>
                <button type="button" onClick={() => addBlock("paragraph")} className="px-4 py-2 bg-white border border-gray-200 hover:border-orange-500 text-gray-600 rounded-xl shadow-sm font-bold flex items-center gap-2"><AlignLeft size={16}/> Paragraph</button>
                <button type="button" onClick={() => addBlock("image")} className="px-4 py-2 bg-white border border-gray-200 hover:border-orange-500 text-gray-600 rounded-xl shadow-sm font-bold flex items-center gap-2"><ImageIcon size={16}/> Image</button>
                <button type="button" onClick={() => addBlock("table")} className="px-4 py-2 bg-white border border-gray-200 hover:border-orange-500 text-gray-600 rounded-xl shadow-sm font-bold flex items-center gap-2"><TableIcon size={16}/> Table</button>
            </div>
          </div>

          <div className="mt-8">
              <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-orange-500 to-green-500 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                  {loading ? "Processing..." : <> <Save size={20} /> {isEditing ? "Update Article" : "Publish Article"} </>}
              </button>
          </div>

        </form>
      </div>
    </>
  );
}