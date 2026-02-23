"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero14() {
  return (
    <section className="relative min-h-screen bg-[#F2F5F3] px-6 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-sage-300 bg-white p-8 lg:col-span-8 lg:p-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sage-700">
            Hero 14 · Magazine Lead
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Professional therapy for people
            <span className="ml-2 italic text-sage-700">
              navigating complex stress
            </span>
            .
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-stone-600">
            A grounded, evidence-informed approach that combines trauma-focused
            work with practical tools for daily regulation.
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="overflow-hidden rounded-3xl border border-stone-300 bg-white lg:col-span-4"
        >
          <img
            src="https://placehold.co/700x900/CEDBCD/1C1917?text=Profile+Placeholder"
            alt="Profile placeholder"
            className="h-72 w-full object-cover lg:h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl border border-stone-300 bg-white p-7 lg:col-span-5"
        >
          <p className="font-serif text-3xl text-stone-900">
            "Calm is a skill, not a personality trait."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="overflow-hidden rounded-3xl border border-stone-300 lg:col-span-7"
        >
          <img
            src="https://placehold.co/1200x520/EFE4D7/1C1917?text=Environment+Placeholder"
            alt="Environment placeholder"
            className="h-44 w-full object-cover md:h-52"
          />
        </motion.div>
      </div>
    </section>
  );
}
