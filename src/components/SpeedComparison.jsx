import React from 'react';
import { 
  Check, 
  X, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
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
      pulseChat: 'Persistent WebSocket stream (sub-20ms latency)',
      traditional: 'Sluggish HTTP polling or manual page reloads required',
      pulseHighlight: true
    },
    {
      feature: 'Authentication & Access',
      pulseChat: 'Instant Name + Phone with persistent JWT session',
      traditional: 'Complex passwords, forgotten email resets, spam captchas',
      pulseHighlight: true
    },
    {
      feature: 'Cross-Tab & Device Sync',
      pulseChat: '100% synchronized state across open tabs and devices',
      traditional: 'Desynced unread counters and missing message history',
      pulseHighlight: true
    },
    {
      feature: 'Scroll Viewport Stability',
      pulseChat: 'Smart anchored scroll with floating "New messages ↓" button',
      traditional: 'Screen violently jerks to bottom whenever anyone chats',
      pulseHighlight: true
    },
    {
      feature: 'Group Roles & Governance',
      pulseChat: '1-click co-admin promotion, member management & renaming',
      traditional: 'Bloated multi-tier administrative settings',
      pulseHighlight: true
    }
  ];

  return (
    <section id="architecture" className="py-16 sm:py-24 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[450px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-3 shadow-neon-purple">
            <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>BUILT FOR REAL-TIME COMMUNICATION</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Always Connected. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Always in Sync.
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed max-w-xl mx-auto font-normal px-2">
            A high-velocity messaging architecture designed from the ground up for instantaneous bi-directional packet delivery.
          </p>
        </div>

        {/* Visual Flow Architecture */}
        <div className="mb-10 sm:mb-14 rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl">
          
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono font-semibold text-purple-300 uppercase tracking-widest">
              Live WebSocket Flow Architecture
            </span>
          </div>

          {/* Flow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 relative items-center">
            
            {/* Node 1: Client */}
            <div className="p-4 rounded-xl bg-[#140b2e] border border-purple-500/30 text-center space-y-1.5 hover:border-purple-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mx-auto">
                <Laptop className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white">Client UI</h4>
              <p className="text-[10px] text-slate-400 font-mono">Optimistic State</p>
            </div>

            {/* Node 2: Server */}
            <div className="p-4 rounded-xl bg-[#180d38] border border-purple-400/50 text-center space-y-1.5 shadow-neon-purple">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-md">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white">WebSocket Relay</h4>
              <p className="text-[10px] text-emerald-300 font-mono font-bold">&lt; 20ms Latency</p>
            </div>

            {/* Node 3: Group/Peer */}
            <div className="p-4 rounded-xl bg-[#140b2e] border border-purple-500/30 text-center space-y-1.5 hover:border-purple-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white">Direct & Groups</h4>
              <p className="text-[10px] text-cyan-300 font-mono font-bold">Seen ✓✓ Receipt</p>
            </div>

          </div>

        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-purple-500/20 bg-[#070312]/95 p-3.5 sm:p-5 text-xs font-bold">
            <div className="md:col-span-4 text-purple-300 font-mono uppercase tracking-wider">
              Capability
            </div>
            <div className="md:col-span-4 text-purple-400 flex items-center gap-1.5 mt-1 md:mt-0 font-heading">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>PulseChat Modern SaaS</span>
            </div>
            <div className="md:col-span-4 text-slate-400 flex items-center gap-1.5 mt-1 md:mt-0 font-heading">
              <span>Legacy Messaging</span>
            </div>
          </div>

          <div className="divide-y divide-purple-500/10">
            {comparisonData.map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-3.5 sm:p-5 items-center gap-2 sm:gap-4 hover:bg-purple-900/10 transition-colors"
              >
                <div className="md:col-span-4 font-heading font-bold text-white text-xs sm:text-sm">
                  {row.feature}
                </div>

                <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-100 bg-purple-950/30 md:bg-transparent p-2.5 md:p-0 rounded-xl border border-purple-500/20 md:border-none font-body">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-purple-300 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{row.pulseChat}</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-400 bg-[#090514]/50 md:bg-transparent p-2.5 md:p-0 rounded-xl border border-white/5 md:border-none font-body">
                  <div className="w-4 h-4 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 text-red-400 stroke-[3]" />
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
