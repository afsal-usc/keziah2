"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircleHeart } from "lucide-react";

export default function Hero7() {
  return (
    <section
      className="min-h-screen bg-[#F2F5F3] px-6 py-24 md:py-28"
      aria-label="Hero 7 - Bento mosaic layout"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sage-700">
            Hero in Bento Form
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-sage-300/70 bg-white p-7 md:col-span-7 md:row-span-4 md:p-10"
          >
            <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Trauma focused therapy, redesigned for real life.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
              A practical, compassionate process for nervous system regulation,
              attachment healing, and emotional resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-sage-300/70 bg-[#DDE7DF] p-3 md:col-span-5 md:row-span-4"
          >
            <img
              src="https://placehold.co/900x900/CCD9CF/1C1917?text=Hero+Image+Placeholder"
              alt="Placeholder image for therapist portrait"
              className="h-full w-full rounded-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-stone-300 bg-white p-6 md:col-span-4 md:row-span-2"
          >
            <MessageCircleHeart size={20} className="mb-3 text-sage-700" />
            <p className="font-serif text-2xl leading-snug text-stone-900">
              "You don't have to
              <br />
              do this alone."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-3xl border border-stone-300 bg-white p-6 md:col-span-5 md:row-span-2"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Start here
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-sage-600 px-6 py-3 text-sm font-medium text-white hover:bg-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              >
                Book a Discovery Call
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="mailto:hello@keziahverghese.com"
                className="inline-flex items-center gap-2 rounded-full border border-stone-400 px-6 py-3 text-sm font-medium text-stone-800 hover:border-sage-700 hover:text-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              >
                Email Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-stone-300 bg-[#F8F6F2] p-3 md:col-span-3 md:row-span-2"
          >
            <img
              src="https://placehold.co/600x350/ECE6DA/1C1917?text=Secondary+Placeholder"
              alt="Placeholder image for supportive environment"
              className="h-full w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
