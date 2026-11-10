"use client";

import React from "react";
import { Cpu, Code2, Brain, Cloud, BookOpen, Layers } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
            <Cpu size={18} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Technical Skills & Tooling
            </h2>
            <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              Languages, systems & core toolchains
            </p>
          </div>
        </div>

        {/* Bento Grid with 3D Bulge & Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Programming Languages */}
          <SpotlightCard className="p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-200">
              <Code2 size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-blue-400 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 2: C++ & Core Systems */}
          <SpotlightCard className="p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-200">
              <Layers size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">C++ & Low-Level Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.systemsAndCpp.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-blue-400 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 3: Machine Learning & Deep Learning */}
          <SpotlightCard className="p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-200">
              <Brain size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">Machine Learning & Deep Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.machineLearning.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-blue-400 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 4: Generative AI & NLP */}
          <SpotlightCard className="p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-200">
              <Cpu size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">Generative AI & LLM Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.genAIAndNLP.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-blue-400 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 5: Backend, Web & Cloud */}
          <SpotlightCard className="p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-200">
              <Cloud size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">Backend, Web & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backendAndCloud.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-blue-400 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 6: Relevant Coursework */}
          <SpotlightCard className="p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-200">
              <BookOpen size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">IIT Guwahati Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.coursework.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 hover:border-blue-400 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
