import React, { useState } from 'react';
import { Button } from './ui/button';
import { Heart, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function InteractiveHeart() {
  const [heartCount, setHeartCount] = useState(0);
  const [hearts, setHearts] = useState([]);

  const addFloatingHeart = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 80 + 10,
    };
    setHearts(prev => [...prev, newHeart]);
    setHeartCount(prev => prev + 1);

    if (heartCount === 0) {
      toast.success('Thank you for the first heart! 💜');
    } else if (heartCount === 9) {
      toast.success('10 hearts! You\'re amazing! 💜💜💜');
    } else if (heartCount === 49) {
      toast.success('50 hearts! I love you so much! 💜✨');
    }

    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 3000);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            I Hope You'll Forgive Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Each gesture sends a little bit of hope your way
          </p>
        </div>

        {/* Interactive Heart Button */}
        <div className="relative inline-block mb-8">
          <Button
            onClick={addFloatingHeart}
            size="lg"
            className="relative bg-primary hover:bg-primary-deep text-primary-foreground px-12 py-8 text-xl rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
          >
            <Heart className="w-8 h-8 mr-3" fill="currentColor" />
            Send Love
            <Sparkles className="w-6 h-6 ml-3" />
          </Button>

          {/* Floating Hearts */}
          {hearts.map(heart => (
            <div
              key={heart.id}
              className="absolute pointer-events-none animate-float"
              style={{
                left: `${heart.left}%`,
                bottom: '100%',
                animation: 'float 3s ease-out forwards'
              }}
            >
              <Heart className="w-12 h-12 text-primary" fill="currentColor" />
            </div>
          ))}
        </div>

        {/* Counter */}
        {heartCount > 0 && (
          <div className="animate-scaleIn">
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-full px-8 py-4 shadow-soft">
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              <span className="font-display text-2xl font-bold text-foreground">
                {heartCount}
              </span>
              <span className="text-muted-foreground">
                {heartCount === 1 ? 'heart sent' : 'hearts sent'}
              </span>
            </div>
          </div>
        )}

        {/* Message */}
        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 italic">
            "Every click reminds me of how much I value our friendship, and how much I hope 
            we can move past this. I hope these digital hearts can show you how much 
            your friendship means to me."
          </p>
        </div>
      </div>
    </section>
  );
}