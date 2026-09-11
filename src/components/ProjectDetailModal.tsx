import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck, 
  Cpu, 
  ExternalLink, 
  Github, 
  Layers, 
  RefreshCw,
  Search,
  Zap
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [testScenario, setTestScenario] = useState<'genuine' | 'forged'>('forged');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  if (!isOpen || !project) return null;

  const handleRunAnalysis = (scenario: 'genuine' | 'forged') => {
    setIsAnalyzing(true);
    setTestScenario(scenario);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden z-10 my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
              AI FORENSICS LAB // {project.title}
            </span>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Main Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>{project.subtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Interactive Live Inspection Sandbox */}
          {project.featured && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <span>Interactive Forensic Diagnostic Sandbox</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Toggle certificate specimen to test the optical anomaly detector:
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => handleRunAnalysis('genuine')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      testScenario === 'genuine'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Specimen A: Authentic
                  </button>
                  <button
                    onClick={() => handleRunAnalysis('forged')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      testScenario === 'forged'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Specimen B: Tampered
                  </button>
                </div>
              </div>

              {/* Inspection Viewport */}
              <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-5 overflow-hidden">
                {/* Laser scanline effect */}
                {isAnalyzing && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-0 animate-bounce shadow-[0_0_15px_#06b6d4]" />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  
                  {/* Simulated Document Specimen */}
                  <div className="relative p-4 rounded-lg bg-slate-900/90 border border-slate-700/80 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                      <span className="text-cyan-400 font-bold">STATE UNIVERSITY CERTIFICATE</span>
                      <span className="text-[10px] text-slate-400">ID: CERT-2024-918</span>
                    </div>

                    <p className="text-slate-300 text-[11px] mb-2">
                      Candidate Name: <strong className="text-white">Aadhipradhap V.</strong>
                    </p>
                    <p className="text-slate-300 text-[11px] mb-2">
                      Degree: <strong className="text-cyan-200">B.Sc Computer Science (AI & DS)</strong>
                    </p>

                    {/* Tampered region highlighting */}
                    <div className={`p-2 rounded border transition-colors ${
                      testScenario === 'forged' 
                        ? 'bg-red-950/40 border-red-500/60 text-red-200 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
                        : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold">
                          {testScenario === 'forged' ? '⚠️ Font Compression Anomaly Detected' : '✓ Holographic Stamp Intact'}
                        </span>
                        <span className="text-[10px]">
                          {testScenario === 'forged' ? 'Variance: 3.4σ' : 'Variance: 0.1σ'}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">
                        {testScenario === 'forged' 
                          ? 'Pixel compression level analysis indicates text replacement around degree classification marks.'
                          : 'Uniform baseline font layout, cryptographic QR matches registrar hash.'}
                      </p>
                    </div>
                  </div>

                  {/* Diagnostic Readout */}
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl border ${
                        testScenario === 'forged'
                          ? 'bg-red-950/40 border-red-500/40 text-red-400'
                          : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400'
                      }`}>
                        {testScenario === 'forged' ? <AlertTriangle className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Forensic Verdict
                        </span>
                        <h4 className={`text-base font-bold ${
                          testScenario === 'forged' ? 'text-red-400' : 'text-emerald-400'
                        }`}>
                          {testScenario === 'forged' ? 'MANIPULATION CONFIRMED (FAKE)' : 'AUTHENTIC CREDENTIAL VERIFIED'}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span>Neural Model Confidence:</span>
                        <span className="text-cyan-300">{testScenario === 'forged' ? '99.2%' : '98.8%'}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Error Level Analysis (ELA):</span>
                        <span className={testScenario === 'forged' ? 'text-red-400' : 'text-emerald-400'}>
                          {testScenario === 'forged' ? 'High Luminance Discontinuity' : 'Uniform Artifact Distribution'}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Cryptographic QR Hash:</span>
                        <span className={testScenario === 'forged' ? 'text-red-400' : 'text-emerald-400'}>
                          {testScenario === 'forged' ? 'Signature Mismatch (Invalid)' : 'Valid Public Key Signature'}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Key Architecture Highlights */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Core Architectural Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyHighlights.map((highlight, hIdx) => (
                <div key={hIdx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl || "https://github.com/aadhipradhap"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/60 transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span>Discuss Implementation</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
