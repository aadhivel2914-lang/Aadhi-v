import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Binary, 
  Terminal, 
  Cpu, 
  Globe, 
  Layout, 
  Zap, 
  FileSpreadsheet, 
  Filter,
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  const categories = ['All', 'AI & Data Science', 'Programming', 'Web & Development', 'Core Tools'];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-cyan-300" />;
      case 'Binary': return <Binary className="w-6 h-6 text-violet-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-teal-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-green-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // CAPABILITIES & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Skills Matrix</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            A comprehensive, interactive inventory of my languages, machine learning frameworks, and technical toolsets.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Animated Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const isHovered = activeSkillName === skill.name;
            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onMouseEnter={() => setActiveSkillName(skill.name)}
                onMouseLeave={() => setActiveSkillName(null)}
                className={`relative rounded-2xl p-6 bg-slate-900/50 backdrop-blur-xl border transition-all duration-300 group cursor-default overflow-hidden ${
                  isHovered
                    ? 'border-cyan-400 shadow-[0_10px_30px_rgba(6,182,212,0.25)] -translate-y-2 bg-slate-900/80'
                    : 'border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60'
                }`}
              >
                {/* Subtle cyber background grid pattern on hover */}
                <div className={`absolute inset-0 cyber-grid-dense opacity-0 transition-opacity duration-300 ${
                  isHovered ? 'opacity-40' : ''
                } pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Row: Icon & Level Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300 shadow-inner">
                      {getSkillIcon(skill.iconName)}
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name & Category */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">
                      {skill.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Dynamic description that expands or highlights on hover */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Highlight statement */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors mb-3">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-sans">
                        {skill.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Applied in Projects Tags */}
                  <div className="pt-2 border-t border-slate-800/70 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-400 mr-1">Applied:</span>
                    {skill.projectsUsed.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300/80 border border-slate-700/50"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Subtle corner light flare */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Competency Note Card */}
        <div className="mt-12 rounded-2xl p-6 bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
              <Binary className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full Resume Skills Alignment</h4>
              <p className="text-xs text-slate-400">
                All skill representations strictly align with academic curriculum, project implementations, and professional certifications.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono text-cyan-300 hover:text-cyan-200 underline underline-offset-4 shrink-0"
          >
            Explore Project Implementations →
          </a>
        </div>

      </div>
    </section>
  );
};
