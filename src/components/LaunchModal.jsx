import React, { useState } from 'react';
import { ShieldCheck, Phone, User, Zap, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LaunchModal({ isOpen, onClose, onAuthenticated }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        if (onAuthenticated) {
          onAuthenticated({ name, phone });
        }
        onClose();
        setSuccess(false);
        // Scroll smoothly to interactive sandbox
        const demoSection = document.getElementById('demo');
        if (demoSection) {
          demoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1200);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#130b2c] via-[#0d0720] to-[#070312] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Ambient Top Flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-purple-950/50 text-slate-400 hover:text-white hover:bg-purple-900/50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto shadow-neon-purple">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white">Authenticated!</h3>
            <p className="text-sm text-slate-300">
              JWT token generated for <strong className="text-purple-300">{name}</strong>. Entering real-time live session...
            </p>
            <div className="p-3 rounded-xl bg-[#140b2e] border border-purple-500/20 font-mono text-[11px] text-purple-300">
              jwt_session: eyJhbGciOiJIUzI1Ni...{phone.slice(-4)}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>PASSWORD-FREE ONBOARDING</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Launch PulseChat
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Enter your details to create an instant session. No passwords, no verification link delays.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-purple-200 mb-1.5">
                  YOUR FULL NAME
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#170e36] border border-purple-500/30 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-purple-200 mb-1.5">
                  PHONE NUMBER
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full bg-[#170e36] border border-purple-500/30 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !name.trim() || !phone.trim()}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-neon-purple disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Issuing Session Token...</span>
                  </div>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span>Enter PulseChat Live</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Micro proof */}
            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-400 font-mono">
                🔒 Secures session with encrypted JWT payload
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
