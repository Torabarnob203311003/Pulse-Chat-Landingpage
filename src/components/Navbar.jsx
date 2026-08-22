import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, Menu, X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060312]/90 backdrop-blur-2xl border-b border-purple-500/25 py-3 sm:py-3.5 shadow-2xl shadow-purple-950/40' 
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-[94rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Trendy Font */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 p-[1.5px] shadow-neon-purple transition-all duration-300 group-hover:scale-105 group-hover:shadow-neon-lg">
              <div className="w-full h-full bg-[#090514] rounded-[14px] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 border-2 border-[#090514]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1">
                Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Chat</span>
              </span>
              <span className="text-[10px] font-mono font-medium text-purple-300/75 uppercase tracking-widest flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Real-Time SaaS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Generous Spacing & Trendy Typography */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 bg-[#120a28]/85 border border-purple-500/25 rounded-full px-8 py-2 backdrop-blur-xl shadow-inner">
            <a 
              href="#about" 
              className="text-xs xl:text-sm font-heading font-semibold text-slate-300 hover:text-white hover:text-purple-300 transition-colors tracking-wide"
            >
              What is PulseChat?
            </a>
            <a 
              href="#how-it-works" 
              className="text-xs xl:text-sm font-heading font-semibold text-slate-300 hover:text-white hover:text-purple-300 transition-colors tracking-wide"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-xs xl:text-sm font-heading font-semibold text-slate-300 hover:text-white hover:text-purple-300 transition-colors tracking-wide"
            >
              12 Features
            </a>
            <a 
              href="#showcase" 
              className="text-xs xl:text-sm font-heading font-semibold text-slate-300 hover:text-white hover:text-purple-300 transition-colors tracking-wide"
            >
              Product Tour
            </a>
            <a 
              href="#architecture" 
              className="text-xs xl:text-sm font-heading font-semibold text-slate-300 hover:text-white hover:text-purple-300 transition-colors tracking-wide"
            >
              Architecture
            </a>
          </nav>

          {/* Action CTAs navigating directly to demo URL */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-heading font-bold text-purple-200 hover:text-white px-4 sm:px-5 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400/60 transition-all flex items-center gap-1.5 shadow-sm hover:shadow-neon-purple"
            >
              <span>Try Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl p-[1.5px] font-heading font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-neon-purple"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-xl transition-all duration-300 group-hover:opacity-100 opacity-90 animate-gradient-x"></div>
              <div className="relative px-5 sm:px-6 py-2.5 rounded-[10px] bg-[#0c071d] transition-all duration-200 group-hover:bg-[#0c071d]/80 flex items-center gap-2 text-white shadow-inner">
                <Zap className="w-3.5 h-3.5 text-purple-400 group-hover:text-yellow-300 transition-colors" />
                <span>Start Chatting</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-6 rounded-3xl bg-[#0d0724]/98 border border-purple-500/40 backdrop-blur-2xl shadow-2xl space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-200 hover:bg-purple-900/40 hover:text-white transition-colors"
            >
              What is PulseChat?
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-200 hover:bg-purple-900/40 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-200 hover:bg-purple-900/40 hover:text-white transition-colors"
            >
              12 Features
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-200 hover:bg-purple-900/40 hover:text-white transition-colors"
            >
              Product Tour
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-200 hover:bg-purple-900/40 hover:text-white transition-colors"
            >
              Real-Time Architecture
            </a>
          </div>

          <div className="pt-3 border-t border-purple-500/20 flex flex-col gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-2xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-purple-200 hover:text-white font-heading font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Try Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-neon-purple active:scale-98 transition-transform"
            >
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Start Chatting</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
