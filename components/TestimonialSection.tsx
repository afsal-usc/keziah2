'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Working with Keziah has been transformative. Her gentle approach to nervous system regulation helped me find calm in ways I never thought possible. I finally feel grounded and present in my own life.",
      author: "Sarah M.",
      location: "California"
    },
    {
      text: "Keziah's nature-based therapy approach changed everything for me. The combination of professional guidance and connection with the outdoors helped me heal from trauma I'd carried for years.",
      author: "Michael T.",
      location: "Oregon"
    },
    {
      text: "For the first time, I feel truly seen and understood. Keziah's work on attachment healing has helped me build healthier relationships and finally feel secure within myself.",
      author: "Jessica L.",
      location: "Washington"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 bg-stone-900 text-stone-50 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 text-stone-800 opacity-20">
          <Quote size={300} />
        </div>

        <div className="relative z-10">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-400 mb-4">
              TESTIMONIALS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-200">
              Stories of healing.
            </h2>
          </div>

          <div className="min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-stone-50">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <p className="text-lg font-medium text-sage-300">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-stone-400">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-stone-700 hover:bg-stone-800 hover:border-stone-600 transition-all"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-stone-700 hover:bg-stone-800 hover:border-stone-600 transition-all"
                aria-label="Next testimonial"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

