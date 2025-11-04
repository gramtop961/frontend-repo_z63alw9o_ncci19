import React from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { key: 'genesis', label: 'Genesis Dome' },
  { key: 'ai', label: 'AI Realm' },
  { key: 'vision', label: 'Visionary Chamber' },
  { key: 'sustainability', label: 'Sustainability' },
  { key: 'future', label: 'Future Vision' },
  { key: 'contact', label: 'Contact & Feed' },
];

export default function Navigation({ current, onChange }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#000814]/80 to-transparent backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="relative mx-auto inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 text-sm text-white/80 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
          {/* Highlight pill */}
          <div className="relative">
            <div className="absolute inset-0 -z-0" />
          </div>
          {tabs.map((t) => {
            const active = current === t.key;
            return (
              <button
                key={t.key}
                onClick={() => onChange(t.key)}
                className="relative rounded-full px-4 py-2 transition-colors"
                style={{
                  color: active ? '#000814' : 'rgba(245,245,245,0.9)',
                }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,255,255,0.9), rgba(127,0,255,0.9))',
                      boxShadow: '0 8px 30px rgba(0,255,255,0.25)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 mix-blend-normal">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
