import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000814] py-10 text-center text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm">© {new Date().getFullYear()} NovaEra Hub — Designed by Nilesh Singh</p>
        <div className="mt-4 flex items-center justify-center gap-3 text-xs">
          <span className="rounded-full border border-white/10 px-3 py-1">Cinematic 3D</span>
          <span className="rounded-full border border-white/10 px-3 py-1">AI Realms</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Sustainability</span>
        </div>
      </div>
    </footer>
  );
}
