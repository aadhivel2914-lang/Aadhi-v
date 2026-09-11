import React from 'react';
import { X, FileDown, ExternalLink, Printer, CheckCircle, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <div>
              <h3 className="text-sm font-bold font-heading text-white">
                Aadhipradhap_V_Resume.pdf
              </h3>
              <p className="text-[11px] font-mono text-cyan-400">
                Official PDF Document // Path: {PERSONAL_INFO.resumePath}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="resume-modal-download-btn"
              href={PERSONAL_INFO.resumePath}
              download="Aadhipradhap_V_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              id="resume-modal-newtab-btn"
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF viewer with document fallback */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/50">
          <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col">
            <iframe
              id="resume-pdf-iframe"
              src={`${PERSONAL_INFO.resumePath}#toolbar=0&navpanes=0`}
              title="Aadhipradhap V. Resume Preview"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Candidate Credential</span>
          </div>
          <span>Candidate Email: {PERSONAL_INFO.email}</span>
        </div>

      </div>
    </div>
  );
};
