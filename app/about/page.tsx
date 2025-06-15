"use client";
import Image from "next/image";
import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const AboutPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background: "linear-gradient(to bottom, #100419, #1e0d33)", // Deep gradient
        color: "#EDE9FE", // Soft violet text
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="max-w-3xl w-full bg-[#1a0f2b] rounded-2xl shadow-lg p-8 border border-purple-700">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Profile Picture */}
          <Image
            src="/pic.jpeg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-purple-500 shadow-md"
          />

          <h1 className="text-3xl font-bold text-purple-400">About Me</h1>

          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I&apos;m <strong className="text-purple-300">Sunny Garg</strong>, a
            passionate <strong>competitive programmer</strong> and full-stack
            developer currently pursuing my B.Tech at{" "}
            <strong>IIIT Allahabad</strong>. I thrive on solving complex coding
            challenges and building intuitive user experiences. With over{" "}
            <strong>1000+ DSA problems</strong> solved, I combine logic with
            design to build impactful applications.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            My journey includes web app development, algorithm optimization, and
            meaningful collaborations on projects like{" "}
            <strong>SecureVault</strong> and <strong>CampusTrade</strong>.
          </p>

          {/* Contact Info */}
          <div className="mt-6 text-left w-full space-y-2">
            <h3 className="text-lg font-semibold text-purple-300">
              Contact Me
            </h3>
            <p className="flex items-center gap-2 text-gray-300">
              <Mail size={18} />{" "}
              <a href="mailto:sunnygarg887@gmail.com">sunnygarg887@gmail.com</a>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={18} />{" "}
              <a href="tel:+916280751806">+91 62807 51806</a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/gargpb31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:underline"
            >
              <Github /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/gargpb31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:underline"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-block px-5 py-2 border border-purple-500 rounded-lg text-purple-300 hover:bg-purple-600 hover:text-white transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
