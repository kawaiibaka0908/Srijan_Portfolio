"use client";

import React, { useState, useEffect } from "react";
import { Download, Check } from "lucide-react";

interface NavbarProps {
  activeRole: "sde" | "ml";
  setActiveRole: (role: "sde" | "ml") => void;
}

export default function Navbar({ activeRole, setActiveRole }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cvHref =
    activeRole === "sde"
      ? "/Srijan_Tiwari_SDE_Cpp.pdf"
      : "/Srijan_Tiwari_ML_DS.pdf";

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo / Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-zinc-100 font-semibold tracking-tight text-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold text-blue-400 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
            ST
          </span>
          <span className="hidden sm:inline font-medium text-sm text-zinc-300 group-hover:text-white transition-colors">
            Srijan Tiwari
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-zinc-400 font-medium">
          <a
            href="#experience"
            className="hover:text-zinc-100 transition-colors py-1"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-100 transition-colors py-1"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-100 transition-colors py-1"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="hover:text-zinc-100 transition-colors py-1"
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-100 transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Right Controls: Role Switcher & Resume Download */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Role Toggle Pill */}
          <div className="flex items-center p-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs">
            <button
              onClick={() => setActiveRole("sde")}
              className={`px-2.5 py-1 rounded-md font-medium transition-all duration-200 ${
                activeRole === "sde"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="Show SDE & C++ focused projects"
            >
              SDE / C++
            </button>
            <button
              onClick={() => setActiveRole("ml")}
              className={`px-2.5 py-1 rounded-md font-medium transition-all duration-200 ${
                activeRole === "ml"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="Show ML & Data Science focused projects"
            >
              ML / DS
            </button>
          </div>

          {/* Resume Download CTA */}
          <a
            href={cvHref}
            download
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
            title={`Download ${activeRole === "sde" ? "SDE & C++" : "ML & Data Science"} CV`}
          >
            {downloadSuccess ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span className="hidden sm:inline">Downloaded</span>
              </>
            ) : (
              <>
                <Download size={14} />
                <span className="hidden sm:inline">Resume</span>
                <span className="text-[10px] uppercase font-bold text-zinc-500">
                  {activeRole === "sde" ? "SDE" : "ML"}
                </span>
              </>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
