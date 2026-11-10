"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [copiedInstitute, setCopiedInstitute] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const copyToClipboard = (text: string, type: "personal" | "institute") => {
    navigator.clipboard.writeText(text);
    if (type === "personal") {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2000);
    } else {
      setCopiedInstitute(true);
      setTimeout(() => setCopiedInstitute(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950 border border-zinc-800/80 shadow-2xl relative overflow-hidden">
          {/* Subtle blue accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-[11px] font-mono text-blue-400">
                <MessageSquare size={12} />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Want to build something fast together?
              </h2>
              <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
                I&apos;m actively preparing for <strong className="text-white">off-campus SDE and Machine Learning roles</strong> (graduating 2027 from IIT Guwahati). If you have an open position, an interesting problem, or just want to talk tech — drop me an email or a message on LinkedIn.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Primary Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800/80 text-blue-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500">Personal Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs font-medium text-zinc-200 hover:text-white transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, "personal")}
                  className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="Copy email"
                >
                  {copiedPersonal ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Institute Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500">IITG College Email</p>
                    <a
                      href={`mailto:${personal.instituteEmail}`}
                      className="text-xs font-medium text-zinc-200 hover:text-white transition-colors"
                    >
                      {personal.instituteEmail}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.instituteEmail, "institute")}
                  className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="Copy institute email"
                >
                  {copiedInstitute ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500">Phone</p>
                    <a
                      href={`tel:${personal.phone.replace(/-/g, "")}`}
                      className="text-xs font-medium text-zinc-200 hover:text-white transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500">Location</p>
                    <p className="text-xs font-medium text-zinc-200">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={`mailto:${personal.email}?subject=Hi%20Srijan%20-%20Opportunity%20Discussion`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 shadow-md shadow-blue-900/30 transition-all active:scale-95"
              >
                <Send size={14} />
                <span>Send Direct Email</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              >
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
