"use client";

import React, { useState, useEffect } from "react";
import { X, Eye, EyeOff, Shuffle } from "lucide-react";
import axios from "axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  refreshPasswords: () => Promise<void>;
  initialData?: any;
}

const PasswordModal: React.FC<Props> = ({
  isOpen,
  onClose,
  refreshPasswords,
  initialData,
}) => {
  const [form, setForm] = useState({
    title: "",
    username: "",
    password: "",
    category: "Codes",
    cardNumber: "",
    expiry: "",
    cvv: "",
    notes: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCVV, setShowCVV] = useState(false);

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 12; i++)
      pass += charset[Math.floor(Math.random() * charset.length)];
    setForm((prev) => ({ ...prev, password: pass }));
  };



  const handleSubmit = async () => {
    try {
      if (initialData?._id) {
        await axios.put(`/api/passwords/update/${initialData._id}`, {
          ...form,
        });
      } else {
        await axios.post("/api/passwords/add", form);
      }
      await refreshPasswords();
      onClose();
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
      <div className="w-full max-w-lg bg-zinc-900 text-white rounded-2xl shadow-2xl p-8 border border-zinc-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {initialData ? "Edit Entry" : "Add New Password"}
          </h2>
          <X className="cursor-pointer hover:text-red-500" onClick={onClose} />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Facebook, SBI"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="Codes">Codes</option>
              <option value="Passkeys">Passkeys</option>
              <option value="Wi-Fi">Wi-Fi</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Security">Security</option>
            </select>
          </div>

          {form.category === "Credit Card" ? (
            <>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Card Number
                </label>
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-zinc-400 mb-1">
                    Expiry
                  </label>
                  <input
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="w-1/2 relative">
                  <label className="block text-sm text-zinc-400 mb-1">
                    CVV
                  </label>
                  <input
                    name="cvv"
                    type={showCVV ? "text" : "password"}
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="•••"
                    className="w-full p-2 pr-10 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <div
                    className="absolute right-3 top-9 cursor-pointer text-zinc-400 hover:text-zinc-200"
                    onClick={() => setShowCVV(!showCVV)}
                  >
                    {showCVV ? <EyeOff size={18} /> : <Eye size={18} />}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Username
                </label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="relative">
                <label className="block text-sm text-zinc-400 mb-1">
                  Password
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-2 pr-20 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <div
                  className="absolute right-12 top-9 cursor-pointer text-blue-400 hover:text-blue-600"
                  onClick={generatePassword}
                >
                  <Shuffle size={18} />
                </div>
                <div
                  className="absolute right-4 top-9 cursor-pointer text-zinc-400 hover:text-zinc-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm text-zinc-400 mb-1">Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any additional info..."
              rows={3}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-4 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
          >
            {initialData ? "Update Password" : "Save Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
