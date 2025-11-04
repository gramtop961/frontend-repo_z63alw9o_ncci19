import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SceneManager from './components/SceneManager';

export default function App() {
  const [scene, setScene] = useState('genesis');

  return (
    <div className="min-h-screen w-full bg-[#000814] text-white">
      {/* Neon-glass navigation bar for scene switching */}
      <Navigation current={scene} onChange={setScene} />

      {/* Scene manager with cinematic transitions */}
      <SceneManager current={scene} />

      {/* Below scenes, keep a minimal footer-like section to ground the page */}
      <footer className="border-t border-white/10 bg-[#000814] py-10 text-center">
        <p className="text-white/60">© {new Date().getFullYear()} NovaEra Hub — Designed by Nilesh Singh</p>
      </footer>
    </div>
  );
}
