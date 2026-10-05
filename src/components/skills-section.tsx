import type { PortfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Code2 } from 'lucide-react';

type SkillsSectionProps = {
  skills: PortfolioData['skills'];
  title: string;
};

export function SkillsSection({ skills, title }: SkillsSectionProps) {
  const validSkills = skills.filter((s) => s.name && s.keywords.some(Boolean));
  if (validSkills.length === 0) return null;

  return (
    <section id="skills" className="section-panel border-t border-border/60 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker">Technical Skills</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy mt-4">
              A practical stack built for production systems, API integrations, and dependable user-facing applications.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {validSkills.map((skillGroup) => (
              <CardGlass key={skillGroup.name} className="flex min-h-56 flex-col">
                <CardGlassHeader className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <CardGlassTitle className="font-headline text-lg">{skillGroup.name}</CardGlassTitle>
                </CardGlassHeader>
                <CardGlassContent className="flex flex-wrap gap-2">
                  {skillGroup.keywords.filter(Boolean).map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/80">
                      {keyword}
                    </Badge>
                  ))}
                </CardGlassContent>
              </CardGlass>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
