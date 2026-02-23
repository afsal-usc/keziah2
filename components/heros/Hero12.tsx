"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero12() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11100F] px-6 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sage-700/35 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-clay-400/25 blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sage-300">
            Hero 12 · Quarter Geometry
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Compassionate therapy
            <span className="ml-2 italic text-sage-300">with direction</span>.
          </h1>
          <p className="max-w-xl text-lg text-stone-300">
            Grounded support for nervous system regulation, trauma processing,
            and sustainable emotional growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-stone-900 hover:bg-stone-100"
            >
              Book a Discovery Call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/5"
            >
              Email Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl border border-white/20 p-3"
        >
          <img
            src="https://placehold.co/980x1200/31463B/F2EFE8?text=Image+Placeholder"
            alt="Placeholder"
            className="h-[540px] w-full rounded-3xl object-cover"
          />
          <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full border-2 border-white/45" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border-2 border-white/45" />
        </motion.div>
      </div>
    </section>
  );
}
