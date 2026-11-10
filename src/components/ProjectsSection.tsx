"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Play, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ProjectsSectionProps {
  activeRole: "sde" | "ml";
}

export default function ProjectsSection({ activeRole }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<"all" | "sde" | "ml" | "web3" | "systems">("all");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const { projects } = PORTFOLIO_DATA;

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category.includes(filter);
  });

  // Sort projects according to active role priority
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (activeRole === "sde") {
      return a.priorityOrder.sde - b.priorityOrder.sde;
    } else {
      return a.priorityOrder.ml - b.priorityOrder.ml;
    }
  });

  return (
    <section id="projects" className="py-16 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
              <FolderGit2 size={18} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                Ranked for: <span className="text-blue-400 font-semibold">{activeRole === "sde" ? "Software Engineering & C++" : "Machine Learning & AI"}</span>
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg transition-all ${
                filter === "all"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter("sde")}
              className={`px-3 py-1 rounded-lg transition-all ${
                filter === "sde"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              SDE & Systems
            </button>
            <button
              onClick={() => setFilter("ml")}
              className={`px-3 py-1 rounded-lg transition-all ${
                filter === "ml"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              ML & AI
            </button>
            <button
              onClick={() => setFilter("web3")}
              className={`px-3 py-1 rounded-lg transition-all ${
                filter === "web3"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Web3
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6">
          {sortedProjects.map((project) => {
            const isExpanded = expandedCards[project.id];

            return (
              <div
                key={project.id}
                className="group relative p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
              >
                {/* Header row: Title + Actions */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/40">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start flex-shrink-0">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Bullets */}
                <div className="space-y-2 mb-5">
                  {(isExpanded ? project.bullets : project.bullets.slice(0, 2)).map((bullet, bIdx) => (
                    <div key={bIdx} className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                  {project.bullets.length > 2 && (
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 mt-1 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp size={12} />
                        </>
                      ) : (
                        <>
                          <span>Read full implementation ({project.bullets.length - 2} more points)</span>
                          <ChevronDown size={12} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Tags and Action Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800/60">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 max-w-lg">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 transition-all active:scale-95"
                      >
                        <GithubIcon size={14} />
                        <span>Source</span>
                      </a>
                    )}

                    {project.githubUrl2 && (
                      <a
                        href={project.githubUrl2}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 transition-all active:scale-95"
                        title={project.github2Label || "Second Repository"}
                      >
                        <GithubIcon size={14} />
                        <span>{project.github2Label || "Repo 2"}</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600/90 text-white hover:bg-blue-500 border border-blue-500/50 shadow-sm shadow-blue-900/30 transition-all active:scale-95"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 transition-all active:scale-95"
                      >
                        <Play size={14} />
                        <span>Watch Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
