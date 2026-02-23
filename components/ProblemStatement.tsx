"use client";

import { motion } from "framer-motion";

export default function ProblemStatement() {
  return (
    <section className="py-32 px-6 bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900 text-balance"
        >
          You deserve to feel like you are{" "}
          <span className="italic text-sage-500">thriving</span> and not just{" "}
          <span className="italic text-sage-500">surviving.</span>
        </motion.h2>
      </div>
    </section>
  );
}
