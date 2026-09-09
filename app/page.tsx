import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWorks from "@/components/SelectedWorks";
import VisualDesign from "@/components/VisualDesign";
import Capability from "@/components/Capability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SelectedWorks />
      <VisualDesign />
      <Capability />
      <Contact />
      <Footer />
    </main>
  );
}
