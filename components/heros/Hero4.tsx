"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero4 — Dark luxury refined. #1B1917 base, accent highlight, small image as accent.
 */
export default function Hero4() {
  return (
    <section
      className="relative min-h-screen flex items-center py-24 md:py-32 px-6 overflow-hidden bg-[#1B1917]"
      aria-label="Hero 4 - Dark luxury"
    >
      {/* Soft radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sage-600/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_280px] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-sage-400/90 font-medium">
              Psychologist · Coach
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-white max-w-2xl">
              Ready to begin your{" "}
              <span className="italic text-[#9CB1A3]">healing journey?</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-lg leading-relaxed">
              Trauma focused therapy, nervous system regulation, and
              attachment healing. You don&apos;t have to figure it out alone.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#4A6D5E] hover:bg-[#5a7d6e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1917] transition-colors"
                aria-label="Book a discovery call"
              >
                Book a Discovery Call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:hello@keziahverghese.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white border border-white/25 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-colors"
                aria-label="Email me"
              >
                Email Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-4 ring-offset-[#1B1917] shadow-2xl">
              <Image
                src="/keziah-hero.jpg"
                alt="Keziah Verghese"
                fill
                className="object-cover"
                priority
                sizes="280px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
