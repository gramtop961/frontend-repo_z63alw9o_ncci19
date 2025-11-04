import React from 'react';
import ParallaxCard from './ParallaxCard';
import { Github, Linkedin, Mail } from 'lucide-react';

const items = [
  {
    type: 'github',
    icon: Github,
    title: 'Pushed: novaera-hub – sustainability realm animations',
    subtitle: 'main • 2m ago',
    content: 'Added energy flow shaders, performance tweaks, and accessibility pass.'
  },
  {
    type: 'linkedin',
    icon: Linkedin,
    title: 'Shared: "Designing cities as living circuits"',
    subtitle: '9m ago',
    content: 'A quick dive into microgrids, edge compute, and human‑centric mobility.'
  },
  {
    type: 'github',
    icon: Github,
    title: 'Opened PR: chore(swarm): improve cohesion/avoidance',
    subtitle: '#128 • 23m ago',
    content: 'Refined neighborhood kernel and reduced oscillations under latency.'
  },
  {
    type: 'linkedin',
    icon: Linkedin,
    title: 'Commented on: Autonomous design patterns',
    subtitle: '41m ago',
    content: 'Exploring co‑creation loops between AI agents and human reviewers.'
  },
];

export default function ContactFeed() {
  return (
    <section className="w-full bg-[#000814] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <p className="text-xs tracking-widest text-[#00ffff]/80">CONTACT & LIVE FEED</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Let’s Connect — Stream Updates</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A rolling pulse of recent commits, shares, and thoughts. Parallax cards keep things tactile.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it, idx) => (
            <ParallaxCard key={idx} title={it.title} subtitle={it.subtitle} icon={it.icon}>
              <p className="text-sm">{it.content}</p>
            </ParallaxCard>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="group">
            <ParallaxCard title="GitHub" subtitle="Follow & DM" icon={Github}>
              <span className="text-xs text-white/60">/nilesh-novaera</span>
            </ParallaxCard>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group">
            <ParallaxCard title="LinkedIn" subtitle="Connect" icon={Linkedin}>
              <span className="text-xs text-white/60">Nilesh Singh</span>
            </ParallaxCard>
          </a>
          <a href="mailto:hello@novaera.dev" className="group">
            <ParallaxCard title="Email" subtitle="Reach out" icon={Mail}>
              <span className="text-xs text-white/60">hello@novaera.dev</span>
            </ParallaxCard>
          </a>
        </div>
      </div>
    </section>
  );
}
