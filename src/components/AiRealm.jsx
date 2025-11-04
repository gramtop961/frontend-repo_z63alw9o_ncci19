import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Novynex OS',
    text:
      'An autonomous operating system that builds and runs entire companies — no code, no team, pure AI orchestration.',
    accent: '#00ffff',
  },
  {
    title: 'Autonomous AI Minds',
    text:
      'Agents that think, remember, and adapt — they learn like humans through examples and feedback.',
    accent: '#7f00ff',
  },
];

export default function AiRealm() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#000814] py-20">
      {/* Subtle animated matrix background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,255,255,0.15), transparent 40%),
                             radial-gradient(circle at 80% 30%, rgba(127,0,255,0.15), transparent 45%),
                             radial-gradient(circle at 40% 80%, rgba(0,255,255,0.12), transparent 45%)`
        }} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: 'perspective(600px) rotateX(45deg) translateY(-10%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          The Autonomous Network
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Floating network of glowing neural nodes connected by energy lines.
        </p>

        {/* Project cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20, rotateX: -8, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div
                className="absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: `radial-gradient(600px circle at 0 0, ${p.accent}33, transparent 40%)` }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: p.accent }}
                  />
                  {p.title}
                </h3>
                <p className="mt-3 text-white/80 leading-relaxed">{p.text}</p>
                <div className="mt-5 flex items-center gap-3 text-xs">
                  {['Neural', 'Autonomy', 'Systems'].map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
