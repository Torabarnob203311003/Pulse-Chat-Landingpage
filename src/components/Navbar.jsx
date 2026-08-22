import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, Menu, X, ArrowRight, ShieldCheck, Radio } from 'lucide-react';

export default function Navbar({ onLaunchClick, onDemoClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#060312]/80 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-lg shadow-purple-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-600 p-[1px] shadow-neon-purple transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#090514] rounded-[11px] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 border-2 border-[#090514]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Chat</span>
              </span>
              <span className="text-[10px] font-mono text-purple-300/60 uppercase tracking-widest flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Socket.io Live
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#120a26]/70 border border-purple-500/20 rounded-full px-4 py-1.5 backdrop-blur-md">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-500/10 px-3.5 py-1.5 rounded-full transition-all">
              Features
            </a>
            <a href="#demo" className="text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-500/10 px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Live Sandbox
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-500/10 px-3.5 py-1.5 rounded-full transition-all">
              How It Works
            </a>
            <a href="#governance" className="text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-500/10 px-3.5 py-1.5 rounded-full transition-all">
              Group Controls
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onDemoClick}
              className="text-sm font-medium text-purple-200 hover:text-white px-4 py-2 rounded-lg hover:bg-purple-900/30 transition-colors"
            >
              Try Demo
            </button>
            <button
              onClick={onLaunchClick}
              className="relative group overflow-hidden rounded-xl p-[1px] font-medium text-sm transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-xl transition-all duration-300 group-hover:opacity-100 opacity-80 group-hover:shadow-neon-purple"></div>
              <div className="relative px-5 py-2.5 rounded-[11px] bg-[#0c071d] transition-all duration-200 group-hover:bg-[#0c071d]/80 flex items-center gap-2 text-white font-semibold shadow-inner">
                <span>Launch PulseChat</span>
                <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl bg-[#0e0722]/95 border border-purple-500/30 backdrop-blur-2xl shadow-2xl space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-purple-900/30 hover:text-white"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-purple-900/30 hover:text-white"
          >
            <span>Live Interactive Demo</span>
            <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Live</span>
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-purple-900/30 hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#governance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-purple-900/30 hover:text-white"
          >
            Group Governance
          </a>
          <div className="pt-3 border-t border-purple-500/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-neon-purple"
            >
              <span>Launch PulseChat — It's Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
