'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden bg-[#F9F8F6]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -z-10 skew-x-12 transform origin-top" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-12 bg-sage-400"></span>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-600">
                  Trauma Focused Therapist & Coach
                </p>
              </motion.div>

              <h1 className="font-serif leading-[1.1]">
                <span className="block text-3xl text-stone-400 mb-2">
                  From post-traumatic stress
                </span>
                <span className="block text-5xl text-stone-900">
                  to <span className="italic text-sage-600">post-traumatic growth.</span>
                </span>
              </h1>

              <p className="text-base md:text-lg text-stone-600 max-w-md leading-relaxed">
                You don't have to figure it all out alone. specialized support for nervous system regulation, attachment healing, and nature-based therapy.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-sage-600 transition-all shadow-xl shadow-stone-900/10"
              >
                BOOK A SESSION
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-stone-900 border border-stone-200 hover:border-sage-400 hover:text-sage-600 transition-all"
              >
                LEARN MORE
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              <div className="absolute inset-0 bg-sage-200 rounded-[2rem] rotate-6 transform translate-x-4 translate-y-4 -z-10" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10">
                <Image
                  src="/keziah-hero.jpg"
                  alt="Keziah Verghese"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl border border-white/40 shadow-lg backdrop-blur-md"
                >
                  <p className="font-serif text-xl text-stone-900 italic">
                    "Healing is not about fixing yourself, it's about reconnecting with who you truly are."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
