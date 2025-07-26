import ResumeViewButton from "@/components/ResumeViewButton";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { FooterSection } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <main>
      <div className="">
        <Header/>
        <ResumeViewButton/>
        <HeroSection/>
        <ProjectsSection/>
        <TapeSection/>
        <AboutSection/>
        <ContactSection/>
        <FooterSection/>
      </div>
    </main>
  );
}
