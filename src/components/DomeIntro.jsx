import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function DomeIntro() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#000814]">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients that do not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#7f00ff]/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#00ffff]/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{
              color: '#f5f5f5',
              textShadow: '0 0 20px rgba(0,255,255,0.15)',
            }}
          >
            Welcome to NovaEra Hub — the living ecosystem of tomorrow’s innovations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90"
          >
            I’m Nilesh Singh, Founder and Deep‑Tech Visionary, building autonomous systems that think, evolve, and sustain the planet.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {['AI', 'Quantum', 'Sustainability', 'Vision'].map((t) => (
              <span
                key={t}
                className="select-none rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ambient bottom glow line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent opacity-70" />
    </section>
  );
}
