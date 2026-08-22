import React, { useState } from 'react';
import { 
  Zap, 
  Users, 
  RefreshCw, 
  MessageSquare, 
  CheckCheck, 
  Smile, 
  Search, 
  Bell, 
  ShieldCheck, 
  ArrowRight,
  Lock,
  ExternalLink
} from 'lucide-react';

export default function WhatIsPulseChat() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';
  const [activeHighlight, setActiveHighlight] = useState(0);

  const highlights = [
    {
      id: 0,
      icon: Zap,
      title: 'Real-Time',
      tag: 'SUB-20MS SPEED',
      description: 'Messages and conversation updates happen instantly.',
      color: 'from-purple-500 to-indigo-500',
      badgeColor: 'bg-purple-950/60 text-purple-300 border-purple-500/30'
    },
    {
      id: 1,
      icon: Users,
      title: 'Connected',
      tag: '1-ON-1 & GROUPS',
      description: 'Chat privately or communicate with multiple people in groups.',
      color: 'from-fuchsia-500 to-purple-600',
      badgeColor: 'bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-500/30'
    },
    {
      id: 2,
      icon: RefreshCw,
      title: 'Always in Sync',
      tag: '0-REFRESH PIPELINE',
      description: 'Messages, reactions, reads, and group updates stay synchronized.',
      color: 'from-indigo-500 to-cyan-500',
      badgeColor: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#05020d]">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-700/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-3 shadow-neon-purple">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>WHAT IS PULSECHAT?</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Everything You Need to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Stay Connected
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed max-w-xl mx-auto font-normal px-2">
            PulseChat brings private messaging, group conversations, real-time notifications, message reactions, replies, search, and read receipts into one seamless communication experience.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: 3 Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {highlights.map((hl) => {
              const Icon = hl.icon;
              const isSelected = activeHighlight === hl.id;
              return (
                <div
                  key={hl.id}
                  onClick={() => setActiveHighlight(hl.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#12092a] border-purple-400/50 shadow-neon-purple scale-[1.01]'
                      : 'bg-[#0c071d]/80 border-purple-500/20 hover:bg-[#12092a]/60 hover:border-purple-500/35'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${hl.color} p-[1px] shadow-sm flex-shrink-0`}>
                      <div className="w-full h-full bg-[#0c071d] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                          {hl.title}
                        </h3>
                        <span className={`text-[9px] font-mono font-semibold px-2 py-0.2 rounded-full border ${hl.badgeColor}`}>
                          {hl.tag}
                        </span>
                      </div>
                      <p className="font-body text-xs text-slate-300 leading-relaxed">
                        {hl.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Experience PulseChat in Seconds */}
            <div className="pt-1">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-heading font-bold text-xs sm:text-sm shadow-neon-purple hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Experience PulseChat in Seconds</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: App Mockup (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 via-fuchsia-600/20 to-indigo-600/30 rounded-2xl blur-xl opacity-75"></div>

            {/* Mockup Card */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#0a0518] border border-purple-500/30 shadow-2xl overflow-hidden backdrop-blur-xl hover:border-purple-400/40 transition-colors">
              
              {/* Mockup Header */}
              <div className="px-4 py-2.5 bg-[#070312] border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-purple-300 ml-1.5 truncate">
                    PulseChat • Multi-Channel Hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] font-mono text-emerald-400 hidden sm:inline">Connected</span>
                </div>
              </div>

              {/* Mockup Body Preview */}
              <div className="p-4 sm:p-5 space-y-3 bg-gradient-to-b from-[#0f0826]/70 via-[#0a0518] to-[#060310]">
                
                {/* Feature Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-1">
                  <div className="p-2 rounded-lg bg-[#140b2e] border border-purple-500/20 text-center">
                    <Zap className="w-3.5 h-3.5 text-purple-400 mx-auto mb-0.5" />
                    <p className="font-heading text-[10px] font-bold text-white">Instant Delivery</p>
                    <p className="text-[8px] text-purple-300/70 font-mono">0ms Lag</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#140b2e] border border-purple-500/20 text-center">
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-0.5" />
                    <p className="font-heading text-[10px] font-bold text-white">Read Receipts</p>
                    <p className="text-[8px] text-cyan-300/70 font-mono">✓✓ Live Seen</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#140b2e] border border-purple-500/20 text-center">
                    <Smile className="w-3.5 h-3.5 text-yellow-400 mx-auto mb-0.5" />
                    <p className="font-heading text-[10px] font-bold text-white">Emoji Reactions</p>
                    <p className="text-[8px] text-yellow-300/70 font-mono">8 Expressive</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#140b2e] border border-purple-500/20 text-center">
                    <Users className="w-3.5 h-3.5 text-fuchsia-400 mx-auto mb-0.5" />
                    <p className="font-heading text-[10px] font-bold text-white">Group Admin</p>
                    <p className="text-[8px] text-fuchsia-300/70 font-mono">Full Roles</p>
                  </div>
                </div>

                {/* Conversation Feed */}
                <div className="space-y-2.5 pt-1">
                  
                  {/* Message A */}
                  <div className="flex items-start gap-2 max-w-[90%]">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-[10px] shadow-sm flex-shrink-0 font-heading">
                      ML
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-heading font-bold text-purple-200">Maya Lin</span>
                        <span className="text-[9px] font-mono text-slate-400">07:18 AM</span>
                      </div>
                      <div className="p-2.5 rounded-xl rounded-tl-none bg-[#160d33] border border-purple-500/20 text-xs text-slate-100 shadow-sm leading-relaxed">
                        Everything updates in real time — no need to refresh to see reactions or read receipts! 💬
                      </div>
                    </div>
                  </div>

                  {/* Message B */}
                  <div className="flex items-start justify-end gap-2 ml-auto max-w-[95%]">
                    <div className="space-y-0.5 text-right w-full">
                      <div className="flex items-center justify-end gap-1.5">
                        <span className="text-[9px] font-mono text-slate-400">07:19 AM</span>
                        <span className="text-[11px] font-heading font-bold text-purple-300">You</span>
                      </div>
                      <div className="p-2.5 rounded-xl rounded-tr-none bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-xs shadow-neon-purple text-left">
                        And group governance lets us assign co-admins and search directory in one click. 🛡️
                        <div className="flex items-center justify-end gap-1 mt-1 text-[9px] font-mono text-cyan-300 font-bold">
                          <span>Seen</span>
                          <CheckCheck className="w-3 h-3 text-cyan-300" />
                        </div>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-[10px] shadow-sm flex-shrink-0 font-heading">
                      ME
                    </div>
                  </div>

                </div>

                {/* Footer Telemetry */}
                <div className="pt-2 border-t border-purple-500/20 flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-purple-400" />
                    <span>JWT Encrypted Sessions</span>
                  </div>
                  <span className="text-purple-300">Continuous WebSocket Stream</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
