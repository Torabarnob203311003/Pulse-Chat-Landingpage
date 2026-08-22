import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  CheckCheck, 
  Check, 
  MessageSquare, 
  Users, 
  Search, 
  Smile, 
  CornerDownRight, 
  ExternalLink,
  Shield,
  Activity,
  Send,
  MoreVertical,
  Bell,
  Heart,
  Flame,
  Radio
} from 'lucide-react';

export default function Hero() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  // Interactive emoji reaction state in hero preview
  const [reactions, setReactions] = useState({
    '🔥': 6,
    '🚀': 4,
    '❤️': 5,
    '👍': 3
  });
  const [userReacted, setUserReacted] = useState(null);

  // Active chat selection in hero preview sidebar
  const [selectedChat, setSelectedChat] = useState('alex');

  // Dynamic typing simulation
  const [isTyping, setIsTyping] = useState(true);

  // Real-time status cycling for realistic app preview
  const [messageStatus, setMessageStatus] = useState('seen');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIsTyping(prev => !prev);
    }, 4000);

    const statusCycle = setInterval(() => {
      setMessageStatus(prev => {
        if (prev === 'sent') return 'delivered';
        if (prev === 'delivered') return 'seen';
        return 'sent';
      });
    }, 4500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(statusCycle);
    };
  }, []);

  const handleHeroReaction = (emoji) => {
    if (userReacted === emoji) {
      setReactions(prev => ({ ...prev, [emoji]: Math.max(0, prev[emoji] - 1) }));
      setUserReacted(null);
    } else {
      setReactions(prev => ({
        ...prev,
        [emoji]: (prev[emoji] || 0) + 1,
        ...(userReacted ? { [userReacted]: Math.max(0, prev[userReacted] - 1) } : {})
      }));
      setUserReacted(emoji);
    }
  };

  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden flex flex-col justify-center bg-grid-pattern">
      
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[550px] h-[260px] sm:h-[550px] bg-gradient-to-tr from-purple-700/20 via-fuchsia-600/10 to-indigo-600/15 rounded-full blur-[90px] sm:blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-10 -left-16 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-purple-600/10 rounded-full blur-[80px] sm:blur-[110px] animate-float-slow"></div>
        <div className="absolute bottom-6 -right-16 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-indigo-600/10 rounded-full blur-[80px] sm:blur-[120px] animate-float-delayed"></div>
      </div>

      {/* Floating Background Messaging Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
        <div className="absolute top-20 left-[6%] xl:left-[10%] animate-float-chat-1">
          <div className="px-3 py-1.5 rounded-2xl rounded-bl-sm bg-[#180f33]/80 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs text-purple-200">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[8px] font-bold text-white">
              AL
            </div>
            <span className="text-purple-300 text-[10px] font-medium">"Socket live! 🚀"</span>
          </div>
        </div>

        <div className="absolute top-24 right-[6%] xl:right-[10%] animate-float-chat-2">
          <div className="px-3 py-1.5 rounded-2xl rounded-br-sm bg-gradient-to-r from-purple-700/80 to-indigo-600/80 border border-purple-400/40 backdrop-blur-md shadow-neon-purple flex items-center gap-1.5 text-xs text-white">
            <span className="text-[10px]">"Delivered"</span>
            <CheckCheck className="w-3 h-3 text-cyan-300" />
          </div>
        </div>

        <div className="absolute top-[52%] left-[4%] xl:left-[6%] animate-float-chat-3">
          <div className="px-3 py-1 rounded-xl bg-[#140b2e]/85 border border-purple-500/25 backdrop-blur-md shadow-lg flex items-center gap-1.5 text-xs text-slate-200">
            <span className="text-xs">🔥</span>
            <span className="font-mono text-[9px] text-purple-300">Sarah reacted</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Top Hero Pitch Container - Sleek, Lightweight & Perfectly Scaled */}
        <div className="text-center max-w-2xl mx-auto">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/35 text-purple-300 shadow-neon-purple mb-4 backdrop-blur-xl animate-fade-in">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400"></span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-mono font-semibold tracking-wide">
              Instant WebSockets <span className="text-purple-400/50">•</span> Read Receipts <span className="text-purple-400/50">•</span> Reactions
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3">
            Real Conversations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Instantly Connected.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300/90 max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed font-normal px-2">
            A modern real-time messaging platform for private conversations and group communication — with instant delivery, read receipts, and zero refresh delay.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl p-[1px] font-heading font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-neon-purple"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-xl animate-gradient-x"></div>
              <div className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-[11px] bg-[#0b0618] group-hover:bg-[#0b0618]/75 transition-colors flex items-center justify-center gap-2 text-white">
                <Zap className="w-3.5 h-3.5 text-purple-400 group-hover:text-yellow-300 transition-colors animate-pulse" />
                <span>Start Chatting</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 text-purple-200 hover:text-white font-heading font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 backdrop-blur-xl transition-all"
            >
              <span>Explore Features</span>
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#140b2e]/90 hover:bg-[#1f1146] border border-purple-400/40 text-purple-200 hover:text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Try Live Demo</span>
              <ExternalLink className="w-3 h-3 text-purple-400" />
            </a>
          </div>

          {/* Value Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-[10px] sm:text-[11px] font-mono text-slate-300 font-semibold pb-2 border-b border-purple-500/15 max-w-md mx-auto">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>&lt; 20ms Latency</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>100% Real-Time</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>No Passwords</span>
            </div>
          </div>

        </div>

        {/* 3D Realistic PulseChat Application Preview - Lightweight on Mobile */}
        <div className="mt-6 sm:mt-10 relative max-w-3xl mx-auto perspective-1000">
          
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-fuchsia-600/20 to-indigo-600/30 rounded-2xl blur-xl opacity-50"></div>

          <div className="relative rounded-xl sm:rounded-2xl bg-[#090514]/95 border border-purple-500/35 shadow-xl backdrop-blur-2xl overflow-hidden hero-3d-card">
            
            {/* App Topbar Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-purple-500/20 bg-[#060310]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-3 w-[1px] bg-purple-500/20 mx-1"></div>
                <span className="text-[10px] font-mono font-bold text-slate-200">
                  PulseChat Live
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[9px] font-mono text-purple-300 font-semibold">
                  <Activity className="w-2.5 h-2.5 text-emerald-400" />
                  <span>SYNCED</span>
                </div>
              </div>
            </div>

            {/* Application Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] sm:min-h-[360px]">
              
              {/* Sidebar */}
              <div className="hidden md:block md:col-span-4 border-r border-purple-500/20 bg-[#0c071d]/90 p-3 space-y-2.5">
                
                <div className="relative">
                  <Search className="w-3 h-3 text-purple-400 absolute left-2 top-2" />
                  <input
                    type="text"
                    readOnly
                    value="Alex Morgan"
                    className="w-full bg-[#140b2e] border border-purple-500/20 rounded-lg pl-6 pr-2 py-1 text-[11px] font-mono text-white placeholder-slate-400 focus:outline-none cursor-default"
                  />
                </div>

                <div className="space-y-1">
                  <div className="px-1 text-[8px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                    Conversations
                  </div>

                  <div 
                    onClick={() => setSelectedChat('alex')}
                    className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer transition-all ${
                      selectedChat === 'alex'
                        ? 'bg-purple-600/25 border border-purple-400/40'
                        : 'hover:bg-purple-950/40 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                        AM
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-heading font-bold text-white leading-none">Alex Morgan</p>
                        <p className="text-[9px] text-purple-200/70 truncate max-w-[80px]">Meeting today?</p>
                      </div>
                    </div>
                    <span className="px-1 py-0.2 text-[8px] font-mono font-bold bg-purple-500 text-white rounded-full">1</span>
                  </div>

                  <div 
                    onClick={() => setSelectedChat('design')}
                    className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer transition-all ${
                      selectedChat === 'design'
                        ? 'bg-purple-600/25 border border-purple-400/40'
                        : 'hover:bg-purple-950/40 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-purple-600 flex items-center justify-center text-[9px] font-bold text-white">
                        🎨
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-heading font-bold text-white leading-none">Design Team</p>
                        <p className="text-[9px] text-slate-400 truncate max-w-[80px]">UI updated</p>
                      </div>
                    </div>
                    <span className="text-[8px] font-mono text-slate-400">07:12</span>
                  </div>
                </div>

              </div>

              {/* Main Chat Stream */}
              <div className="md:col-span-8 flex flex-col justify-between bg-gradient-to-b from-[#0e0722]/60 via-[#0a0518]/90 to-[#060310]">
                
                {/* Header */}
                <div className="px-3 sm:px-4 py-2 border-b border-purple-500/20 bg-[#090514]/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white">
                      AM
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="text-[11px] sm:text-xs font-heading font-bold text-white">Alex Morgan</h4>
                        <span className="text-[8px] font-mono px-1 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono text-purple-300">
                    Direct Stream
                  </span>
                </div>

                {/* Messages Stream */}
                <div className="p-3 sm:p-4 space-y-2.5 overflow-y-auto max-h-[220px] custom-scrollbar">
                  
                  {/* Incoming */}
                  <div className="flex items-start gap-1.5 max-w-[90%]">
                    <div className="w-5 h-5 rounded-md bg-purple-900/50 flex items-center justify-center text-[9px] font-bold text-purple-200 flex-shrink-0">
                      AM
                    </div>
                    <div className="p-2 rounded-xl rounded-tl-none bg-[#180f33] border border-purple-500/25 text-[11px] text-slate-100 shadow-sm leading-relaxed">
                      Are we meeting today for the release review? 🚀
                    </div>
                  </div>

                  {/* Outgoing */}
                  <div className="flex items-start justify-end gap-1.5 ml-auto max-w-[92%]">
                    <div className="space-y-1 text-right w-full">
                      <div className="p-2 rounded-xl rounded-tr-none bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-neon-purple text-left space-y-1">
                        
                        <div className="p-1 rounded bg-purple-950/60 border-l border-purple-300 text-[9px] text-purple-200 truncate">
                          "Are we meeting today? 🚀"
                        </div>

                        <p className="font-body text-[11px] leading-relaxed">
                          Yes! WebSocket connected. Ready to go live! 🎉
                        </p>

                        <div className="flex items-center justify-end gap-1 text-[8px] font-mono">
                          <span className="text-purple-200/80">07:15</span>
                          <CheckCheck className="w-2.5 h-2.5 text-cyan-300" />
                        </div>

                      </div>

                      {/* Emoji Reactions */}
                      <div className="flex items-center justify-end gap-1">
                        {Object.entries(reactions).map(([emoji, count]) => (
                          <button
                            key={emoji}
                            onClick={() => handleHeroReaction(emoji)}
                            className={`px-1.5 py-0.2 rounded-full text-[9px] flex items-center gap-0.5 transition-all ${
                              userReacted === emoji
                                ? 'bg-purple-600 text-white border border-purple-300'
                                : 'bg-[#150d30] border border-purple-500/25 text-slate-300'
                            }`}
                          >
                            <span>{emoji}</span>
                            <span className="font-mono">{count}</span>
                          </button>
                        ))}
                      </div>

                    </div>

                    <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                      ME
                    </div>
                  </div>

                </div>

                {/* Input Bar */}
                <div className="p-2 sm:p-2.5 bg-[#070312] border-t border-purple-500/20 flex items-center gap-1.5">
                  <input
                    type="text"
                    readOnly
                    value="Testing WebSocket sync... ⚡"
                    className="flex-1 bg-[#130a29] border border-purple-500/30 rounded-lg px-2.5 py-1 text-[11px] text-white placeholder-slate-400 focus:outline-none cursor-default font-medium"
                  />

                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-neon-purple hover:scale-105 transition-all flex items-center justify-center"
                  >
                    <Send className="w-2.5 h-2.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
