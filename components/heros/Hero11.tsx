"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero11() {
  return (
    <section className="relative min-h-screen bg-[#F6F2EA] px-6 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-stone-300 bg-white p-6"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
            Care Path
          </p>
          <div className="mt-4 space-y-2">
            {["Stabilize", "Process", "Integrate"].map((step) => (
              <div
                key={step}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
              >
                {step}
              </div>
            ))}
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-stone-300 bg-white p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sage-700">
                Hero 11 · Pathway Layout
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                Structured therapy,
                <span className="ml-2 italic text-sage-700">
                  human connection
                </span>
                .
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
                A clear process for trauma recovery that is warm, practical, and
                deeply personalized.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="http://wa.me/919361777322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-sage-700"
                >
                  Book a Discovery Call
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="mailto:hello@keziahverghese.com"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-400 px-7 py-3.5 text-sm font-medium text-stone-800 hover:border-sage-700 hover:text-sage-700"
                >
                  Email Me
                </a>
              </div>
            </div>

            <img
              src="https://placehold.co/900x1100/E5DDD2/1C1917?text=Portrait+Placeholder"
              alt="Placeholder portrait"
              className="h-[460px] w-full rounded-3xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
