import React, { useState, useRef } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  Layers, 
  Search, 
  Sliders, 
  MessageSquareCode,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3D Tilt state for featured project card
  const featuredCardRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.5s ease-out'
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!featuredCardRef.current) return;
    const rect = featuredCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out'
    });
  };

  const handleOpenDetail = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const featuredProject = PROJECTS_DATA.find(p => p.featured) || PROJECTS_DATA[0];
  const otherProjects = PROJECTS_DATA.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // CODE ARTIFACTS & INNOVATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            Real-world machine learning architectures, computer vision forensics, and predictive software solutions.
          </p>
        </div>

        {/* Featured Project: AI Fake Certificate Detection */}
        <div
          ref={featuredCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
          className="mb-14 rounded-3xl p-6 sm:p-10 bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden group"
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Project Details & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-400 text-slate-950 uppercase tracking-wider">
                    FLAGSHIP PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {featuredProject.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight mb-3">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Key Metrics Pill Badges */}
                {featuredProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    {featuredProject.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <span className="text-lg font-bold font-mono text-cyan-300 mt-0.5">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Highlights */}
                <div className="space-y-2.5 mb-8">
                  {featuredProject.keyHighlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-cyan-200 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  id="featured-live-demo-btn"
                  onClick={() => handleOpenDetail(featuredProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <Search className="w-4 h-4" />
                  <span>Inspect AI Sandbox</span>
                </button>

                <a
                  id="featured-github-btn"
                  href={featuredProject.githubUrl || "https://github.com/aadhipradhap"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-100 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>

            {/* Right: Futuristic SVG Illustration / Forensics Visualizer */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/30 p-4 sm:p-6 shadow-2xl">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                      CV FORENSIC SCANNER v2.4
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                    REALTIME
                  </span>
                </div>

                {/* SVG Visual Illustration of Certificate Inspection */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center overflow-hidden">
                  
                  {/* Cyber Grid in SVG */}
                  <svg className="w-full h-full" viewBox="0 0 360 260">
                    <defs>
                      <linearGradient id="certGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="laserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Certificate Paper Base */}
                    <rect x="30" y="25" width="300" height="210" rx="8" fill="url(#certGrad)" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
                    <rect x="40" y="35" width="280" height="190" rx="4" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="6 4" />

                    {/* Certificate Header Bar */}
                    <line x1="60" y1="55" x2="200" y2="55" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    <line x1="60" y1="68" x2="150" y2="68" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

                    {/* Hologram Emblem */}
                    <circle cx="270" cy="65" r="18" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                    <circle cx="270" cy="65" r="12" fill="#0369a1" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1" />
                    <polygon points="270,55 278,65 270,75 262,65" fill="#38bdf8" fillOpacity="0.5" />

                    {/* Text Lines */}
                    <line x1="60" y1="95" x2="300" y2="95" stroke="#475569" strokeWidth="2" />
                    <line x1="60" y1="110" x2="280" y2="110" stroke="#475569" strokeWidth="2" />
                    <line x1="60" y1="125" x2="250" y2="125" stroke="#475569" strokeWidth="2" />

                    {/* Highlighted Tampering Bounding Box */}
                    <rect x="55" y="140" width="160" height="35" rx="4" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="62" y="153" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold">TAMPER LOCALIZATION [ELA]</text>
                    <line x1="62" y1="165" x2="195" y2="165" stroke="#ef4444" strokeWidth="2" />

                    {/* QR Code Graphic at bottom right */}
                    <rect x="250" y="145" width="45" height="45" rx="4" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
                    <rect x="255" y="150" width="12" height="12" fill="#38bdf8" />
                    <rect x="278" y="150" width="12" height="12" fill="#38bdf8" />
                    <rect x="255" y="173" width="12" height="12" fill="#38bdf8" />
                    <circle cx="282" cy="177" r="3" fill="#10b981" />

                    {/* Laser Scanning Line Animation */}
                    <rect x="20" y="80" width="320" height="2" fill="#06b6d4" filter="drop-shadow(0 0 8px #06b6d4)" />
                  </svg>

                  {/* Laser sweep animation overlay */}
                  <div className="absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_12px_#06b6d4] animate-bounce pointer-events-none opacity-80" />

                </div>

                {/* Forensic Status Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <span>Optical Anomaly Detected</span>
                  </div>
                  <span className="text-slate-400">Confidence: 98.4%</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-2xl p-6 sm:p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Decorative SVG Header Graphic */}
                <div className="h-44 w-full rounded-xl bg-slate-950 border border-slate-800 mb-6 p-4 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {project.id === 'predictive-data-visualizer' ? (
                    <svg className="w-full h-full" viewBox="0 0 300 150">
                      {/* Grid */}
                      <line x1="30" y1="20" x2="30" y2="130" stroke="#334155" strokeWidth="1" />
                      <line x1="30" y1="130" x2="280" y2="130" stroke="#334155" strokeWidth="1" />
                      
                      {/* Bar charts */}
                      <rect x="50" y="70" width="16" height="60" rx="3" fill="#0284c7" opacity="0.8" />
                      <rect x="80" y="45" width="16" height="85" rx="3" fill="#06b6d4" opacity="0.9" />
                      <rect x="110" y="85" width="16" height="45" rx="3" fill="#0284c7" opacity="0.8" />
                      <rect x="140" y="30" width="16" height="100" rx="3" fill="#38bdf8" />
                      <rect x="170" y="60" width="16" height="70" rx="3" fill="#06b6d4" opacity="0.9" />
                      
                      {/* Trend line */}
                      <path d="M 58 65 Q 100 20, 148 25 T 260 40" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                      <circle cx="148" cy="25" r="4" fill="#a855f7" />
                      <circle cx="260" cy="40" r="4" fill="#38bdf8" />
                    </svg>
                  ) : (
                    <svg className="w-full h-full" viewBox="0 0 300 150">
                      {/* NLP Chat Vector Graphic */}
                      <rect x="30" y="25" width="160" height="50" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
                      <text x="45" y="45" fill="#38bdf8" fontSize="10" fontFamily="monospace">Query: Prerequisites?</text>
                      <line x1="45" y1="58" x2="160" y2="58" stroke="#475569" strokeWidth="2" />
                      
                      <rect x="110" y="85" width="160" height="50" rx="8" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1" />
                      <text x="125" y="105" fill="#c084fc" fontSize="10" fontFamily="monospace">AI: Data Structures & ML</text>
                      <line x1="125" y1="118" x2="240" y2="118" stroke="#6b21a8" strokeWidth="2" />
                    </svg>
                  )}
                  
                  <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-700">
                    {project.category}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-cyan-400">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => handleOpenDetail(project)}
                  className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1.5"
                >
                  <span>Project Specs & Telemetry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl || "https://github.com/aadhipradhap"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail & Inspection Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
