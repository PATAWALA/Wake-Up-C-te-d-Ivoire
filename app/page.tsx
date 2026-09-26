import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ProgramsSection from "@/components/ProgramsSection"; // formations
import EventsSection from "@/components/EventsSection";     // conférences
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
        <EventsSection />
        <QuickRegister />
        <NewsSection />
      </main>
      <Footer />
      <StickyBottomBar />
    </>
  );
}