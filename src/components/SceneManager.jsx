import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DomeIntro from './DomeIntro';
import AiRealm from './AiRealm';
import VisionaryChamber from './VisionaryChamber';

const scenes = {
  genesis: <DomeIntro />,
  ai: <AiRealm />,
  vision: <VisionaryChamber />,
};

export default function SceneManager({ current }) {
  return (
    <div className="w-full bg-[#000814]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.985, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.985, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {scenes[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
