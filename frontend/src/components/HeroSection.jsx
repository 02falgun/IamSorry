import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMessage = () => {
    document.getElementById('apology-message')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/35247315/pexels-photo-35247315.jpeg)',
            filter: 'brightness(0.4) saturate(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-glow/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Heart className="w-24 h-24 text-primary animate-pulse-glow" fill="currentColor" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-glow via-primary to-secondary bg-clip-text text-transparent">
              Hello 🍇, A small thing from my side
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            I know I let you down, and I'm truly sorry. 
            <br className="hidden sm:block" />
            Your are special.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToMessage}
            size="lg"
            className="bg-primary hover:bg-primary-deep text-primary-foreground px-8 py-6 text-lg rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Read My Message
            <Heart className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-glow rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-glow rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
