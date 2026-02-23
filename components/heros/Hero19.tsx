"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero19() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F1418] px-6 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,109,94,0.45),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(221,190,169,0.25),transparent_35%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-4xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl md:p-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sage-200">
            Hero 19 · Glass Focus
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
            Grounded professional support,
            <span className="ml-2 italic text-sage-200">beautifully simple</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-200">
            Trauma-informed care that helps you regulate, heal attachment
            wounds, and build a more secure life.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-stone-900 hover:bg-stone-100"
            >
              Book a Discovery Call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/5"
            >
              Email Me
            </a>
          </div>
          <img
            src="https://placehold.co/1400x520/2D4238/F3EFE8?text=Landscape+Placeholder"
            alt="Landscape placeholder"
            className="mt-10 h-44 w-full rounded-3xl border border-white/20 object-cover md:h-56"
          />
        </motion.div>
      </div>
    </section>
  );
}
