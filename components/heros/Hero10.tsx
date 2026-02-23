"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
          <p className="text-xs uppercase tracking-[0.34em] text-stone-600">
            Friendly + Professional
          </p>
          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Professional support for your
            <span className="ml-2 italic text-sage-700">
              healing journey
            </span>
            .
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-700">
            Structured, compassionate trauma-focused care that helps you build
            regulation, trust, and emotional steadiness over time.
          </p>
          <div className="rounded-2xl border border-stone-300/70 bg-white/70 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm text-stone-700">
              <ShieldCheck size={16} className="text-sage-700" />
              Safe, trauma-informed, and personalized
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-700"
            >
              Book a Discovery Call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-7 py-3.5 text-sm font-medium text-stone-800 hover:border-sage-700 hover:text-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
            >
              Email Me
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
          <div className="absolute left-0 top-10 w-[72%] rounded-4xl border border-stone-300/70 bg-white p-3 shadow-xl shadow-stone-900/10">
            <img
              src="https://placehold.co/1000x760/E6DDD2/1C1917?text=Primary+Placeholder"
              alt="Primary placeholder image"
              className="h-72 w-full rounded-3xl object-cover md:h-80"
            />
          </div>
          <div className="absolute bottom-10 right-0 w-[62%] rounded-4xl border border-stone-300/70 bg-[#DCE5DE] p-3 shadow-xl shadow-stone-900/10">
            <img
              src="https://placehold.co/900x760/CEDBCD/1C1917?text=Secondary+Placeholder"
              alt="Secondary placeholder image"
              className="h-64 w-full rounded-3xl object-cover md:h-72"
            />
          </div>
          <div className="absolute right-[16%] top-[45%] rounded-full border border-stone-400/60 bg-white/85 px-5 py-2.5 text-sm font-medium text-stone-700 backdrop-blur-sm">
            Online & In-Person
          </div>
        </motion.div>
      </div>
    </section>
  );
}
