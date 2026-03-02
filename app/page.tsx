import Header from "@/components/Header";
import Hero8 from "@/components/heros/Hero8";
import ProblemStatement from "@/components/ProblemStatement";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import ConnectSection from "@/components/ConnectSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero8 />
        <ServicesCarousel />
        <ProblemStatement />
        <FeaturesSection />
        <AboutSection />
        <TestimonialSection />
        <GallerySection />
        <ConnectSection />
      </main>
    </>
  );
}
