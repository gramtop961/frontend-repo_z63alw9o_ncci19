import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SceneManager from './components/SceneManager';
import Footer from './components/Footer';

export default function App() {
  const [scene, setScene] = useState('genesis');

  return (
    <div className="min-h-screen w-full bg-[#000814] text-white">
      {/* Neon-glass navigation bar for scene switching */}
      <Navigation current={scene} onChange={setScene} />

      {/* Scene manager with cinematic transitions */}
      <SceneManager current={scene} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
