import React from 'react';
import { Zap, ArrowRight, Sparkles, MessageSquare, ShieldCheck, ExternalLink } from 'lucide-react';

export default function CTASection() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[250px] sm:h-[400px] bg-gradient-to-r from-purple-700/25 via-fuchsia-600/20 to-indigo-600/25 rounded-full blur-[130px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glowing Banner Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#13092b] via-[#0d0620] to-[#080314] border border-purple-500/40 p-6 sm:p-10 lg:p-12 text-center shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold mb-4 sm:mb-5 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>INSTANT ACCESS • NO PASSWORDS</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 max-w-3xl mx-auto leading-tight">
            Ready to Start a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Better Conversation?
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300/90 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal px-2">
            Connect instantly, chat privately, build groups, react, reply, and stay synchronized with PulseChat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 sm:px-9 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-heading font-bold text-xs sm:text-sm shadow-neon-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Start Chatting →</span>
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#160d36]/90 hover:bg-[#221453] border border-purple-400/40 text-purple-200 hover:text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-neon-purple"
            >
              <span>Try Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-white font-heading font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Explore PulseChat</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 text-[11px] sm:text-xs text-purple-300/80 font-mono pt-3 border-t border-purple-500/15">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>JWT Authentication</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>Zero Refresh Pipeline</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>Sub-20ms Latency</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
