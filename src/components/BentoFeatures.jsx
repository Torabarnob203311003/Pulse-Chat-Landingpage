import React from 'react';
import { 
  Zap, 
  MessageSquare, 
  Users, 
  CheckCheck, 
  Smile, 
  CornerDownRight, 
  Search, 
  Bell, 
  RefreshCw, 
  Inbox, 
  ShieldCheck, 
  Lock,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function BentoFeatures() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  const featureList = [
    {
      icon: Zap,
      title: 'Real-Time Messaging',
      tag: 'SUB-20MS SPEED',
      description: 'Instant message delivery with zero lag and optimistic UI synchronization.',
      color: 'from-purple-500 to-indigo-500',
      badge: 'WebSockets'
    },
    {
      icon: MessageSquare,
      title: 'Private Chat',
      tag: '1-ON-1 DIRECT',
      description: 'Encrypted private communication channels with instant online presence.',
      color: 'from-fuchsia-500 to-purple-600',
      badge: 'Direct'
    },
    {
      icon: Users,
      title: 'Group Chat',
      tag: 'TEAM CHANNELS',
      description: 'Collaborate with unlimited participants and live member activity streams.',
      color: 'from-indigo-500 to-cyan-500',
      badge: 'Multi-User'
    },
    {
      icon: CheckCheck,
      title: 'Read Receipts',
      tag: 'SEEN STATUS',
      description: 'Clear visual status transitions from sending ⏳, sent ✓, delivered ✓✓, to seen ✓✓.',
      color: 'from-cyan-500 to-blue-500',
      badge: '✓✓ Live'
    },
    {
      icon: Smile,
      title: 'Emoji Reactions',
      tag: '8 EXPRESSIONS',
      description: 'React instantly with 👍, ❤️, 😂, 🔥, 🎉, 🚀, 👏, and 👀 with synchronized counters.',
      color: 'from-yellow-500 to-amber-500',
      badge: 'Interactive'
    },
    {
      icon: CornerDownRight,
      title: 'Quoted Replies',
      tag: 'THREAD CONTEXT',
      description: 'Quote specific messages directly to keep discussions organized and clear.',
      color: 'from-purple-400 to-fuchsia-500',
      badge: 'Contextual'
    },
    {
      icon: Search,
      title: 'Message Search',
      tag: 'INSTANT QUERY',
      description: 'Search conversations by keyword and highlight matching messages in real time.',
      color: 'from-pink-500 to-purple-600',
      badge: 'Fast Lookup'
    },
    {
      icon: Bell,
      title: 'Live Notifications',
      tag: 'REAL-TIME ALERTS',
      description: 'Receive instant toast alerts for new messages, reactions, and group updates.',
      color: 'from-violet-500 to-indigo-600',
      badge: '0-Refresh'
    },
    {
      icon: RefreshCw,
      title: 'Cross-Tab Sync',
      tag: 'MULTI-CLIENT',
      description: 'Keep multiple browser windows, tabs, and devices completely synchronized.',
      color: 'from-indigo-400 to-purple-500',
      badge: 'Persistent'
    },
    {
      icon: Inbox,
      title: 'Unread Tracking',
      tag: 'SMART BADGES',
      description: 'Distinct unread message dividers and count badges keep your place secure.',
      color: 'from-purple-600 to-indigo-700',
      badge: 'Non-Jerk'
    },
    {
      icon: ShieldCheck,
      title: 'Group Administration',
      tag: 'GOVERNANCE',
      description: 'Promote co-admins, manage members, rename groups, and broadcast system logs.',
      color: 'from-emerald-500 to-teal-500',
      badge: 'Roles'
    },
    {
      icon: Lock,
      title: 'Privacy Controls',
      tag: 'SAFE MESSAGING',
      description: 'Delete individual messages and protect conversation history with read-only guards.',
      color: 'from-rose-500 to-purple-600',
      badge: 'Encrypted'
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden bg-[#05020c]">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[850px] h-[350px] sm:h-[550px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Trendy Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>12 POWERFUL CAPABILITIES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Engineered for Velocity. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Built for Deep Connection.
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Every feature in PulseChat is designed to remove communication barriers and provide a smooth, dependable real-time messaging experience.
          </p>
        </div>

        {/* 12-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {featureList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl sm:rounded-3xl bg-[#0c071e]/85 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-neon-purple flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} p-[1px] shadow-sm group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-[#0c071e] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-purple-400 font-bold tracking-wider uppercase block mb-1">
                      {feature.tag}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-purple-300/70 group-hover:text-purple-300">
                  <span>Instant WebSocket Sync</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Prompt - "Explore all 12 features live" Navigates directly to Demo */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-heading font-bold shadow-neon-purple hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
          >
            <span>Explore all 12 features live</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
