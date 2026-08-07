'use client';

import React, { useState } from 'react';
import { Terminal, Play, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';
import { DESIGNER_INFO, URBAN_CULTURAL_COMMONS } from '@/data/portfolioData';

export const ArchTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [commandLogs, setCommandLogs] = useState<
    { command: string; output: string | React.ReactNode }[]
  >([
    {
      command: 'namrata --init',
      output: 'Namrata Devalekar Architectural Engine initialized [v2026.7]. Type "help" or click quick commands below.'
    }
  ]);

  const quickCommands = [
    { label: 'namrata --bio', cmd: 'namrata --bio' },
    { label: 'namrata --projects', cmd: 'namrata --projects' },
    { label: 'namrata --stack', cmd: 'namrata --stack' },
    { label: 'namrata --location', cmd: 'namrata --location' },
    { label: 'clear', cmd: 'clear' }
  ];

  const handleRunCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setCommandLogs([]);
      setInputVal('');
      return;
    }

    let result: React.ReactNode = '';

    if (cleanCmd === 'namrata --bio' || cleanCmd === 'bio') {
      result = (
        <div className="space-y-1 text-sky-300">
          <p><strong>Name:</strong> {DESIGNER_INFO.name}</p>
          <p><strong>Role:</strong> {DESIGNER_INFO.role}</p>
          <p><strong>Tagline:</strong> {DESIGNER_INFO.tagline}</p>
          <p className="text-slate-300 mt-1">{DESIGNER_INFO.bio}</p>
        </div>
      );
    } else if (cleanCmd === 'namrata --projects' || cleanCmd === 'projects') {
      result = (
        <div className="space-y-2">
          <p className="text-amber-400 font-bold">[1] Urban Cultural Commons (Lalbaug, Mumbai)</p>
          <p className="text-slate-400 pl-4">→ Art Deco heritage, 4 Spatial Zones (A, B, C, D), Mill land revitalisation</p>
          <p className="text-sky-400 font-bold">[2] The Vertical Paradigm (Sem 7 AD 2026-27)</p>
          <p className="text-slate-400 pl-4">→ 13 A1 Presentation Sheets, High-Density Sky Gardens & Modular Core</p>
        </div>
      );
    } else if (cleanCmd === 'namrata --stack' || cleanCmd === 'stack') {
      result = (
        <div className="space-y-1 text-slate-300">
          <p className="text-purple-400 font-bold">3D Modeling & Design Stack:</p>
          <p>AutoCAD • Revit • Rhino 3D • SketchUp • V-Ray • Enscape • Photoshop • Illustrator</p>
        </div>
      );
    } else if (cleanCmd === 'namrata --location' || cleanCmd === 'location') {
      result = <p className="text-emerald-400">📍 {DESIGNER_INFO.location}</p>;
    } else if (cleanCmd === 'help') {
      result = (
        <div className="text-slate-400 space-y-1">
          <p>Available commands:</p>
          <p>• <span className="text-sky-400">namrata --bio</span> : Print architect profile</p>
          <p>• <span className="text-sky-400">namrata --projects</span> : List featured urban projects</p>
          <p>• <span className="text-sky-400">namrata --stack</span> : Display CAD/BIM software stack</p>
          <p>• <span className="text-sky-400">namrata --location</span> : Display design studio base</p>
          <p>• <span className="text-sky-400">clear</span> : Reset terminal output</p>
        </div>
      );
    } else {
      result = <p className="text-red-400">Command not recognized: "{cleanCmd}". Type "help" for available options.</p>;
    }

    setCommandLogs((prev) => [...prev, { command: cmdStr, output: result }]);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-20 bg-[#030712] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Card Window */}
        <div className="bento-card bg-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                namrata@arch-cli:~
              </span>
            </div>
            
            <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden sm:block">
              Interactive Arch-CLI v2.6
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs space-y-4 max-h-[380px] overflow-y-auto">
            
            {commandLogs.map((log, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400">namrata@arch:~$</span>
                  <span className="text-white font-bold">{log.command}</span>
                </div>
                <div className="pl-4 text-slate-300 border-l border-slate-800">
                  {log.output}
                </div>
              </div>
            ))}

            {/* Input Prompt Row */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunCommand(inputVal);
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-emerald-400 shrink-0">namrata@arch:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. namrata --bio, namrata --projects, help)..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs"
              />
              <button type="submit" className="p-1 rounded bg-slate-800 text-slate-300 hover:text-sky-400">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

          {/* Terminal Footer Quick Buttons */}
          <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 mr-2">Quick CLI buttons:</span>
            {quickCommands.map((btn) => (
              <button
                key={btn.label}
                onClick={() => handleRunCommand(btn.cmd)}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-sky-500/20 hover:border-sky-500/40 border border-slate-700/60 font-mono text-[11px] text-slate-300 hover:text-sky-300 transition-all"
              >
                {btn.label}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
