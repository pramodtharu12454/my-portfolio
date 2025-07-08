import AboutSection from "@/components/navbar/About";
import ContactSection from "@/components/navbar/contact";
import Footer from "@/components/navbar/Footer";
import HomeSection from "@/components/navbar/Home";
import MouseParallax from "@/components/navbar/MouseParallax";
import Navbar from "@/components/navbar/Navbar";
import ProjectSection from "@/components/navbar/Project";
import SkillSection from "@/components/navbar/Skill";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full  backdrop-filter backdrop-blur-[10px] bg-[rgba(255,255,255,0.5)] blur-[10px] dark:backdrop-blur-[10px] object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative overflow-hidden">
        <MouseParallax />

        {/* rest of content */}
      </div>

      {/* ✅ Content */}
      <Navbar />
      <main className="pt-20 relative z-10 text-white">
        <HomeSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
