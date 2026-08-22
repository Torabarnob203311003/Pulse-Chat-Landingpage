import React from 'react';
import { Zap, ArrowRight, Sparkles, MessageSquare, ShieldCheck, ExternalLink } from 'lucide-react';

export default function CTASection() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[850px] h-[300px] sm:h-[500px] bg-gradient-to-r from-purple-700/25 via-fuchsia-600/20 to-indigo-600/25 rounded-full blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Glowing Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#13092b] via-[#0d0620] to-[#080314] border border-purple-500/40 p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Top Decorative Flare */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-mono font-semibold mb-6 shadow-neon-purple">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>INSTANT ACCESS • NO PASSWORDS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-5 max-w-4xl mx-auto leading-tight">
            Ready to Start a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Better Conversation?
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Connect instantly, chat privately, build groups, react, reply, and stay synchronized with PulseChat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 sm:px-12 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-heading font-bold text-base sm:text-lg shadow-neon-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5 text-yellow-300" />
              <span>Start Chatting →</span>
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-[#160d36]/90 hover:bg-[#221453] border border-purple-400/40 text-purple-200 hover:text-white font-heading font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-neon-purple"
            >
              <span>Try Live Demo</span>
              <ExternalLink className="w-4 h-4 text-purple-400" />
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto px-7 sm:px-8 py-4 sm:py-4.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-white font-heading font-semibold text-base transition-all"
            >
              <span>Explore PulseChat</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-xs sm:text-sm text-purple-300/80 font-mono pt-4 border-t border-purple-500/15">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>JWT Authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>Zero Refresh Pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Sub-20ms Latency</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
