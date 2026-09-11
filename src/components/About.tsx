import React, { useState } from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  Cpu, 
  Target, 
  Sparkles, 
  BrainCircuit, 
  Activity, 
  Compass, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { ABOUT_CARDS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('who-i-am');
  const [selectedFocusNode, setSelectedFocusNode] = useState<string>('Computer Vision');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <BrainCircuit className="w-5 h-5" />;
    }
  };

  const focusNodes = [
    { name: 'Computer Vision', detail: 'Optical forensics, Error Level Analysis (ELA), edge boundary detection.', stats: 'Flagship Domain' },
    { name: 'Machine Learning', detail: 'Supervised classification, predictive regression, random forests.', stats: 'Core Specialty' },
    { name: 'Data Preprocessing', detail: 'Handling skewness, outlier filtering, feature scaling in Pandas/NumPy.', stats: 'ETL Pipelines' },
    { name: 'Web Architecture', detail: 'Component interfaces, reactive states, API endpoints in JavaScript/Python.', stats: 'Full-Stack Integration' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            A comprehensive breakdown of my academic path, core competencies, and development vision.
          </p>
        </div>

        {/* Top Split: Modern Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ABOUT_CARDS.map((card) => {
            const isSelected = activeCardId === card.id;
            return (
              <div
                key={card.id}
                id={`about-card-${card.id}`}
                onClick={() => setActiveCardId(card.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] -translate-y-1'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70'
                } backdrop-blur-md relative overflow-hidden group`}
              >
                {/* Accent top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isSelected ? 'bg-gradient-to-r from-cyan-400 to-violet-500' : 'bg-transparent group-hover:bg-cyan-500/30'
                }`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' : 'bg-slate-800/70 text-slate-300 group-hover:text-cyan-400'
                  } transition-colors`}>
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800/80 text-cyan-300/80 border border-slate-700/60">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.content}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Aadhi Core Identity</span>
                  <span className={isSelected ? 'text-cyan-400' : 'text-slate-400'}>
                    {isSelected ? '● Selected' : 'Click to inspect'}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: AI-Powered Technical Synthesis */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-violet-950/40 border border-cyan-500/30 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-400/30">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-950/60 text-violet-300 border border-violet-700/40">
                  Synthesis
                </span>
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Engineering Principle
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "Writing clean code is only half the battle; ensuring the machine learning pipeline is reproducible, secure, and grounded in verifiable reality is where genuine value is forged."
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Dedicated to Ethical & Robust AI</span>
            </div>
          </div>
        </div>

        {/* Bottom Feature: Interactive AI-Style Visual Matrix */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/50 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span>AI EXPERTISE RADAR // SPECIALIZATION MATRIX</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                Interactive Technical Core
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Interactive Nodes — Select a dimension below:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusNodes.map((node) => {
              const isCurrent = selectedFocusNode === node.name;
              return (
                <button
                  key={node.name}
                  id={`focus-node-${node.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedFocusNode(node.name)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isCurrent
                      ? 'bg-cyan-950/50 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-800/40 border-slate-700/60 hover:border-cyan-500/40 hover:bg-slate-800/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-semibold text-sm text-slate-100">
                      {node.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/20">
                      {node.stats}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {node.detail}
                  </p>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
