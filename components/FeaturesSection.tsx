import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    "You feel stuck in cycles of anxiety, hypervigilance, or emotional shutdown, unable to find your way back to calm and safety.",
    "Past experiences have left you feeling disconnected from yourself and struggling to trust others or build meaningful relationships.",
    "You carry the weight of trauma in your body—tension, pain, or numbness that won't go away no matter what you try.",
    "You long for a deeper sense of belonging and peace, but feel lost in the noise of daily life and disconnected from nature and yourself."
  ];

  return (
    <section className="py-0 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center md:justify-start py-12 md:py-0">
            <div className="relative w-full max-w-[350px] h-[450px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/therapy-session.jpg"
                alt="Therapy session - safe and supportive space"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="bg-sage text-white p-12 md:p-16 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-10">
              Sound familiar?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

