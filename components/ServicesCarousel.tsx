'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': { 
        align: 'center',
        slidesToScroll: 1 
      }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const services = [
    {
      title: "Nervous System Regulation",
      description: "Our nervous system holds the key to healing trauma. Together, we'll work on regulating your nervous system, helping you move from hypervigilance or shutdown into a state of calm and safety. This foundational work allows you to feel more grounded, present, and able to respond to life's challenges with greater ease."
    },
    {
      title: "Attachment Healing",
      description: "Early attachment experiences shape how we relate to ourselves and others. Through compassionate exploration, we'll work on healing attachment wounds and building secure internal and external relationships. This journey helps you develop the capacity for deeper connection, trust, and emotional intimacy."
    },
    {
      title: "Nature-Based Therapy",
      description: "There's something powerful that happens when we connect with nature. My approach integrates the healing presence of the natural world—the woods, trees, and outdoor spaces—to support nervous system regulation and emotional well-being. Nature becomes a co-therapist in your healing journey."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-tan">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">
          How I Can Help
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[0_0_calc(33.333%-1.5rem)] min-w-0"
                >
                  <div className="bg-cream rounded-2xl p-8 h-full flex flex-col shadow-sm">
                    <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <a
                      href="http://wa.me/919361777322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-tan text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-opacity-90 transition-all self-start"
                    >
                      BOOK A SESSION
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

