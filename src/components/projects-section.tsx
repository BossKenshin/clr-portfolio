import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassDescription, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Layers3, Sparkles } from 'lucide-react';
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
                  {project.hasphotos && project.highlights && project.highlights.length > 0 && (
                    <div className="rounded-xl border border-accent/15 bg-accent/5 p-3">
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        <Sparkles className="h-3.5 w-3.5 text-accent" />
                        Highlights
                      </div>
                      <ul className="space-y-2 text-sm leading-6 text-foreground/80">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {(project.url || project.githubUrl || project.hasphotos) && (
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
