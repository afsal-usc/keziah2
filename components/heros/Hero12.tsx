"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero12() {
  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(160deg, var(--clay-100) 0%, var(--sage-50) 50%, var(--sage-100) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sage-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-clay-300/25 blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Trauma Focused Therapist &{" "}
            <span className="italic text-sage-500">
              Nervous System Regulation Coach
            </span>
          </h1>
          <p className="max-w-xl text-lg text-stone-600">
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
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-200 border border-clay-300 px-7 py-3.5 text-sm font-medium tracking-wide text-stone-900 hover:bg-clay-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 transition-colors"
            >
              Join the Community (WhatsApp)
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl border border-sage-300/40 bg-sage-200/30 p-3"
        >
          <div className="relative h-[540px] w-full rounded-3xl overflow-hidden">
            <Image
              src="/keziah-hero.jpg"
              alt="Keziah Verghese"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
          <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full border-2 border-sage-400/40" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border-2 border-clay-300/40" />
        </motion.div>
      </div>
    </section>
  );
}
