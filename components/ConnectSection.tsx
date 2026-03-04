"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export default function ConnectSection() {
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      note: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatusMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage({
        type: "error",
        text: "Something went wrong. Please try emailing us directly.",
      });
    }
  };

  return (
    <>
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

              <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
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
                      type="text"
                      autoComplete="name"
                      disabled={isSubmitting}
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400 disabled:opacity-50"
                      placeholder="Enter your name…"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
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
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      disabled={isSubmitting}
                      {...register("phone")}
                      aria-invalid={errors.phone ? "true" : "false"}
                      className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400 disabled:opacity-50"
                      placeholder="Enter your phone number…"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
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
                      type="email"
                      autoComplete="email"
                      spellCheck={false}
                      disabled={isSubmitting}
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400 disabled:opacity-50"
                      placeholder="Enter your email…"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
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
                      type="text"
                      autoComplete="off"
                      disabled={isSubmitting}
                      {...register("subject")}
                      aria-invalid={errors.subject ? "true" : "false"}
                      className="w-full h-12 px-4 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400 disabled:opacity-50"
                      placeholder="Enter subject…"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
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
                    rows={5}
                    disabled={isSubmitting}
                    {...register("note")}
                    aria-invalid={errors.note ? "true" : "false"}
                    className="w-full px-4 py-3 rounded-2xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:border-sage-400 resize-y disabled:opacity-50"
                    placeholder="Share your message…"
                  />
                  {errors.note && (
                    <p className="text-sm text-red-500">
                      {errors.note.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-sage-500 text-white flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>

            <div
              aria-live="polite"
              className={`text-sm text-center h-5 font-medium ${statusMessage?.type === "error" ? "text-red-600" : "text-sage-700"}`}
            >
              {statusMessage?.text}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer — full-width container so bg spans edge to edge */}
      <footer
        className="w-full bg-[#1B1917] py-16 md:py-24"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
              Ready to begin your <br />
              <span className="italic text-[#9CB1A3]">healing journey?</span>
            </h2>

            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
              Reach out on your preferred platform, and let's start this
              transformative work together. I'm here to support you every step
              of the way.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#4A6D5E] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#5a7d6e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1917] transition-colors"
              >
                BOOK A SESSION
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>

              <a
                href="mailto:keziahverghese05@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-white border border-white/30 hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1917] transition-colors"
              >
                <Mail size={18} />
                EMAIL ME
              </a>
            </div>

            <div className="pt-16 flex justify-center gap-4">
              <a
                href="https://www.instagram.com/therapywithkez/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium tracking-wide hover:bg-sage-500 hover:border-sage-500 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1917]"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/keziah-verghese-749965182/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium tracking-wide hover:bg-sage-500 hover:border-sage-500 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1917]"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="pt-16 border-t border-white/20 text-[#A0A0A0] text-sm">
              <p>
                &copy; {new Date().getFullYear()} Keziah Verghese. All rights
                reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
