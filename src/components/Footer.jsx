import React from 'react';
import { MessageSquare, Heart, Radio, ArrowUp, ExternalLink, Zap } from 'lucide-react';

export default function Footer() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030107] border-t border-purple-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[200px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-12 border-b border-purple-500/10">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[1px] shadow-neon-purple">
                <div className="w-full h-full bg-[#090514] rounded-[14px] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-300" />
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Chat</span>
              </span>
            </div>
            
            <p className="font-body text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed">
              Real conversations. Instantly connected. Modern real-time messaging for private conversations and powerful group communication.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow"></span>
              <span>All Systems Operational • Live WebSocket Cluster Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-heading font-medium text-slate-400">
              <li><a href="#about" className="hover:text-white hover:text-purple-300 transition-colors">What is PulseChat?</a></li>
              <li><a href="#how-it-works" className="hover:text-white hover:text-purple-300 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-white hover:text-purple-300 transition-colors">12 Key Features</a></li>
              <li><a href="#showcase" className="hover:text-white hover:text-purple-300 transition-colors">Product Tour</a></li>
              <li><a href="#architecture" className="hover:text-white hover:text-purple-300 transition-colors">Real-Time Architecture</a></li>
            </ul>
          </div>

          {/* Live Hosted Product & Stack */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Live Product
            </h4>
            <div className="space-y-2">
              <a 
                href={DEMO_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 text-purple-200 hover:text-white font-heading font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-yellow-300" />
                <span>Launch Live App Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold pt-3">
              Architecture Stack
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>React + Vite SPA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Socket.io WebSocket Engine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Tailwind CSS Modern Glass</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-mono">
          <p>© {new Date().getFullYear()} PulseChat. Real Conversations. Instantly Connected.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/50 border border-purple-500/25 text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
