import HeroSection from "@/components/hero-section"; // Asegúrate de importar correctamente
import { AboutPreview } from "@/components/about-preview";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import {Navbar} from "@/components/Navbar"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
