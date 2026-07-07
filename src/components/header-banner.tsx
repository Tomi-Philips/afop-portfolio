"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="relative w-full py-2 md:py-1.5 min-h-10 text-center striped-banner border-b border-zinc-200 flex items-center justify-center">
      <div className="relative z-10 flex items-center justify-center gap-x-2 gap-y-1 text-[11px] md:text-xs font-medium px-4 flex-wrap leading-tight">
        <span className="text-gray-700">
          I'm a Full-Stack Web Developer passionate about building modern web applications that solve real-world problems.
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-0.5 text-blue-900 hover:text-black-800 transition-colors underline decoration-1 underline-offset-2 font-semibold ml-1 shrink-0"
        >
          Get In Touch <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}