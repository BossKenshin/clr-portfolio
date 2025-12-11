import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassDescription, CardGlassHeader, CardGlassTitle, CardGlassFooter } from '@/components/card-glass';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

type ProjectsSectionProps = {
  projects: PortfolioData['projects'];
  title: string;
};

export function ProjectsSection({ projects, title }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Some of my recent work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <CardGlass key={index} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardGlassHeader>
                <CardGlassTitle className="font-headline">{project.name}</CardGlassTitle>
                <CardGlassDescription>{project.description}</CardGlassDescription>
              </CardGlassHeader>
              <CardGlassContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.keywords.filter(k => k).map((keyword, kIndex) => (
                    <Badge key={kIndex} variant="secondary">{keyword}</Badge>
                  ))}
                </div>
              </CardGlassContent>
              <CardGlassFooter>
                {project.url && (
                  <Button asChild variant="link" className="p-0 h-auto text-accent">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardGlassFooter>
            </CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
