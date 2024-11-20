import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/home-sections/AboutMe";
import { Contact } from "@/components/home-sections/Contact";
import { Experience } from "@/components/home-sections/Experience";
import { Hero } from "@/components/home-sections/Hero";
import { Skill } from "@/components/home-sections/Skill";
import { NavBottom } from "@/components/NavBottom";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skill />
      <Experience />
      <Contact />
      <NavBottom />
      <Footer />
    </>
  );
}
