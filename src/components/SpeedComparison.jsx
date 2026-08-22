import React from 'react';
import { 
  Check, 
  X, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  Server, 
  Laptop, 
  Users, 
  RefreshCw, 
  Layers, 
  Activity,
  ExternalLink 
} from 'lucide-react';

export default function SpeedComparison() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  const comparisonData = [
    {
      feature: 'Real-Time Pipeline',
      pulseChat: 'Persistent bi-directional WebSocket stream (sub-20ms latency)',
      traditional: 'Sluggish HTTP polling or manual browser reloads required',
      pulseHighlight: true
    },
    {
      feature: 'Authentication & Access',
      pulseChat: 'Instant Name + Phone with persistent JWT token session',
      traditional: 'Complex passwords, forgotten email resets, captchas & spam',
      pulseHighlight: true
    },
    {
      feature: 'Cross-Tab & Device Sync',
      pulseChat: '100% synchronized state across open tabs and multiple devices',
      traditional: 'Desynced unread counters and missing message history',
      pulseHighlight: true
    },
    {
      feature: 'Scroll Viewport Stability',
      pulseChat: 'Smart anchored scroll with floating "New messages ↓" indicator',
      traditional: 'Screen violently jerks to bottom whenever anyone chats',
      pulseHighlight: true
    },
    {
      feature: 'Group Roles & Governance',
      pulseChat: '1-click co-admin promotion, member management & live renaming',
      traditional: 'Bloated multi-tier enterprise administrative settings',
      pulseHighlight: true
    }
  ];

  return (
    <section id="architecture" className="py-20 sm:py-28 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[850px] h-[300px] sm:h-[500px] bg-purple-950/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Trendy Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-4 shadow-neon-purple">
            <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>BUILT FOR REAL-TIME COMMUNICATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Always Connected. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Always in Sync.
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl mx-auto font-normal">
            A high-velocity messaging architecture designed from the ground up for instantaneous bi-directional packet delivery.
          </p>
        </div>

        {/* Visual Animated Architecture Pipeline */}
        <div className="mb-16 sm:mb-20 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-widest">
              Live WebSocket Flow Architecture
            </span>
          </div>

          {/* Architecture Nodes Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative items-center">
            
            {/* Node 1: You (Client) */}
            <div className="p-5 rounded-2xl bg-[#140b2e] border border-purple-500/30 text-center space-y-2 relative group hover:border-purple-400 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mx-auto">
                <Laptop className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white">You</h4>
              <p className="text-[11px] text-slate-400 font-mono">Client Interface</p>
              <div className="pt-1">
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-[10px] font-mono text-purple-300">
                  Optimistic UI
                </span>
              </div>
            </div>

            {/* Connecting Arrow 1 */}
            <div className="hidden md:flex flex-col items-center justify-center text-purple-400 font-mono text-xs">
              <span className="text-[10px] text-purple-300/80 mb-1">Emit frame</span>
              <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500 relative">
                <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
              </div>
              <span className="text-[9px] text-emerald-400 mt-1">Socket.io Stream</span>
            </div>

            {/* Node 2: PulseChat Core Engine */}
            <div className="p-5 rounded-2xl bg-[#180d38] border border-purple-400/50 text-center space-y-2 shadow-neon-purple relative group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-md">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white">Real-Time Server</h4>
              <p className="text-[11px] text-purple-200 font-mono">Event Broadcast Hub</p>
              <div className="pt-1">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-mono text-emerald-300 border border-emerald-500/30 font-bold">
                  &lt; 20ms Relay
                </span>
              </div>
            </div>

            {/* Connecting Arrow 2 */}
            <div className="hidden md:flex flex-col items-center justify-center text-purple-400 font-mono text-xs">
              <span className="text-[10px] text-purple-300/80 mb-1">Broadcast</span>
              <div className="w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400 relative">
                <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              </div>
              <span className="text-[9px] text-cyan-300 mt-1">0-Refresh Sync</span>
            </div>

            {/* Node 3: Your Conversation / Group */}
            <div className="p-5 rounded-2xl bg-[#140b2e] border border-purple-500/30 text-center space-y-2 relative group hover:border-purple-400 transition-all md:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white">Your Conversation</h4>
              <p className="text-[11px] text-slate-400 font-mono">Direct & Groups</p>
              <div className="pt-1">
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-[10px] font-mono text-cyan-300 font-bold">
                  Seen ✓✓ Receipt
                </span>
              </div>
            </div>

          </div>

          {/* Technical Pillars Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-8 pt-8 border-t border-purple-500/20 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-[#090514] border border-purple-500/15">
              <p className="font-heading font-bold text-white mb-0.5">⚡ WebSockets</p>
              <p className="font-body text-[11px] text-slate-400">Continuous bi-directional connection.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#090514] border border-purple-500/15">
              <p className="font-heading font-bold text-white mb-0.5">🔄 Cross-Tab Sync</p>
              <p className="font-body text-[11px] text-slate-400">All browser tabs stay updated in lockstep.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#090514] border border-purple-500/15">
              <p className="font-heading font-bold text-white mb-0.5">🌐 Background Sync</p>
              <p className="font-body text-[11px] text-slate-400">Catch up immediately when focused.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#090514] border border-purple-500/15">
              <p className="font-heading font-bold text-white mb-0.5">💬 Message Events</p>
              <p className="font-body text-[11px] text-slate-400">Optimistic UI for zero perceived lag.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#090514] border border-purple-500/15">
              <p className="font-heading font-bold text-white mb-0.5">👥 Live Group Updates</p>
              <p className="font-body text-[11px] text-slate-400">Real-time governance broadcasts.</p>
            </div>
          </div>

        </div>

        {/* Reality Check Comparison Table */}
        <div className="rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-purple-500/20 bg-[#070312]/95 p-4 sm:p-6 text-xs sm:text-sm font-bold">
            <div className="md:col-span-4 text-purple-300 font-mono text-xs uppercase tracking-wider">
              Architecture Capability
            </div>
            <div className="md:col-span-4 text-purple-400 flex items-center gap-2 mt-2 md:mt-0 font-heading">
              <Zap className="w-4 h-4 text-purple-400 fill-purple-400/20" />
              <span>PulseChat Modern SaaS</span>
            </div>
            <div className="md:col-span-4 text-slate-400 flex items-center gap-2 mt-2 md:mt-0 font-heading">
              <span>Legacy Messaging Apps</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-purple-500/10">
            {comparisonData.map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center gap-4 hover:bg-purple-900/10 transition-colors"
              >
                {/* Capability Name */}
                <div className="md:col-span-4 font-heading font-bold text-white text-xs sm:text-sm">
                  {row.feature}
                </div>

                {/* PulseChat Solution */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 bg-purple-950/30 md:bg-transparent p-3 md:p-0 rounded-xl border border-purple-500/20 md:border-none font-body">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-300 stroke-[3]" />
                  </div>
                  <span className="font-medium leading-relaxed">{row.pulseChat}</span>
                </div>

                {/* Traditional Solution */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 bg-[#090514]/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-white/5 md:border-none font-body">
                  <div className="w-5 h-5 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
