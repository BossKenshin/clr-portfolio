'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

type HeaderProps = {
  name: string;
};

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
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
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'border-border bg-background/95 shadow-sm backdrop-blur' : 'border-transparent bg-background/85 backdrop-blur'}`}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="#" className="mr-4 flex min-w-0 items-center gap-3" prefetch={false}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="font-bold">{initials}</span>
          </div>
          <div className="hidden min-w-0 sm:block">
            <span className="block font-headline text-sm font-bold leading-tight">{name}</span>
            <span className="block text-xs text-muted-foreground">Application Developer</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">Hire / Contact</a>
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left">
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <span className="font-bold">{initials}</span>
                    </div>
                    <span className="font-headline font-bold">{name}</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
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
