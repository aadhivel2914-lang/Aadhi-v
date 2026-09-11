import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // CAREER & PRACTICUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Internship & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            Applied technical contributions, data engineering pipelines, and intelligent software experiments.
          </p>
        </div>

        {/* Vertical Cyber Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-32">
          
          {/* Glowing Vertical Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 md:left-32 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-500 to-violet-600 shadow-[0_0_12px_#06b6d4]" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={exp.id}
                id={`exp-item-${exp.id}`}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-6 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Left Timestamp for Medium+ Screens */}
                <div className="hidden md:block absolute -left-32 top-6 text-right w-24 pr-4">
                  <span className="text-xs font-mono text-cyan-300 font-bold block">
                    {exp.duration.split('–')[0].trim()}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {exp.type}
                  </span>
                </div>

                {/* Main Card */}
                <div className="w-full ml-4 sm:ml-6 rounded-2xl p-6 sm:p-8 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-lg">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                        {exp.organization}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Contributions Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {exp.achievements.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used in this role */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 mr-2">Technologies:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
