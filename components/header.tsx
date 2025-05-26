"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { 
    label: 'Home', 
    href: '#home' 
  },
  {
    label: 'Project Scope',
    href: '#project-scope',
    children: [
      { label: 'Literature Review', href: '#project-scope' },
      { label: 'Research Gap', href: '#project-scope' },
      { label: 'Research Problem and Solution', href: '#project-scope' },
      { label: 'Research Objectives', href: '#project-scope' },
      { label: 'Methodology', href: '#project-scope' },
      { label: 'Technologies', href: '#project-scope' },
      { label: 'References', href: '#project-scope' },
    ]
  },
  { 
    label: 'Milestones', 
    href: '#milestones' 
  },
  {
    label: 'Downloads',
    href: '#downloads',
    children: [
      { label: 'Documents', href: '#downloads' },
      { label: 'Presentations', href: '#downloads' },
    ]
  },
  { 
    label: 'About Us', 
    href: '#about-us' 
  },
  { 
    label: 'Achievements', 
    href: '#achievements' 
  },
  { 
    label: 'Contact Us', 
    href: '#contact-us' 
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    if (item.children) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary">
            {item.label}
            <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.children.map((child) => (
              <DropdownMenuItem key={child.href}>
                <Link href={child.href} className="w-full">
                  {child.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link 
        href={item.href}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          "hover:bg-secondary hover:text-secondary-foreground"
        )}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center">
          <img src="/miniblocks logo.png" alt="Project Logo" className="h-8 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background p-4 border-b">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <div className="px-3 py-2 font-medium">{item.label}</div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 rounded-md text-sm hover:bg-secondary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}