import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsPulseChat from './components/WhatIsPulseChat';
import HowItWorks from './components/HowItWorks';
import BentoFeatures from './components/BentoFeatures';
import ProductShowcases from './components/ProductShowcases';
import SpeedComparison from './components/SpeedComparison';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive cursor spotlight glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#04020a] text-white selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="fixed pointer-events-none z-30 transition-opacity duration-500 opacity-50 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[140px] bg-purple-600/10 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Redesigned Hero Section with Live Application Preview */}
        <Hero />

        {/* 2. What Is PulseChat Section */}
        <WhatIsPulseChat />

        {/* 3. How It Works 3-Step Flow */}
        <HowItWorks />

        {/* 4. 12 Premium Feature Cards */}
        <BentoFeatures />

        {/* 5. Product Showcases (Real-Time Status, Reactions & Replies, Groups, Notifications, Smart UX, Privacy) */}
        <ProductShowcases />

        {/* 6. Real-Time Architecture & Speed Comparison */}
        <SpeedComparison />

        {/* 7. High-Impact Final CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
