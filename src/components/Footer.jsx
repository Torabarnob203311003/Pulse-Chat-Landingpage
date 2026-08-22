import React from 'react';
import { MessageSquare, Heart, Radio, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030107] border-t border-purple-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-950/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-purple-500/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[1px] shadow-neon-purple">
                <div className="w-full h-full bg-[#090514] rounded-[10px] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-purple-300" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Chat</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Frictionless real-time messaging powered by persistent WebSockets. Engineered for speed, clean UX, and zero-password authentication.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow"></span>
              <span>All Systems Operational • Socket Cluster Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Key Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Live Chat Sandbox</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#governance" className="hover:text-white transition-colors">Group Governance</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Architecture Stack
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-mono text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>React + Vite SPA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Socket.io WebSocket Engine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>JWT Passwordless Auth</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} PulseChat. Engineered for real-time velocity.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
