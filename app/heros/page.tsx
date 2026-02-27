import Hero8 from "@/components/heros/Hero8";
import Hero10 from "@/components/heros/Hero10";
import Hero12 from "@/components/heros/Hero12";

export const metadata = {
  title: "Hero variants — Keziah Verghese",
  description: "Choose your hero section layout.",
};

export default function HerosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero 8 */}
      <div className="relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
          Hero 8 — Diagonal ribbon
        </div>
        <Hero8 />
      </div>

      {/* Hero 10 */}
      <div className="relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-stone-900/90 text-white text-sm font-medium backdrop-blur-sm">
          Hero 10 — Layered collage
        </div>
        <Hero10 />
      </div>

      {/* Hero 12 */}
      <div className="relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
          Hero 12 — Quarter geometry
        </div>
        <Hero12 />
      </div>
    </div>
  );
}
