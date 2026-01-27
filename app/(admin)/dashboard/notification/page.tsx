"use client";

import { useState, useEffect } from "react";
import { Plus, Trash, Edit, CheckCircle, AlertCircle, AlertTriangle, Bell } from "lucide-react";
import Loader from "@/components/ui/Loader";

interface Notification {
  _id: string;
  text: string;
  isActive: boolean;
}

export default function AdminNotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | null }>({ msg: "", type: null });
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({ text: "", isActive: true });
  const [submitting, setSubmitting] = useState(false); // Controls the Loader

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: null }), 3000);
  };

  const fetchNotifications = async () => {
    try {
      const res = await fetch("/api/notification");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      showToast("Failed to load notifications", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleCreate = () => {
    setEditingId(null);
    setFormData({ text: "", isActive: true });
    setIsModalOpen(true);
  };

  const handleEdit = (notif: Notification) => {
    setEditingId(notif._id);
    setFormData({ text: notif.text, isActive: notif.isActive });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true); // START LOADER

    try {
      const method = editingId ? "PUT" : "POST"; 
      const url = editingId ? `/api/notification/${editingId}` : "/api/notification"; 
      
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to save");
      }

      showToast(editingId ? "Notification updated!" : "Notification created!", "success");
      setIsModalOpen(false);
      fetchNotifications(); 
    } catch (error) {
      console.error(error);
      showToast("Error saving notification. Check console.", "error");
    } finally {
      setSubmitting(false); // STOP LOADER
    }
  };

  const executeDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/notification/${deleteId}`, { method: "DELETE" }); 
      
      if (res.ok) {
        setNotifications(notifications.filter((n) => n._id !== deleteId));
        showToast("Notification deleted successfully!", "success");
      } else {
        showToast("Failed to delete notification", "error");
      }
    } catch (error) {
      showToast("Server error while deleting", "error");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="relative space-y-8 max-w-7xl mx-auto px-4 md:px-0">
      
      {/* --- TOAST --- */}
      {toast.type && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-top-5 duration-300 ${
          toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
          {toast.type === "success" ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
          <div>
            <h4 className="font-bold text-sm">{toast.type === "success" ? "Success" : "Error"}</h4>
            <p className="text-sm opacity-90">{toast.msg}</p>
          </div>
        </div>
      )}

      {/* --- DELETE MODAL --- */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 w-[90%] max-w-sm shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Delete Notification?</h3>
              <p className="text-gray-500 mb-6 text-sm">
                Are you sure? This will remove the announcement from the website.
              </p>
              <div className="flex gap-3 w-full">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">Cancel</button>
                <button onClick={executeDelete} className="flex-1 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition">Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- ADD / EDIT MODAL WITH LOADER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 w-[90%] max-w-lg shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{editingId ? "Edit Notification" : "New Notification"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Announcement Text</label>
                <input 
                  type="text" 
                  value={formData.text}
                  onChange={(e) => setFormData({...formData, text: e.target.value})}
                  required
                  placeholder="e.g., Office closed on Friday for maintenance."
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900"
                />
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${formData.isActive ? "bg-green-500" : ""}`} onClick={() => setFormData({...formData, isActive: !formData.isActive})}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${formData.isActive ? "translate-x-6" : ""}`}></div>
                </div>
                <label className="text-sm font-medium text-gray-700 cursor-pointer" onClick={() => setFormData({...formData, isActive: !formData.isActive})}>
                  {formData.isActive ? "Visible on Website" : "Hidden from Website"}
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                {submitting ? (
                   <div className="flex-1 flex justify-center py-3 bg-blue-50 rounded-xl">
                      <Loader text="Saving..." />
                   </div>
                ) : (
                  <>
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">Cancel</button>
                    <button type="submit" className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
                      {editingId ? "Update" : "Create"}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Notifications</h1>
          <p className="text-gray-400 text-sm mt-1">Control the top marquee bar announcements.</p>
        </div>
        <button 
          onClick={handleCreate} 
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
        >
          <Plus size={20} /> New Announcement
        </button>
      </div>

      {/* --- TABLE CONTENT --- */}
      {loading ? (
        <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
          <Loader text="Loading Notifications..." />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-5 font-bold text-gray-600">Notification Content</th>
                  <th className="p-5 font-bold text-gray-600">Status</th>
                  <th className="p-5 font-bold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {notifications.length === 0 ? (
                  <tr><td colSpan={3} className="p-8 text-center text-gray-500">No notifications found. Create one to get started.</td></tr>
                ) : (
                  notifications.map((notif) => (
                    <tr key={notif._id} className="hover:bg-blue-50/50 transition duration-200">
                      <td className="p-5 font-medium text-gray-800 flex items-center gap-3">
                        <Bell size={18} className="text-blue-500" />
                        {notif.text}
                      </td>
                      <td className="p-5 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${notif.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          {notif.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="p-5 flex justify-end gap-2">
                        <button onClick={() => handleEdit(notif)} className="p-2 text-orange-500 hover:bg-orange-100 rounded-lg transition"><Edit size={20} /></button>
                        <button onClick={() => setDeleteId(notif._id)} className="p-2 text-red-400 hover:bg-red-100 rounded-lg transition"><Trash size={20} /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}