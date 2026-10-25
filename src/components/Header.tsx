import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { CLIENT_PROFILE } from '../content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'How I Work', href: '/#how-i-work' },
    { label: 'Certifications', href: '/#certifications' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF8F0]/90 backdrop-blur-md shadow-sm border-b border-[#E6D7C5]/50 py-3.5'
          : 'bg-[#FFF8F0] py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-decoration-none focus:outline-none"
            aria-label="Great Iniobong Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#E07A5F] text-[#FFF8F0] flex items-center justify-center font-serif text-xl font-bold transition-transform group-hover:scale-105 shadow-sm">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#3D2C24] leading-tight group-hover:text-[#E07A5F] transition-colors">
                {CLIENT_PROFILE.name}
              </span>
              <span className="text-xs text-[#6B564D] font-normal">
                Virtual Assistant & Admin
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#6B564D] hover:text-[#3D2C24] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E07A5F] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CLIENT_PROFILE.resumeUrl}
              download="Great-Iniobong-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6D7C5] bg-[#F4E9DC]/60 hover:bg-[#F4E9DC] text-sm font-medium text-[#3D2C24] transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
              aria-label="Download Great Iniobong Resume PDF"
            >
              <FileDown className="w-4 h-4 text-[#E07A5F]" />
              <span>Download resume</span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E07A5F] hover:bg-[#C85F44] text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#3D2C24] hover:bg-[#F4E9DC] transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden pt-4 pb-6 mt-3 border-t border-[#E6D7C5]/60 bg-[#FFF8F0] space-y-3"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-base font-medium text-[#3D2C24] hover:bg-[#F4E9DC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#E6D7C5]/50 flex flex-col gap-2.5">
              <a
                href={CLIENT_PROFILE.resumeUrl}
                download="Great-Iniobong-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#E6D7C5] bg-[#F4E9DC] text-sm font-medium text-[#3D2C24]"
              >
                <FileDown className="w-4 h-4 text-[#E07A5F]" />
                <span>Download resume</span>
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#E07A5F] text-white text-sm font-medium shadow-sm"
              >
                <span>Book a paid trial task</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
