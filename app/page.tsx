import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ProgramsSection from "@/components/ProgramsSection";
import QuickRegister from "@/components/QuickRegister";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactSection />
        <ProgramsSection />
        <QuickRegister />
        <NewsSection />
      </main>
      <Footer />
      <StickyBottomBar />
    </>
  );
}