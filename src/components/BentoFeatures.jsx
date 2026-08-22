import React, { useState } from 'react';
import { 
  Zap, 
  Users, 
  MessageSquare, 
  Smile, 
  CheckCheck, 
  Clock, 
  CornerDownRight, 
  Bell, 
  Search, 
  ArrowDown, 
  Trash2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function BentoFeatures() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: Zap,
      title: 'Real-Time Messaging',
      subtitle: 'Bi-directional WebSocket streaming',
      description: 'Messages arrive instantly without page refreshes, manual reloads, or delayed polling intervals.',
      tag: 'SUB-20MS',
      accent: 'purple'
    },
    {
      id: 2,
      icon: MessageSquare,
      title: 'Private 1-on-1 Chats',
      subtitle: 'Secure direct messaging',
      description: 'Find any registered user and start private one-on-one conversations with full delivery feedback.',
      tag: 'DIRECT',
      accent: 'indigo'
    },
    {
      id: 3,
      icon: Users,
      title: 'Group Conversations',
      subtitle: 'Multi-member channels',
      description: 'Create multi-user groups with custom names, live member lists, and synchronized channels.',
      tag: 'GROUPS',
      accent: 'fuchsia'
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Group Management & Admin',
      subtitle: 'Granular channel governance',
      description: 'Add members, remove members, rename channels, and promote co-admins in real time.',
      tag: 'ROLES',
      accent: 'cyan'
    },
    {
      id: 5,
      icon: Smile,
      title: 'Emoji Message Reactions',
      subtitle: '8 Expressive reactions',
      description: 'Express consensus with synchronized emojis (👍, ❤️, 😂, 🔥, 🎉, 🚀, 👏, 👀) with live counters.',
      tag: 'REACTIONS',
      accent: 'yellow'
    },
    {
      id: 6,
      icon: CornerDownRight,
      title: 'Message Replies',
      subtitle: 'Quoted context threading',
      description: 'Reply to specific prior messages with visual quote preview cards so conversations stay structured.',
      tag: 'THREADING',
      accent: 'purple'
    },
    {
      id: 7,
      icon: CheckCheck,
      title: 'Read Receipts & Statuses',
      subtitle: 'Sent → Delivered → Seen',
      description: 'Full lifecycle visibility with double checks: purple for sent, silver for delivered, and cyan for seen.',
      tag: 'RECEIPTS',
      accent: 'emerald'
    },
    {
      id: 8,
      icon: Bell,
      title: 'Real-Time Notifications',
      subtitle: 'Live UI toast stream',
      description: 'Instant toasts for new messages, emoji reactions, group invitations, and member updates.',
      tag: 'NOTIFICATIONS',
      accent: 'fuchsia'
    },
    {
      id: 9,
      icon: Search,
      title: 'Message Search',
      subtitle: 'Instant regex query',
      description: 'Search messages across active conversation history with immediate keyword highlighting.',
      tag: 'SEARCH',
      accent: 'indigo'
    },
    {
      id: 10,
      icon: ArrowDown,
      title: 'Smart Scroll Management',
      subtitle: 'Viewport anchoring',
      description: 'Non-intrusive message scrolling with floating "↓ New messages" indicators when reading history.',
      tag: 'UX POLISH',
      accent: 'purple'
    },
    {
      id: 11,
      icon: Trash2,
      title: 'Message Deletion',
      subtitle: 'Synchronized retraction',
      description: 'Delete your own messages with synchronized updates across all connected participants.',
      tag: 'PRIVACY',
      accent: 'red'
    },
    {
      id: 12,
      icon: ShieldCheck,
      title: 'Removed-Member Protection',
      subtitle: 'Read-only archived mode',
      description: 'Past history remains viewable in read-only mode if removed from groups without permission leaks.',
      tag: 'GOVERNANCE',
      accent: 'amber'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden bg-[#05020d]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[300px] sm:h-[450px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-3 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FEATURE BREAKDOWN</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            12 Essential Features <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Built for Modern Chat
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed max-w-xl mx-auto font-normal px-2">
            Every feature is engineered to make real-time conversations frictionless, reliable, and deeply intuitive.
          </p>
        </div>

        {/* 12 Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {features.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered
                    ? 'bg-[#12092c] border-purple-400/60 shadow-neon-purple -translate-y-1'
                    : 'bg-[#0b0618]/90 border-purple-500/20 hover:border-purple-500/40 hover:bg-[#100725]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600/30 group-hover:border-purple-400/60 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.2 rounded-full bg-purple-950/70 text-purple-300 border border-purple-500/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-heading text-[11px] text-purple-300/80 mb-2 font-medium">
                    {item.subtitle}
                  </p>

                  <p className="font-body text-xs text-slate-300/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-purple-500/15 flex items-center justify-between text-[10px] font-mono text-purple-300/60 group-hover:text-purple-300 transition-colors">
                  <span>PulseChat Core</span>
                  <span>Active ✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore all 12 features live */}
        <div className="text-center pt-2">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-heading font-bold text-xs sm:text-sm shadow-neon-purple hover:scale-105 active:scale-98 transition-all"
          >
            <span>Explore all 12 features live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
