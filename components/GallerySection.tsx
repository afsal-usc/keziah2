"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/gallery-imgs/PXL_20250427_071955030.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/IMG_20230207_113707.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240221_065938234.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/IMG_20230403_115307.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240418_024805906.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240919_043456060.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/IMG_20230425_154615.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20241012_094335393.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240427_044918580.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20250427_080937423.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/IMG-20240421-WA0118.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240417_021805407.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/IMG_20230505_115031.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240221_073949167.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20241012_095346842.jpg", alt: "Gallery moment" },
  {
    src: "/gallery-imgs/PXL_20250427_080737432.PORTRAIT.jpg",
    alt: "Gallery moment",
  },
  { src: "/gallery-imgs/PXL_20250427_120806778.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/IMG_20230505_115049.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240418_025152392.jpg", alt: "Gallery moment" },
  {
    src: "/gallery-imgs/PXL_20241017_055805667.PORTRAIT.jpg",
    alt: "Gallery moment",
  },
  { src: "/gallery-imgs/IMG-20240421-WA0035.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240419_024523574.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20240426_055724479.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20230824_091853350.MP.jpg", alt: "Gallery moment" },
  { src: "/gallery-imgs/PXL_20250427_121912833.jpg", alt: "Gallery moment" },
];

export default function GallerySection() {
  return (
    <section
      className="py-16 md:py-24 bg-sage-50 overflow-hidden"
      aria-label="Gallery"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 px-6"
      >
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-500 mb-4">
          Gallery
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900 text-balance">
          Moments of <span className="italic text-sage-600">Healing</span>
        </h2>
        <p className="mt-4 text-stone-600 text-lg max-w-xl mx-auto">
          Glimpses of the calm, nurturing spaces where transformation happens.
        </p>
      </motion.div>

      {/* Marquee track */}
      <div className="group relative">
        {/* Fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-sage-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-sage-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {/* Two identical strips for seamless looping */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-4 md:gap-6 shrink-0 pr-4 md:pr-6"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={`${copy}-${index}`}
                  className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
