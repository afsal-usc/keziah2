'use client';

import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="py-32 px-6 bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900"
        >
          You don't have to figure it all out <span className="italic text-sage-500">alone.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light"
        >
          Healing begins in safety and connection—when you feel truly seen, held, and not judged.
          Our work together goes beyond advice; it's about understanding, growing and rediscovering who you are
          beneath the pain, patterns, and protective layers.
        </motion.p>
      </div>
    </section>
  );
}

