import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveChatSandbox from './components/LiveChatSandbox';
import BentoFeatures from './components/BentoFeatures';
import HowItWorks from './components/HowItWorks';
import SpeedComparison from './components/SpeedComparison';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LaunchModal from './components/LaunchModal';

export default function App() {
  const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle interactive cursor spotlight glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLaunchClick = () => {
    setIsLaunchModalOpen(true);
  };

  const handleDemoClick = () => {
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#04020a] text-white selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="fixed pointer-events-none z-30 transition-opacity duration-500 opacity-60 w-[500px] h-[500px] rounded-full blur-[120px] bg-purple-600/10 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Navigation Header */}
      <Navbar 
        onLaunchClick={handleLaunchClick} 
        onDemoClick={handleDemoClick} 
      />

      {/* Hero Section */}
      <main>
        <Hero 
          onLaunchClick={handleLaunchClick} 
          onDemoClick={handleDemoClick} 
        />

        {/* Signature Interactive Live Chat Sandbox */}
        <LiveChatSandbox />

        {/* Bento Grid Verified Features */}
        <BentoFeatures />

        {/* How It Works 3-Step Flow */}
        <HowItWorks 
          onLaunchClick={handleLaunchClick} 
        />

        {/* Speed & Architecture Reality Check */}
        <SpeedComparison />

        {/* High-Impact CTA Section */}
        <CTASection 
          onLaunchClick={handleLaunchClick} 
          onDemoClick={handleDemoClick} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Launch / Login Simulation Modal */}
      <LaunchModal 
        isOpen={isLaunchModalOpen} 
        onClose={() => setIsLaunchModalOpen(false)}
      />

    </div>
  );
}
