import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        {/* ADDED justify-items-center HERE */}
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-12 justify-items-center">
          <div className="space-y-4 text-center lg:text-left"> 
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="w-full"> 
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}