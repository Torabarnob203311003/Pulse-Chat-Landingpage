import React, { useState } from 'react';
import { 
  UserCheck, 
  Search, 
  MessageSquare, 
  Zap, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  Send,
  Users,
  ExternalLink
} from 'lucide-react';

export default function HowItWorks() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: '01',
      title: 'Sign In Fast',
      description: 'Enter your Name and Phone number to get started immediately. No passwords to remember or forget.',
      icon: Smartphone,
      preview: 'Instant Name + Phone access with persistent JWT token auth.',
      tag: 'NO PASSWORDS'
    },
    {
      number: '02',
      title: 'Find People or Groups',
      description: 'Search registered users instantly or create a new group with custom name and member selection.',
      icon: Search,
      preview: 'Real-time directory query and 1-click group creation.',
      tag: 'INSTANT DISCOVERY'
    },
    {
      number: '03',
      title: 'Chat in Real Time',
      description: 'Send messages, react with emojis, quote replies, see read receipts, and stay updated across tabs.',
      icon: Zap,
      preview: 'Sub-20ms WebSocket streaming with zero page reloads.',
      tag: '0-REFRESH PIPELINE'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-3 shadow-neon-purple">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Start Chatting in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              3 Simple Steps
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed max-w-xl mx-auto font-normal px-2">
            No convoluted onboarding, no forgotten password resets. From initial landing to active real-time messaging in under 10 seconds.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative mb-8 sm:mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx + 1;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx + 1)}
                className={`relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#12092a] border-purple-400/60 shadow-neon-purple -translate-y-1'
                    : 'bg-[#0b0618] border-purple-500/20 hover:border-purple-500/40 hover:bg-[#0f0722]'
                }`}
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                      {step.number}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-block text-[9px] font-mono font-bold px-2 py-0.2 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 mb-2">
                    {step.tag}
                  </span>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Simulated Step Preview */}
                <div className="pt-3 border-t border-purple-500/20 bg-[#070312]/60 rounded-xl p-3 text-[11px] font-mono text-purple-200/90 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{step.preview}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Action Link */}
        <div className="text-center pt-2">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-400/40 text-white font-heading font-bold text-xs sm:text-sm shadow-neon-purple hover:scale-105 transition-all"
          >
            <span>Start Chatting Now</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
