"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();

  const themeAccent = "#9333ea"; // Purple theme color

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4rem",
        backgroundColor: "#1a0f2b",
        color: "#e0d6f6",
        padding: "0 3rem",
        boxShadow: "0 2px 12px rgba(147, 51, 234, 0.2)",
        fontFamily: "'Poppins', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left: Logo + Nav Items */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            marginRight: "4rem",
            fontWeight: "bold",
            fontSize: "1.3rem",
            color: themeAccent,
          }}
        >
          🔐 SecureVault
        </div>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["Home", "About", "Services"].map((item) => (
            <li
              key={item}
              style={{
                cursor: "pointer",
                fontWeight: 500,
                color: "#d1c4e9",
                transition: "transform 0.3s, color 0.3s",
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = themeAccent;
                target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = "#d1c4e9";
                target.style.transform = "scale(1)";
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Theme Toggle + Auth */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Theme Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              style={{
                borderColor: themeAccent,
                color: themeAccent,
              }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              ☀️ Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              🌙 Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Auth Buttons */}
        <SignedOut>
          <SignInButton mode="modal">
            <Button
              style={{
                backgroundColor: themeAccent,
                color: "white",
                border: "none",
              }}
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
