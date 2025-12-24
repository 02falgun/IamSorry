import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function MemoryCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            A Promise to Remember
          </h2>
          <p className="text-lg text-muted-foreground">
            Click the card to reveal my commitment to you
          </p>
        </div>

        <div className="perspective-1000">
          <Card
            onClick={() => setIsFlipped(!isFlipped)}
            className={`relative h-96 cursor-pointer transition-all duration-700 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front Side */}
            <CardContent
              className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-card border-2 border-primary/30 backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="relative mb-6">
                <Heart className="w-24 h-24 text-primary animate-pulse-glow" fill="currentColor" />
                <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-accent animate-pulse" />
                <Star className="absolute -bottom-2 -left-2 w-8 h-8 text-secondary animate-pulse" />
              </div>
              <h3 className="font-display text-3xl font-bold text-center mb-4 text-foreground">
                Click to See My Promise
              </h3>
              <p className="text-muted-foreground text-center">
                A commitment from my heart to yours
              </p>
            </CardContent>

            {/* Back Side */}
            <CardContent
              className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-primary text-primary-foreground backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="space-y-6 text-center">
                <h3 className="font-display text-3xl font-bold mb-6">
                  My Promises to You:
                </h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" />
                    <span>To not bring back the topics you dont like discussion upon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" />
                    <span>To value,respect your boundaries, your personal space and your decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" />
                    <span>To be more thoughtful and considerate and mature</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" />
                    <span>To never piss you off again</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => setIsFlipped(!isFlipped)}
            variant="outline"
            className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
          >
            {isFlipped ? 'Flip Back' : 'Reveal Promise'}
          </Button>
        </div>
      </div>
    </section>
  );
}
