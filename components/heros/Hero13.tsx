"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero13() {
  return (
    <section className="min-h-screen bg-[#FBFAF7] px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Hero 13 · Triptych Story
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Three steps toward a
            <span className="ml-2 italic text-sage-700">steadier life</span>.
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Learn to regulate, process, and rebuild with trauma-informed care.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Regulate", "https://placehold.co/700x860/E0E8E2/1C1917?text=Regulate"],
            ["Process", "https://placehold.co/700x860/EEE3D6/1C1917?text=Process"],
            ["Integrate", "https://placehold.co/700x860/E5DDD2/1C1917?text=Integrate"],
          ].map(([title, image], idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="overflow-hidden rounded-3xl border border-stone-300 bg-white"
            >
              <img
                src={image}
                alt={`${title} placeholder`}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="font-serif text-3xl text-stone-900">{title}</h2>
                <p className="mt-2 text-stone-600">
                  Personalized sessions aligned to your pace and goals.
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="http://wa.me/919361777322"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-sage-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-sage-700"
          >
            Book a Discovery Call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
