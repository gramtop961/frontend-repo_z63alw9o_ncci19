import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

export default function VisionaryChamber() {
  return (
    <section className="relative w-full bg-[#000814] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7f00ff]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          The Visionary Chamber
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Calm environment with a digital reflection pool. Your profile, skills, and ways to connect.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Profile / About */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white">About You</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Nilesh Singh — Deep‑Tech Visionary & Founder of NovaEra Hub. Building autonomous systems and sustainable futures through AI, quantum intelligence, and innovation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {['Gen AI', 'AI Agents', 'Prompt Engineering', 'Quantum Logic', 'System Design'].map((s) => (
                <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-white/80">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-[#00ffff]/20 px-4 py-2 text-[#00ffff] hover:bg-[#00ffff]/30"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="mailto:hello@novaerahub.ai"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/90 hover:bg-white/10"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/90 hover:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/90 hover:bg-white/10"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Reflection pool with quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6"
          >
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(1200px 300px at 50% 0%, rgba(0,255,255,0.15), transparent 70%)',
              transform: 'translateZ(0)'
            }} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white">Reflection Pool</h3>
              <p className="mt-3 text-white/80">
                “Creating a new era of intelligence.”
              </p>
              <motion.div
                initial={{ backgroundPositionX: '0%' }}
                animate={{ backgroundPositionX: '100%' }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="mt-6 h-32 w-full rounded-xl"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(127,0,255,0.15) 0 8px, rgba(0,255,255,0.1) 8px 16px)',
                  filter: 'blur(0.25px)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
