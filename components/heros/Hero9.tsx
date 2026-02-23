"use client";

import { motion } from "framer-motion";
import { ArrowRight, CirclePlay } from "lucide-react";

export default function Hero9() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#FAFAF9] px-6 py-24 md:py-32"
      aria-label="Hero 9 - Radial center stage layout"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage-300/40" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage-400/40" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-100/70" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-sage-700"
        >
          Radial Composition
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl"
        >
          Calm your system.
          <span className="ml-2 italic text-sage-700">Reconnect</span> with
          yourself.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl text-lg text-stone-600"
        >
          Trauma-informed therapy and coaching to help you move from survival
          mode to a more grounded, supported life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="http://wa.me/919361777322"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
          >
            Book a Discovery Call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-stone-400 px-7 py-3.5 text-sm font-medium text-stone-800 hover:border-sage-700 hover:text-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
          >
            <CirclePlay size={16} />
            Watch Intro
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 w-full max-w-3xl rounded-4xl border border-stone-300/70 bg-white p-4 shadow-xl shadow-stone-900/10"
        >
          <img
            src="https://placehold.co/1400x700/E1E8E3/1C1917?text=Wide+Placeholder+Image"
            alt="Placeholder banner image for therapist website"
            className="h-64 w-full rounded-3xl object-cover md:h-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
