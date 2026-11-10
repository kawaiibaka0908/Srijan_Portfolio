"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";

export default function LiveClock() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTimeStr(formatted);
      } catch {
        setTimeStr("");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) return null;

  return (
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-400">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>
      <span className="flex items-center gap-1 text-zinc-300">
        <MapPin size={11} className="text-blue-400" />
        Guwahati, IN
      </span>
      <span className="text-zinc-600">•</span>
      <span className="flex items-center gap-1 text-zinc-400">
        <Clock size={11} className="text-zinc-500" />
        {timeStr} IST
      </span>
    </div>
  );
}
