import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Skills } from "@/components/sections/skills";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <ProjectsPreview />
      <ContactForm />
    </>
  );
}
