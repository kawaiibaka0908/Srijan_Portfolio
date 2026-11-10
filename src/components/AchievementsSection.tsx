"use client";

import React from "react";
import { Trophy, ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AchievementsSection() {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-16 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
            <Trophy size={18} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Achievements & Beyond Code
            </h2>
            <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              Competitions, hackathons & student leadership
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="flex flex-col justify-between p-5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-zinc-800 text-blue-400 border border-zinc-700/60">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-zinc-100 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.linkUrl && (
                <div className="pt-2 border-t border-zinc-800/50">
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>{item.linkText || "View Verification"}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
