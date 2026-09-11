import React from 'react';
import { 
  FileText, 
  FileDown, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Resume</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            Detailed overview of academic performance, internship contributions, technical skill ratings, and project implementations.
          </p>
        </div>

        {/* Premium Resume Preview Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
          
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stylized Document Mockup */}
            <div className="lg:col-span-6 relative">
              <div 
                onClick={onOpenResumeModal}
                className="cursor-pointer group relative rounded-2xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-200"
              >
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center gap-2 text-white font-semibold text-sm z-20">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <span>Click to Expand Resume</span>
                </div>

                {/* Mockup Resume Header */}
                <div className="border-b-2 border-cyan-600 pb-3 mb-4">
                  <h3 className="text-xl font-bold font-heading text-slate-900 tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-700">
                    {PERSONAL_INFO.degree}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {PERSONAL_INFO.email} | Tamil Nadu, India
                  </p>
                </div>

                {/* Mockup Sections */}
                <div className="space-y-3 text-[10px] text-slate-700">
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[9px] border-b border-slate-200 pb-0.5 mb-1">
                      Professional Summary
                    </h4>
                    <p className="text-slate-600 leading-tight">
                      Passionate AI & Data Science scholar specializing in computer vision forensics and machine learning pipelines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[9px] border-b border-slate-200 pb-0.5 mb-1">
                      Technical Skills
                    </h4>
                    <p className="text-slate-600 leading-tight">
                      Python, C, C++, JavaScript, Machine Learning, Computer Vision, HTML/CSS, MS Office.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[9px] border-b border-slate-200 pb-0.5 mb-1">
                      Flagship Project
                    </h4>
                    <p className="text-slate-800 font-semibold">
                      AI Fake Certificate Detection System (98.4% Accuracy)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[9px] border-b border-slate-200 pb-0.5 mb-1">
                      Internship Experience
                    </h4>
                    <p className="text-slate-800 font-semibold">
                      AI & Data Science Intern (2024 – Present)
                    </p>
                  </div>
                </div>

                {/* Document badge */}
                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="font-mono">PDF FORMAT // A4</span>
                  <span className="text-cyan-700 font-semibold">Verified Source</span>
                </div>

              </div>
            </div>

            {/* Right Column: Resume Specifications & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AUTHENTIC RESUME FILE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
                  Verified Candidate CV
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Download the official PDF resume containing comprehensive academic credentials, contact details, internship achievements, and project forensic methodologies.
                </p>

                {/* Spec List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-400">File Reference:</span>
                    <span className="text-cyan-300 font-semibold">{PERSONAL_INFO.resumePath}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-400">Format & Size:</span>
                    <span className="text-slate-200">Standard PDF (A4) // ~45 KB</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400">Open for Placements & Internships</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Resume + Download Resume */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="resume-view-button"
                  onClick={onOpenResumeModal}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 hover:bg-cyan-900/60 hover:text-white transition-all shadow-md"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>

                <a
                  id="resume-download-button"
                  href={PERSONAL_INFO.resumePath}
                  download="Aadhipradhap_V_Resume.pdf"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
