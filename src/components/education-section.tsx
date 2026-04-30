import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

type EducationSectionProps = {
  education: PortfolioData['education'];
};

export function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="section-panel bg-secondary/45">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Academic Foundation</h2>
            <p className="section-copy mt-4">Formal training that supports my software engineering path.</p>
          </div>
          <div className="grid gap-5">
            {education.map((edu) => (
              <CardGlass key={edu.institution}>
                <CardGlassHeader className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardGlassTitle className="font-headline text-xl">{edu.institution}</CardGlassTitle>
                    <p className="mt-1 text-muted-foreground">{edu.studyType} {edu.area}</p>
                  </div>
                </CardGlassHeader>
                <CardGlassContent className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{edu.location}</span>
                  </div>
                </CardGlassContent>
              </CardGlass>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
