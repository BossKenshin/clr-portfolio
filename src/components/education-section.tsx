import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassHeader, CardGlassTitle, CardGlassContent } from '@/components/card-glass';
import { Briefcase, Calendar } from 'lucide-react';

type EducationSectionProps = {
  education: PortfolioData['education'];
};

export function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Education</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8">
          {education.map((edu, index) => (
            <CardGlass key={index} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardGlassHeader className="grid items-start gap-4 space-y-0">
                <div className="space-y-1">
                  <CardGlassTitle className="text-xl font-headline">{edu.institution}</CardGlassTitle>
                  <p className="text-muted-foreground">{edu.studyType} {edu.area}</p>
                </div>
              </CardGlassHeader>
              <CardGlassContent>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="hidden sm:block">|</div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </CardGlassContent>
            </CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
