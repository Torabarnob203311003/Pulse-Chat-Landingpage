import React from 'react';
import { Check, X, Zap, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function SpeedComparison() {
  const comparisonData = [
    {
      feature: 'Authentication & Sign-In',
      pulseChat: 'Instant Name + Phone with persistent JWT session',
      traditional: 'Forced passwords, email verifications & reset links',
      pulseHighlight: true
    },
    {
      feature: 'Live Synchronization Engine',
      pulseChat: 'Persistent Socket.io WebSockets — 0-refresh live sync',
      traditional: 'Sluggish HTTP polling or manual page reload required',
      pulseHighlight: true
    },
    {
      feature: 'History Reading & Scroll UX',
      pulseChat: 'Smart anchored scroll with "New messages ↓" alert pill',
      traditional: 'Viewport jerks violently when incoming chats arrive',
      pulseHighlight: true
    },
    {
      feature: 'Group Roles & Governance',
      pulseChat: 'Intuitive 1-click admin promote, member add/remove & rename',
      traditional: 'Bloated multi-level enterprise permission settings',
      pulseHighlight: true
    },
    {
      feature: 'User Directory Search',
      pulseChat: '1-click lookup by contact name or phone number',
      traditional: 'Complex directory syncs with manual invite codes',
      pulseHighlight: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>REALITY CHECK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why PulseChat Outflows <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Legacy Messaging Apps.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Traditional messaging is weighed down by passwords and sluggish reloads. PulseChat is engineered for pure velocity.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="rounded-3xl bg-[#0c071d]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-purple-500/20 bg-[#070312]/90 p-4 sm:p-6 text-sm font-bold">
            <div className="md:col-span-4 text-purple-300 font-mono text-xs uppercase tracking-wider">
              Capability
            </div>
            <div className="md:col-span-4 text-purple-400 flex items-center gap-2 mt-2 md:mt-0">
              <Zap className="w-4 h-4 text-purple-400 fill-purple-400/20" />
              <span>PulseChat Architecture</span>
            </div>
            <div className="md:col-span-4 text-slate-400 flex items-center gap-2 mt-2 md:mt-0">
              <span>Traditional Bloated Apps</span>
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
                <div className="md:col-span-4 font-semibold text-white text-sm sm:text-base">
                  {row.feature}
                </div>

                {/* PulseChat Solution */}
                <div className="md:col-span-4 flex items-start gap-3 text-sm text-slate-100 bg-purple-950/30 md:bg-transparent p-3 md:p-0 rounded-xl border border-purple-500/20 md:border-none">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-300 stroke-[3]" />
                  </div>
                  <span className="font-medium">{row.pulseChat}</span>
                </div>

                {/* Traditional Solution */}
                <div className="md:col-span-4 flex items-start gap-3 text-sm text-slate-400 bg-[#090514]/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-white/5 md:border-none">
                  <div className="w-5 h-5 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span>{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
