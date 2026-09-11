import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-brand-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/30 via-slate-900 to-violet-600/30 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform group-hover:scale-105">
            <span className="font-heading font-bold text-cyan-300 text-sm tracking-wider">AV</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">
              Aadhipradhap V.
            </span>
            <span className="text-[11px] font-mono text-cyan-400/80 tracking-widest uppercase">
              AI & Data Science
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-cyan-500/20 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)] border border-cyan-400/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Terminal Quick Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-quick-terminal"
            href="#terminal"
            onClick={(e) => handleNavClick(e, '#terminal')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors shadow-sm"
            title="Open Aadhipradhap AI Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Shell</span>
          </a>

          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:scale-105 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="nav-resume-mobile-btn"
            onClick={onOpenResumeModal}
            className="p-2 rounded-lg text-cyan-400 bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400"
            aria-label="View Resume"
          >
            <FileDown className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 bg-slate-900/80 border border-cyan-500/20 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-cyan-500/20 p-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30'
                      : 'text-slate-300 hover:bg-slate-900/80 hover:text-cyan-300'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                id="mobile-terminal-link"
                href="#terminal"
                onClick={(e) => handleNavClick(e, '#terminal')}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Open Aadhipradhap AI Terminal</span>
              </a>

              <a
                id="mobile-direct-resume-download"
                href={PERSONAL_INFO.resumePath}
                download="Aadhipradhap_V_Resume.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
