"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero3 — Full-bleed cinematic. Image as background, content overlay bottom-left.
 */
export default function Hero3() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-stone-900"
      aria-label="Hero 3 - Full-bleed cinematic"
    >
      <div className="absolute inset-0">
        <Image
          src="/keziah-hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0 bg-linear-to-t from-stone-900/95 via-stone-900/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white text-balance">
            Trauma Focused Therapist &{" "}
            <span className="italic text-sage-300">Nervous System Regulation</span>{" "}
            Coach
          </h1>
          <p className="text-lg text-stone-300 max-w-lg">
            Tired of coping? Let&apos;s work on healing. I&apos;m here to support
            you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-stone-900 bg-white hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 transition-colors"
              aria-label="Book a discovery call"
            >
              Book a Discovery Call
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white border border-white/40 hover:border-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
              aria-label="Join community on WhatsApp"
            >
              Join the Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
