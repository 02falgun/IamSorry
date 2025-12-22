import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Heart } from 'lucide-react';

export default function ApologyMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="apology-message" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-elegant">
          <CardContent className="p-8 sm:p-12">
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Opening */}
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Hey Friend,
                </h2>
                <div className="flex justify-center">
                  <Heart className="w-8 h-8 text-primary" fill="currentColor" />
                </div>
              </div>

              <Separator className="my-8 bg-primary/20" />

              {/* Main Message */}
              <div className="space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed">
                <p className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  I know I messed up, and I can't stop thinking about how I let you down. 
                  The moment I realized what I'd done, I felt terrible. You're such an amazing 
                  friend, and you deserved better from me. I'm truly, deeply sorry.
                </p>

                <p className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  Your passion for collecting gadgets has always amazed me. The way your eyes 
                  light up when you find a new piece of tech, the excitement you share when 
                  talking about the latest features – it's one of the many things I admire about you. 
                  You put so much thought into everything you do, and I should have been more 
                  thoughtful too.
                </p>

                <p className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  I know that your favorite color is lavender – that beautiful, calming shade 
                  that suits your personality so perfectly. That's why I made this page in those 
                  colors, hoping it might bring you even a small moment of peace. You've always 
                  had such great taste, and I want you to know that I see you, I appreciate you, 
                  and I value our friendship more than you know.
                </p>

                <p className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  I promise to do better. I promise to be a more thoughtful, more considerate, 
                  and more reliable friend. Your friendship means the world to me, and I'll work 
                  hard to earn back your trust if you'll give me the chance.
                </p>

                <p className="animate-fadeInUp font-semibold text-primary" style={{ animationDelay: '1s' }}>
                  Please forgive me. Your friendship means more to me than words can express.
                </p>
              </div>

              <Separator className="my-8 bg-primary/20" />

              {/* Closing */}
              <div className="text-center">
                <p className="font-display text-2xl text-foreground mb-2">
                  Your friend, always
                </p>
                <div className="flex justify-center gap-2">
                  <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                  <Heart className="w-5 h-5 text-secondary" fill="currentColor" />
                  <Heart className="w-5 h-5 text-accent" fill="currentColor" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}