import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Project</h3>
            <p className="text-muted-foreground">
              Transforming ideas into reality through innovation and dedication.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#project-scope" className="text-muted-foreground hover:text-foreground transition-colors">
                  Project Scope
                </Link>
              </li>
              <li>
                <Link href="#downloads" className="text-muted-foreground hover:text-foreground transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#contact-us" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}