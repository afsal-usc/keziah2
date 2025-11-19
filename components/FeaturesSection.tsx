'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Zap, Leaf } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "You feel stuck in cycles of anxiety, hypervigilance, or emotional shutdown, unable to find your way back to calm and safety."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Past experiences have left you feeling disconnected from yourself and struggling to trust others or build meaningful relationships."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "You carry the weight of trauma in your body—tension, pain, or numbness that won't go away no matter what you try."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      text: "You long for a deeper sense of belonging and peace, but feel lost in the noise of daily life and disconnected from nature and yourself."
    }
  ];

  return (
    <section className="py-24 px-6 bg-stone-50">
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
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900">
              Does this sound <br />
              <span className="italic text-sage-500">familiar?</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-md leading-relaxed">
              Many of us carry invisible burdens that shape our daily reality. Recognizing these patterns is the first step toward healing.
            </p>
            <div className="h-px w-32 bg-sage-300" />
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group"
              >
                <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
                  {feature.icon}
                </div>
                <p className="text-stone-700 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

