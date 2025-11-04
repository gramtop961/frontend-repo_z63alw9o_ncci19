import React from 'react';
import Spline from '@splinetool/react-spline';
import { Leaf, Zap, Building2 } from 'lucide-react';
import ParallaxCard from './ParallaxCard';

export default function SustainabilityRealm() {
  return (
    <section className="w-full bg-[#000814] text-white">
      {/* Hero with Spline cover background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#000814]" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs tracking-widest text-[#00ffff]/80">NOVAERA SUSTAINABILITY</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
            Glowing Cityscape & Energy Flows
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Visualizing a climate-positive future — where microgrids hum, transit glides, and every lumen is accountable.
          </p>
        </div>
      </div>

      {/* Energy systems cards with parallax */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ParallaxCard title="Net‑Zero Grid" subtitle="Dynamic microgrids" icon={Zap}>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>Bidirectional energy flows with real-time balancing</li>
              <li>AI peak-shaving lowers carbon intensity</li>
              <li>Battery clusters form a virtual power plant</li>
            </ul>
          </ParallaxCard>

          <ParallaxCard title="Futuristic City" subtitle="Neon skyline" icon={Building2}>
            <p className="text-sm">
              Parametric façades harvest daylight; kinetic bridges channel human motion into grid credits.
            </p>
            <div className="mt-4 flex gap-2 text-xs text-white/60">
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 ring-1 ring-emerald-400/30">LEED‑Platinum</span>
              <span className="rounded-full bg-cyan-500/15 px-2 py-1 ring-1 ring-cyan-400/30">Smart IoT</span>
              <span className="rounded-full bg-violet-500/15 px-2 py-1 ring-1 ring-violet-400/30">Digital Twin</span>
            </div>
          </ParallaxCard>

          <ParallaxCard title="Clean Mobility" subtitle="Autonomous transit" icon={Leaf}>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>Hydrogen hubs + inductive lanes</li>
              <li>Edge-compute traffic orchestration</li>
              <li>Zero‑wait multimodal transfers</li>
            </ul>
          </ParallaxCard>
        </div>

        {/* Energy flow bars */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: 'Solar', color: 'from-yellow-300/40 to-amber-500/20', pct: 78 },
            { label: 'Wind', color: 'from-cyan-300/40 to-sky-500/20', pct: 64 },
            { label: 'Storage', color: 'from-emerald-300/40 to-green-500/20', pct: 52 },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#0a0f1f]/60 p-5">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white/70">{s.label} Output</span>
                <span className="text-[#00ffff]">{s.pct}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
