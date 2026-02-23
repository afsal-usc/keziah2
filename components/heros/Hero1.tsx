"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero1 — Centered minimal. Generous negative space, single column, large type, one primary CTA.
 */
export default function Hero1() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#F9F8F6]"
      aria-label="Hero 1 - Centered minimal"
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.35em] text-stone-500 font-medium"
        >
          Trauma Focused Therapy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-stone-900 text-balance"
        >
          You don&apos;t have to{" "}
          <span className="italic text-sage-600">figure it out</span> alone.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto leading-relaxed"
        >
          Tired of coping? Let&apos;s work on healing. Nervous system regulation,
          attachment work, and nature-based therapy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="http://wa.me/919361777322"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-white bg-sage-600 hover:bg-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F8F6] transition-colors"
            aria-label="Book a discovery call on WhatsApp"
          >
            Book a Discovery Call
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
