"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I really liked the discovery call with Ms. Kezia. She explained things in a very simple way and I could actually understand what she was saying. She told me what trauma-informed therapy means and how the sessions will go, so I finally knew what to expect. Before this, I would just go to therapy and start talking without really knowing what was happening. But with her, I felt prepared. It felt like a really good start for me.",
    author: "Maria James",
    location: "Chennai",
  },
  {
    quote:
      "My sessions with Kezia are very experiential. Every time I go in feeling stressed or dysregulated, I come out feeling calm and settled. I feel more clear and logical after the session. These sessions have really helped me deal with my day-to-day struggles. I am able to manage my anxiety and stress much better now. It has honestly made a big difference in my life.",
    author: "Anonymous",
    location: "",
  },
  {
    quote:
      "To be honest, I was very scared to do somatic therapy in the beginning. I didn't know how to sit with my emotions or even feel my body. It felt too much. But the way Ms. Kezia guided me was so gentle. She didn't push me. She always checked if I was okay. Slowly I started feeling safe to connect with my body. After around 10 sessions, I can say I feel much more comfortable with my feelings now. I can understand what's happening inside me and how to calm myself. I never thought I will reach this stage but I did.",
    author: "Divya Jain",
    location: "Delhi",
  },
  {
    quote:
      "I went to Ms Keziah when I was feeling very anxious and shaky. She did an EMDR session with me, and it really helped. After the session, I felt heavy and emotional for a while, but later I noticed that my anxiety about that situation was gone. It felt like a big relief because I had been carrying that worry for a long time. Trauma work is not easy and can feel intense sometimes, but I feel like I am not holding that trauma anymore.",
    author: "Sreshta Jain",
    location: "United States",
  },
  {
    quote:
      "Working with Ms. Kezia has been a turning point for me. I came in carrying years of unprocessed grief and didn't even know where to begin. She created such a safe, non-judgmental space that I slowly began to open up. The somatic work helped me understand how my body holds onto pain. I leave each session feeling lighter, more grounded, and genuinely hopeful about my healing journey.",
    author: "Priya R.",
    location: "Bangalore",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 400;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-stone-900 text-stone-50 overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header + nav */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-6">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-400 mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-50 text-balance">
              Hear What My Clients <br className="hidden md:block" />
              Say About Me
            </h2>
          </div>

          {/* Navigation — always bottom-aligned via items-end */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 ${
                canScrollLeft
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-white/10 text-white/25 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 ${
                canScrollRight
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-white/10 text-white/25 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal scrolling cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-6 py-2 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              data-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="flex-shrink-0 w-[85vw] md:w-[420px] snap-start rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-sage-400 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-300 leading-relaxed text-[0.92rem] flex-1 text-pretty">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-semibold text-stone-100 text-sm tracking-wide">
                  {testimonial.author}
                </p>
                {testimonial.location && (
                  <p className="text-stone-500 text-xs mt-0.5">
                    {testimonial.location}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
