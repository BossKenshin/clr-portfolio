import type { PortfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { CardDescription } from './ui/card';
import { Briefcase } from 'lucide-react';

type ExperienceSectionProps = {
  work: PortfolioData['work'];
  title: string;
};

export function ExperienceSection({ work, title }: ExperienceSectionProps) {
  const validWork = work.filter(w => w.company && w.position);
  if (validWork.length === 0) return null;

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and accomplishments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl justify-items-center gap-8 py-12">
          {validWork.map((job, index) => (
            <CardGlass key={index} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full">
              <CardGlassHeader className='grid grid-cols-[auto_1fr] items-start gap-4 space-y-0'>
                <div className="rounded-full bg-accent/20 p-3">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-1">
                    <CardGlassTitle className='font-headline'>{job.position}</CardGlassTitle>
                    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
                      <CardDescription>{job.company}</CardDescription>
                      <Badge variant="outline">{job.startDate} - {job.endDate}</Badge>
                    </div>
                </div>
              </CardGlassHeader>
              <CardGlassContent className='pl-[76px]'>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {job.highlights.filter(h => h).map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </CardGlassContent>
            </CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
