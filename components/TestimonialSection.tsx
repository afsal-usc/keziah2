"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type TextItem = {
  type: "text";
  quote: string;
  author: string;
  location: string;
};

type MediaItem = {
  type: "media";
  author: string;
  location: string;
  tone: string;
  video: boolean;
};

type BentoItem = TextItem | MediaItem;

const StarRow = () => (
  <div className="flex gap-1 text-sage-500 mb-4" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
    ))}
  </div>
);

const TextCard = ({ item, index }: { item: TextItem; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    className="rounded-2xl bg-white p-6 md:p-7 shadow-sm border border-stone-100 flex flex-col break-inside-avoid"
  >
    <StarRow />
    <p className="text-stone-800 leading-relaxed mb-6 text-pretty">
      &ldquo;{item.quote}&rdquo;
    </p>
    <div className="mt-auto pt-2">
      <p className="font-semibold text-stone-900">{item.author}</p>
      {item.location && (
        <p className="text-stone-500 text-sm">- {item.location}</p>
      )}
    </div>
  </motion.article>
);

const MediaCard = ({ item, index }: { item: MediaItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    className="relative rounded-2xl overflow-hidden shadow-sm aspect-square break-inside-avoid"
    role="img"
    aria-label={`${item.author} video testimonial placeholder`}
  >
    <div className={cn("absolute inset-0", item.tone)} />
    <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
    <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
    {item.video ? (
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="w-14 h-14 rounded-full bg-white/80 text-stone-900 inline-flex items-center justify-center shadow-lg"
          aria-hidden="true"
        >
          <Play size={22} fill="currentColor" />
        </span>
      </div>
    ) : null}
    <div className="absolute bottom-4 left-4 right-4">
      <p className="text-stone-50 font-semibold text-lg">{item.author}</p>
      {item.location && (
        <p className="text-stone-200 text-sm">- {item.location}</p>
      )}
    </div>
  </motion.div>
);

export default function TestimonialSection() {
  const items: BentoItem[] = [
    {
      type: "text",
      quote:
        "I really liked the discovery call with Ms. Kezia. She explained things in a very simple way and I could actually understand what she was saying. She told me what trauma-informed therapy means and how the sessions will go, so I finally knew what to expect. Before this, I would just go to therapy and start talking without really knowing what was happening. But with her, I felt prepared. It felt like a really good start for me.",
      author: "Maria James",
      location: "Chennai",
    },
    {
      type: "media",
      author: "Sreshta Jain",
      location: "United States",
      tone: "bg-clay-300",
      video: true,
    },
    {
      type: "text",
      quote:
        "My sessions with Kezia are very experiential. Every time I go in feeling stressed or dysregulated, I come out feeling calm and settled. I feel more clear and logical after the session. These sessions have really helped me deal with my day-to-day struggles. I am able to manage my anxiety and stress much better now. It has honestly made a big difference in my life.",
      author: "Anonymous",
      location: "",
    },
    {
      type: "media",
      author: "Divya Jain",
      location: "Delhi",
      tone: "bg-sage-300",
      video: true,
    },
    {
      type: "text",
      quote:
        "To be honest, I was very scared to do somatic therapy in the beginning. I didn't know how to sit with my emotions or even feel my body. It felt too much. But the way Ms. Kezia guided me was so gentle. She didn't push me. She always checked if I was okay. Slowly I started feeling safe to connect with my body. After around 10 sessions, I can say I feel much more comfortable with my feelings now. I can understand what's happening inside me and how to calm myself. I never thought I will reach this stage but I did.",
      author: "Divya Jain",
      location: "Delhi",
    },
    {
      type: "text",
      quote:
        "I went to Ms Keziah when I was feeling very anxious and shaky. She did an EMDR session with me, and it really helped. After the session, I felt heavy and emotional for a while, but later I noticed that my anxiety about that situation was gone. It felt like a big relief because I had been carrying that worry for a long time. Trauma work is not easy and can feel intense sometimes, but I feel like I am not holding that trauma anymore.",
      author: "Sreshta Jain",
      location: "United States",
    },
    {
      type: "media",
      author: "Maria James",
      location: "Chennai",
      tone: "bg-sage-200",
      video: true,
    },
    {
      type: "media",
      author: "Anonymous",
      location: "",
      tone: "bg-stone-300",
      video: false,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-6 bg-stone-900 text-stone-50 overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sage-400 mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-50 text-balance">
            Hear What My Clients <br className="hidden md:block" />
            Say About Me
          </h2>
        </div>

        {/* CSS columns masonry: items pack vertically, no gaps */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
          {items.map((item, index) => (
            <div key={`${item.author}-${index}`} className="mb-4 md:mb-5">
              {item.type === "text" ? (
                <TextCard item={item} index={index} />
              ) : (
                <MediaCard item={item} index={index} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
