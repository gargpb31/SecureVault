"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620118981476-5b8561b2f587?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#1a0f2b",
        color: "#f3f3f3",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(26, 15, 43, 0.85)",
          padding: "3rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#a855f7",
            marginBottom: "1rem",
          }}
        >
          SecureKey Vault
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#d1c4e9",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
          }}
        >
          Store, manage, and autofill your passwords securely from anywhere.
          Your digital life deserves world-class protection — all in one place.
        </p>
        <button
          onClick={handleGetStarted}
          style={{
            background: "linear-gradient(135deg, #7e22ce 0%, #9333ea 100%)",
            color: "white",
            padding: "0.9rem 2.5rem",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(147, 51, 234, 0.5)",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
