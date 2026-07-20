import type { PortfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { CardDescription } from './ui/card';
import { ArrowRight, Briefcase } from 'lucide-react';

type ExperienceSectionProps = {
  work: PortfolioData['work'];
  title: string;
};

export function ExperienceSection({ work, title }: ExperienceSectionProps) {
  const validWork = work.filter((w) => w.company && w.position);
  if (validWork.length === 0) return null;

  return (
    <section id="experience" className="section-panel border-t border-border/60">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="space-y-4">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">
              Practical production work spanning web applications, mobile products, APIs, databases, desktop tooling, and cloud infrastructure.
            </p>
          </div>

          <div className="space-y-5">
            {validWork.map((job) => (
              <CardGlass key={`${job.company}-${job.position}`} className="p-0">
                <CardGlassHeader className="border-b border-border/60 px-6 py-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.company}
                      </div>
                      <CardGlassTitle className="mt-2 font-headline text-xl">{job.position}</CardGlassTitle>
                      <CardDescription className="mt-2 text-sm text-muted-foreground">{job.location}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit rounded-full border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/80">
                      {job.startDate} — {job.endDate}
                    </Badge>
                  </div>
                </CardGlassHeader>
                <CardGlassContent className="px-6 py-6">
                  <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                    {job.highlights.filter(Boolean).map((highlight, index) => (
                      <li key={index} className="flex gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardGlassContent>
              </CardGlass>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
