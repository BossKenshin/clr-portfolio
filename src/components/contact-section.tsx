import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Github, Mail, MapPin, Phone } from 'lucide-react';

type ContactSectionProps = {
  basics: PortfolioData['basics'];
};

export function ContactSection({ basics }: ContactSectionProps) {
  const contacts = [
    { icon: Mail, label: 'Email', value: basics.email, href: `mailto:${basics.email}`, action: 'Send Email' },
    { icon: Phone, label: 'Phone', value: basics.phone, href: `tel:${basics.phone.replace(/\s/g, '')}`, action: 'Call' },
    { icon: Github, label: 'GitHub', value: 'github.com/BossKenshin', href: basics.githubUrl ?? '#', action: 'Open Profile' },
  ];

  return (
    <section id="contact" className="section-panel border-t border-border/60 bg-foreground text-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-background/70">Contact</p>
            <h2 className="font-headline text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Let&apos;s build something together.</h2>
            <p className="max-w-xl text-base leading-8 text-background/75">
              I’m available for full-time, contract, or high-trust product engineering work where polished execution matters.
            </p>
            <div className="flex items-center gap-3 pt-2 text-sm text-background/80">
              <MapPin className="h-4 w-4" />
              <span>{basics.location.address}</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <div key={contact.label} className="rounded-[22px] border border-background/20 bg-background/10 p-5 backdrop-blur-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-background/20 bg-background/10 text-background">
                  <contact.icon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-background/70">{contact.label}</p>
                <p className="mt-2 break-words text-sm leading-7 text-background">{contact.value}</p>
                <Button asChild className="mt-5 w-full rounded-full border-background/20 bg-background text-foreground hover:bg-background/90" variant="outline">
                  <a href={contact.href}>{contact.action}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
