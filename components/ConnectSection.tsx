"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function ConnectSection() {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("Form submitted. This is a mock form for now.");
  };

  return (
    <section
      id="connect"
      className="py-16 md:py-24 px-6 bg-sage-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 relative"
        >
          <div className="absolute inset-x-0 top-0 -z-10 h-24 rounded-t-3xl bg-linear-to-r from-sage-200 via-sage-300 to-stone-200 opacity-80" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 rounded-b-3xl bg-linear-to-r from-stone-200 via-sage-200 to-clay-200 opacity-80" />

          <div className="bg-white border border-stone-200 rounded-3xl px-5 md:px-8 py-10 md:py-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-stone-900">
                Contact Us
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-stone-800"
                  >
                    Your name<span className="text-clay-400"> *</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-required="true"
                    className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400"
                    placeholder="Enter your name…"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-stone-800"
                  >
                    Your phone<span className="text-clay-400"> *</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    aria-required="true"
                    className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400"
                    placeholder="Enter your phone number…"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-stone-800"
                  >
                    Email<span className="text-clay-400"> *</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    aria-required="true"
                    className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400"
                    placeholder="Enter your email…"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-stone-800"
                  >
                    Subject<span className="text-clay-400"> *</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    required
                    aria-required="true"
                    className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400"
                    placeholder="Enter subject…"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-note"
                  className="text-sm font-medium text-stone-800"
                >
                  Note (If any)<span className="text-clay-400"> *</span>
                </label>
                <textarea
                  id="contact-note"
                  name="note"
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400 resize-y"
                  placeholder="Share your message…"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-sage-500 text-white text-sm font-semibold tracking-[0.2em] uppercase hover:bg-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          <div aria-live="polite" className="text-sm text-stone-700 text-center h-5">
            {statusMessage}
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="max-w-4xl mx-auto mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900">
            Ready to begin your <br />
            <span className="italic text-sage-600">healing journey?</span>
          </h2>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Reach out on your preferred platform, and let's start this
            transformative work together. I'm here to support you every step of
            the way.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-sage-500 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-50 transition-colors shadow-lg shadow-sage-900/20"
            >
              BOOK A SESSION
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            <a
              href="mailto:hello@keziahverghese.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-stone-700 border border-stone-300 hover:border-sage-400 hover:text-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-50 transition-colors"
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
              className="text-stone-500 hover:text-sage-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-50 rounded-full"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/keziah-verghese-749965182/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-sage-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-50 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="pt-16 border-t border-stone-300 text-stone-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Keziah Verghese. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
