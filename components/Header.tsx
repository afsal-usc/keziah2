'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-2xl tracking-wider cursor-pointer hover:text-sage transition-colors">
          KEZIAH VERGHESE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm tracking-wider hover:text-sage transition-colors">
            ABOUT
          </a>
          <a href="#services" className="text-sm tracking-wider hover:text-sage transition-colors">
            SERVICES
          </a>
          <a href="#testimonials" className="text-sm tracking-wider hover:text-sage transition-colors">
            TESTIMONIALS
          </a>
          <a href="#connect" className="text-sm tracking-wider hover:text-sage transition-colors">
            CONNECT
          </a>
          <a
            href="http://wa.me/919361777322"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-opacity-90 transition-all"
          >
            BOOK A SESSION
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a href="#about" onClick={closeMobileMenu} className="text-sm tracking-wider hover:text-sage transition-colors py-2">
              ABOUT
            </a>
            <a href="#services" onClick={closeMobileMenu} className="text-sm tracking-wider hover:text-sage transition-colors py-2">
              SERVICES
            </a>
            <a href="#testimonials" onClick={closeMobileMenu} className="text-sm tracking-wider hover:text-sage transition-colors py-2">
              TESTIMONIALS
            </a>
            <a href="#connect" onClick={closeMobileMenu} className="text-sm tracking-wider hover:text-sage transition-colors py-2">
              CONNECT
            </a>
            <a
              href="http://wa.me/919361777322"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-opacity-90 transition-all w-full text-center"
            >
              BOOK A SESSION
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

