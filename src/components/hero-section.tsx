import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import placeholder from "@/lib/placeholder-images.json"

type HeroSectionProps = {
  basics: PortfolioData['basics'];
};

export function HeroSection({ basics }: HeroSectionProps) {
  return (
    <section id="home" className="w-full pt-24 md:pt-32 lg:pt-48 xl:pt-64">
      <div className="container grid items-center justify-center px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 text-center lg:items-start lg:text-left">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-accent sm:text-5xl md:text-6xl xl:text-7xl/none">
                {basics.name}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate Full Stack Developer with experience in building web and mobile applications using modern technologies.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row flex-wrap justify-center lg:justify-start">
              <a href="#contact">
                <Button size="lg">Contact Me</Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="secondary">View My Work</Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-muted-foreground lg:justify-start">
                <div className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${basics.email}`} className="hover:underline">{basics.email}</a>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{basics.phone}</span>
                </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={placeholder.placeholderImages.find(p => p.id === 'hero-image')?.imageUrl || "https://picsum.photos/seed/1/600/600"}
              data-ai-hint="developer portrait"
              width={450}
              height={450}
              alt="Christian Lawrence Rosales"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full"
            />
          </div>
        </div>
        <div className="mt-16 flex justify-center text-muted-foreground animate-bounce">
          <a href="#education">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
