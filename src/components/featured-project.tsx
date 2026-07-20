import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="border-b border-border/60"
    >
      <div className="container px-4 py-20 md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">Featured Project</p>
            <h2 className="font-headline text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Manual Maestro
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              A browser-based documentation builder with live preview and one-click export to PDF and PowerPoint.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <a href="https://manual-maestro.vercel.app/" target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="https://github.com/BossKenshin/studio" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 rounded-[28px] border border-border bg-card p-4 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-6 lg:p-8">
          <div className="overflow-hidden rounded-[20px] border border-border">
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
              width={1200}
              height={800}
              alt="Manual Maestro interface preview"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">What it does</p>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                Built for fast-moving teams, the app combines structured content authoring, a live preview experience, and export workflows that make documentation feel as polished as the product itself.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PDF Export', 'PowerPoint Export'].map((tool) => (
                  <span key={tool} className="rounded-full border border-border px-3 py-1 text-sm text-foreground/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-border bg-background p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Engineering Notes</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>• Designed an interface that prioritizes clarity, speed, and content hierarchy.</li>
                <li>• Focused on a frictionless export workflow for presentation-ready output.</li>
                <li>• Built with a polished and maintainable frontend foundation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
