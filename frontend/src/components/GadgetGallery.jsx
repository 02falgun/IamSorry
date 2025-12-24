import React from 'react';
import { Heart } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Separator className="mb-8 bg-primary/20" />
        
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            <span className="text-muted-foreground">Made with care, regret, and hope</span>
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            This page was created especially for you, in your favorite lavender colors
          </p>
          
          <p className="font-display text-lg text-foreground">
            You are splendind, keep Graping, and I'm lucky to enough that we met 🍇🎀
          </p>
          
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-primary/60 animate-pulse"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
