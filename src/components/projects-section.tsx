import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassDescription, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Layers3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectsSectionProps = {
  projects: PortfolioData['projects'];
  title: string;
};

export function ProjectsSection({ projects, title }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="section-panel bg-secondary/45">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2 className="section-title">{title}</h2>
            </div>
           
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <CardGlass key={project.name} className="flex min-h-64 flex-col">
                <CardGlassHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Layers3 className="h-6 w-6" />
                  </div>
                  <CardGlassTitle className="font-headline text-xl">{project.name}</CardGlassTitle>
                  <CardGlassDescription className="text-sm leading-6">{project.description}</CardGlassDescription>
                </CardGlassHeader>
                <CardGlassContent className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.filter(Boolean).map((keyword) => (
                      <Badge key={keyword} variant="secondary">{keyword}</Badge>
                    ))}
                  </div>
                  {(project.url || project.githubUrl) && (
                    <div className="flex flex-wrap gap-2">
                      {project.url && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View App
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardGlassContent>
              </CardGlass>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
