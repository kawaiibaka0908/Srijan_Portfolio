"use client";

import React, { useState } from "react";
import { Terminal, CornerDownLeft, RotateCcw } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-blue-400 font-semibold">Hey! Welcome to my interactive console.</p>
          <p className="text-xs text-zinc-400">
            Click any suggestion below or type a command to explore my work without the corporate fluff.
          </p>
        </div>
      ),
    },
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-zinc-400">Available commands:</p>
            <p><span className="text-blue-400 font-mono">whoami</span> — A honest intro about me and what I do</p>
            <p><span className="text-blue-400 font-mono">stack</span> — Core languages and tools I actually enjoy using</p>
            <p><span className="text-blue-400 font-mono">projects</span> — Summary of recent builds</p>
            <p><span className="text-blue-400 font-mono">contact</span> — Get in touch directly</p>
            <p><span className="text-blue-400 font-mono">clear</span> — Reset terminal screen</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs text-zinc-300 space-y-1">
            <p>
              I&apos;m <span className="text-white font-medium">Srijan Tiwari</span>, final-year B.Tech at IIT Guwahati.
            </p>
            <p className="text-zinc-400">
              I like building fast software: writing C++ with byte-aligned allocators, building streaming search engines that run within tight RAM limits, and training Deep RL agents on financial bars. Outside coding, I directed an award-winning campus short film and represented IITG at ETHGlobal New Delhi.
            </p>
          </div>
        );
        break;

      case "stack":
        output = (
          <div className="text-xs space-y-1">
            <p className="text-zinc-400">Primary Languages:</p>
            <p className="text-blue-400 font-mono">C++, Python, Solidity, TypeScript, SQL</p>
            <p className="text-zinc-400 pt-1">Core Interests:</p>
            <p className="text-emerald-400 font-mono">High-throughput stream processing, Low-latency systems, Deep RL, Zero-Knowledge circuits</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs space-y-1.5 text-zinc-300">
            <p><span className="text-blue-400 font-semibold">1. Barely Tokenized:</span> P2P microgrid power trading with ZoKrates ZK-SNARKs & Solidity.</p>
            <p><span className="text-blue-400 font-semibold">2. C++ Image Engine & STL:</span> Bitwise Huffman codec & custom STL containers from scratch.</p>
            <p><span className="text-blue-400 font-semibold">3. Candidate Search Engine:</span> Screened 100k profiles in &lt;65s using bounded min-heap in 120MB RAM.</p>
            <p><span className="text-blue-400 font-semibold">4. Promo Finder:</span> Screenplay clip extraction evaluated by Gemma-26B LLM-as-a-Judge.</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs space-y-1 text-zinc-300">
            <p>📧 Email: <a href="mailto:tiwarisrijan612@gmail.com" className="text-blue-400 underline">tiwarisrijan612@gmail.com</a></p>
            <p>📞 Phone: <span className="text-zinc-200">+91-9956302266</span></p>
            <p>💼 LinkedIn: <a href="https://linkedin.com/in/srijan-tiwari-215a3a286" target="_blank" rel="noreferrer" className="text-blue-400 underline">linkedin.com/in/srijan-tiwari</a></p>
            <p>🐙 GitHub: <a href="https://github.com/kawaiibaka0908" target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/kawaiibaka0908</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            Command not found: &ldquo;{trimmed}&rdquo;. Try typing <span className="text-blue-400 font-mono underline cursor-pointer" onClick={() => handleCommand("help")}>help</span>.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div className="mt-8 rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-xl overflow-hidden backdrop-blur-md">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 ml-2 flex items-center gap-1.5">
            <Terminal size={12} className="text-blue-400" />
            srijan@iitg:~$ interactive-console
          </span>
        </div>

        <div className="flex items-center gap-2">
          {history.length > 0 && (
            <button
              onClick={() => setHistory([])}
              className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors"
              title="Clear screen"
            >
              <RotateCcw size={10} />
              <span>clear</span>
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[11px] font-mono text-blue-400 hover:text-blue-300 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/60 transition-colors"
          >
            {isOpen ? "Minimize" : "Open Console"}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      {isOpen ? (
        <div className="p-4 font-mono text-xs space-y-3 max-h-72 overflow-y-auto">
          {/* Preset Command Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-zinc-900">
            <span className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider mr-1">Quick run:</span>
            {["whoami", "stack", "projects", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-blue-400 border border-zinc-800 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Render Output Stream */}
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-zinc-300">{item.command}</span>
              </div>
              <div className="pl-4 py-1">{item.output}</div>
            </div>
          ))}

          {/* Command Prompt Input */}
          <div className="flex items-center gap-2 pt-1 text-zinc-300">
            <span className="text-emerald-400">➜</span>
            <span className="text-blue-400">~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or click a command..."
              className="flex-1 bg-transparent text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none font-mono"
            />
            <button
              onClick={() => handleCommand(input)}
              className="text-zinc-500 hover:text-blue-400 transition-colors"
              title="Submit command"
            >
              <CornerDownLeft size={13} />
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 cursor-pointer flex items-center justify-between hover:bg-zinc-900/40 transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 animate-pulse">●</span>
            Click to open interactive developer console (quick bio, skills, and projects)
          </span>
          <span className="text-[11px] text-blue-400 underline">Press to open</span>
        </div>
      )}
    </div>
  );
}
