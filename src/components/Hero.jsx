import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Users, 
  Radio, 
  Play, 
  ShieldCheck, 
  Activity,
  MessageSquareText,
  Clock,
  Flame
} from 'lucide-react';

export default function Hero({ onLaunchClick, onDemoClick }) {
  // Animated typing and incoming message simulation in hero card
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Maya Lin', text: 'Hey Alex! Did the WebSocket sync deploy to production?', isMe: false, time: 'Just now' },
    { id: 2, sender: 'You', text: 'Yes! Instant 1-on-1 and group updates are running live right now.', isMe: true, time: 'Just now' }
  ]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(prev => !prev);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-grid-pattern">
      
      {/* Background Animated Gradient Mesh & Glowing Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary Radiant Violet Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-purple-700/30 via-fuchsia-600/20 to-indigo-600/20 rounded-full blur-[130px] animate-pulse-slow"></div>
        
        {/* Secondary Floating Neon Purple Orbs */}
        <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-float-delayed"></div>
        
        {/* Center Spotlight Cone */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-gradient-to-b from-purple-500/15 via-purple-900/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Hero Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 shadow-neon-purple mb-8 backdrop-blur-xl animate-fade-in hover:border-purple-400/80 transition-all cursor-pointer group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1">
              ⚡ Persistent WebSockets <span className="text-purple-400/50">•</span> Instant Phone & Name Sign-In
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Conversations at <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 drop-shadow-sm">
              Full Velocity.
            </span>{' '}
            <span className="inline-block relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Zero Friction.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[6px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-[2px] opacity-70"></span>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Experience lightning-fast 1-on-1 and group messaging powered by persistent WebSockets. 
            No complex passwords, zero lag, no page refreshes — just seamless, continuous real-time flow.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onLaunchClick}
              className="w-full sm:w-auto relative group overflow-hidden rounded-2xl p-[1px] font-semibold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-neon-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-2xl animate-gradient-x"></div>
              <div className="relative px-8 py-4 rounded-[15px] bg-[#0b0618] group-hover:bg-[#0b0618]/75 transition-colors flex items-center justify-center gap-3 text-white font-bold">
                <Zap className="w-5 h-5 text-purple-400 group-hover:text-yellow-300 transition-colors animate-pulse" />
                <span>Launch PulseChat — It's Free</span>
                <ArrowRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <a
              href="#demo"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 text-purple-200 hover:text-white font-medium flex items-center justify-center gap-2.5 backdrop-blur-xl transition-all hover:shadow-neon-purple"
            >
              <Play className="w-4 h-4 text-purple-400 fill-purple-400/30" />
              <span>Try Live Interactive Demo</span>
            </a>
          </div>

          {/* Micro-Copy Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-300 font-medium pt-2 border-t border-purple-500/10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>No Passwords to Remember</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Instant Name + Phone Login</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Persistent Socket.io Sync</span>
            </div>
          </div>

        </div>

        {/* Hero Interactive Floating Centerpiece Card */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          
          {/* Outer Ambient Glow Ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse-slow"></div>

          {/* Main Glassmorphic Chat Showcase Window */}
          <div className="relative rounded-2xl bg-[#0d071f]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden">
            
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-purple-500/20 bg-[#080414]/90">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-4 w-[1px] bg-purple-500/30 mx-2"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow"></span>
                  <span className="text-xs font-mono font-medium text-slate-300">
                    ws://pulsechat.engine/live-stream
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-500/20 text-[11px] font-mono text-purple-300">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>0ms LAG • LIVE SYNC</span>
                </div>
                <span className="text-xs font-mono text-slate-400">JWT Authenticated</span>
              </div>
            </div>

            {/* Simulated Live Chat Body */}
            <div className="p-6 space-y-4 bg-gradient-to-b from-[#0e0722]/50 to-[#070314]/90">
              
              {/* Message 1 (Incoming) */}
              <div className="flex items-start gap-3 max-w-lg">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                  ML
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-purple-200">Maya Lin</span>
                    <span className="text-[10px] text-slate-400">07:14 AM</span>
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-[#180f33] border border-purple-500/25 text-sm text-slate-100 shadow-sm leading-relaxed">
                    Hey team! Testing the persistent WebSocket connection. Are group updates syncing without refresh? 🚀
                  </div>
                </div>
              </div>

              {/* Message 2 (Outgoing) */}
              <div className="flex items-start justify-end gap-3 ml-auto max-w-lg">
                <div className="space-y-1 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] text-slate-400">07:15 AM</span>
                    <span className="text-xs font-semibold text-purple-300">You (Admin)</span>
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-purple-700 to-indigo-600 text-sm text-white shadow-neon-purple leading-relaxed text-left">
                    Instant sync active! Group member additions, chat history, and non-jerk smart scroll are all running in real time. ⚡
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                  ME
                </div>
              </div>

              {/* Dynamic Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 pt-2 animate-fade-in">
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 text-xs">
                    ML
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-[#140b2b] border border-purple-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></span>
                    <span className="text-[11px] font-mono text-purple-300/80 ml-1">Maya is typing...</span>
                  </div>
                </div>
              )}

              {/* Floating Live Telemetry Badge inside Hero */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-purple-500/15 text-[11px] font-mono text-purple-300/70">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>Direct 1-on-1 + Group Streams</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Smart Scroll: <span className="text-emerald-400">Anchored</span></span>
                  <span>Auth: <span className="text-purple-300">JWT Phone Token</span></span>
                </div>
              </div>

            </div>

          </div>

          {/* Floating Accent Cards (Right & Left for Hero 3D Depth) */}
          <div className="hidden lg:block absolute -top-8 -right-8 w-60 p-4 rounded-2xl bg-[#160d36]/90 border border-purple-400/30 shadow-2xl backdrop-blur-xl animate-float-slow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Group Governance</p>
                <p className="text-[10px] text-purple-300/70">Admin Controls Active</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-300">
              Add or remove members, assign co-admins, and rename channels in real time.
            </p>
          </div>

          <div className="hidden lg:block absolute -bottom-8 -left-8 w-64 p-4 rounded-2xl bg-[#160d36]/90 border border-purple-400/30 shadow-2xl backdrop-blur-xl animate-float-delayed">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Password-Free Entry</p>
                <p className="text-[10px] text-emerald-400/80">No Reset Emails Needed</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-300">
              Instant login with phone number & name. Start chatting in under 3 seconds.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
