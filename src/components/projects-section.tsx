import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Layers3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectPhotoGallery } from '@/components/project-photo-gallery';

type ProjectsSectionProps = {
  projects: PortfolioData['projects'];
  title: string;
};

export function ProjectsSection({ projects, title }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="section-panel border-t border-border/60 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2 className="section-title">{title}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              A compact archive of systems built for operations, communication, and product delivery.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <CardGlass key={project.name} className="flex min-h-64 flex-col">
                <CardGlassHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <CardGlassTitle className="font-headline text-xl">{project.name}</CardGlassTitle>
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                </CardGlassHeader>
                <CardGlassContent className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.filter(Boolean).map((keyword) => (
                      <Badge key={keyword} variant="secondary" className="rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/80">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  {(project.url || project.githubUrl || project.hasphotos) && (
                    <div className="flex flex-wrap gap-2">
                      {project.url && (
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      <ProjectPhotoGallery project={project} />
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
