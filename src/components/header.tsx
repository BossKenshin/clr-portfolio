'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

type HeaderProps = {
  name: string;
};

const navLinks = [
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

export function Header({ name }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'border-border bg-background/95 backdrop-blur' : 'border-transparent bg-background'}`}>
      <div className="container flex h-16 items-center">
        <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-bold">{initials}</span>
          </div>
          <span className="hidden font-headline font-bold sm:inline-block">{name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems}
        </nav>
        <div className="ml-auto flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="font-bold">{initials}</span>
                  </div>
                  <span className="sr-only">{name}</span>
                </Link>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
