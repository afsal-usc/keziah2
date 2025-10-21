import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-sm tracking-wider text-foreground/80">
              Hi, I'm Keziah.
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              I am a psychologist who believes healing begins in{' '}
              <em className="italic">safety and connection.</em>
            </h2>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
              <p>
                I believe healing begins when you feel truly seen, held, and not judged. Our work together goes beyond advice; 
                it's about understanding, growing and rediscovering who you are beneath the pain, patterns, and protective layers.
              </p>
              <p>
                My work is rooted in nervous system regulation, healing attachment wounds, and creating a secure sense of self. 
                My approach also brings in nature—because being in the woods or with trees can do something powerful to our nervous systems.
              </p>
              <p>
                It's a journey of coming home to yourself—of finding belonging, not just in the world, but in your own body and story.
              </p>
            </div>
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-opacity-90 transition-all mt-4"
            >
              BOOK A SESSION
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/keziah-about.jpg"
                alt="Keziah Verghese in nature"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

