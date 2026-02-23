"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero16() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B1917] px-6 py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(107,131,115,0.35),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(203,153,126,0.25),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[130px_1fr_320px]">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
            <p className="[writing-mode:vertical-rl] text-xs uppercase tracking-[0.4em] text-stone-400">
              Hero 16 · Vertical Editorial
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm md:p-12"
          >
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Professional trauma therapy with a
              <span className="ml-2 italic text-sage-300">
                deeply human rhythm
              </span>
              .
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-300">
              Designed for people who want practical progress, emotional safety,
              and meaningful long-term change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/20"
          >
            <img
              src="https://placehold.co/700x980/3F574A/F3EFE8?text=Portrait+Placeholder"
              alt="Portrait placeholder"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
