"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Download, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  activeRole: "sde" | "ml";
  setActiveRole: (role: "sde" | "ml") => void;
}

export default function Hero({ activeRole, setActiveRole }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const cvHref =
    activeRole === "sde"
      ? "/Srijan_Tiwari_SDE_Cpp.pdf"
      : "/Srijan_Tiwari_ML_DS.pdf";

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none radial-glow -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-6 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] tracking-wide text-zinc-400">
            {personal.statusBadge}
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              {personal.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <GraduationCap size={16} className="text-blue-400" />
              {personal.degree}, {personal.college}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-zinc-500" />
              {personal.location}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-mono text-xs">
              Batch: {personal.batch}
            </span>
          </div>

          {/* Dynamic Bio Paragraph according to active role */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl pt-2">
            {activeRole === "sde" ? (
              <>
                Passionate about <span className="text-zinc-100 font-medium">C++20 systems programming</span>,{" "}
                <span className="text-zinc-100 font-medium">low-latency algorithms</span>, and{" "}
                <span className="text-zinc-100 font-medium">distributed Web3 infrastructures</span>. Built high-throughput data processing engines, custom STL containers, and graph optimization solvers.
              </>
            ) : (
              <>
                Focused on <span className="text-zinc-100 font-medium">Deep Reinforcement Learning</span>,{" "}
                <span className="text-zinc-100 font-medium">Computer Vision (U-Net++)</span>, and{" "}
                <span className="text-zinc-100 font-medium">LLM-as-a-Judge Evaluation</span>. Led synthetic generative modeling across 20+ models and engineered autonomous trading pipelines.
              </>
            )}
          </p>
        </div>

        {/* Role Toggle Selector in Hero */}
        <div className="mt-8 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm max-w-lg">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center justify-between">
            <span>Tailor Portfolio View:</span>
            <span className="text-blue-400 font-semibold">
              Currently: {activeRole === "sde" ? "Systems & SDE" : "ML & Data Science"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveRole("sde")}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeRole === "sde"
                  ? "bg-blue-600/90 text-white shadow-md border border-blue-500/50"
                  : "bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-transparent"
              }`}
            >
              <span>💻 Software Engineer / C++</span>
            </button>
            <button
              onClick={() => setActiveRole("ml")}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeRole === "ml"
                  ? "bg-blue-600/90 text-white shadow-md border border-blue-500/50"
                  : "bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-transparent"
              }`}
            >
              <span>🧠 ML & Data Science</span>
            </button>
          </div>
        </div>

        {/* Action Buttons & Links */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* Copy Email Pill */}
          <button
            onClick={copyEmail}
            className="group relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-700 hover:text-white transition-all active:scale-95"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-300">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Mail size={14} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />
                <span>{personal.email}</span>
                <Copy size={12} className="text-zinc-600 group-hover:text-zinc-400 transition-colors ml-1" />
              </>
            )}
          </button>

          {/* Resume Download Button */}
          <a
            href={cvHref}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 shadow-md shadow-blue-900/30 active:scale-95 transition-all"
          >
            <Download size={14} />
            <span>Download {activeRole === "sde" ? "SDE / C++" : "ML / DS"} CV</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
