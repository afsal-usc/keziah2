import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-foreground/80">
              TRAUMA FOCUSED THERAPIST AND COACH
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Are you ready to go from <br />
              <em className="italic">post traumatic stress</em> to <br />
              <em className="italic">post traumatic growth</em>
            </h1>
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-opacity-90 transition-all mt-8"
            >
              BOOK A SESSION
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/keziah-hero.jpg"
                alt="Keziah Verghese - Trauma Focused Therapist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

