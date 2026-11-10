"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
            <Briefcase size={18} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              Where I&apos;ve contributed in production
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <SpotlightCard key={idx} className="space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/60 pb-3">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-xs font-normal text-blue-400 bg-blue-950/70 border border-blue-900/60 px-2 py-0.5 rounded-full">
                      Internship
                    </span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400 mt-1">
                    <span className="flex items-center gap-1.5 font-medium text-zinc-200">
                      <Building2 size={14} className="text-blue-400" />
                      {exp.company}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1 text-xs text-zinc-400">
                      <MapPin size={12} className="text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-zinc-300">
                  <Calendar size={12} className="text-blue-400" />
                  {exp.period}
                </div>
              </div>

              {/* Natural Story Intro */}
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <span className="text-blue-400 mt-1 flex-shrink-0">
                      <ChevronRight size={14} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-500 mr-2">Tools:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
