import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  Play, 
  Sparkles, 
  Check, 
  HelpCircle,
  Copy
} from 'lucide-react';
import { TERMINAL_COMMANDS, PERSONAL_INFO } from '../data/portfolioData';

interface TerminalLog {
  id: string;
  command: string;
  output: string[];
  isSuccess: boolean;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'boot-1',
      command: 'init --welcome',
      output: [
        '==============================================================',
        '  AADHIPRADHAP V. // ARTIFICIAL INTELLIGENCE & DATA SCIENCE',
        '  Interactive Terminal Interface [Version 2.4.0-release]',
        '  Type a command or click a quick-action chip below to navigate.',
        '==============================================================',
        'System ready. Type "help" for a list of available routines.'
      ],
      isSuccess: true,
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isCopied, setIsCopied] = useState(false);

  const logsEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Add to history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'resume') {
      const matched = TERMINAL_COMMANDS.find(c => c.cmd === 'about');
      setLogs(prev => [
        ...prev,
        {
          id: String(Date.now()),
          command: cmdText,
          output: [
            `Initiating download for ${PERSONAL_INFO.resumePath}...`,
            'Official PDF document: Aadhipradhap_V_Resume.pdf',
            'Candidate: Aadhipradhap V. (AI & Data Science)',
            'Triggering direct browser download window...'
          ],
          isSuccess: true
        }
      ]);
      // Trigger download
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.resumePath;
      link.download = 'Aadhipradhap_V_Resume.pdf';
      link.click();
      setInputVal('');
      return;
    }

    const found = TERMINAL_COMMANDS.find(c => c.cmd === trimmed);

    if (found) {
      setLogs(prev => [
        ...prev,
        {
          id: String(Date.now()),
          command: cmdText,
          output: Array.isArray(found.output) ? found.output : [found.output],
          isSuccess: true
        }
      ]);
    } else {
      setLogs(prev => [
        ...prev,
        {
          id: String(Date.now()),
          command: cmdText,
          output: [
            `command not found: "${cmdText}". Type "help" to view all available commands.`,
            'Suggestions: about, skills, projects, featured, experience, education, contact, resume, clear'
          ],
          isSuccess: false
        }
      ]);
    }

    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  const handleCopyLogs = () => {
    const text = logs.map(l => `$ ${l.command}\n${l.output.join('\n')}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const quickCommands = [
    { label: 'about', cmd: 'about' },
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'featured', cmd: 'featured' },
    { label: 'experience', cmd: 'experience' },
    { label: 'education', cmd: 'education' },
    { label: 'contact', cmd: 'contact' },
    { label: 'resume', cmd: 'resume' },
    { label: 'sudo hire-me', cmd: 'sudo hire-me' },
  ];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // SHELL TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Aadhipradhap <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">AI Terminal</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            A direct developer command line interface. Click commands or type custom instructions to query portfolio specifications.
          </p>
        </div>

        {/* Quick Clickable Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Play className="w-3 h-3 text-cyan-400" /> Click to run:
          </span>
          {quickCommands.map((q) => (
            <button
              key={q.cmd}
              id={`term-chip-${q.label.replace(/\s+/g, '-')}`}
              onClick={() => executeCommand(q.cmd)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/60 transition-all shadow-sm active:scale-95"
            >
              &gt; {q.label}
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-red-400 hover:border-red-500/40 transition-all"
            title="Clear terminal"
          >
            clear
          </button>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden font-mono">
          
          {/* Top Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs text-slate-400 hidden sm:inline">
                aadhi@portfolio-core:~$ (Aadhipradhap AI Terminal v2.4)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLogs}
                className="p-1.5 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-900 transition-colors text-xs flex items-center gap-1"
                title="Copy Terminal Output"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px] hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={() => setLogs([])}
                className="p-1.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-900 transition-colors text-xs flex items-center gap-1"
                title="Clear Window"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Console Viewport */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-200 cursor-text cyber-grid-dense bg-slate-950/90"
          >
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">aadhi@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-violet-400">~</span>
                  <span className="text-slate-400">$</span>
                  <span className="font-semibold text-slate-100">{log.command}</span>
                </div>
                
                <div className="pl-4 space-y-0.5">
                  {log.output.map((line, lIdx) => (
                    <p
                      key={lIdx}
                      className={
                        log.isSuccess
                          ? line.startsWith('==') || line.startsWith('--')
                            ? 'text-cyan-500/70'
                            : line.startsWith('[+]') || line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.')
                            ? 'text-cyan-300 font-medium'
                            : 'text-slate-300'
                          : 'text-red-400'
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 text-cyan-400 pt-1">
              <span className="text-emerald-400 shrink-0">aadhi@portfolio</span>
              <span className="text-slate-500 shrink-0">:</span>
              <span className="text-violet-400 shrink-0">~</span>
              <span className="text-slate-400 shrink-0">$</span>
              <input
                ref={inputRef}
                id="terminal-cli-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or any command..."
                className="flex-1 bg-transparent border-none text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="p-1 text-cyan-400 hover:text-cyan-200 transition-colors"
                title="Execute Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            <div ref={logsEndRef} />
          </div>

          {/* Terminal Bottom Info */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Terminal Shell: bash / zsh / custom-cli</span>
            <span className="text-cyan-400">UTF-8 // Active Node</span>
          </div>

        </div>

      </div>
    </section>
  );
};
