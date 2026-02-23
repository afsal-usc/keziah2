"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero18() {
  return (
    <section className="min-h-screen bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_260px]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-stone-900 p-8 md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-stone-700">
            Hero 18 · Monochrome Rail
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Clear, focused therapy for
            <span className="ml-2 italic">complex emotional patterns</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-stone-700">
            A professional and compassionate approach to healing trauma,
            improving regulation, and creating a more stable inner life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-stone-800"
            >
              Book a Discovery Call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-7 py-3.5 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-white"
            >
              Email Me
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-stone-900 p-6"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            Pillars
          </p>
          <div className="mt-4 space-y-3 text-sm text-stone-800">
            <div className="border-b border-stone-300 pb-3">01 Regulation</div>
            <div className="border-b border-stone-300 pb-3">02 Attachment</div>
            <div className="border-b border-stone-300 pb-3">03 Processing</div>
            <div>04 Integration</div>
          </div>
          <img
            src="https://placehold.co/520x700/ECE6DA/1C1917?text=Placeholder"
            alt="Placeholder"
            className="mt-6 h-52 w-full rounded-2xl object-cover"
          />
        </motion.aside>
      </div>
    </section>
  );
}
