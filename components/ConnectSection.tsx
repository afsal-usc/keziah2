'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function ConnectSection() {
  return (
    <section id="connect" className="py-16 md:py-24 px-6 bg-stone-900 text-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Ready to begin your <br />
            <span className="italic text-sage-400">healing journey?</span>
          </h2>

          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Reach out on your preferred platform, and let's start this transformative work together. I'm here to support you every step of the way.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-sage-500 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-sage-600 transition-all shadow-lg shadow-sage-900/20"
            >
              BOOK A SESSION
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:hello@keziahverghese.com"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-stone-300 border border-stone-700 hover:border-stone-500 hover:text-white transition-all"
            >
              <Mail size={18} />
              EMAIL ME
            </a>
          </div>

          <div className="pt-16 flex justify-center gap-8">
            <a
              href="https://www.instagram.com/therapywithkez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sage-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/keziah-verghese-749965182/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sage-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="pt-16 border-t border-stone-800 text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Keziah Verghese. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

