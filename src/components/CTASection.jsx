import React from 'react';
import { Zap, ArrowRight, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';

export default function CTASection({ onLaunchClick, onDemoClick }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-purple-700/25 via-fuchsia-600/20 to-indigo-600/25 rounded-full blur-[140px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glowing Hero Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#13092b] via-[#0d0620] to-[#080314] border border-purple-500/40 p-8 sm:p-14 text-center shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Top Decorative Flare */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-neon-purple">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>INSTANT ACCESS • NO PASSWORDS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Ready for a Messaging Experience That <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Just Flows?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 1-on-1 and group conversations instantly. Enter your name and phone number once and communicate with true real-time WebSocket speed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onLaunchClick}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-neon-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5 text-yellow-300" />
              <span>Launch PulseChat Now — It's Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onDemoClick}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#160d36]/80 hover:bg-[#20134e] border border-purple-500/30 text-purple-200 hover:text-white font-semibold text-base transition-all"
            >
              Explore Live Sandbox
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-purple-300/80 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>JWT Authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>Zero Refresh Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Sub-second Socket Latency</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
