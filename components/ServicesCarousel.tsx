'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': {
        align: 'start',
        slidesToScroll: 1
      }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const services = [
    {
      title: "Nervous System Regulation",
      description: "Our nervous system holds the key to healing trauma. Together, we'll work on regulating your nervous system, helping you move from hypervigilance or shutdown into a state of calm and safety.",
      color: "bg-sage-100"
    },
    {
      title: "Attachment Healing",
      description: "Early attachment experiences shape how we relate to ourselves and others. Through compassionate exploration, we'll work on healing attachment wounds and building secure internal and external relationships.",
      color: "bg-clay-100"
    },
    {
      title: "Nature-Based Therapy",
      description: "There's something powerful that happens when we connect with nature. My approach integrates the healing presence of the natural world to support nervous system regulation and emotional well-being.",
      color: "bg-stone-100"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4 max-w-2xl w-full text-left">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-600">
              MY APPROACH
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-stone-900">
              How I can <span className="italic text-sage-500">help you.</span>
            </h2>
          </div>

          <div className="flex gap-4 self-end md:self-auto">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 transition-all",
                prevBtnEnabled ? "hover:bg-stone-900 hover:text-white hover:border-stone-900" : "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 transition-all",
                nextBtnEnabled ? "hover:bg-stone-900 hover:text-white hover:border-stone-900" : "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <div className="flex gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-[0_0_100%] md:flex-[0_0_400px] min-w-0"
              >
                <div className={cn("h-full p-10 rounded-3xl flex flex-col justify-between group transition-colors duration-500", service.color)}>
                  <div className="space-y-6">
                    <h3 className="font-serif text-3xl text-stone-900">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-10 pt-10 border-t border-stone-900/10">
                    <a
                      href="http://wa.me/919361777322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-stone-900 group-hover:gap-4 transition-all"
                    >
                      Book Session
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

