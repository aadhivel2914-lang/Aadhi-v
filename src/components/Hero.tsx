import React, { useState } from 'react';
import { 
  ArrowDown, 
  FileDown, 
  Mail, 
  Sparkles, 
  BrainCircuit, 
  Database, 
  Code2, 
  Globe, 
  Terminal as TerminalIcon,
  ShieldCheck,
  Upload
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Developer Info & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Status Chip */}
          <div
            id="hero-status-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
            <span className="text-[11px] uppercase tracking-widest font-semibold">
              SYSTEM ONLINE // AI & DATA SCIENCE
            </span>
          </div>

          {/* Heading & Subtitles */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-3">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
          </h1>

          <h2 className="text-lg sm:text-2xl font-medium text-cyan-300/90 font-heading mb-4 flex items-center gap-2">
            <span>{PERSONAL_INFO.degree}</span>
          </h2>

          {/* Main Tagline */}
          <div className="relative pl-4 border-l-2 border-cyan-400/80 mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-100 italic font-heading tracking-wide">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>

          {/* Short Professional Introduction from Resume */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
            An AI & Data Science specialist combining statistical modeling, computer vision forensics, and modern software architectures to engineer scalable, real-world intelligent applications. Creator of automated forensic verification tools and predictive decision engines.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              id="hero-view-projects-btn"
              href="#projects"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 text-slate-950" />
            </a>

            <div className="flex items-center gap-2">
              <a
                id="hero-download-resume-btn"
                href={PERSONAL_INFO.resumePath}
                download="Aadhipradhap_V_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-100 bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800/90 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                id="hero-view-resume-modal-btn"
                onClick={onOpenResumeModal}
                title="Preview resume document"
                className="hidden sm:inline-flex items-center justify-center p-3.5 rounded-xl text-slate-300 bg-slate-900/60 border border-slate-700/60 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-xs font-mono">Preview</span>
              </button>
            </div>

            <a
              id="hero-contact-me-btn"
              href="#contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-900/50 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-6 border-t border-slate-800/80">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>
                <span className="text-sm font-semibold text-cyan-200 mt-0.5">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Futuristic Circular/Rounded Profile Frame */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Main Avatar Container with Glow & Cyber Rings */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Ambient Radial Backlight */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-violet-600/25 blur-2xl animate-pulse-subtle" />

            {/* Outer Digital Rotating Ring (Counter-Clockwise) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none">
              <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_8px_#8b5cf6]" />
            </div>

            {/* Middle Rotating Tech Ring with Measurement Ticks */}
            <div className="absolute inset-3 sm:inset-4 rounded-full border border-violet-500/30 animate-spin-reverse-slow pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="96"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="24 16"
                />
              </svg>
            </div>

            {/* Subtle Floating AI Particles (Decorative Nodes) */}
            <div className="absolute -top-3 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <div className="absolute top-1/4 -right-2 w-2.5 h-2.5 bg-violet-400 rounded-full animate-pulse" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-sky-300 rounded-full animate-bounce" />

            {/* Profile Frame (Never distort image: circular frame with object-cover) */}
            <div
              id="hero-profile-frame"
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-b from-cyan-400 via-sky-500 to-violet-600 shadow-[0_0_40px_rgba(6,182,212,0.35)] z-20 group"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-slate-900 relative">
                
                {/* Profile Image Element with Exact Path Requirement */}
                <img
                  id="hero-profile-image"
                  src={customPhotoUrl || PERSONAL_INFO.profileImage}
                  alt="Aadhipradhap V. Profile"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar placeholder if file is missing
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='100%' height='100%' fill='%230b1220'/><circle cx='200' cy='150' r='60' fill='%230284c7' opacity='0.7'/><path d='M100 320 C100 240, 300 240, 300 320 Z' fill='%230369a1' opacity='0.7'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' fill='%23e0f2fe' font-family='sans-serif' font-size='22' font-weight='bold'>AV</text></svg>";
                  }}
                />

                {/* Subtle cyber scanline sweep */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />

                {/* Corner cyber reticle marks */}
                <div className="absolute inset-0 border border-cyan-400/20 rounded-full pointer-events-none" />
              </div>
            </div>

            {/* Floating Cyber Badge: AI */}
            <div className="absolute -top-1 sm:top-1 right-2 sm:right-6 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-float-slow">
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-cyan-200 tracking-wider">AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Floating Cyber Badge: DATA */}
            <div className="absolute bottom-4 sm:bottom-6 -right-2 sm:right-2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-violet-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.3)] animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <Database className="w-3.5 h-3.5 text-violet-400" />
              <span className="text-xs font-mono font-bold text-violet-200 tracking-wider">DATA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            </div>

            {/* Floating Cyber Badge: CODE */}
            <div className="absolute bottom-2 sm:bottom-4 -left-2 sm:left-2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-float-slow" style={{ animationDelay: '2.4s' }}>
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-emerald-200 tracking-wider">CODE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Floating Cyber Badge: WEB */}
            <div className="absolute top-2 sm:top-4 -left-2 sm:left-4 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-sky-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.3)] animate-float-slow" style={{ animationDelay: '3.6s' }}>
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-mono font-bold text-sky-200 tracking-wider">WEB</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            </div>

          </div>

          {/* Profile Picture Information / Interactive Test Trigger */}
          <div className="mt-5 flex items-center gap-3 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900/70 px-3 py-1 rounded-md border border-slate-800">
              <span className="text-cyan-400">Source:</span>
              <span>/public/assets/profile.jpg</span>
            </div>
            
            {/* Quick in-browser preview helper */}
            <label
              htmlFor="profile-image-upload"
              className="cursor-pointer inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/30 hover:border-cyan-400 transition-colors"
              title="Preview with your photo file directly"
            >
              <Upload className="w-3 h-3" />
              <span>Test Photo</span>
              <input
                id="profile-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>

        </div>

      </div>
    </section>
  );
};
