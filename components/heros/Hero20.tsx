"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero20() {
  return (
    <section className="min-h-screen bg-[#F5F1EA] px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-3xl border border-stone-300 bg-white p-7 lg:col-span-2 lg:row-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Hero 20 · Modular Columns
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
              A modern therapy practice
              <span className="ml-2 italic text-sage-700">
                built around your pace
              </span>
              .
            </h1>
            <p className="mt-5 max-w-xl text-lg text-stone-600">
              Work through trauma, reduce reactivity, and feel more connected to
              yourself with consistent, tailored support.
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

          <div className="overflow-hidden rounded-3xl border border-stone-300 bg-white">
            <img
              src="https://placehold.co/640x760/DCE5DE/1C1917?text=Placeholder+A"
              alt="Placeholder A"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-stone-300 bg-white p-6">
            <p className="font-serif text-3xl text-stone-900">Trusted care.</p>
            <p className="mt-3 text-stone-600">
              Professional support grounded in evidence and compassion.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-300 bg-white p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Focus Areas
            </p>
            <ul className="mt-4 space-y-2 text-stone-700">
              <li>Trauma Processing</li>
              <li>Nervous System Regulation</li>
              <li>Attachment Healing</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-300 bg-white lg:col-span-2">
            <img
              src="https://placehold.co/1200x500/EEE3D6/1C1917?text=Placeholder+B"
              alt="Placeholder B"
              className="h-48 w-full object-cover md:h-56"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
