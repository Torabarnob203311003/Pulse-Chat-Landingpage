import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Smile, 
  Users, 
  Bell, 
  Search, 
  ShieldCheck, 
  Check, 
  CheckCheck, 
  Clock, 
  CornerDownRight, 
  Trash2, 
  ArrowDown, 
  Shield, 
  Edit3, 
  UserPlus, 
  UserMinus, 
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Send,
  Eye,
  Layers,
  Lock,
  ExternalLink
} from 'lucide-react';

export default function ProductShowcases() {
  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  // ==========================================
  // 1. Real-Time Messaging & Status Lifecycle State
  // ==========================================
  const [deliveryStage, setDeliveryStage] = useState(3);
  const [isSimulatingDelivery, setIsSimulatingDelivery] = useState(false);

  const runDeliverySimulation = () => {
    if (isSimulatingDelivery) return;
    setIsSimulatingDelivery(true);
    setDeliveryStage(0);
    setTimeout(() => {
      setDeliveryStage(1);
      setTimeout(() => {
        setDeliveryStage(2);
        setTimeout(() => {
          setDeliveryStage(3);
          setIsSimulatingDelivery(false);
        }, 800);
      }, 700);
    }, 600);
  };

  // ==========================================
  // 2. Interactive Reactions & Replies State
  // ==========================================
  const emojiList = [
    { emoji: '👍', name: 'Thumbs Up' },
    { emoji: '❤️', name: 'Love' },
    { emoji: '😂', name: 'Laugh' },
    { emoji: '🔥', name: 'Fire' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '👏', name: 'Clap' },
    { emoji: '👀', name: 'Eyes' },
  ];
  const [activeReactions, setActiveReactions] = useState({
    '🔥': 7,
    '🚀': 5,
    '❤️': 3,
    '🎉': 4,
    '👍': 2
  });
  const [myReaction, setMyReaction] = useState('🔥');

  const handleToggleReaction = (emoji) => {
    if (myReaction === emoji) {
      setActiveReactions(prev => ({
        ...prev,
        [emoji]: Math.max(0, (prev[emoji] || 1) - 1)
      }));
      setMyReaction(null);
    } else {
      setActiveReactions(prev => ({
        ...prev,
        [emoji]: (prev[emoji] || 0) + 1,
        ...(myReaction ? { [myReaction]: Math.max(0, (prev[myReaction] || 1) - 1) } : {})
      }));
      setMyReaction(emoji);
    }
  };

  // ==========================================
  // 3. Advanced Group Chat & Governance State
  // ==========================================
  const [systemLogs, setSystemLogs] = useState([
    { id: 1, text: 'Alex renamed the group to "Design Team"', icon: '✏️', time: '07:10 AM' },
    { id: 2, text: 'Sarah was added to the group', icon: '👋', time: '07:11 AM' },
    { id: 3, text: 'John was promoted to Group Admin', icon: '🛡️', time: '07:13 AM' },
  ]);
  const [groupAdminCount, setGroupAdminCount] = useState(2);
  const [groupMemberCount, setGroupMemberCount] = useState(6);

  const addSimulatedGroupEvent = (type) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (type === 'add') {
      setGroupMemberCount(prev => prev + 1);
      setSystemLogs(prev => [
        ...prev,
        { id: Date.now(), text: 'Elena Rostova was added to the group', icon: '👋', time }
      ]);
    } else if (type === 'promote') {
      setGroupAdminCount(prev => prev + 1);
      setSystemLogs(prev => [
        ...prev,
        { id: Date.now(), text: 'Sarah Chen was promoted to Group Admin', icon: '🛡️', time }
      ]);
    }
  };

  // ==========================================
  // 4. Real-Time Notification Showcase State
  // ==========================================
  const [notifications, setNotifications] = useState([
    { id: 1, title: '🎉 Group Invitation', body: 'You were added to Design Team by Alex.', time: 'Just now' },
    { id: 2, title: '💬 Direct Message', body: 'New message from Alex: "Ready to review the demo?"', time: '1m ago' },
    { id: 3, title: '🔥 Message Reaction', body: 'Sarah reacted 🔥 to your message "Ready for launch!"', time: '3m ago' }
  ]);

  const triggerNewToast = () => {
    const toasts = [
      { title: '⚡ Read Receipt Updated', body: 'Alex saw your message in #Design-Team', time: 'Just now' },
      { title: '🚀 New Reaction', body: 'Marcus reacted 🚀 to "Pushing build to prod"', time: 'Just now' },
      { title: '🛡️ Governance Event', body: 'You were assigned Administrator permissions', time: 'Just now' },
    ];
    const randomToast = toasts[Math.floor(Math.random() * toasts.length)];
    setNotifications(prev => [{ id: Date.now(), ...randomToast }, ...prev.slice(0, 3)]);
  };

  // ==========================================
  // 5. Smart Messaging (Search & Smart Scroll) State
  // ==========================================
  const [searchQuery, setSearchQuery] = useState('review');
  const [smartScrollScrolledUp, setSmartScrollScrolledUp] = useState(true);

  // ==========================================
  // 6. Privacy & Message Control State
  // ==========================================
  const [deletedMessageIds, setDeletedMessageIds] = useState([]);
  const handleDeleteMessage = (id) => {
    setDeletedMessageIds(prev => [...prev, id]);
  };

  return (
    <div id="showcase" className="py-20 sm:py-28 relative overflow-hidden bg-grid-pattern">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-24 sm:space-y-32">
        
        {/* =========================================================================
            SHOWCASE 1: Real-Time Messaging & Status Lifecycle (Section 4)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Text Col (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>REAL-TIME MESSAGING</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Messages That Move at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Speed of Conversation
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              No artificial delays or sluggish polling. Experience instant message delivery, optimistic UI rendering, and continuous cross-client status synchronization.
            </p>

            {/* Checklist of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">✓</span>
                <span>Instant message delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">✓</span>
                <span>Optimistic UI updates</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">✓</span>
                <span>Sent → Delivered status</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">✓</span>
                <span>✓✓ Read receipts</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={runDeliverySimulation}
                disabled={isSimulatingDelivery}
                className="px-5 py-3 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 border border-purple-400/40 text-white font-heading font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-neon-purple transition-all disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span>Test Live Message Lifecycle</span>
              </button>

              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-purple-300 hover:text-white font-heading font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Card Col (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-6 hover:border-purple-400/40 transition-colors">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white">Interactive Status Lifecycle</h3>
                  <p className="text-xs font-mono text-purple-300/80">Visualized 4-Stage WebSocket Pipeline</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Live
                </span>
              </div>

              {/* Status Progression Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className={`p-3 rounded-xl border text-center transition-all ${
                  deliveryStage >= 0 ? 'bg-purple-950/80 border-purple-400 text-white' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-xs font-mono font-bold mb-1">1. Sending</div>
                  <div className="text-xs flex items-center justify-center gap-1 font-mono">
                    <Clock className={`w-3.5 h-3.5 ${deliveryStage === 0 ? 'animate-spin text-yellow-400' : 'text-slate-400'}`} />
                    <span>Optimistic</span>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border text-center transition-all ${
                  deliveryStage >= 1 ? 'bg-purple-950/80 border-purple-400 text-white' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-xs font-mono font-bold mb-1">2. Sent</div>
                  <div className="text-xs flex items-center justify-center gap-1 font-mono">
                    <Check className="w-3.5 h-3.5 text-purple-300" />
                    <span>✓ Server Ack</span>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border text-center transition-all ${
                  deliveryStage >= 2 ? 'bg-purple-950/80 border-purple-400 text-white' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-xs font-mono font-bold mb-1">3. Delivered</div>
                  <div className="text-xs flex items-center justify-center gap-1 font-mono">
                    <CheckCheck className="w-3.5 h-3.5 text-slate-300" />
                    <span>✓✓ Client Recv</span>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border text-center transition-all ${
                  deliveryStage >= 3 ? 'bg-purple-950/80 border-cyan-400 text-cyan-200 shadow-neon-purple' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-xs font-mono font-bold mb-1 text-cyan-300">4. Seen</div>
                  <div className="text-xs flex items-center justify-center gap-1 font-mono font-bold text-cyan-300">
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                    <span>✓✓ Read Receipt</span>
                  </div>
                </div>
              </div>

              {/* Simulated Chat Message Display */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#140b2e] border border-purple-500/20 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Outgoing Socket Message</span>
                  <span>Payload: 42 bytes</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-sm shadow-md">
                  <p className="font-medium leading-relaxed font-body">
                    "Hey Alex! Testing the sub-20ms WebSocket message delivery."
                  </p>
                  <div className="flex items-center justify-end gap-1.5 pt-2 text-[10px] font-mono">
                    <span className="text-purple-200">07:22 AM</span>
                    {deliveryStage === 0 && <span className="text-yellow-300 flex items-center gap-1">⏳ Sending...</span>}
                    {deliveryStage === 1 && <span className="text-purple-200 flex items-center gap-1">✓ Sent</span>}
                    {deliveryStage === 2 && <span className="text-slate-200 flex items-center gap-1">✓✓ Delivered</span>}
                    {deliveryStage === 3 && <span className="text-cyan-300 flex items-center gap-1 font-bold">✓✓ Seen</span>}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 2: Interactive Reactions & Replies (Section 5)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Interactive Card Col (7 cols) - Left on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-5 hover:border-purple-400/40 transition-colors">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <Smile className="w-4 h-4" />
                  Live Reaction & Quoted Reply Demo
                </span>
                <span className="text-[11px] font-mono text-slate-400">Click Emojis to React</span>
              </div>

              {/* Quoted Reply Message Card */}
              <div className="p-5 rounded-2xl bg-[#140b2e] border border-purple-500/25 space-y-3">
                
                {/* Replying quote badge */}
                <div className="p-2.5 rounded-xl bg-[#0e0722] border-l-2 border-purple-400 text-xs text-purple-200 space-y-0.5">
                  <div className="flex items-center gap-1 font-heading font-bold text-purple-300">
                    <CornerDownRight className="w-3.5 h-3.5" />
                    <span>Replying to Alex</span>
                  </div>
                  <p className="italic text-slate-300 font-body">"Are we meeting today?"</p>
                </div>

                {/* Main message text */}
                <p className="font-body text-sm sm:text-base text-white font-medium">
                  "Yes, the product launch is scheduled for 3 PM sharp! 🚀"
                </p>

                {/* Reaction Counters Display */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {Object.entries(activeReactions).map(([emoji, count]) => {
                    if (count <= 0) return null;
                    const isSelected = myReaction === emoji;
                    return (
                      <button
                        key={emoji}
                        onClick={() => handleToggleReaction(emoji)}
                        className={`px-2.5 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                          isSelected
                            ? 'bg-purple-600 text-white border border-purple-300 shadow-neon-purple scale-105 font-bold'
                            : 'bg-[#180f38] hover:bg-[#22154d] border border-purple-500/30 text-slate-200'
                        }`}
                      >
                        <span className="text-sm">{emoji}</span>
                        <span>{count}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* 8-Emoji Reaction Selector Bar */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-purple-300 font-semibold">
                  Select an emoji reaction:
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {emojiList.map((item) => {
                    const isSelected = myReaction === item.emoji;
                    return (
                      <button
                        key={item.emoji}
                        onClick={() => handleToggleReaction(item.emoji)}
                        className={`p-2.5 rounded-xl flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-purple-600/40 border border-purple-400 scale-110 shadow-neon-purple'
                            : 'bg-[#120928] hover:bg-[#1a0f38] border border-purple-500/20'
                        }`}
                        title={item.name}
                      >
                        <span className="text-xl sm:text-2xl">{item.emoji}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Text Col (5 cols) - Right on desktop */}
          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Smile className="w-3.5 h-3.5 text-purple-400" />
              <span>REACTIONS & REPLIES</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              React. Reply. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Keep the Conversation Flowing.
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Express yourself without typing extra messages. Drop one-click emoji reactions or quote specific context with threaded reply previews so discussions never lose track.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-[#0c071e]/80 border border-purple-500/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white">8 Expressive Emoji Reactions</h4>
                  <p className="font-body text-xs text-slate-300">Instant visual consensus with live synchronized counters.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c071e]/80 border border-purple-500/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 flex-shrink-0">
                  <CornerDownRight className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white">Contextual Quoted Replies</h4>
                  <p className="font-body text-xs text-slate-300">Target any prior message with anchored reply previews.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 3: Advanced Group Chat & Governance (Section 6)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Text Col (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span>ADVANCED GROUP CHAT</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Powerful Group Chats <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Without the Complexity
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Manage large teams and friend groups effortlessly. Assign administrators, invite or remove members, rename channels, and see real-time system announcements as changes happen.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="p-3 rounded-xl bg-[#0c071e] border border-purple-500/20 flex items-center gap-2">
                <span className="text-purple-400">🛡️</span>
                <span className="font-heading font-medium">Promote Admins</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c071e] border border-purple-500/20 flex items-center gap-2">
                <span className="text-purple-400">✏️</span>
                <span className="font-heading font-medium">Rename Groups</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c071e] border border-purple-500/20 flex items-center gap-2">
                <span className="text-purple-400">👥</span>
                <span className="font-heading font-medium">Live Member Count</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c071e] border border-purple-500/20 flex items-center gap-2">
                <span className="text-purple-400">⚡</span>
                <span className="font-heading font-medium">System Broadcasts</span>
              </div>
            </div>

            {/* Test Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => addSimulatedGroupEvent('add')}
                className="px-4 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-heading font-bold flex items-center gap-1.5 transition-colors"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>+ Add Member Event</span>
              </button>
              <button
                onClick={() => addSimulatedGroupEvent('promote')}
                className="px-4 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-heading font-bold flex items-center gap-1.5 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>🛡️ Promote Admin Event</span>
              </button>
            </div>
          </div>

          {/* Mockup Col (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-5 hover:border-purple-400/40 transition-colors">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md font-heading">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white">🎨 Design Team</h3>
                    <p className="text-xs font-mono text-purple-300">
                      {groupMemberCount} Members • {groupAdminCount} Admins
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono">
                  Live Channel
                </span>
              </div>

              {/* Group System Event Announcements List */}
              <div className="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar p-1">
                {systemLogs.map((log) => (
                  <div 
                    key={log.id}
                    className="p-3.5 rounded-2xl bg-[#140b2e] border border-purple-500/20 flex items-center justify-between text-xs animate-fade-in"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{log.icon}</span>
                      <span className="text-slate-200 font-medium font-body">{log.text}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{log.time}</span>
                  </div>
                ))}
              </div>

              {/* Group Chat Bubble Sample */}
              <div className="p-4 rounded-2xl bg-[#090514] border border-purple-500/15 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-sm flex-shrink-0 font-heading">
                  SC
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-heading font-bold text-purple-200">Sarah Chen</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-mono bg-purple-500/30 text-purple-300 rounded border border-purple-500/40">ADMIN</span>
                    <span className="text-[10px] font-mono text-slate-400">07:15 AM</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-slate-300">
                    Group roles and member permissions update immediately across all active participants! 🎉
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 4: Real-Time Notification Showcase (Section 7)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Interactive Card Col (7 cols) - Left on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-5 hover:border-purple-400/40 transition-colors">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                    Live Toast Ingestion Stream
                  </span>
                </div>
                <button
                  onClick={triggerNewToast}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-heading font-bold shadow-neon-purple transition-all flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Send Notification</span>
                </button>
              </div>

              {/* Toast Stack */}
              <div className="space-y-3">
                {notifications.map((toast) => (
                  <div
                    key={toast.id}
                    className="p-4 rounded-2xl bg-gradient-to-r from-[#170e36] to-[#11092a] border border-purple-400/30 shadow-lg flex items-start justify-between gap-3 animate-fade-in hover:border-purple-300/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                        <Bell className="w-4 h-4 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-white">{toast.title}</h4>
                        <p className="font-body text-xs text-slate-300 mt-0.5">{toast.body}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300/70 whitespace-nowrap">{toast.time}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-[#090514] border border-purple-500/15 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Push Engine: Persistent WebSockets</span>
                <span className="text-emerald-400">0% Packet Loss</span>
              </div>

            </div>
          </div>

          {/* Text Col (5 cols) - Right on desktop */}
          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Bell className="w-3.5 h-3.5 text-purple-400" />
              <span>LIVE NOTIFICATIONS</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Never Miss a Beat. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Zero Page Refreshes.
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Users receive immediate toast notifications for incoming messages, reactions, group invites, and member updates without constantly checking back or reloading the screen.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Group addition and removal alerts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Live reaction toasts on your messages</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Background and active tab synchronizations</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 5: Smart Messaging Experience (Section 8)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Text Col (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>POLISHED CRAFTSMANSHIP</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Smart Details That Make <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Messaging Effortless
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              PulseChat is packed with subtle UX innovations designed to keep conversations organized, readable, and non-intrusive.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-[#0c071e]/80 border border-purple-500/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white">🔎 Instant Message Search</h4>
                  <p className="font-body text-xs text-slate-300">Find keywords across conversation history with matching text highlights.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c071e]/80 border border-purple-500/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-300 flex-shrink-0">
                  <ArrowDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white">↓ Smart Non-Jerk Scroll</h4>
                  <p className="font-body text-xs text-slate-300">Reading earlier messages? Incoming chats won't violently jerk your view.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup Col (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4 hover:border-purple-400/40 transition-colors">
              
              {/* Search Bar with live keyword highlighting */}
              <div className="relative">
                <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in conversation (e.g. review, demo)..."
                  className="w-full bg-[#140b2e] border border-purple-500/30 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              {/* Messages Container showing Unread divider and Search Highlight */}
              <div className="p-4 rounded-2xl bg-[#090514] border border-purple-500/20 space-y-4 relative min-h-[220px]">
                
                {/* Message 1 */}
                <div className="p-3 rounded-xl bg-[#140b2e] border border-purple-500/10 text-xs sm:text-sm text-slate-200 font-body">
                  Alex: "Let's perform a fast <span className="bg-yellow-500/30 text-yellow-200 font-bold px-1 rounded">review</span> before the meeting starts."
                </div>

                {/* Unread Divider */}
                <div className="relative flex items-center justify-center my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-500/30"></div>
                  </div>
                  <div className="relative px-4 py-0.5 rounded-full bg-purple-950 border border-purple-500/40 text-[10px] sm:text-xs font-mono font-bold text-purple-300 flex items-center gap-2 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                    <span>48 Messages · 3 New Unread</span>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="p-3 rounded-xl bg-[#140b2e] border border-purple-500/10 text-xs sm:text-sm text-slate-200 font-body">
                  Sarah: "Everything is verified. Ready for the live <span className="bg-yellow-500/30 text-yellow-200 font-bold px-1 rounded">review</span> on staging!"
                </div>

                {/* Floating "↓ 3 New Messages" Smart Scroll Button */}
                {smartScrollScrolledUp && (
                  <div className="sticky bottom-2 left-0 right-0 flex justify-center z-20">
                    <button
                      onClick={() => setSmartScrollScrolledUp(false)}
                      className="animate-bounce flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-heading font-bold shadow-neon-lg border border-white/20 hover:scale-105 transition-transform"
                    >
                      <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
                      <span>↓ 3 New Messages</span>
                    </button>
                  </div>
                )}

              </div>

              <div className="flex items-center justify-between text-xs font-mono text-purple-300/80 pt-1">
                <span>Highlighting matched strings instantly</span>
                <button 
                  onClick={() => setSmartScrollScrolledUp(true)}
                  className="text-xs text-purple-400 hover:text-white underline"
                >
                  Reset Anchor
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 6: Privacy & Message Control (Section 9)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Mockup Col (7 cols) - Left on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4 hover:border-purple-400/40 transition-colors">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Protected Permissions & Privacy Control
                </span>
                <span className="text-[11px] font-mono text-slate-400">Read-Only Guard</span>
              </div>

              {/* Message with Delete button */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#140b2e] border border-purple-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-purple-300">Message from You</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 mt-0.5">
                      {deletedMessageIds.includes(1) 
                        ? '🚫 This message was deleted by the author' 
                        : '"Sending the confidential credential sheet..."'}
                    </p>
                  </div>
                  {!deletedMessageIds.includes(1) && (
                    <button
                      onClick={() => handleDeleteMessage(1)}
                      className="p-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 text-xs font-heading font-bold flex items-center gap-1 transition-colors"
                      title="Delete message"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  )}
                </div>

                {/* Read-Only Removed Group Banner Simulation */}
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-heading font-bold">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>⚠️ You can no longer send messages to this group</span>
                  </div>
                  <p className="font-body text-xs text-amber-200/80 pl-6">
                    Previous messages are available in read-only mode. All past history remains securely preserved for audit integrity.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Deleted state broadcasted live</span>
                <span className="text-emerald-400">Client-Side Verification</span>
              </div>

            </div>
          </div>

          {/* Text Col (5 cols) - Right on desktop */}
          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>PRIVACY & MESSAGE CONTROL</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Conversations. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Your Control.
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Retain absolute control over your communications. Delete messages with synchronized updates, retain read-only records if removed from groups, and protect sensitive conversations.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Individual message deletion with instant UI sync</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Protected read-only modes for departed channels</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Role-based permission enforcement</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
