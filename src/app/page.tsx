import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { AwardsSection } from "@/components/awards-section";
import { portfolioData } from "@/lib/portfolio-data";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, Cloud, Code2, Database, Smartphone } from "lucide-react";

function RecruiterSnapshot() {
  const highlights = [
    {
      icon: BriefcaseBusiness,
      label: "Current Focus",
      value: "Application Developer",
      copy: "Building and maintaining business systems for sales workflows, reporting, APIs, and operations.",
    },
    {
      icon: Code2,
      label: "Backend + Web",
      value: "PHP, Laravel, CodeIgniter",
      copy: "Comfortable with practical production code, database-heavy features, and maintainable web apps.",
    },
    {
      icon: Smartphone,
      label: "Mobile",
      value: "Flutter, Dart, Java",
      copy: "Experience with Android and Flutter applications connected to backend services.",
    },
    {
      icon: Cloud,
      label: "Infrastructure",
      value: "AWS, SQL, Git",
      copy: "Hands-on exposure to EC2, RDS, S3, Route 53, VPC, and relational database work.",
    },
  ];

  return (
    <section className="section-panel pt-8" aria-label="Recruiter snapshot">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{item.label}</p>
                  <h3 className="font-headline text-lg font-bold">{item.value}</h3>
                </div>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-5 flex max-w-6xl flex-wrap justify-center gap-2">
          {["Full-stack business systems", "REST APIs", "SQL reporting", "AWS deployment", "Mobile sales workflows"].map((item) => (
            <Badge key={item} variant="secondary" className="px-3 py-1">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { basics, work, skills, awards, projects, education, headings } = portfolioData;

  const validProjects = projects.filter(p => p.name && p.description);
  return (
    <div className="min-h-[100dvh] bg-background">
      <Header name={basics.name} />
      <main>
        <HeroSection basics={basics} />
        <RecruiterSnapshot />
        <ExperienceSection work={work} title={headings.work} />
        {validProjects.length > 0 && <ProjectsSection projects={validProjects} title={headings.projects} />}
        <SkillsSection skills={skills} title={headings.skills} />
        <EducationSection education={education} />
        <AwardsSection awards={awards} title={headings.awards} />
        <ContactSection basics={basics} />
      </main>
      <footer className="border-t bg-card py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <Separator className="mb-4" />
          <p>&copy; {new Date().getFullYear()} {basics.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
