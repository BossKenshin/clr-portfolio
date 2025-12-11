import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import placeholder from "@/lib/placeholder-images.json"

type HeroSectionProps = {
  basics: PortfolioData['basics'];
};

export function HeroSection({ basics }: HeroSectionProps) {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                {basics.name}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate Full Stack Developer with experience in building web and mobile applications using modern technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row flex-wrap">
              <a href="#contact">
                <Button>Contact Me</Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${basics.email}`} className="hover:underline">{basics.email}</a>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{basics.phone}</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{basics.location.address}</span>
                </div>
            </div>
          </div>
          <Image
            src={placeholder.placeholderImages.find(p => p.id === 'hero-image')?.imageUrl || "https://picsum.photos/seed/1/600/600"}
            data-ai-hint="developer portrait"
            width={600}
            height={600}
            alt="Christian Lawrence Rosales"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
