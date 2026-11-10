"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-zinc-900 bg-[#09090b]/80 text-xs text-zinc-500 font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>© {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.</p>
          <p className="text-[11px] text-zinc-600 mt-1">
            {personal.college} • B.Tech {personal.batch}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-zinc-200 transition-colors"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
