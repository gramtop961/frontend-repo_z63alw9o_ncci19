import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxCard from './ParallaxCard';

function NanoSwarm() {
  const dots = new Array(24).fill(0);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute block h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(0,255,255,0.6)]"
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 600, scale: 0.7 + Math.random() * 0.8, opacity: 0.6 }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * 600],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,255,0.6))' }}
        />
      ))}
    </div>
  );
}

export default function FutureVision() {
  return (
    <section className="w-full bg-[#000814] text-white">
      {/* Hero with Spline cover background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#000814]" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs tracking-widest text-[#7f00ff]/80">NOVAERA FUTURE VISION</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">Nanobot Motion & Terraforming</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Swarm intelligence meets planetary engineering. Micro‑agents scout, map, and shape tomorrow.
          </p>
        </div>
        <NanoSwarm />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ParallaxCard title="Swarm Intelligence" subtitle="Coordinated micro‑agents" icon={Sparkles}>
            <p className="text-sm">Emergent behaviors for mapping unknown terrain and adaptive repair in harsh conditions.</p>
          </ParallaxCard>
          <ParallaxCard title="Terraforming Cues" subtitle="Long‑horizon playbook" icon={Globe}>
            <p className="text-sm">Regolith binding, atmosphere seeding, and cryo‑pipeline heat exchange strategies.</p>
          </ParallaxCard>
          <ParallaxCard title="Launch Window" subtitle="Mission profile" icon={Rocket}>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>Autonomous assembly</li>
              <li>In‑situ resource utilization</li>
              <li>Self‑healing lattices</li>
            </ul>
          </ParallaxCard>
        </div>
      </div>
    </section>
  );
}
