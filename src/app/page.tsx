"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeRole, setActiveRole] = useState<"sde" | "ml">("sde");

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 bg-grid-pattern selection:bg-blue-600/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar activeRole={activeRole} setActiveRole={setActiveRole} />

      {/* Main Content Area */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <Hero activeRole={activeRole} setActiveRole={setActiveRole} />

        {/* Work Experience */}
        <ExperienceSection />

        {/* Featured Projects with Dynamic Role Priority */}
        <ProjectsSection activeRole={activeRole} />

        {/* Technical Skills Bento Grid */}
        <SkillsSection />

        {/* Achievements & Extracurriculars */}
        <AchievementsSection />

        {/* Direct Contact Banner */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
