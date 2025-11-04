import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';

export default function ParallaxCard({
  title,
  subtitle,
  icon,
  children,
  className = '',
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${x*100}% ${y*100}%, rgba(127,0,255,0.18), transparent 60%)`;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    x.set(mx);
    y.set(my);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const Icon = icon || null;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', backgroundImage: spotlight }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative rounded-2xl border border-white/10 bg-[#0a0f1f]/70 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ffff]/20 to-[#7f00ff]/20 ring-1 ring-white/10">
              <Icon className="h-5 w-5 text-[#00ffff]" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
            {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
          </div>
        </div>
        {children && <div className="mt-4 text-white/80">{children}</div>}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(800px_200px_at_50%_-20%,rgba(0,255,255,0.08),transparent)]" />
    </motion.div>
  );
}
