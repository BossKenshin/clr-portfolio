import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Mail, MapPin, Phone } from 'lucide-react';

type HeroSectionProps = {
  basics: PortfolioData['basics'];
};

export function HeroSection({ basics }: HeroSectionProps) {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="container px-4 py-20 md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">Full Stack Developer</p>
              <h1 className="font-headline text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-7xl">
                Christian Lawrence Rosales
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Building scalable software, modern web applications, mobile experiences, and cloud infrastructure with a product-minded approach.
              </p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              Based in Cebu, Philippines, I focus on clean architecture, reliable systems, and thoughtful interfaces that feel effortless to use.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={basics.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Current Focus</span>
                <span className="text-sm font-medium text-foreground">Senior-level craft</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] border border-border p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Stack</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">Javascript, Java, Laravel, Flutter, AWS</p>
                </div>
                <div className="rounded-[18px] border border-border p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Specialty</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">Business systems, APIs, databases, cloud deployment</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-border pt-4 text-sm text-muted-foreground">
                <a href={`mailto:${basics.email}`} className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{basics.email}</span>
                </a>
                <a href={`tel:${basics.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{basics.phone}</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span>{basics.location.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
