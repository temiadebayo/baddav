import { Carousel } from "@/components/carousel";
import { WorksSection } from "@/components/works-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main>
      <Carousel />
      <WorksSection />
      <AboutSection />
    </main>
  );
}
