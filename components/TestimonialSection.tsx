'use client';

import { useState } from 'react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Working with Keziah has been transformative. Her gentle approach to nervous system regulation helped me find calm in ways I never thought possible. I finally feel grounded and present in my own life.",
      author: "Sarah M.",
      location: "California"
    },
    {
      text: "Keziah's nature-based therapy approach changed everything for me. The combination of professional guidance and connection with the outdoors helped me heal from trauma I'd carried for years. I'm forever grateful.",
      author: "Michael T.",
      location: "Oregon"
    },
    {
      text: "For the first time, I feel truly seen and understood. Keziah's work on attachment healing has helped me build healthier relationships and finally feel secure within myself. She's an incredible therapist.",
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
    <section id="testimonials" className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">
          Client Stories
        </h2>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-center">
            <div className="mb-6">
              <svg className="w-12 h-12 text-sage/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="mt-auto">
              <p className="font-semibold text-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-foreground/60">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-sage/20 rounded-full hover:bg-sage/30 transition-all"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#8B9D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-sage w-8' : 'bg-sage/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-sage/20 rounded-full hover:bg-sage/30 transition-all"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#8B9D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

