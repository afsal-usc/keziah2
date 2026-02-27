"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Leaf } from "lucide-react";

/* ── Small decorative botanical SVG near the heading ────────── */
const BranchAccent = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 30 C30 25, 50 15, 80 12 C95 10, 105 12, 115 8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.35"
    />
    <ellipse
      cx="55"
      cy="14"
      rx="6"
      ry="10"
      transform="rotate(-15 55 14)"
      fill="currentColor"
      opacity="0.1"
    />
    <ellipse
      cx="85"
      cy="11"
      rx="5"
      ry="8"
      transform="rotate(-20 85 11)"
      fill="currentColor"
      opacity="0.08"
    />
    <circle cx="110" cy="9" r="1.5" fill="currentColor" opacity="0.15" />
  </svg>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "You feel stuck in cycles of anxiety, hypervigilance, or emotional shutdown.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Past experiences leave you disconnected from yourself and others.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Your body still carries trauma through tension, pain, or numbness.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      text: "You long for belonging, peace, and a grounded connection to life.",
    },
  ];

  return (
    <section
      className="py-24 px-6 overflow-hidden bg-[#E7E5E4]"
      // style={{
      //   background:
      //     "linear-gradient(180deg, var(--sage-100) 0%, var(--clay-100) 100%)",
      // }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900 text-balance">
                Does this sound{" "}
                <span className="italic text-sage-600">familiar</span>
              </h2>
              {/* <BranchAccent className="w-32 text-sage-500" /> */}
            </div>
            <div className="h-px w-32 bg-sage-400/50" />
            <p className="text-stone-600 text-lg leading-relaxed max-w-md">
              These are common experiences for people carrying unprocessed
              trauma. You are not broken — your nervous system is protecting
              you.
            </p>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-sage-200/60 group border-l-4 border-l-sage-400/40"
              >
                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-200 transition-colors">
                  {feature.icon}
                </div>
                <p className="text-stone-700 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
