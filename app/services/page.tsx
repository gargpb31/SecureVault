"use client";
import React from "react";

const features = [
  {
    title: "🔐 Store All Passwords",
    description:
      "Save your credentials securely — website logins, emails, and app accounts — all in one encrypted place.",
  },
  {
    title: "📶 Save Wi-Fi Details",
    description:
      "Easily store and retrieve Wi-Fi usernames and passwords across devices.",
  },
  {
    title: "✏️ Edit & Delete Anytime",
    description:
      "Modify or remove saved entries with ease and complete control.",
  },
  {
    title: "📋 One-Click Copy",
    description:
      "Quickly copy usernames or passwords to clipboard without revealing sensitive data.",
  },
  {
    title: "🎲 Random Password Generator",
    description:
      "Generate strong and unpredictable passwords with a single click — secure and customizable.",
  },
  {
    title: "🗂️ Category-Based Storage",
    description:
      "Organize your data into categories like Wi-Fi, Credit Card, Codes, etc., for better management.",
  },
  {
    title: "🛡️ AES-256 Encryption",
    description:
      "All your data is encrypted with AES-256 military-grade protection and stored securely in the cloud.",
  },
  {
    title: "⚡ Lightning Fast",
    description:
      "Clean dashboard with <200ms latency for blazing-fast interaction and user experience.",
  },
];

const ServicesPage = () => {
  const themeAccent = "#9333ea";

  return (
    <div
      className="min-h-screen px-6 py-16"
      style={{
        background: "#120024",
        color: "#EDE9FE",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        className="text-4xl font-bold text-center mb-12"
        style={{ color: themeAccent }}
      >
        🚀 Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-xl border shadow-md hover:shadow-lg transition"
            style={{
              backgroundColor: "#1a0f2b",
              borderColor: themeAccent,
              boxShadow: `0 0 10px ${themeAccent}33`,
            }}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: themeAccent }}
            >
              {feature.title}
            </h2>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
