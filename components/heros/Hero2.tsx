"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero2 — Editorial asymmetric. Strong typography hierarchy, 55/45 split, pull quote.
 */
export default function Hero2() {
  return (
    <section
      className="relative min-h-screen flex items-center py-24 md:py-32 px-6 overflow-hidden bg-stone-100"
      aria-label="Hero 2 - Editorial asymmetric"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-sage-600 font-medium">
              Keziah Verghese
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-stone-900 max-w-xl">
              Trauma Focused Therapist &{" "}
              <span className="italic text-sage-600 block mt-2">
                Nervous System Regulation Coach
              </span>
            </h1>
            <p className="text-stone-600 text-lg max-w-md leading-relaxed">
              Tired of coping? Let&apos;s work on healing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-stone-900 bg-sage-200 border border-sage-300 hover:bg-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 transition-colors"
                aria-label="Book a discovery call"
              >
                Book a Discovery Call
                <ArrowRight size={16} />
              </a>
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-stone-700 border border-stone-300 hover:border-sage-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 transition-colors"
                aria-label="Join community on WhatsApp"
              >
                Join the Community
              </a>
            </div>
          </motion.div>

          {/* Right — Image + quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-4/5 max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-4 bg-sage-200/60 rounded-3xl rotate-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/keziah-hero.jpg"
                  alt="Keziah Verghese"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 90vw, 450px"
                />
              </div>
              {/* Pull quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 left-0 right-0 lg:left-0 lg:right-8 px-6 py-4 bg-white rounded-xl shadow-lg border border-stone-100"
              >
                <p className="font-serif text-lg text-stone-800 italic">
                  &ldquo;Healing is not about fixing yourself — it&apos;s about
                  reconnecting with who you truly are.&rdquo;
                </p>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
