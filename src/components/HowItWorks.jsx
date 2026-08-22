import React from 'react';
import { Phone, Users, Zap, ArrowRight, ShieldCheck, Search, Radio } from 'lucide-react';

export default function HowItWorks({ onLaunchClick }) {
  const steps = [
    {
      number: '01',
      title: 'Instant Identity',
      subtitle: 'No Passwords Needed',
      description: 'Enter your name and phone number. Our system issues a secure JWT token session instantly so you never have to deal with password resets or confirmations.',
      icon: Phone,
      tag: 'FAST ONBOARDING',
      accentColor: 'from-purple-500 to-indigo-500'
    },
    {
      number: '02',
      title: 'Discover & Organize',
      subtitle: 'Directory Search & Groups',
      description: 'Search for any user by name or phone digits. Start 1-on-1 conversations or create dedicated group channels with full member governance.',
      icon: Search,
      tag: '1-CLICK DISCOVERY',
      accentColor: 'from-fuchsia-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Real-Time Flow',
      subtitle: 'Persistent WebSocket Sync',
      description: 'Chat effortlessly with live bi-directional message synchronization, non-jerk smart scroll anchoring, and continuous group updates without page refreshes.',
      icon: Zap,
      tag: 'LIVE SOCKET STREAM',
      accentColor: 'from-indigo-500 to-purple-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#05020c]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4 shadow-neon-purple">
            <Radio className="w-3.5 h-3.5 text-purple-400" />
            <span>THE 3-STEP VELOCITY PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How PulseChat Works in Practice.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From first sign-in to real-time group conversations in under ten seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600/30 via-fuchsia-500/50 to-indigo-600/30 -translate-y-12 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative z-10 rounded-3xl bg-[#0d0720]/90 border border-purple-500/20 p-8 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-neon-purple flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.accentColor} p-[1px] shadow-neon-purple group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-[#0d0720] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <span className="text-3xl font-extrabold font-mono text-purple-500/30 group-hover:text-purple-400/60 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-purple-300 font-semibold mb-3">
                    {step.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-mono text-purple-300/80 mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                  <span>Step {step.number} of 03</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onLaunchClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-neon-purple hover:scale-105 transition-all text-sm sm:text-base"
          >
            <span>Start Chatting Now — No Password Required</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
