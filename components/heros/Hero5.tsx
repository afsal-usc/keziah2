"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero5 — Brutalist / grid-breaking. Bold blocks, strong type, diagonal or block layout.
 */
export default function Hero5() {
  return (
    <section
      className="relative min-h-screen flex items-center py-24 md:py-32 px-6 overflow-hidden bg-white"
      aria-label="Hero 5 - Brutalist"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Left block — headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <div className="border-l-4 border-stone-900 pl-6 md:pl-8">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-stone-900 uppercase tracking-tight">
                Trauma Focused
              </h1>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-sage-600 italic mt-1">
                Therapist & Coach
              </h1>
            </div>
            <p className="mt-8 text-stone-600 text-lg max-w-md">
              Tired of coping? Let&apos;s work on healing. Nervous system
              regulation, attachment, nature-based therapy.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 transition-colors"
                aria-label="Book a discovery call"
              >
                Book a Discovery Call
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-900 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 transition-colors"
                aria-label="Join community"
              >
                Join the Community
              </a>
            </div>
          </motion.div>

          {/* Right block — image with overlap */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-3/4 max-h-[85vh] w-full">
              <div className="absolute inset-0 bg-sage-600" />
              <div className="absolute inset-4 md:inset-6">
                <Image
                  src="/keziah-hero.jpg"
                  alt="Keziah Verghese"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              {/* Decorative corner */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-clay-300 border-2 border-stone-900"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
