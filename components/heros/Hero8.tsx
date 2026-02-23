"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero8() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#131110] px-6 py-24 text-white md:py-32"
      aria-label="Hero 8 - Diagonal ribbon layout"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-64 w-[130%] -translate-y-1/2 -rotate-6 bg-[#2B473B]" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#4A6D5E]/35 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="space-y-7"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5D3C9]">
            Elevated & Professional
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Therapy that meets you where you are
            <span className="ml-2 italic text-[#C5D3C9]">today</span>.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-200">
            Move from overwhelm to grounded progress with trauma-focused
            guidance and practical nervous system tools.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-stone-900 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book a Discovery Call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-medium text-white hover:border-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Email Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
            <img
              src="https://placehold.co/1000x1200/314A3F/F3F2EF?text=Portrait+Placeholder"
              alt="Placeholder portrait for therapist"
              className="h-[480px] w-full rounded-3xl object-cover md:h-[560px]"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/20 bg-black/35 px-5 py-4 text-sm text-stone-200 backdrop-blur-sm">
            Online + in-person support
          </div>
        </motion.div>
      </div>
    </section>
  );
}
