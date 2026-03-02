"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  color: string;
  imageTone: string;
  imageSrc: string;
};

const ServiceCard = ({ service }: { service: Service }) => (
  <div
    className={cn(
      "h-full p-10 rounded-3xl flex flex-col justify-between group transition-colors duration-500",
      service.color,
    )}
  >
    <div className="space-y-6">
      {service.imageSrc ? (
        <div className="relative w-full h-48 rounded-2xl overflow-hidden">
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative w-full h-48 rounded-2xl overflow-hidden",
            service.imageTone,
          )}
          role="img"
          aria-label={`${service.title} photo placeholder`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent" />
          <div className="absolute bottom-4 left-4 text-xs font-bold tracking-[0.2em] uppercase text-stone-700">
            Photo Placeholder
          </div>
        </div>
      )}
      <h3 className="font-serif text-3xl text-stone-900">{service.title}</h3>
      <p className="text-stone-600 leading-relaxed">{service.description}</p>
    </div>

    <div className="mt-10 pt-10 border-t border-stone-900/10">
      <a
        href="http://wa.me/919361777322"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-stone-900 group-hover:gap-4 transition-[gap] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
      >
        Book a Session
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    breakpoints: {
      "(min-width: 768px)": {
        align: "start",
        slidesToScroll: 1,
      },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback((api: any) => {
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const services = [
    {
      title: "1:1 Therapy",
      description:
        "Individual sessions tailored to your history, nervous system, and healing goals.",
      color: "bg-sage-100",
      imageTone: "bg-sage-200",
      imageSrc: "/therapy-session.jpg",
    },
    {
      title: "Group Therapy",
      description:
        "Small, supportive circles to process, reflect, and practice emotional regulation together.",
      color: "bg-clay-100",
      imageTone: "bg-clay-200",
      imageSrc: "/gallery-imgs/PXL_20240426_055724479.jpg",
    },
    {
      title: "Outbound Training",
      description:
        "Experiential outdoor sessions that build resilience, trust, and embodied confidence.",
      color: "bg-stone-200",
      imageTone: "bg-stone-200",
      imageSrc: "/gallery-imgs/PXL_20241017_055805667.PORTRAIT.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4 max-w-2xl w-full text-left">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-600">
              Work With Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-stone-900">
              Services{" "}
              <span className="italic text-sage-500">for healing.</span>
            </h2>
          </div>

          {/* <div className="flex gap-4 self-end md:self-auto">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              aria-label="View previous service"
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                prevBtnEnabled
                  ? "hover:bg-stone-900 hover:text-white hover:border-stone-900"
                  : "opacity-50 cursor-not-allowed",
              )}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              aria-label="View next service"
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                nextBtnEnabled
                  ? "hover:bg-stone-900 hover:text-white hover:border-stone-900"
                  : "opacity-50 cursor-not-allowed",
              )}
            >
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Mobile: stacked layout - all cards visible */}
        <div className="flex flex-col gap-6 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: carousel */}
        <div className="hidden md:block overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <div className="flex gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-[0_0_400px] min-w-0"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
