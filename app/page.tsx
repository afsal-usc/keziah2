import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
        <HeroSection />
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
