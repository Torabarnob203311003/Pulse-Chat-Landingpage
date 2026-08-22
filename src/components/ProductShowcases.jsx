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

  // 1. Delivery Stage State
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

  // 2. Reactions State
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

  // 3. Group State
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
        { id: Date.now(), text: 'Elena was added to the group', icon: '👋', time }
      ]);
    } else if (type === 'promote') {
      setGroupAdminCount(prev => prev + 1);
      setSystemLogs(prev => [
        ...prev,
        { id: Date.now(), text: 'Sarah was promoted to Group Admin', icon: '🛡️', time }
      ]);
    }
  };

  // 4. Notifications State
  const [notifications, setNotifications] = useState([
    { id: 1, title: '🎉 Group Invitation', body: 'You were added to Design Team by Alex.', time: 'Just now' },
    { id: 2, title: '💬 Direct Message', body: 'New message from Alex: "Ready to review?"', time: '1m ago' },
    { id: 3, title: '🔥 Reaction', body: 'Sarah reacted 🔥 to your message "Ready!"', time: '3m ago' }
  ]);

  const triggerNewToast = () => {
    const toasts = [
      { title: '⚡ Read Receipt', body: 'Alex saw your message in #Design-Team', time: 'Just now' },
      { title: '🚀 New Reaction', body: 'Marcus reacted 🚀 to "Pushing build"', time: 'Just now' },
      { title: '🛡️ Admin Role', body: 'You were assigned Administrator role', time: 'Just now' },
    ];
    const randomToast = toasts[Math.floor(Math.random() * toasts.length)];
    setNotifications(prev => [{ id: Date.now(), ...randomToast }, ...prev.slice(0, 2)]);
  };

  // 5. Search & Scroll State
  const [searchQuery, setSearchQuery] = useState('review');
  const [smartScrollScrolledUp, setSmartScrollScrolledUp] = useState(true);

  // 6. Privacy State
  const [deletedMessageIds, setDeletedMessageIds] = useState([]);
  const handleDeleteMessage = (id) => {
    setDeletedMessageIds(prev => [...prev, id]);
  };

  return (
    <div id="showcase" className="py-16 sm:py-24 relative overflow-hidden bg-grid-pattern">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-purple-700/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-indigo-700/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {/* =========================================================================
            SHOWCASE 1: Real-Time Messaging & Status Lifecycle
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>REAL-TIME MESSAGING</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Messages That Move at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Speed of Conversation
              </span>
            </h2>

            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              No artificial delays or sluggish polling. Experience instant message delivery, optimistic UI updates, and continuous cross-client status synchronization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-[10px]">✓</span>
                <span>Instant delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-[10px]">✓</span>
                <span>Optimistic UI updates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-[10px]">✓</span>
                <span>Sent → Delivered status</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-[10px]">✓</span>
                <span>✓✓ Read receipts</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={runDeliverySimulation}
                disabled={isSimulatingDelivery}
                className="px-4 py-2.5 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 border border-purple-400/40 text-white font-heading font-bold text-xs flex items-center gap-2 shadow-neon-purple transition-all disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                <span>Test Live Message Lifecycle</span>
              </button>

              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-purple-300 hover:text-white font-heading font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-white">Interactive Status Lifecycle</h3>
                  <p className="text-[11px] font-mono text-purple-300/80">Visualized WebSocket Pipeline</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  Live
                </span>
              </div>

              {/* Status Progression Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryStage >= 0 ? 'bg-purple-950/80 border-purple-400 text-white' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-[11px] font-mono font-bold mb-0.5">1. Sending</div>
                  <div className="text-[10px] flex items-center justify-center gap-1 font-mono">
                    <Clock className={`w-3 h-3 ${deliveryStage === 0 ? 'animate-spin text-yellow-400' : 'text-slate-400'}`} />
                    <span>Optimistic</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryStage >= 1 ? 'bg-purple-950/80 border-purple-400 text-white' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-[11px] font-mono font-bold mb-0.5">2. Sent</div>
                  <div className="text-[10px] flex items-center justify-center gap-1 font-mono">
                    <Check className="w-3 h-3 text-purple-300" />
                    <span>✓ Server Ack</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryStage >= 2 ? 'bg-purple-950/80 border-purple-400 text-white' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-[11px] font-mono font-bold mb-0.5">3. Delivered</div>
                  <div className="text-[10px] flex items-center justify-center gap-1 font-mono">
                    <CheckCheck className="w-3 h-3 text-slate-300" />
                    <span>✓✓ Client Recv</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryStage >= 3 ? 'bg-purple-950/80 border-cyan-400 text-cyan-200 shadow-neon-purple' : 'bg-[#120a28]/40 border-purple-500/10 text-slate-500'
                }`}>
                  <div className="text-[11px] font-mono font-bold mb-0.5 text-cyan-300">4. Seen</div>
                  <div className="text-[10px] flex items-center justify-center gap-1 font-mono font-bold text-cyan-300">
                    <CheckCheck className="w-3 h-3 text-cyan-300" />
                    <span>✓✓ Read</span>
                  </div>
                </div>
              </div>

              {/* Chat Message Box */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#140b2e] border border-purple-500/20 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Outgoing Socket Message</span>
                  <span>Payload: 42 bytes</span>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-xs sm:text-sm shadow-md">
                  <p className="font-medium leading-relaxed font-body">
                    "Hey Alex! Testing the sub-20ms WebSocket message delivery."
                  </p>
                  <div className="flex items-center justify-end gap-1.5 pt-1.5 text-[10px] font-mono">
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
            SHOWCASE 2: Interactive Reactions & Replies
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Smile className="w-3.5 h-3.5" />
                  Reaction & Quoted Reply Demo
                </span>
                <span className="text-[10px] font-mono text-slate-400">Click Emojis to React</span>
              </div>

              {/* Quoted Reply Message Card */}
              <div className="p-4 rounded-xl bg-[#140b2e] border border-purple-500/25 space-y-2.5">
                
                <div className="p-2 rounded-lg bg-[#0e0722] border-l-2 border-purple-400 text-[11px] text-purple-200 space-y-0.5">
                  <div className="flex items-center gap-1 font-heading font-bold text-purple-300">
                    <CornerDownRight className="w-3 h-3" />
                    <span>Replying to Alex</span>
                  </div>
                  <p className="italic text-slate-300 font-body">"Are we meeting today?"</p>
                </div>

                <p className="font-body text-xs sm:text-sm text-white font-medium">
                  "Yes, the product launch is scheduled for 3 PM sharp! 🚀"
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {Object.entries(activeReactions).map(([emoji, count]) => {
                    if (count <= 0) return null;
                    const isSelected = myReaction === emoji;
                    return (
                      <button
                        key={emoji}
                        onClick={() => handleToggleReaction(emoji)}
                        className={`px-2 py-0.5 rounded-full text-xs font-mono flex items-center gap-1 transition-all ${
                          isSelected
                            ? 'bg-purple-600 text-white border border-purple-300 shadow-neon-purple scale-105 font-bold'
                            : 'bg-[#180f38] hover:bg-[#22154d] border border-purple-500/30 text-slate-200'
                        }`}
                      >
                        <span>{emoji}</span>
                        <span>{count}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* 8-Emoji Reaction Selector */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-mono text-purple-300 font-semibold">
                  Select an emoji reaction:
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                  {emojiList.map((item) => {
                    const isSelected = myReaction === item.emoji;
                    return (
                      <button
                        key={item.emoji}
                        onClick={() => handleToggleReaction(item.emoji)}
                        className={`p-2 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-purple-600/40 border border-purple-400 scale-110 shadow-neon-purple'
                            : 'bg-[#120928] hover:bg-[#1a0f38] border border-purple-500/20'
                        }`}
                        title={item.name}
                      >
                        <span className="text-lg sm:text-xl">{item.emoji}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Smile className="w-3.5 h-3.5 text-purple-400" />
              <span>REACTIONS & REPLIES</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              React. Reply. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Keep the Flow Intact.
              </span>
            </h2>

            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Express yourself without typing extra messages. Drop one-click emoji reactions or quote specific context with threaded reply previews so discussions never lose track.
            </p>

            <div className="space-y-2 pt-1">
              <div className="p-3 rounded-xl bg-[#0c071e]/80 border border-purple-500/20 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <Smile className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white">8 Expressive Emojis</h4>
                  <p className="font-body text-[11px] text-slate-300">Instant consensus with synchronized live counters.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0c071e]/80 border border-purple-500/20 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 flex-shrink-0">
                  <CornerDownRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white">Contextual Quoted Replies</h4>
                  <p className="font-body text-[11px] text-slate-300">Target prior messages with anchored reply cards.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 3: Advanced Group Chat & Governance
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span>ADVANCED GROUP CHAT</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Powerful Group Chats <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Without the Complexity
              </span>
            </h2>

            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Manage large teams effortlessly. Assign administrators, invite or remove members, rename channels, and see real-time system announcements as changes occur.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
              <div className="p-2.5 rounded-lg bg-[#0c071e] border border-purple-500/20 flex items-center gap-1.5">
                <span>🛡️</span>
                <span className="font-heading font-medium">Promote Admins</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0c071e] border border-purple-500/20 flex items-center gap-1.5">
                <span>✏️</span>
                <span className="font-heading font-medium">Rename Groups</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0c071e] border border-purple-500/20 flex items-center gap-1.5">
                <span>👥</span>
                <span className="font-heading font-medium">Live Member List</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0c071e] border border-purple-500/20 flex items-center gap-1.5">
                <span>⚡</span>
                <span className="font-heading font-medium">System Events</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => addSimulatedGroupEvent('add')}
                className="px-3.5 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-heading font-bold flex items-center gap-1.5 transition-colors"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>+ Add Member Event</span>
              </button>
              <button
                onClick={() => addSimulatedGroupEvent('promote')}
                className="px-3.5 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-heading font-bold flex items-center gap-1.5 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>🛡️ Promote Admin Event</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md font-heading">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white">🎨 Design Team</h3>
                    <p className="text-[10px] font-mono text-purple-300">
                      {groupMemberCount} Members • {groupAdminCount} Admins
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono">
                  Live Channel
                </span>
              </div>

              {/* Group System Event Announcements List */}
              <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar p-0.5">
                {systemLogs.map((log) => (
                  <div 
                    key={log.id}
                    className="p-2.5 rounded-xl bg-[#140b2e] border border-purple-500/20 flex items-center justify-between text-xs animate-fade-in"
                  >
                    <div className="flex items-center gap-2">
                      <span>{log.icon}</span>
                      <span className="text-slate-200 font-medium font-body text-[11px]">{log.text}</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">{log.time}</span>
                  </div>
                ))}
              </div>

              {/* Group Chat Bubble Sample */}
              <div className="p-3 rounded-xl bg-[#090514] border border-purple-500/15 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm flex-shrink-0 font-heading">
                  SC
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-heading font-bold text-purple-200">Sarah Chen</span>
                    <span className="px-1 py-0.2 text-[8px] font-mono bg-purple-500/30 text-purple-300 rounded border border-purple-500/40">ADMIN</span>
                    <span className="text-[9px] font-mono text-slate-400">07:15 AM</span>
                  </div>
                  <p className="font-body text-xs text-slate-300">
                    Group roles and permissions update immediately across all participants! 🎉
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            SHOWCASE 4: Real-Time Notification Stream
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0c071e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                <div className="flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                    Live Toast Ingestion
                  </span>
                </div>
                <button
                  onClick={triggerNewToast}
                  className="px-3 py-1 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-heading font-bold shadow-neon-purple transition-all flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Send Toast</span>
                </button>
              </div>

              {/* Toast Stack */}
              <div className="space-y-2">
                {notifications.map((toast) => (
                  <div
                    key={toast.id}
                    className="p-3 rounded-xl bg-gradient-to-r from-[#170e36] to-[#11092a] border border-purple-400/30 shadow-md flex items-start justify-between gap-2.5 animate-fade-in"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                        <Bell className="w-3.5 h-3.5 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xs font-bold text-white">{toast.title}</h4>
                        <p className="font-body text-[11px] text-slate-300 mt-0.5">{toast.body}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-purple-300/70 whitespace-nowrap">{toast.time}</span>
                  </div>
                ))}
              </div>

              <div className="p-2.5 rounded-lg bg-[#090514] border border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Push Engine: WebSockets</span>
                <span className="text-emerald-400">0% Packet Loss</span>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-neon-purple">
              <Bell className="w-3.5 h-3.5 text-purple-400" />
              <span>LIVE NOTIFICATIONS</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Never Miss a Beat. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Zero Page Refreshes.
              </span>
            </h2>

            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Users receive immediate toast notifications for incoming messages, reactions, group invites, and member updates without constantly checking back or reloading the screen.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Group addition and removal alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Live reaction toasts on your messages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Background and active tab synchronizations</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
