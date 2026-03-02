'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#connect', label: 'Connect' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col text-stone-900 hover:text-sage-600 transition-colors">
          <span className="font-serif text-2xl md:text-3xl tracking-wide">
            KEZIAH VERGHESE
          </span>
          <span className="text-[10px] md:text-xs font-medium tracking-widest text-stone-500 uppercase mt-0.5">
            Psychologist
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest text-stone-800 hover:text-sage-600 transition-colors relative group"
            >
              {link.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="http://wa.me/919361777322"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-900 text-stone-50 px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-sage-600 transition-colors shadow-lg shadow-stone-900/10"
          >
            BOOK A SESSION
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-stone-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-stone-200 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-lg font-serif tracking-wide text-stone-900 hover:text-sage-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="http://wa.me/919361777322"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-stone-50 px-6 py-4 rounded-full text-center text-sm font-medium tracking-wide hover:bg-sage-600 transition-colors mt-4"
              >
                BOOK A SESSION
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

