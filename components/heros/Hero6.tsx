"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero6() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#F7F4EE] px-6 py-24 md:py-32"
      aria-label="Hero 6 - Split timeline with floating media"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-full w-px bg-stone-300/70" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sage-200/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-clay-200/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 rounded-3xl border border-stone-300/60 bg-white/80 p-8 shadow-xl shadow-stone-900/5 backdrop-blur-sm md:p-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sage-700">
            Nervous System Care
          </p>
          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Healing with
            <span className="ml-2 italic text-sage-700">clarity</span>,
            warmth, and rhythm.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
            A trauma-informed space to regulate your nervous system, rebuild
            trust with yourself, and move forward with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              aria-label="Book a discovery call"
            >
              Book a Discovery Call
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 rounded-full border border-stone-400/70 px-7 py-3.5 text-sm font-medium text-stone-800 transition-colors hover:border-sage-600 hover:text-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              aria-label="Email Keziah"
            >
              Email Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative grid min-h-[560px] gap-4 sm:grid-cols-2"
        >
          <div className="rounded-3xl border border-stone-300/70 bg-stone-100 p-3 shadow-lg shadow-stone-900/5 sm:col-span-2">
            <img
              src="https://placehold.co/1200x520/E9E2D8/1C1917?text=Primary+Portrait+Placeholder"
              alt="Placeholder portrait"
              className="h-56 w-full rounded-2xl object-cover md:h-64"
            />
          </div>
          <div className="rounded-3xl border border-stone-300/70 bg-white p-3 shadow-lg shadow-stone-900/5">
            <img
              src="https://placehold.co/600x600/DCE5DE/1C1917?text=Nature+Moment"
              alt="Placeholder nature image"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="rounded-3xl border border-stone-300/70 bg-white p-6 shadow-lg shadow-stone-900/5">
            <Sparkles className="mb-4 text-sage-700" size={20} />
            <p className="font-serif text-2xl leading-snug text-stone-900">
              "Less survival mode.
              <br />
              More grounded living."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
