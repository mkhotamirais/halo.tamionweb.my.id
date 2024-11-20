import { AboutMe } from "@/components/home-sections/AboutMe";
import { Contact } from "@/components/home-sections/Contact";
import { Experience } from "@/components/home-sections/Experience";
import { Hero } from "@/components/home-sections/Hero";
import { Skill } from "@/components/home-sections/Skill";
import { NavBottom } from "@/components/NavBottom";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Experience />
      <Contact />
      <NavBottom />
    </>
  );
}
