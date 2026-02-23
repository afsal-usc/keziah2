"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero15() {
  return (
    <section className="min-h-screen bg-[#F8F7F5] px-6 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_360px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-stone-300 bg-white p-8 md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
            Hero 15 · Insight Dashboard
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Evidence-informed care with
            <span className="ml-2 italic text-sage-700">real-world tools</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-600">
            Work with practical frameworks that support regulation, attachment
            repair, and long-term emotional resilience.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              ["1:1 Sessions", "Weekly"],
              ["Mode", "Online / In-Person"],
              ["Style", "Trauma Focused"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-stone-300 bg-stone-50 p-4"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                  {k}
                </p>
                <p className="mt-2 text-sm font-medium text-stone-800">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
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
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <img
            src="https://placehold.co/800x920/D9E4DC/1C1917?text=Portrait+Placeholder"
            alt="Portrait placeholder"
            className="h-[430px] w-full rounded-3xl border border-stone-300 object-cover"
          />
          <img
            src="https://placehold.co/800x420/EBE2D6/1C1917?text=Detail+Placeholder"
            alt="Detail placeholder"
            className="h-36 w-full rounded-3xl border border-stone-300 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
