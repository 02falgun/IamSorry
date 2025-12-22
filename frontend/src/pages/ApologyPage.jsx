import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ApologyMessage from '../components/ApologyMessage';
import GadgetGallery from '../components/GadgetGallery';
import MemoryCard from '../components/MemoryCard';
import InteractiveHeart from '../components/InteractiveHeart';
import Footer from '../components/Footer';

export default function ApologyPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-40 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ApologyMessage />
        <GadgetGallery />
        <MemoryCard />
        <InteractiveHeart />
        <Footer />
      </div>
    </div>
  );
}