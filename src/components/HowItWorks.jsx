import React from 'react';
import { Phone, Users, Zap, ArrowRight, ShieldCheck, Search, Radio, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  const steps = [
    {
      number: '01',
      title: 'Sign In',
      flowTag: 'Step 1: Sign In',
      subtitle: 'Zero Password Friction',
      description: 'Create or access your PulseChat account with your name and phone number. Instant JWT session issuance without waiting for verification emails.',
      icon: Phone,
      tag: 'INSTANT ACCESS',
      accentColor: 'from-purple-500 to-indigo-500'
    },
    {
      number: '02',
      title: 'Start Chatting',
      flowTag: 'Step 2: Choose Conversation',
      subtitle: 'Directory Search & Groups',
      description: 'Find a user or create a group and start a conversation. Search the directory instantly by name or phone digits and add contacts with one click.',
      icon: Search,
      tag: '1-CLICK DISCOVERY',
      accentColor: 'from-fuchsia-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Communicate in Real Time',
      flowTag: 'Step 3: Chat in Real Time',
      subtitle: 'Live WebSocket Stream',
      description: 'Send messages, reply, react, search, and see delivery/read status instantly. Everything updates live across tabs and devices without page refreshes.',
      icon: Zap,
      tag: 'LIVE SOCKET STREAM',
      accentColor: 'from-indigo-500 to-cyan-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[750px] h-[250px] sm:h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Trendy Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-4 shadow-neon-purple">
            <Radio className="w-3.5 h-3.5 text-purple-400" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Simple 3-Step Flow. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Zero Complexity.
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Start communicating in under 10 seconds. From identity to real-time messaging, here is how PulseChat works.
          </p>

          {/* Visual Flow Indicator */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-5 sm:px-8 py-3 rounded-2xl bg-[#0e0722]/90 border border-purple-500/30 backdrop-blur-xl shadow-neon-purple text-xs sm:text-sm font-heading font-bold text-white">
            <span className="text-purple-300">Sign In</span>
            <span className="text-purple-400 font-mono">→</span>
            <span className="text-fuchsia-300">Choose Conversation</span>
            <span className="text-purple-400 font-mono">→</span>
            <span className="text-cyan-300">Chat in Real Time</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600/25 via-fuchsia-500/40 to-indigo-600/25 -translate-y-12 z-0"></div>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative z-10 rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/20 p-6 sm:p-8 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-tr ${step.accentColor} p-[1px] shadow-neon-purple group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-[#0c071e] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-purple-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-500/30 group-hover:text-purple-400/60 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-purple-300 font-semibold mb-3">
                    {step.tag}
                  </span>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                    {step.number} — {step.title}
                  </h3>
                  
                  <h4 className="text-xs font-mono text-purple-300/80 mb-3 font-semibold">
                    {step.subtitle}
                  </h4>

                  <p className="font-body text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                  <span className="font-mono">{step.flowTag}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

        </div>

        {/* Action Prompt - Navigates directly to Demo */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-heading font-bold shadow-neon-purple hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
          >
            <span>Start Chatting Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
