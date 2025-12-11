import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { AwardsSection } from "@/components/awards-section";
import { ContactSection } from "@/components/contact-section";
import { portfolioData } from "@/lib/portfolio-data";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const { basics, work, skills, awards, projects, education, headings } = portfolioData;

  const validProjects = projects.filter(p => p.name && p.description);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header name={basics.name} />
      <main className="flex-1">
        <HeroSection basics={basics} />
        <EducationSection education={education} />
        <ExperienceSection work={work} title={headings.work} />
        <SkillsSection skills={skills} title={headings.skills} />
        {validProjects.length > 0 && <ProjectsSection projects={validProjects} title={headings.projects} />}
        <AwardsSection awards={awards} title={headings.awards} />
        <ContactSection />
      </main>
      <footer className="bg-primary py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <Separator className="mb-4" />
          <p>&copy; {new Date().getFullYear()} {basics.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
