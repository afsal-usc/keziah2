"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero8() {
  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, var(--sage-50) 0%, var(--clay-100) 40%, var(--sage-100) 100%)",
      }}
      aria-label="Hero 8 - Diagonal ribbon layout"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-64 w-[130%] -translate-y-1/2 -rotate-6 bg-sage-300/40" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sage-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="space-y-7"
        >
          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Trauma Focused Therapist &{" "}
            <span className="italic text-sage-600">
              Nervous System Regulation Coach
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-600">
            Tired of coping? Let&apos;s work on healing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-100 border border-sage-200 px-7 py-3.5 text-sm font-medium tracking-wide text-stone-900 hover:bg-sage-200 hover:border-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 transition-colors"
            >
              Book a Discovery Call
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbCBtS7Jpe8iQWaYXG3P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-200 border border-clay-300 px-7 py-3.5 text-sm font-medium tracking-wide text-stone-900 hover:bg-clay-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 transition-colors"
            >
              Join the Community (WhatsApp)
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[500px] overflow-hidden rounded-4xl border border-sage-300/40 bg-sage-200/30 p-3 backdrop-blur-sm">
            <div className="relative w-full h-[480px] md:h-[560px] rounded-3xl overflow-hidden">
              <Image
                src="/keziah-hero.jpg"
                alt="Keziah Verghese"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
