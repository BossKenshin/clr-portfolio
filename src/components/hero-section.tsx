import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import placeholder from '@/lib/placeholder-images.json';

type HeroSectionProps = {
  basics: PortfolioData['basics'];
};

const strengths = [
  'Business systems',
  'Web + mobile apps',
  'SQL-heavy workflows',
  'AWS deployment support',
];

export function HeroSection({ basics }: HeroSectionProps) {
  const heroImage =
    placeholder.placeholderImages.find((p) => p.id === 'hero-image')?.imageUrl ||
    'https://picsum.photos/seed/1/600/600';

  return (
    <section id="home" className="relative overflow-hidden border-b bg-card">
      <div className="container px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-5 px-3 py-1">
              Open to Application Developer / Full-stack roles
            </Badge>
            <h1 className="font-headline text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              I build practical web, mobile, and desktop systems for real business operations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I am Christian Lawrence Rosales, an Application Developer in Cebu with hands-on experience across PHP,
              Laravel, CodeIgniter, Java, Flutter, Dart, C#, .NET, SQL, and AWS-backed systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#experience">
                  Review Experience <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${basics.email}`}>
                  <Mail className="h-4 w-4" /> Email Me
                </a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <a href={`mailto:${basics.email}`} className="flex items-center gap-2 rounded-lg border bg-background px-3 py-3 hover:text-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span className="truncate">{basics.email}</span>
              </a>
              <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>{basics.phone}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{basics.location.address}</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="rounded-2xl border bg-background p-3 shadow-2xl shadow-slate-950/10">
              <Image
                src={heroImage}
                width={560}
                height={620}
                alt="Christian Lawrence Rosales"
                priority
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-xl border bg-card p-4 shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <BriefcaseBusiness className="h-5 w-5 text-accent" />
                <p className="font-headline font-bold">Quick read</p>
              </div>
              <div className="grid gap-2">
                {strengths.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
