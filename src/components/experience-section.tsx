import type { PortfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { CardDescription } from './ui/card';
import { Briefcase, CheckCircle2 } from 'lucide-react';

type ExperienceSectionProps = {
  work: PortfolioData['work'];
  title: string;
};

export function ExperienceSection({ work, title }: ExperienceSectionProps) {
  const validWork = work.filter((w) => w.company && w.position);
  if (validWork.length === 0) return null;

  return (
    <section id="experience" className="section-panel">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="space-y-4">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">
              Practical production work across web platforms, mobile apps, APIs, databases, desktop tools, and AWS services.
            </p>
          </div>

          <div className="relative space-y-5 lg:before:absolute lg:before:left-6 lg:before:top-8 lg:before:h-[calc(100%-4rem)] lg:before:w-px lg:before:bg-border">
            {validWork.map((job) => (
              <div key={`${job.company}-${job.position}`} className="relative lg:pl-16">
                <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border bg-card text-accent shadow-sm lg:flex">
                  <Briefcase className="h-5 w-5" />
                </div>
                <CardGlass>
                  <CardGlassHeader className="space-y-3">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <CardGlassTitle className="font-headline text-xl">{job.position}</CardGlassTitle>
                        <CardDescription className="mt-1 text-base">{job.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit shrink-0">
                        {job.startDate} - {job.endDate}
                      </Badge>
                    </div>
                  </CardGlassHeader>
                  <CardGlassContent>
                    <ul className="grid gap-3">
                      {job.highlights.filter(Boolean).map((highlight, index) => (
                        <li key={index} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardGlassContent>
                </CardGlass>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
