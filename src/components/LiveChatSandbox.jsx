import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Users, 
  User, 
  Search, 
  Shield, 
  ShieldAlert, 
  ArrowDown, 
  UserPlus, 
  UserMinus, 
  Edit3, 
  Sparkles, 
  Check, 
  Phone, 
  Radio, 
  Zap, 
  CornerDownLeft,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function LiveChatSandbox() {
  // Mode: 'direct' or 'group'
  const [activeTab, setActiveTab] = useState('group'); // 'direct' or 'group'
  
  // Group members state
  const [groupMembers, setGroupMembers] = useState([
    { id: 1, name: 'You', phone: '+1 (555) 234-8901', role: 'Admin', isMe: true },
    { id: 2, name: 'Maya Lin', phone: '+1 (555) 891-2345', role: 'Admin', isMe: false },
    { id: 3, name: 'Sarah Chen', phone: '+1 (555) 432-1098', role: 'Member', isMe: false },
    { id: 4, name: 'David Kim', phone: '+1 (555) 678-9012', role: 'Member', isMe: false },
  ]);
  const [groupName, setGroupName] = useState('🚀 Launch Crew');
  const [isEditingGroupName, setIsEditingGroupName] = useState(false);
  const [newGroupNameInput, setNewGroupNameInput] = useState('🚀 Launch Crew');

  // Messages state
  const [groupMessages, setGroupMessages] = useState([
    { id: 1, sender: 'Maya Lin', phone: '+1 (555) 891-2345', text: 'WebSocket server initialized. All clients synced! 🎉', isMe: false, time: '07:10 AM', role: 'Admin' },
    { id: 2, sender: 'Sarah Chen', phone: '+1 (555) 432-1098', text: 'Checked user directory search — queries return instantly.', isMe: false, time: '07:11 AM', role: 'Member' },
    { id: 3, sender: 'You', phone: '+1 (555) 234-8901', text: 'Smart scroll is active too — reading history stays anchored when messages arrive.', isMe: true, time: '07:12 AM', role: 'Admin' },
    { id: 4, sender: 'David Kim', phone: '+1 (555) 678-9012', text: 'Testing group governance. Can you promote Sarah to co-admin?', isMe: false, time: '07:13 AM', role: 'Member' },
  ]);

  const [directMessages, setDirectMessages] = useState([
    { id: 1, sender: 'Maya Lin', text: 'Hey! Are you ready for the product release today?', isMe: false, time: '07:08 AM' },
    { id: 2, sender: 'You', text: 'Everything is locked and verified. Zero lag on real-time messaging!', isMe: true, time: '07:09 AM' },
    { id: 3, sender: 'Maya Lin', text: 'Awesome, the passwordless phone login makes onboarding so swift.', isMe: false, time: '07:10 AM' },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const [showScrollBottomPill, setShowScrollBottomPill] = useState(false);
  const [packetsSent, setPacketsSent] = useState(14);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [feedbackToast, setFeedbackToast] = useState(null);

  // Directory users for instant search test
  const directoryUsers = [
    { id: 101, name: 'Elena Rostova', phone: '+1 (555) 902-1144', status: 'Online' },
    { id: 102, name: 'Marcus Vance', phone: '+1 (555) 314-8899', status: 'Offline' },
    { id: 103, name: 'Priya Patel', phone: '+1 (555) 777-2233', status: 'Online' },
    { id: 104, name: 'Jordan Hayes', phone: '+1 (555) 612-4455', status: 'Online' },
  ];

  const chatScrollContainerRef = useRef(null);

  // Helper Toast
  const triggerToast = (msg) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 3000);
  };

  // Scroll detection to handle smart scroll behavior
  const handleScroll = () => {
    if (!chatScrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatScrollContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
    
    if (isNearBottom) {
      setShowScrollBottomPill(false);
      setUnreadCount(0);
    }
  };

  // Scroll to bottom smoothly
  const scrollToBottom = () => {
    if (chatScrollContainerRef.current) {
      chatScrollContainerRef.current.scrollTo({
        top: chatScrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
      setShowScrollBottomPill(false);
      setUnreadCount(0);
    }
  };

  // Send user message
  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputMessage.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      id: Date.now(),
      sender: 'You',
      phone: '+1 (555) 234-8901',
      text: inputMessage.trim(),
      isMe: true,
      time: currentTime,
      role: 'Admin'
    };

    if (activeTab === 'group') {
      setGroupMessages(prev => [...prev, newMsg]);
    } else {
      setDirectMessages(prev => [...prev, newMsg]);
    }

    setInputMessage('');
    setPacketsSent(prev => prev + 1);

    // If already at bottom, auto scroll; else show pill
    setTimeout(() => {
      if (chatScrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatScrollContainerRef.current;
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 80;
        if (isNearBottom) {
          scrollToBottom();
        }
      }
    }, 50);

    triggerToast('⚡ Message sent via WebSocket stream');
  };

  // Simulate an incoming message to test Smart Scroll (view stays anchored if user is looking at past messages)
  const handleSimulateIncoming = () => {
    const simQuotes = [
      'Just tested group user search — lightning fast!',
      'Socket connection re-established automatically on network change.',
      'Did you see the new admin permissions panel?',
      'Real-time delivery confirmed without refreshing page!',
      'Smart scroll alert test message received!'
    ];
    const randomQuote = simQuotes[Math.floor(Math.random() * simQuotes.length)];
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = {
      id: Date.now(),
      sender: 'Maya Lin',
      phone: '+1 (555) 891-2345',
      text: randomQuote,
      isMe: false,
      time: currentTime,
      role: 'Admin'
    };

    if (activeTab === 'group') {
      setGroupMessages(prev => [...prev, newMsg]);
    } else {
      setDirectMessages(prev => [...prev, newMsg]);
    }

    setPacketsSent(prev => prev + 1);

    // Check if user is scrolled up
    if (chatScrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatScrollContainerRef.current;
      const isScrolledUp = scrollHeight - scrollTop - clientHeight >= 50;

      if (isScrolledUp) {
        setShowScrollBottomPill(true);
        setUnreadCount(prev => prev + 1);
        triggerToast('⚡ Smart scroll anchored view — "New messages ↓" indicator triggered');
      } else {
        setTimeout(scrollToBottom, 50);
      }
    }
  };

  // Group Governance Actions
  const handleToggleAdmin = (memberId) => {
    setGroupMembers(prev => prev.map(m => {
      if (m.id === memberId && !m.isMe) {
        const nextRole = m.role === 'Admin' ? 'Member' : 'Admin';
        triggerToast(`Updated ${m.name} to ${nextRole}`);
        return { ...m, role: nextRole };
      }
      return m;
    }));
  };

  const handleRemoveMember = (memberId, memberName) => {
    setGroupMembers(prev => prev.filter(m => m.id !== memberId));
    triggerToast(`Removed ${memberName} from group`);
  };

  const handleAddMemberToGroup = (user) => {
    if (groupMembers.some(m => m.name === user.name)) {
      triggerToast(`${user.name} is already in the group`);
      return;
    }
    const newMember = {
      id: Date.now(),
      name: user.name,
      phone: user.phone,
      role: 'Member',
      isMe: false
    };
    setGroupMembers(prev => [...prev, newMember]);
    setShowSearchModal(false);
    triggerToast(`Added ${user.name} to group`);
  };

  const handleSaveGroupName = () => {
    if (newGroupNameInput.trim()) {
      setGroupName(newGroupNameInput.trim());
      setIsEditingGroupName(false);
      triggerToast(`Group renamed to "${newGroupNameInput.trim()}"`);
    }
  };

  const filteredUsers = directoryUsers.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.phone.includes(searchTerm)
  );

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-[#04020a]">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>SIGNATURE INTERACTIVE SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test the Real-Time Engine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              Live in Your Browser.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Interact with the actual pulse of our chat system: send live messages, trigger group admin actions, search the directory, and test our non-jerk smart scroll behavior.
          </p>
        </div>

        {/* Toast Feedback Notification */}
        {feedbackToast && (
          <div className="fixed bottom-8 right-8 z-50 animate-fade-in bg-purple-900/90 border border-purple-400/50 text-white text-xs sm:text-sm font-medium px-4 py-3 rounded-xl shadow-2xl backdrop-blur-xl flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>{feedbackToast}</span>
          </div>
        )}

        {/* The Live Interactive Sandbox Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Interactive Control Panel & Feature Triggers (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Mode Switcher */}
            <div className="p-4 rounded-2xl bg-[#0c071d]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl space-y-3">
              <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Select Conversation Stream
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setActiveTab('group');
                    setShowScrollBottomPill(false);
                  }}
                  className={`p-3 rounded-xl flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-all ${
                    activeTab === 'group'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-neon-purple font-bold'
                      : 'bg-purple-950/30 text-slate-400 hover:text-white hover:bg-purple-900/40 border border-purple-500/10'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Group Channel</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('direct');
                    setShowScrollBottomPill(false);
                  }}
                  className={`p-3 rounded-xl flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-all ${
                    activeTab === 'direct'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-neon-purple font-bold'
                      : 'bg-purple-950/30 text-slate-400 hover:text-white hover:bg-purple-900/40 border border-purple-500/10'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>1-on-1 Direct</span>
                </button>
              </div>
            </div>

            {/* Smart Scroll & WebSocket Simulator Box */}
            <div className="p-5 rounded-2xl bg-[#0c071d]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Live Socket Injections
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scroll up inside the chat window to view history, then click below to simulate an incoming message. The view won't jerk — the <strong className="text-purple-300">"New messages ↓"</strong> indicator will catch it!
              </p>
              <button
                onClick={handleSimulateIncoming}
                className="w-full py-3 px-4 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 border border-purple-400/40 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:shadow-neon-purple active:scale-98"
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>Simulate Incoming Socket Message</span>
              </button>
            </div>

            {/* Group Governance Management Controls (If Group Tab is active) */}
            <div id="governance" className="p-5 rounded-2xl bg-[#0c071d]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  Group Governance Admin
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {groupMembers.length} Members
                </span>
              </div>

              {/* Group Name Editor */}
              <div className="flex items-center gap-2 pt-1">
                {isEditingGroupName ? (
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      value={newGroupNameInput}
                      onChange={(e) => setNewGroupNameInput(e.target.value)}
                      className="flex-1 bg-[#160d33] border border-purple-500/40 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-purple-400 font-medium"
                    />
                    <button
                      onClick={handleSaveGroupName}
                      className="p-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-500 text-xs"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-bold text-white">{groupName}</span>
                    <button
                      onClick={() => setIsEditingGroupName(true)}
                      className="text-xs text-purple-300 hover:text-white flex items-center gap-1 p-1 hover:bg-purple-900/30 rounded"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Rename</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Member List with Real-Time Governance Actions */}
              <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                {groupMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="flex items-center justify-between p-2 rounded-xl bg-[#130b2c]/80 border border-purple-500/10 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-purple-800/40 flex items-center justify-center font-bold text-[10px] text-purple-200">
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-white">{member.name}</span>
                          {member.role === 'Admin' && (
                            <span className="px-1.5 py-0.2 text-[9px] font-mono bg-purple-500/30 text-purple-300 border border-purple-500/40 rounded">
                              ADMIN
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{member.phone}</span>
                      </div>
                    </div>

                    {/* Admin Action Buttons */}
                    {!member.isMe && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleToggleAdmin(member.id)}
                          title={member.role === 'Admin' ? 'Demote to Member' : 'Promote to Admin'}
                          className="px-2 py-1 rounded bg-purple-900/40 hover:bg-purple-800 text-[10px] text-purple-200 border border-purple-500/20"
                        >
                          {member.role === 'Admin' ? 'Demote' : 'Make Admin'}
                        </button>
                        <button
                          onClick={() => handleRemoveMember(member.id, member.name)}
                          title="Remove from group"
                          className="p-1 rounded bg-red-900/30 hover:bg-red-800 text-red-300 hover:text-white"
                        >
                          <UserMinus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Member / Search Directory Button */}
              <button
                onClick={() => setShowSearchModal(true)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#160d33] hover:bg-[#1f1245] border border-purple-500/30 text-purple-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Search & Add Member</span>
              </button>
            </div>

            {/* Live Telemetry Card */}
            <div className="p-4 rounded-2xl bg-[#090514] border border-purple-500/20 font-mono text-xs text-purple-300/80 space-y-1.5">
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Engine:</span>
                <span className="text-purple-300">Socket.io v4 WebSockets</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Session Auth:</span>
                <span className="text-emerald-400">JWT Phone Token (Active)</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Packets Transferred:</span>
                <span className="text-white font-bold">{packetsSent} frames</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Interactive Chat Client Window (8 cols) */}
          <div className="lg:col-span-8 relative">
            
            {/* Outer Glow & Glass Frame */}
            <div className="relative rounded-3xl bg-[#0b0619] border border-purple-500/30 shadow-2xl overflow-hidden backdrop-blur-2xl">
              
              {/* Chat Window Header */}
              <div className="px-6 py-4 bg-[#070312]/95 border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                    {activeTab === 'group' ? <Users className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-base">
                        {activeTab === 'group' ? groupName : 'Maya Lin'}
                      </h3>
                      {activeTab === 'group' ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {groupMembers.length} Members
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Direct
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-mono">
                      {activeTab === 'group' ? 'Real-time WebSocket Group Stream' : '+1 (555) 891-2345 • Active Session'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSearchModal(true)}
                    className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
                    title="Search Directory"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollToBottom}
                    className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
                    title="Reset to Bottom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Message Scrollport */}
              <div 
                ref={chatScrollContainerRef}
                onScroll={handleScroll}
                className="h-[380px] sm:h-[420px] overflow-y-auto p-5 sm:p-6 space-y-4 bg-gradient-to-b from-[#0e0824]/40 to-[#060310]/95 custom-scrollbar relative"
              >
                
                {/* Notice Banner */}
                <div className="text-center my-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-[11px] font-mono text-purple-300">
                    🔒 Messages stream securely over live WebSockets • Zero refresh
                  </span>
                </div>

                {/* Render Messages */}
                {(activeTab === 'group' ? groupMessages : directMessages).map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    {!msg.isMe && (
                      <div className="w-8 h-8 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-200 flex-shrink-0">
                        {msg.sender.slice(0, 2).toUpperCase()}
                      </div>
                    )}

                    <div className={`max-w-[78%] space-y-1 ${msg.isMe ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center gap-2 text-[11px]">
                        {!msg.isMe && <span className="font-semibold text-purple-200">{msg.sender}</span>}
                        {msg.role && (
                          <span className="text-[9px] font-mono text-purple-400/80">({msg.role})</span>
                        )}
                        <span className="text-[10px] text-slate-400 font-mono">{msg.time}</span>
                        {msg.isMe && <span className="font-semibold text-purple-300">You</span>}
                      </div>

                      <div
                        className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                          msg.isMe
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none shadow-neon-purple text-left'
                            : 'bg-[#180f33] border border-purple-500/25 text-slate-100 rounded-tl-none shadow-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>

                    {msg.isMe && (
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-sm">
                        YOU
                      </div>
                    )}
                  </div>
                ))}

                {/* Floating "New messages ↓" Anchor Pill (Smart Scroll Simulation) */}
                {showScrollBottomPill && (
                  <div className="sticky bottom-3 left-0 right-0 flex justify-center z-30 pointer-events-auto">
                    <button
                      onClick={scrollToBottom}
                      className="animate-bounce flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold shadow-neon-lg border border-white/20 hover:scale-105 transition-transform"
                    >
                      <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
                      <span>New messages ↓ {unreadCount > 0 ? `(${unreadCount})` : ''}</span>
                    </button>
                  </div>
                )}

              </div>

              {/* Chat Input Bar */}
              <form 
                onSubmit={handleSendMessage}
                className="p-4 bg-[#070312] border-t border-purple-500/20 flex items-center gap-3"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={activeTab === 'group' ? `Message #${groupName}...` : 'Type a direct real-time message...'}
                  className="flex-1 bg-[#130a29] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-medium"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-neon-purple disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>

          </div>

        </div>

      </div>

      {/* Instant User Directory Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0e0722] border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-purple-400" />
                <h4 className="font-bold text-white text-base">Smart Directory Search</h4>
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Find contacts by name or phone number. Click to add them to your live group stream.
            </p>

            <div className="relative">
              <Search className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or phone number..."
                className="w-full bg-[#170e36] border border-purple-500/30 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-400"
                autoFocus
              />
            </div>

            {/* Search Results List */}
            <div className="space-y-2 max-h-56 overflow-y-auto custom-scrollbar">
              {filteredUsers.map(user => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#140b2e] border border-purple-500/20 hover:border-purple-400/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-700/40 flex items-center justify-center text-xs font-bold text-purple-200">
                      {user.name.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{user.name}</p>
                      <p className="text-[10px] font-mono text-slate-400">{user.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddMemberToGroup(user)}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs flex items-center gap-1 shadow-sm"
                  >
                    <UserPlus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
              ))}
              {filteredUsers.length === 0 && (
                <p className="text-center py-4 text-xs text-slate-400 font-mono">No matching contacts found</p>
              )}
            </div>

            <button
              onClick={() => setShowSearchModal(false)}
              className="w-full py-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-semibold hover:bg-purple-900/40"
            >
              Close Search
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
