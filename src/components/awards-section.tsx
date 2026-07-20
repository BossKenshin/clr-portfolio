'use client';

import type { PortfolioData } from '@/lib/portfolio-data';
import { CardGlass, CardGlassContent, CardGlassHeader, CardGlassTitle } from '@/components/card-glass';
import { Award, Calendar, Eye } from 'lucide-react';
import { CardDescription } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';

type AwardsSectionProps = {
  awards: PortfolioData['awards'];
  title: string;
};

export function AwardsSection({ awards, title }: AwardsSectionProps) {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <section id="awards" className="section-panel border-t border-border/60">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker">Credentials</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy mt-4">A concise record of recognition and practical technical validation.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {awards.map((award) => (
              <CardGlass key={`${award.title}-${award.date}`} className="flex flex-col">
                <CardGlassHeader className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <CardGlassTitle className="font-headline text-lg">{award.title}</CardGlassTitle>
                    <CardDescription>{award.awarder}</CardDescription>
                  </div>
                </CardGlassHeader>
                <CardGlassContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-7 text-muted-foreground">{award.summary}</p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{award.date}</span>
                    </div>
                    {award.iframeUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="rounded-full">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="h-4/5 w-full max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{award.title}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 h-full w-full">
                            <iframe src={award.iframeUrl} className="h-full w-full border-0" title={award.title} />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
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
