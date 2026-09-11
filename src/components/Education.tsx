import React from 'react';
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // ACADEMIC PEDIGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Timeline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            Formal foundations in Computer Science, Artificial Intelligence algorithms, and computational mathematics.
          </p>
        </div>

        {/* Futuristic Education Glass Cards Connected by Animated Circuit Lines */}
        <div className="relative space-y-10">
          
          {/* Animated Glowing Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-400 to-violet-600 shadow-[0_0_10px_#06b6d4]" />

          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={edu.id}
              id={`edu-item-${edu.id}`}
              className="relative flex flex-col sm:flex-row items-start gap-6 group"
            >
              {/* Circuit Junction Node */}
              <div className="hidden sm:flex relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-300">
                {idx === 0 ? (
                  <GraduationCap className="w-7 h-7 text-cyan-300" />
                ) : (
                  <School className="w-7 h-7 text-violet-300" />
                )}
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
              </div>

              {/* Glass Card */}
              <div className="flex-1 w-full rounded-2xl p-6 sm:p-8 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                        {edu.field}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {edu.degree}
                    </h3>

                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 mb-6">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework Modules */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Relevant Coursework & Modules</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 text-cyan-200/90 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
