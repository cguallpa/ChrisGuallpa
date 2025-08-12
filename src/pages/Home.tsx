import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
export const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <Navbar />
        {/*Main Content*/}
        <main className="py-50 sm:py-50 lg:py-0">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
        </main>

        {/*About Section*/}
        {/*Skills Section*/}
        {/*Projects Section*/}
        {/*Contact Section*/}
        {/*Footer*/}
      </div>
    </>
  );
};
