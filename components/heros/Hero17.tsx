"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero17() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F3F7F4] px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute -top-20 left-0 h-80 w-full rounded-b-[50%] bg-sage-100" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-full rounded-t-[50%] bg-clay-100" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-stone-300 bg-white p-8 lg:col-span-7 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.34em] text-sage-700">
              Hero 17 · Soft Wave Composition
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Move gently from overwhelm
              <span className="ml-2 italic text-sage-700">to stability</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-stone-600">
              Therapy and coaching designed to support nervous system balance
              and emotional regulation at your pace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-sage-700"
              >
                Book a Discovery Call
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="mailto:hello@keziahverghese.com"
                className="inline-flex items-center gap-2 rounded-full border border-stone-400 px-7 py-3.5 text-sm font-medium text-stone-800 hover:border-sage-700 hover:text-sage-700"
              >
                Email Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="overflow-hidden rounded-3xl border border-stone-300 lg:col-span-5"
          >
            <img
              src="https://placehold.co/900x1100/D5E0D9/1C1917?text=Portrait+Placeholder"
              alt="Portrait placeholder"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
