import { AboutPreview } from "@/components/about-preview";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer"; 

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutPreview />
      <FeaturedProjects />
      <Footer /> 
    </main>
  );
}
