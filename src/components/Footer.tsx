import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="relative z-10 border-t border-cyan-500/20 bg-[#06080d] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-heading font-bold text-white text-base">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              AI & DS
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Designed &amp; Built by <span className="text-cyan-300 font-medium">{PERSONAL_INFO.name}</span>
          </p>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            Turning Ideas Into Intelligent Digital Experiences.
          </p>
        </div>

        {/* Social Links from Resume */}
        <div className="flex items-center gap-4">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            id="footer-email-link"
            href={PERSONAL_INFO.socials.email}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Scroll to Top Button */}
          <button
            id="footer-scroll-top-btn"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition-all shadow-sm"
            title="Return to Top"
            aria-label="Return to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
