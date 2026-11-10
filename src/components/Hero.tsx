"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Check, Copy, Download, MapPin, GraduationCap, TrendingUp, Users, Cpu, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import LiveClock from "@/components/LiveClock";
import InteractiveTerminal from "@/components/InteractiveTerminal";
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
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none radial-glow -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Badges Row: Live Clock + Status Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-inner hover:border-zinc-700 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-zinc-300 font-medium">
              {personal.statusBadge}
            </span>
          </div>
          <LiveClock />
        </div>

        {/* Hero Grid: Left Content + Right Photo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & Human Bio */}
          <div className="md:col-span-8 space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Hey, I&apos;m {personal.name}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
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
                Class of 2027
              </span>
            </div>

            {/* Humanized bio paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-1">
              {activeRole === "sde" ? (
                <>
                  I&apos;m a final-year undergrad at <span className="text-white font-medium">IIT Guwahati</span> who builds systems that run fast and don&apos;t crash under load. Most of my work centers around <span className="text-blue-400 font-medium">C++</span>, <span className="text-white font-medium">low-latency stream algorithms</span>, and <span className="text-white font-medium">distributed Web3 protocols</span>. Last summer, I led a 6-engineer team shipping synthetic data pipelines for enterprise clients at Genuity IO.
                </>
              ) : (
                <>
                  I&apos;m a final-year undergrad at <span className="text-white font-medium">IIT Guwahati</span> focused on practical AI. I build <span className="text-blue-400 font-medium">Deep Reinforcement Learning agents</span> for financial time-series, evaluate generative models using <span className="text-white font-medium">LLM-as-a-Judge</span>, and train computer vision networks (U-Net++). Last summer, I led synthetic generative benchmarking across 20+ models at Genuity IO.
                </>
              )}
            </p>

            {/* Current Focus Note */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
              <span className="text-emerald-400">⚡</span>
              <span><strong className="text-zinc-300">Currently:</strong> {personal.currently}</span>
            </div>
          </div>

          {/* Right Column: Bulging 3D Photo Frame */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative group cursor-pointer">
              {/* Outer glowing ambient ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/40 via-blue-500/30 to-indigo-600/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 group-hover:scale-110 transition duration-500" />
              
              {/* Main Photo Card with 3D Bulge & Lift */}
              <div className="relative w-48 h-56 sm:w-52 sm:h-60 rounded-2xl bg-gradient-to-b from-zinc-800/80 to-zinc-950 p-2 border border-zinc-700/80 shadow-2xl overflow-hidden group-hover:border-blue-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)] transition-all duration-300 ease-out">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <Image
                    src="/srijan.jpg"
                    alt="Srijan Tiwari - IIT Guwahati"
                    fill
                    sizes="(max-width: 768px) 192px, 208px"
                    priority
                    className="object-cover object-top filter contrast-105 brightness-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle dark bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-zinc-300 shadow-lg group-hover:border-blue-500/50 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    IIT Guwahati
                  </span>
                  <span className="text-blue-400 font-semibold">B.Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats Row with Hover Bulge */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/60 hover:bg-zinc-900/80 hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 cursor-default">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1.5">
              <span>100K+</span>
              <Cpu size={14} className="text-blue-400" />
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Workload records screened in &lt;65s within 120MB RAM
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/60 hover:bg-zinc-900/80 hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 cursor-default">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1.5">
              <span>6 Devs</span>
              <Users size={14} className="text-blue-400" />
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Led engineering team at Genuity IO for L&T
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/60 hover:bg-zinc-900/80 hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 cursor-default">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1.5">
              <span>20+</span>
              <TrendingUp size={14} className="text-blue-400" />
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Generative models benchmarked across 11 datasets
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/60 hover:bg-zinc-900/80 hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 cursor-default">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1.5">
              <span>Top 10%</span>
              <ShieldCheck size={14} className="text-blue-400" />
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Nationwide finish in Summer Analytics competition
            </p>
          </div>
        </div>

        {/* Role Toggle Selector in Hero */}
        <div className="mt-8 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm max-w-lg hover:border-zinc-700 transition-colors">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center justify-between">
            <span>Tailor portfolio view:</span>
            <span className="text-blue-400 font-semibold">
              {activeRole === "sde" ? "Showing Systems & SDE Work" : "Showing ML & AI Work"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveRole("sde")}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeRole === "sde"
                  ? "bg-blue-600 text-white shadow-md border border-blue-500/50 scale-[1.02]"
                  : "bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 hover:scale-[1.02] border border-transparent"
              }`}
            >
              <span>💻 Software Engineer / C++</span>
            </button>
            <button
              onClick={() => setActiveRole("ml")}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeRole === "ml"
                  ? "bg-blue-600 text-white shadow-md border border-blue-500/50 scale-[1.02]"
                  : "bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 hover:scale-[1.02] border border-transparent"
              }`}
            >
              <span>🧠 ML & Data Science</span>
            </button>
          </div>
        </div>

        {/* Action Buttons & Links with hover bulge */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* Copy Email Pill */}
          <button
            onClick={copyEmail}
            className="group relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-blue-500/60 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied tiwarisrijan612@gmail.com!</span>
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 hover:scale-105 shadow-md shadow-blue-900/30 active:scale-95 transition-all"
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
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:scale-110 active:scale-95 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:scale-110 active:scale-95 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        {/* Interactive Developer Terminal */}
        <InteractiveTerminal />
      </div>
    </section>
  );
}
