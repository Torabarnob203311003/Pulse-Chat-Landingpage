import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, Menu, X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const DEMO_URL = 'https://chat-app-eta-black-25.vercel.app/';

  const navLinks = [
    { id: 'about', label: 'What is PulseChat?', href: '#about' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'features', label: '12 Features', href: '#features' },
    { id: 'showcase', label: 'Product Tour', href: '#showcase' },
    { id: 'architecture', label: 'Architecture', href: '#architecture' },
  ];

  // Scroll listener for sticky style and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'how-it-works', 'features', 'showcase', 'architecture'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060312]/92 backdrop-blur-2xl border-b border-purple-500/25 py-2.5 sm:py-3 shadow-2xl shadow-purple-950/40' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-[94rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Brand Logo with Larger Margin Gap */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0 mr-4 xl:mr-10">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 p-[1.5px] shadow-neon-purple transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#090514] rounded-[10px] flex items-center justify-center p-1.5">
                <MessageSquare className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
                Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Chat</span>
              </span>
              <span className="text-[9px] font-mono font-semibold text-purple-300/80 uppercase tracking-wider flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Real-Time SaaS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Active Link ONLY Bottom Border Glow */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 bg-[#120a28]/70 border border-purple-500/25 rounded-full px-5 xl:px-7 py-1.5 backdrop-blur-xl shadow-inner flex-nowrap whitespace-nowrap overflow-hidden">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-[12px] xl:text-[13px] font-heading py-1 px-1.5 transition-all duration-200 whitespace-nowrap flex-shrink-0 flex flex-col items-center ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-300 hover:text-white font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Glowing Bottom Border Bar Indicator */}
                  {isActive ? (
                    <span className="w-full h-[2px] bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 rounded-full mt-0.5 shadow-[0_0_8px_rgba(192,132,252,0.9)] animate-scale-in"></span>
                  ) : (
                    <span className="w-0 h-[2px] bg-transparent mt-0.5 transition-all group-hover:w-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0 ml-auto lg:ml-6">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-heading font-bold text-purple-200 hover:text-white px-3.5 py-2 rounded-xl bg-purple-950/45 hover:bg-purple-900/65 border border-purple-500/30 hover:border-purple-400/60 transition-all flex items-center gap-1.5 shadow-sm hover:shadow-neon-purple whitespace-nowrap"
            >
              <span>Try Live Demo</span>
              <ExternalLink className="w-3 h-3 text-purple-400" />
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl p-[1px] font-heading font-bold text-xs transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-neon-purple whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-xl transition-all duration-300 group-hover:opacity-100 opacity-90 animate-gradient-x"></div>
              <div className="relative px-3.5 sm:px-4 py-2 rounded-[11px] bg-[#0c071d] transition-all duration-200 group-hover:bg-[#0c071d]/75 flex items-center gap-1.5 text-white shadow-inner">
                <Zap className="w-3 h-3 text-purple-400 group-hover:text-yellow-300 transition-colors animate-pulse" />
                <span>Start Chatting</span>
                <ArrowRight className="w-3 h-3 text-purple-300 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-3 p-4 rounded-2xl bg-[#0d0724]/98 border border-purple-500/40 backdrop-blur-2xl shadow-2xl space-y-2 animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-heading transition-all flex items-center justify-between border-b ${
                    isActive
                      ? 'border-purple-400 text-white font-bold bg-purple-950/40 shadow-sm'
                      : 'border-transparent text-slate-300 hover:bg-purple-900/40 hover:text-white font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-purple-500/20 flex flex-col gap-2">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-purple-200 hover:text-white font-heading font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Try Live Demo</span>
              <ExternalLink className="w-3 h-3 text-purple-400" />
            </a>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-neon-purple active:scale-98 transition-transform"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-300" />
              <span>Start Chatting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
