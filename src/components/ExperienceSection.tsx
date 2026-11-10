"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
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
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
              Engineering & Leadership Roles
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all duration-200"
            >
              {/* Top row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400 mt-1">
                    <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                      <Building2 size={14} className="text-zinc-500" />
                      {exp.company}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin size={12} className="text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-xs font-mono text-zinc-300 self-start sm:self-auto">
                  <Calendar size={12} className="text-blue-400" />
                  {exp.period}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 text-sm text-zinc-300 leading-relaxed mb-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-blue-500 mt-1 flex-shrink-0">
                      <ChevronRight size={14} />
                    </span>
                    <span>
                      {/* Highlight key achievements */}
                      {bullet.includes("Genuity v2.0") ? (
                        <>
                          <strong className="text-white font-semibold">Architected Genuity v2.0</strong>, an enterprise synthetic dataset generation library supporting 5 modalities and 20+ generative models, driving core production integration into the Vulpix platform.
                        </>
                      ) : bullet.includes("cross-functional group of 6") ? (
                        <>
                          <strong className="text-white font-semibold">Led a cross-functional group of 6 developers</strong> across architecture design, code reviews, and Agile sprint delivery; established a benchmarking framework across 20+ models and 11 public benchmarks.
                        </>
                      ) : bullet.includes("L&T Technology Services") ? (
                        <>
                          <strong className="text-white font-semibold">Engineered production backend workflows</strong> for schema profiling, constraint validation, and differential privacy using Python, FastAPI, PostgreSQL, and Docker, scaling to enterprise client deployment for <span className="text-blue-400 font-medium">L&T Technology Services</span>.
                        </>
                      ) : (
                        bullet
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/70 text-zinc-400 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
