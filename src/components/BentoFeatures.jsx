import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Users, 
  Search, 
  ArrowDownCircle, 
  Radio, 
  Layers, 
  Sparkles,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-grid-pattern">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4 shadow-neon-purple">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>ARCHITECTED FOR ZERO RESISTANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Velocity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Built for Deep Connection.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every feature in PulseChat is designed to eliminate friction — from password-free authentication to continuous, bi-directional WebSocket pipelines.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Persistent Socket.io Sync (Large 2 Cols on Desktop) */}
          <div className="lg:col-span-2 rounded-3xl bg-[#0c071d]/80 border border-purple-500/20 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all hover:shadow-neon-purple">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Radio className="w-40 h-40 text-purple-400" />
            </div>
            
            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-md">
                <Radio className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-purple-900/40 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                0-REFRESH PIPELINE
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Persistent Real-Time Synchronization
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Powered by a continuous Socket.io WebSocket link. Messages, incoming participant alerts, and group settings sync immediately across all open tabs and devices without needing manual page refreshes.
              </p>

              {/* Visual Demo Strip inside Card */}
              <div className="pt-3">
                <div className="p-3.5 rounded-xl bg-[#140b2e] border border-purple-500/20 flex items-center justify-between font-mono text-xs text-purple-200">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow"></span>
                    <span>socket.emit('message:send')</span>
                  </span>
                  <span className="text-emerald-400 font-bold">✓ Broadcasted live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Password-Free Phone Auth (1 Col) */}
          <div className="rounded-3xl bg-[#0c071d]/80 border border-purple-500/20 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all hover:shadow-neon-purple flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                PASSWORDLESS JWT
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Phone & Name Login
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No complex passwords to create, memorize, or reset. Simply provide your name and phone number to generate a secure, JWT-backed active session in seconds.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>Token-based secure storage</span>
            </div>
          </div>

          {/* Card 3: Complete Group Governance (1 Col) */}
          <div className="rounded-3xl bg-[#0c071d]/80 border border-purple-500/20 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all hover:shadow-neon-purple flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/30 text-[11px] font-mono text-indigo-300">
                ROLE GOVERNANCE
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Group Control & Roles
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Create dedicated channels for teams or friend circles. Group administrators have tools to invite contacts, manage members, rename conversations, and promote co-admins.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-300">Admin & Member Roles</span>
              <span className="text-emerald-400">Live Sync</span>
            </div>
          </div>

          {/* Card 4: Smart User Directory & Search (1 Col) */}
          <div className="rounded-3xl bg-[#0c071d]/80 border border-purple-500/20 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all hover:shadow-neon-purple flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-400 shadow-md">
                <Search className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-fuchsia-950/40 border border-fuchsia-500/30 text-[11px] font-mono text-fuchsia-300">
                1-CLICK DISCOVERY
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Instant Directory Search
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Find anyone registered in the directory by typing their name or phone number. Start a 1-on-1 private chat or add them to an ongoing group immediately.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Query name or phone digits</span>
            </div>
          </div>

          {/* Card 5: Smart Scroll & "New messages ↓" Anchor (1 Col) */}
          <div className="rounded-3xl bg-[#0c071d]/80 border border-purple-500/20 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all hover:shadow-neon-purple flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 shadow-md">
                <ArrowDownCircle className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                SMART SCROLL
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Non-Jerk Viewport
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reading earlier conversations? Incoming messages won't forcefully jerk your screen down. A subtle floating "New messages ↓" alert lets you glide to the latest chat when ready.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center gap-2 text-xs font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Anchored reading position</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
