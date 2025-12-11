import type { PortfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Code } from 'lucide-react';

type SkillsSectionProps = {
  skills: PortfolioData['skills'];
  title: string;
};

export function SkillsSection({ skills, title }: SkillsSectionProps) {
  const validSkills = skills.filter(s => s.name && s.keywords.some(k => k));
  if (validSkills.length === 0) return null;

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The technologies and tools I'm proficient with.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {validSkills.map((skillGroup, index) => (
            <CardGlass key={index} className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardGlassHeader className='flex-row items-center gap-4'>
                <div className="rounded-full bg-accent/20 p-3">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <CardGlassTitle className="font-headline text-lg">{skillGroup.name}</CardGlassTitle>
              </CardGlassHeader>
              <CardGlassContent className="flex flex-wrap gap-2">
                {skillGroup.keywords.filter(k => k).map((keyword, kIndex) => (
                  <Badge key={kIndex} variant="secondary" className="text-sm transition-transform hover:scale-110">{keyword}</Badge>
                ))}
              </CardGlassContent>
            </CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
