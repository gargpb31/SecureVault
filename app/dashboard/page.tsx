"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Sun,
  KeyRound,
  Wifi,
  CreditCard,
  Trash2,
  AlertCircle,
} from "lucide-react";

import PasswordModal from "@/components/PasswordModal";

// Define the structure of a password item
type PasswordEntry = {
  title: string;
  username: string;
  password: string;
  category: string;
  notes?: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  _id: string;
};

const categories = [
  { label: "All", icon: Sun },
  { label: "Passkeys", icon: KeyRound },
  { label: "Codes", icon: KeyRound },
  { label: "Wi-Fi", icon: Wifi },
  { label: "Security", icon: AlertCircle },
  { label: "Deleted", icon: Trash2 },
  { label: "Credit Card", icon: CreditCard },
];

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PasswordEntry | null>(null);
  const [items, setItems] = useState<PasswordEntry[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<PasswordEntry | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      const res = await axios.get("/api/passwords/get");
      setItems(res.data);
    } catch (err) {
      console.error("Failed to fetch passwords:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this password?")) return;
    try {
      await axios.delete(`/api/passwords/delete/${id}`);
      fetchPasswords();
      setSelectedItem(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };
  

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Password copied to clipboard!");
    } catch {
      alert("Failed to copy password.");
    }
  };

  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.username.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const openAddModal = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: PasswordEntry) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
      {/* Sidebar */}
      <div className="w-64 p-4 border-r border-zinc-700 space-y-4 bg-zinc-900">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        {categories.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition hover:bg-zinc-700 ${
              selectedCategory === label ? "bg-zinc-800" : ""
            }`}
            onClick={() => {
              setSelectedCategory(label);
              setSelectedItem(null);
            }}
          >
            <Icon size={18} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Item List */}
      <div className="w-80 border-r border-zinc-700 p-4 bg-zinc-800">
        <input
          type="text"
          placeholder="Search passwords..."
          className="w-full p-2 mb-4 rounded bg-zinc-700 placeholder-zinc-400 text-white outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="space-y-2">
          {filteredItems.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center p-2 rounded cursor-pointer hover:bg-zinc-700 group"
            >
              <div onClick={() => setSelectedItem(item)} className="flex-1">
                <div className="font-medium text-white">{item.title}</div>
                <div className="text-sm text-zinc-400">{item.username}</div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => openEditModal(item)}
                  className="text-blue-400 hover:text-blue-600"
                  title="Edit"
                >
                  ✏️
                </button> 
                <button
                  onClick={() => handleCopy(item.password)}
                  className="text-green-400 hover:text-green-600"
                  title="Copy Password"
                >
                  📋
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-400 hover:text-red-600"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Details Panel */}
      <div className="flex-1 p-6 bg-zinc-900 flex flex-col overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            {selectedItem ? selectedItem.title : "Welcome to SecureVault"}
          </h1>
          <button
            onClick={openAddModal}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition shadow"
          >
            + Add Password
          </button>
        </div>

        {selectedItem ? (
          <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg max-w-3xl w-full mx-auto space-y-6 transition-all relative">
            {/* Top Right Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => openEditModal(selectedItem)}
                className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded shadow text-white transition"
                title="Edit this password"
              >
                ✏️ Update
              </button>
              <button
                onClick={() => handleDelete(selectedItem._id)}
                className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded shadow text-white transition"
                title="Delete this password"
              >
                🗑️ Delete
              </button>
            </div>

            {/* Header */}
            <div className="flex items-center gap-4">
              <KeyRound size={30} className="text-blue-400" />
              <div>
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                  <a
                    href={`https://${selectedItem.title}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded shadow transition"
                      title={`Visit ${selectedItem.title}`}
                    >
                      🌐 Visit Site
                    </button>
                  </a>
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  Secure entry under category{" "}
                  <span className="font-medium text-white">
                    {selectedItem.category}
                  </span>
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-zinc-300">
              <div className="flex flex-col">
                <span className="text-zinc-500">👤 Username</span>
                <span className="mt-1 text-white font-medium">
                  {selectedItem.username}
                </span>
              </div>

              <div className="flex flex-col relative">
                <span className="text-zinc-500">🔑 Password</span>
                <div className="flex items-center mt-1 bg-zinc-700 rounded p-2">
                  <span className="font-mono text-white select-none">
                    {showPassword ? selectedItem.password : "•".repeat(12)}
                  </span>
                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-blue-400 hover:text-blue-600 transition text-sm"
                      title="Toggle visibility"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                    <button
                      onClick={() => handleCopy(selectedItem.password)}
                      className="text-green-400 hover:text-green-600 transition text-sm"
                      title="Copy password"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:col-span-2">
                <span className="text-zinc-500">📂 Category</span>
                <span className="mt-1 text-white">{selectedItem.category}</span>
              </div>

              {selectedItem.notes && (
                <div className="flex flex-col sm:col-span-2">
                  <span className="text-zinc-500">📝 Notes</span>
                  <p className="mt-1 text-zinc-300">{selectedItem.notes}</p>
                </div>
              )}
            </div>

            {/* Security Tips */}
            <div className="bg-zinc-700 p-4 rounded-xl text-zinc-200 mt-6 space-y-2">
              <h3 className="text-lg font-semibold text-white">
                🛡️ Security Tips
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  🗓️ <strong>Update regularly:</strong> every 30 days.
                </li>
                <li>
                  🙅‍♂️ <strong>Don’t share:</strong> use trusted apps only.
                </li>
                <li>
                  🔢 <strong>Use strong passwords:</strong> symbols + numbers.
                </li>
                <li>
                  🧠 <strong>Stay unique:</strong> no duplicates across sites.
                </li>
                <li>
                  🛡️ <strong>Use 2FA:</strong> whenever possible.
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-700 pt-4 text-sm text-zinc-400 space-y-2">
              <p>
                🔒 <strong>Encrypted:</strong> Only you can see this.
              </p>
              <p>
                💡 <strong>Pro Tip:</strong> Never reuse credentials.
              </p>
              <p>
                ✨ <strong>Tip:</strong> Use notes for hints or backup codes.
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-zinc-500 animate-pulse">
            <KeyRound size={50} className="mb-4" />
            <p className="text-lg">Select a password to see details</p>
            <p className="text-sm text-center max-w-sm mt-2">
              Your passwords are stored securely and only visible to you. Use
              the add button to securely store new credentials.
            </p>
          </div>
        )}
        {isModalOpen && (
          <PasswordModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            refreshPasswords={fetchPasswords}
            initialData={editData as PasswordEntry}
          />
        )}
      </div>
    </div>
  );
}
