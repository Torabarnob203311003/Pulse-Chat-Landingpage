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
    <section className="relative min-h-[95vh] pt-32 sm:pt-40 pb-16 lg:pb-28 overflow-hidden flex flex-col justify-center bg-grid-pattern">
      
      {/* Background Animated Gradient Mesh & Glowing Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] bg-gradient-to-tr from-purple-700/25 via-fuchsia-600/15 to-indigo-600/20 rounded-full blur-[100px] sm:blur-[160px] animate-pulse-slow"></div>
        <div className="absolute top-12 -left-20 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[90px] sm:blur-[130px] animate-float-slow"></div>
        <div className="absolute bottom-10 -right-20 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[140px] animate-float-delayed"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[300px] sm:h-[450px] bg-gradient-to-b from-purple-500/10 via-purple-900/5 to-transparent blur-3xl"></div>
      </div>

      {/* =========================================================================
          CHAT APP FLOATING BACKGROUND ELEMENTS & ANIMATED BUBBLES
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
        
        {/* Floating Bubble 1: Top Left */}
        <div className="absolute top-24 left-[4%] lg:left-[8%] animate-float-chat-1">
          <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-[#180f33]/80 border border-purple-500/30 backdrop-blur-md shadow-2xl flex items-center gap-2.5 text-xs text-purple-200">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
              AL
            </div>
            <div>
              <span className="font-heading font-bold text-white block">Alex:</span>
              <span className="text-purple-300/90 text-[11px]">"Socket connection live! 🚀"</span>
            </div>
          </div>
        </div>

        {/* Floating Bubble 2: Top Right */}
        <div className="absolute top-28 right-[5%] lg:right-[9%] animate-float-chat-2">
          <div className="px-4 py-2.5 rounded-2xl rounded-br-sm bg-gradient-to-r from-purple-700/80 to-indigo-600/80 border border-purple-400/40 backdrop-blur-md shadow-neon-purple flex items-center gap-2 text-xs text-white">
            <span className="text-xs">"Delivered instantly"</span>
            <CheckCheck className="w-4 h-4 text-cyan-300 stroke-[2.5]" />
          </div>
        </div>

        {/* Floating Bubble 3: Mid-Left */}
        <div className="absolute top-[52%] left-[2%] lg:left-[5%] animate-float-chat-3">
          <div className="px-4 py-2 rounded-2xl bg-[#140b2e]/85 border border-purple-500/25 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs text-slate-200">
            <span className="text-base animate-float-emoji-1">🔥</span>
            <span className="font-mono text-[11px] text-purple-300">Sarah reacted to your message</span>
          </div>
        </div>

        {/* Floating Bubble 4: Mid-Right */}
        <div className="absolute top-[55%] right-[2%] lg:right-[6%] animate-float-chat-4">
          <div className="px-4 py-2.5 rounded-2xl bg-[#130b2c]/85 border border-purple-500/25 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs text-slate-200">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-emerald-300">0ms Sync • 1-Click Phone Auth</span>
          </div>
        </div>

        {/* Floating Emojis in Space */}
        <div className="absolute top-[38%] left-[14%] animate-float-emoji-1 text-2xl opacity-70">
          🚀
        </div>
        <div className="absolute top-[42%] right-[15%] animate-float-emoji-2 text-2xl opacity-70">
          ❤️
        </div>
        <div className="absolute bottom-[18%] left-[10%] animate-float-emoji-2 text-2xl opacity-60">
          💬
        </div>
        <div className="absolute bottom-[20%] right-[12%] animate-float-emoji-1 text-2xl opacity-60">
          🎉
        </div>
      </div>

      <div className="relative max-w-[96rem] mx-auto px-4 sm:px-8 lg:px-12 z-10 w-full">
        
        {/* Top Hero Pitch Container with Trendy Typography */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-purple-950/80 border border-purple-500/35 text-purple-300 shadow-neon-purple mb-6 sm:mb-8 backdrop-blur-xl animate-fade-in hover:border-purple-400/80 hover:scale-105 transition-all cursor-default">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wide flex items-center gap-2">
              ⚡ Instant WebSocket Delivery <span className="text-purple-400/50">•</span> Read Receipts <span className="text-purple-400/50">•</span> Reactions
            </span>
          </div>

          {/* Main Hero Headline in Syne / Space Grotesk display typography */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.06] mb-6">
            Real Conversations. <br className="hidden xs:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Instantly Connected.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0">
            PulseChat is a modern real-time messaging platform for private conversations and powerful group communication — with instant delivery, read receipts, reactions, replies, and seamless synchronization.
          </p>

          {/* CTA Button Group - All Clickables Navigate to Live App */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group overflow-hidden rounded-2xl p-[1.5px] font-heading font-extrabold text-base sm:text-lg transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-neon-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-2xl animate-gradient-x"></div>
              <div className="relative px-8 sm:px-11 py-4 sm:py-4.5 rounded-[15px] bg-[#0b0618] group-hover:bg-[#0b0618]/75 transition-colors flex items-center justify-center gap-3 text-white">
                <Zap className="w-5 h-5 text-purple-400 group-hover:text-yellow-300 transition-colors animate-pulse" />
                <span>Start Chatting</span>
                <ArrowRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-4.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 text-purple-200 hover:text-white font-heading font-bold text-base sm:text-lg flex items-center justify-center gap-2 backdrop-blur-xl transition-all hover:shadow-neon-purple hover:scale-105"
            >
              <span>Explore Features</span>
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-4.5 rounded-2xl bg-[#140b2e]/90 hover:bg-[#1f1146] border border-purple-400/40 text-purple-200 hover:text-white font-heading font-extrabold text-base sm:text-lg flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-neon-purple hover:scale-105"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Try Live App Demo</span>
              <ExternalLink className="w-4 h-4 text-purple-400" />
            </a>
          </div>

          {/* Quick Value Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-10 text-xs sm:text-sm font-mono text-slate-300 font-bold pb-4 border-b border-purple-500/15 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Sub-20ms WebSocket Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>100% Real-Time Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>No Password Friction</span>
            </div>
          </div>

        </div>

        {/* 3D Realistic PulseChat Application Preview */}
        <div className="mt-12 sm:mt-18 relative max-w-5xl mx-auto perspective-1000">
          
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 via-fuchsia-600/30 to-indigo-600/40 rounded-3xl blur-3xl opacity-70 animate-pulse-slow"></div>

          {/* Main 3D Tilted Application Window */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#090514]/95 border border-purple-500/35 shadow-2xl backdrop-blur-2xl overflow-hidden hero-3d-card">
            
            {/* App Topbar Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-purple-500/20 bg-[#060310]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-4 w-[1px] bg-purple-500/20 mx-1 sm:mx-2"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow"></span>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-200 hidden xs:inline">
                    PulseChat v2.4 • Live WebSocket Cluster
                  </span>
                  <span className="text-[11px] font-mono text-slate-200 xs:hidden">
                    PulseChat Live
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[10px] sm:text-[11px] font-mono font-bold text-purple-300">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span className="hidden sm:inline">0-REFRESH PIPELINE</span>
                  <span className="sm:hidden">SYNCED</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 hidden md:inline font-bold">✓✓ Live Receipts Active</span>
              </div>
            </div>

            {/* Application Main Layout: Sidebar + Conversation Area */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px] sm:min-h-[480px]">
              
              {/* Sidebar */}
              <div className="hidden md:block md:col-span-4 border-r border-purple-500/20 bg-[#0c071d]/90 p-4 space-y-4">
                
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    readOnly
                    value="Alex Morgan"
                    className="w-full bg-[#140b2e] border border-purple-500/20 rounded-xl pl-8 pr-3 py-2 text-xs font-mono text-white placeholder-slate-400 focus:outline-none cursor-default font-medium"
                  />
                </div>

                {/* Conversation List */}
                <div className="space-y-1.5">
                  <div className="px-2 text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                    Active Conversations
                  </div>

                  {/* Chat Item 1: Alex Morgan */}
                  <div 
                    onClick={() => setSelectedChat('alex')}
                    className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all ${
                      selectedChat === 'alex'
                        ? 'bg-purple-600/25 border border-purple-400/40 shadow-sm'
                        : 'hover:bg-purple-950/40 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-sm font-heading">
                          AM
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c071d]"></span>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-heading font-bold text-white leading-none mb-1">Alex Morgan</p>
                        <p className="text-[11px] text-purple-200/70 truncate max-w-[120px]">Are we meeting today?</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-slate-400">Just now</span>
                      <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-purple-500 text-white rounded-full">1</span>
                    </div>
                  </div>

                  {/* Chat Item 2: Design Team */}
                  <div 
                    onClick={() => setSelectedChat('design')}
                    className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all ${
                      selectedChat === 'design'
                        ? 'bg-purple-600/25 border border-purple-400/40 shadow-sm'
                        : 'hover:bg-purple-950/40 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-purple-400 border-2 border-[#0c071d]"></span>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-heading font-bold text-white leading-none mb-1">🎨 Design Team</p>
                        <p className="text-[11px] text-slate-400 truncate max-w-[120px]">Sarah: Pushed new UI</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-slate-400">07:12 AM</span>
                      <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-purple-500 text-white rounded-full">3</span>
                    </div>
                  </div>

                  {/* Chat Item 3: Sarah Chen */}
                  <div 
                    onClick={() => setSelectedChat('sarah')}
                    className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all ${
                      selectedChat === 'sarah'
                        ? 'bg-purple-600/25 border border-purple-400/40 shadow-sm'
                        : 'hover:bg-purple-950/40 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-600 flex items-center justify-center text-xs font-bold text-white shadow-sm font-heading">
                          SC
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c071d]"></span>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-heading font-bold text-white leading-none mb-1">Sarah Chen</p>
                        <p className="text-[11px] text-slate-400 truncate max-w-[120px]">Read receipts active</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">07:05 AM</span>
                  </div>
                </div>

                {/* Micro Unread Summary Pill */}
                <div className="p-2.5 rounded-xl bg-[#140b2c] border border-purple-500/20 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-purple-400" />
                    <span className="font-heading font-bold">Unread:</span>
                  </div>
                  <span className="font-bold text-purple-300 font-mono">4 New Messages</span>
                </div>

              </div>

              {/* Main Chat Conversation Window */}
              <div className="md:col-span-8 flex flex-col justify-between bg-gradient-to-b from-[#0e0722]/60 via-[#0a0518]/90 to-[#060310]">
                
                {/* Conversation Header */}
                <div className="px-4 sm:px-6 py-3.5 border-b border-purple-500/20 bg-[#090514]/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-md font-heading">
                        AM
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090514]"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-heading font-bold text-white">Alex Morgan</h4>
                        <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                          Online
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-purple-300/70 font-mono">
                        +1 (555) 019-2834 • Direct Channel
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-300 hidden sm:inline">
                      Direct 1-on-1 Stream
                    </span>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/30 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Messages Stream */}
                <div className="p-4 sm:p-6 space-y-4 overflow-y-auto max-h-[320px] custom-scrollbar">
                  
                  {/* Unread Divider Badge */}
                  <div className="relative flex items-center justify-center my-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-purple-500/20"></div>
                    </div>
                    <div className="relative px-3.5 py-0.5 rounded-full bg-[#160d33] border border-purple-500/30 text-[10px] font-mono text-purple-300 font-bold">
                      Unread Messages • Today
                    </div>
                  </div>

                  {/* Incoming Message 1 (Alex) */}
                  <div className="flex items-start gap-2.5 sm:gap-3 max-w-[85%] sm:max-w-md">
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-[10px] sm:text-xs font-bold text-purple-200 flex-shrink-0 font-heading">
                      AM
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
                        <span className="font-heading font-bold text-purple-200">Alex Morgan</span>
                        <span className="text-slate-400 font-mono">07:14 AM</span>
                      </div>
                      <div className="p-3 sm:p-3.5 rounded-2xl rounded-tl-none bg-[#180f33] border border-purple-500/25 text-xs sm:text-sm text-slate-100 shadow-sm leading-relaxed font-body">
                        Are we meeting today for the product release review? 🚀
                      </div>
                    </div>
                  </div>

                  {/* Outgoing Message 2 (You) with Quoted Reply & Read Receipts & Reactions */}
                  <div className="flex items-start justify-end gap-2.5 sm:gap-3 ml-auto max-w-[90%] sm:max-w-lg">
                    <div className="space-y-1 text-right w-full">
                      <div className="flex items-center justify-end gap-2 text-[10px] sm:text-[11px]">
                        <span className="text-slate-400 font-mono">07:15 AM</span>
                        <span className="font-heading font-bold text-purple-300">You</span>
                      </div>

                      {/* Outgoing Bubble */}
                      <div className="p-3 sm:p-3.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-neon-purple text-left space-y-2">
                        
                        {/* Embedded Quoted Reply Preview */}
                        <div className="p-2 rounded-xl bg-purple-950/60 border-l-2 border-purple-300 text-[11px] text-purple-200">
                          <div className="flex items-center gap-1 font-heading font-bold text-purple-300 mb-0.5">
                            <CornerDownRight className="w-3 h-3" />
                            <span>Replying to Alex Morgan</span>
                          </div>
                          <p className="italic text-purple-200/80 truncate">"Are we meeting today for the product release review? 🚀"</p>
                        </div>

                        {/* Main Message Text */}
                        <p className="font-body text-xs sm:text-sm leading-relaxed">
                          Yes! Everything is synced with persistent WebSockets. Launching live now! 🎉
                        </p>

                        {/* Message Metadata & Read Receipts */}
                        <div className="flex items-center justify-end gap-1.5 pt-1 text-[10px] font-mono">
                          <span className="text-purple-200/80">07:15 AM</span>
                          {messageStatus === 'sent' && (
                            <span className="text-purple-300 flex items-center" title="Sent">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          )}
                          {messageStatus === 'delivered' && (
                            <span className="text-slate-300 flex items-center" title="Delivered">
                              <CheckCheck className="w-3.5 h-3.5" />
                            </span>
                          )}
                          {messageStatus === 'seen' && (
                            <span className="text-cyan-300 flex items-center font-bold" title="Read / Seen">
                              <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                            </span>
                          )}
                        </div>

                      </div>

                      {/* Interactive Emoji Reaction Bar underneath message */}
                      <div className="flex items-center justify-end gap-1.5 pt-1">
                        {Object.entries(reactions).map(([emoji, count]) => (
                          <button
                            key={emoji}
                            onClick={() => handleHeroReaction(emoji)}
                            className={`px-2.5 py-0.5 rounded-full text-xs flex items-center gap-1 transition-all ${
                              userReacted === emoji
                                ? 'bg-purple-600 text-white border border-purple-300 shadow-neon-purple scale-105'
                                : 'bg-[#150d30] hover:bg-[#201247] border border-purple-500/25 text-slate-300'
                            }`}
                          >
                            <span>{emoji}</span>
                            <span className="text-[10px] font-bold font-mono">{count}</span>
                          </button>
                        ))}
                      </div>

                    </div>

                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white flex-shrink-0 shadow-sm font-heading">
                      ME
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-2 pt-1 animate-fade-in">
                      <div className="w-6 h-6 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 text-[10px] font-heading font-bold">
                        AM
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-[#140b2b] border border-purple-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></span>
                        <span className="text-[10px] font-mono text-purple-300/80 ml-1">Alex is typing...</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Interactive Message Bar Mockup */}
                <div className="p-3 sm:p-4 bg-[#070312] border-t border-purple-500/20 flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <button 
                      onClick={() => handleHeroReaction('🔥')}
                      className="p-1.5 hover:text-purple-300 hover:bg-purple-900/30 rounded-lg transition-colors"
                      title="Add reaction"
                    >
                      <Smile className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex-1 relative">
                    <input
                      type="text"
                      readOnly
                      value="Testing WebSocket sync... ⚡"
                      className="w-full bg-[#130a29] border border-purple-500/30 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none cursor-default font-medium font-sans"
                    />
                  </div>

                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-neon-purple hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                    title="Send message / Open Live App"
                  >
                    <Send className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
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
