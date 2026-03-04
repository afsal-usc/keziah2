"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 bg-[#F2F5F3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-600">
                ABOUT ME
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900">
                Healing begins in <br />
                <span className="italic text-sage-600">
                  safety & connection.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed text-justify">
              <p>
                Hi, I'm Keziah, Counselling Psychologist. I believe healing
                begins when you feel truly seen, held, and free from judgment.
                My work goes beyond advice, it's about understanding patterns,
                regulating the nervous system, healing attachment wounds, and
                reconnecting with a secure sense of self.
              </p>
              <p>
                I take an integrative approach, drawing from Eye Movement
                Desensitization and Reprocessing (EMDR), Internal Family Systems
                (IFS), Somatic Therapy, Brainspotting, Trauma Focused -
                Cognitive Behaviour Therapy, Dialectical Behaviour Therapy and
                Solution-Focused Brief Therapy.
              </p>
              <p>
                Integrating Nature is also part of my work, as time with trees
                and the natural world can deeply support regulation and
                restoration.
              </p>
              <p className="font-medium text-stone-800">
                Therapy with me is a journey of coming home to your body, your
                story, and yourself.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-200 text-stone-900 px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-sage-200 transition-all"
            >
              BOOK A SESSION
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[450px] aspect-3/4">
              {/* Decorative elements */}
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-sage-200 rounded-4xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-stone-100 rounded-4xl -z-20" />

              <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl">
                <Image
                  src="/keziah-about.jpg"
                  alt="Keziah Verghese in nature"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
