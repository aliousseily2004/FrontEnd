import Cta from "@/components/CTA/Cta";
import FeaturedCourses from "@/components/featuredCourses/FeaturedCourses";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex 1 flex-col bg-background">
      {" "}
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <FeaturedCourses />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
