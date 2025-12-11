import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Award, Calendar } from 'lucide-react';
import { CardDescription } from './ui/card';

type AwardsSectionProps = {
  awards: PortfolioData['awards'];
  title: string;
};

export function AwardsSection({ awards, title }: AwardsSectionProps) {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <section id="awards" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Recognitions and certifications I've earned.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2">
          {awards.map((award, index) => (
            <CardGlass key={index} className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardGlassHeader className="flex-row items-center gap-4">
                <div className="rounded-full bg-accent/20 p-3">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <CardGlassTitle className="font-headline">{award.title}</CardGlassTitle>
                  <CardDescription>{award.awarder}</CardDescription>
                </div>
              </CardGlassHeader>
              <CardGlassContent className="flex-grow space-y-2">
                <p className="text-sm text-muted-foreground">{award.summary}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{award.date}</span>
                </div>
              </CardGlassContent>
            </CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
