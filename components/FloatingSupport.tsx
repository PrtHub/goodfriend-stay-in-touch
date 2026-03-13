"use client";

import { useState } from "react";
import { SUPPORT_EMAIL } from "@/lib/data";

export function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup panel */}
      <div
        className={`w-[300px] sm:w-[320px] origin-bottom-right rounded-2xl border p-5 shadow-2xl transition-all duration-300 ${
          isOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none relative -z-10 scale-95 translate-y-4 opacity-0"
        }`}
        style={{ backgroundColor: "#1C2D0E", borderColor: "rgba(255,255,255,0.1)" }}
      >
        <h3 className="mb-2 text-lg font-bold text-white">We&apos;re here to help.</h3>
        <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Have a question or is the price a bit too high right now?{" "}
          <strong className="font-semibold text-white">Let&apos;s chat.</strong>
        </p>

        <div className="flex flex-col gap-2">
          {/* X / Twitter */}
          <a
            href="https://x.com/iPritamX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C5D69C" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            DM on X (@iPritamX)
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/good_friend_stay_connected/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            DM on Instagram
          </a>

          {/* Email */}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email Support
          </a>
        </div>
      </div>

      {/* Trigger row */}
      <div className="relative flex items-center justify-end">
        {/* Tooltip bubble */}
        <div
          onClick={() => setIsOpen(true)}
          className={`absolute right-full mr-4 flex cursor-pointer items-center gap-3 whitespace-nowrap rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm font-bold text-black shadow-xl transition-all duration-500 hover:scale-105 ${
            isOpen ? "pointer-events-none translate-x-4 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "#C5D69C" }} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#4A6228" }} />
          </span>
          Got questions? Let&apos;s chat 👋
        </div>

        {/* FAB button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-black shadow-lg transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#C5D69C", boxShadow: "0 0 30px rgba(197,214,156,0.35)" }}
          aria-label="Contact Support"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
