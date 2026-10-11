import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWorks from "@/components/SelectedWorks";
import VisualDesign from "@/components/VisualDesign";
import Capability from "@/components/Capability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectIndex from "@/components/ProjectIndex";
import PortfolioMotion from "@/components/PortfolioMotion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <a href="#works" className="skip-link">프로젝트로 바로 가기</a>
      <PortfolioMotion />
      <Header />
      <Hero />
      <About />
      <ProjectIndex />
      <SelectedWorks />
      <VisualDesign />
      <Capability />
      <Contact />
      <Footer />
    </main>
  );
}
