import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

type ContactSectionProps = {
  basics: PortfolioData['basics'];
};

export function ContactSection({ basics }: ContactSectionProps) {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: basics.email,
      href: `mailto:${basics.email}`,
      action: 'Send Email',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: basics.phone,
      href: `tel:${basics.phone.replace(/\s/g, '')}`,
      action: 'Call',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: basics.location.address,
      href: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="section-panel bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Contact</p>
            <h2 className="font-headline text-3xl font-bold tracking-normal sm:text-4xl">Reach Me Directly</h2>
            <p className="max-w-2xl text-base leading-7 text-primary-foreground/75">
              No form needed. Recruiters and collaborators can contact me through the details below.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <div key={contact.label} className="rounded-2xl border border-white/10 bg-card p-5 text-card-foreground shadow-xl shadow-black/15">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <contact.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{contact.label}</p>
                <p className="mt-2 break-words font-medium">{contact.value}</p>
                {contact.href && contact.action && (
                  <Button asChild className="mt-5 w-full" variant="outline">
                    <a href={contact.href}>{contact.action}</a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
