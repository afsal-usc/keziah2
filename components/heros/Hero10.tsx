"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero10() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#EFE9DF] px-6 py-24 md:py-32"
      aria-label="Hero 10 - Layered collage layout"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(107,131,115,0.22),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(203,153,126,0.2),transparent_42%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Trauma Focused Therapist &{" "}
            <span className="italic text-sage-700">
              Nervous System Regulation Coach
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-700">
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
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative min-h-[560px]"
        >
          <div className="absolute left-0 top-10 w-[72%] rounded-4xl border border-stone-300/70 bg-white p-3 shadow-xl shadow-stone-900/10 overflow-hidden">
            <div className="relative h-72 w-full md:h-80 rounded-3xl overflow-hidden">
              <Image
                src="/keziah-hero.jpg"
                alt="Keziah Verghese"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 72vw, 36vw"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-10 right-0 w-[62%] rounded-4xl border border-stone-300/70 bg-[#DCE5DE] p-3 shadow-xl shadow-stone-900/10 overflow-hidden">
            <div className="relative h-64 w-full md:h-72 rounded-3xl overflow-hidden">
              <Image
                src="/gallery-imgs/PXL_20241017_055805667.PORTRAIT.jpg"
                alt="Keziah Verghese"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 62vw, 31vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
