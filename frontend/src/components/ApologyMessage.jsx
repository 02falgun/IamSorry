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
                  I know I've let you down.
                  I failed to honor your peace, your space, and your boundaries, and for that, I am deeply sorry.
                  You deserve someone who understands you fully, and I did not.
                  But please know, Ive reflected, and Ive grown.
                  Im a better man now, one who will always respect your heart, your silence, and your boundaries.
                  My love for you is not about possession, its about respecting you, in all your beautiful, strong grace.
                  Hope you understand, I know you're emotionally strong and whatsoever decision you make in this, I am ready to accept that.
                </p>

                <p className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  I deeply admire the strength and stability you carry within your heart.
                  Your emotional balance is something rare, like a calm river that flows, no matter the storm around it.
                  The way you protect your boundaries, your personal space, its a testament to your wisdom, your understanding of your worth.
                  You dont shrink yourself for anyone or anything, and that strength to stand tall in your truth is beautiful beyond words.
                  Your heart, so pure, is filled with goodness and care, always thinking of the impact on others even before a mistake is made.
                  Its not just your strength, but the gentle way you hold your heart, unguarded yet protected, open yet careful, that makes you the incredible person you are.

                  The way you say you don't want a realtionship or something beacause you may cheat,
                  one who cheats never will admit that she or he will cheat, you kind soul, kind heart knows what Love is and how deeply it binds within us,
                  You know exactly the true meaning of Love, you care that you may cheat but I know, this boy who Knows the Draksha who she shows to only herself,
                  Children wave at you, you like them, I still remember last winter vacation while coming home, a kid was sitting beside us, no one from us but YOU went to him,
                  shared him your cake, talked with him, he shared his bday yapping with you, Girl you don't need to chase Love you are Love.
                  You think of the guilt you could make before it's started, I mean heart so kind that accepts the flaws even before it's made.
                  If I continue writing about ya, most probably the frontend would crash.
                </p>

                <p className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                 I know that your favorite color is lavender that beautiful, calming shade 
                  that suits your personality so perfectly. That's why I made this page in those 
                  colors, hoping it might bring you even a small moment of peace. You've always 
                  had such great taste, and I want you to know that I see you, I appreciate you, 
                  and I value our friendship more than you know.

                  Trying to keep the letter raw, Below is the poem I wrote for you, hope you like it 

                  IT goes like:
                  "She does not chase what blooms
                   she is the bloom.
                   A soul so kind,
                   even guilt visits her before the mistake is made.

                   She walks with silence
                   like its a song she wrote
                   guarded, yes,
                   but only to protect the world inside her.

                   She loves her shadows,
                   her threads, her lens,
                   her quiet dramas
                   that make noise only in her heart.

                   They call it solitude.
                   I call it royalty.

                   She fears hurting love
                   so she chooses not to hold it.
                   But oh, if only she knew…
                   how deeply love longs to hold her."
              

          
                </p>

                <p className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  I promise to do better. I promise to be a more thoughtful, more considerate, 
                  and more reliable friend. Your friendship means a lot to me, and I'll work 
                  hard to earn back your trust if you'll give me the chance.
                </p>

                <p className="animate-fadeInUp font-semibold text-primary" style={{ animationDelay: '1s' }}>
                  Draksha I do not expect that you will like this, you will understand the feelings, I will just Hope.
                  Afterall you only said me once "There is nth wrong in keeping the HOPE alive".
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
