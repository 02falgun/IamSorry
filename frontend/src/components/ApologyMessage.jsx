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
    <section
      id="apology-message"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-[#f5f0ff] to-[#efe7ff]"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-2xl rounded-3xl">
          <CardContent className="p-8 sm:p-12">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
                  Hey Pakyaa,
                </h2>

                <div className="flex justify-center">
                  <Heart
                    className="w-8 h-8 text-pink-500 animate-pulse"
                    fill="currentColor"
                  />
                </div>
              </div>

              <Separator className="my-8 bg-purple-200" />

              {/* Main Message */}
              <div className="space-y-7 text-gray-700 text-base sm:text-lg leading-loose">
                <p>
                  Galti mero thiyo hola,
                  tara niyat kahilei naramro thiyena.
                  Mann bhitra dherai kura lukaera basda basdai,
                  sabai kura haat bata fuskeko jasto bhayo.
                </p>

                <p>
                  Maile timilai kahilei afno banauna khojeko chaina,
                  na timro happiness bata tadha garna.
                  Bas ekchoti feri
                  mero purano bestfriend firta pauna man cha.
                </p>

                <p>
                  Pahile jastai random kura garne,
                  hasne,
                  mero silence bujhne,
                  ani “k bhayo?” bhanera sodhne timi feri chahiyeko cha.
                </p>

                <p>
                  Timi tada bhayepachi bujhe maile,
                  kehi manche haru relationship bhanda pani
                  friendship ma dherai special hunchan rahechan.
                </p>

                <p>
                  Yaspali maya bhanda dherai
                  respect ra care liyera aako chu.
                  Aansu dina hoina,
                  bas pahile jastai ekchoti hasera bolna man cha.
                </p>

                <p className="font-semibold text-purple-800 text-lg">
                  Ra sachhi…
                  aaja pani yo mutule sabbhanda dherai miss garne manche,
                  timi nai hau — meri “Pakyaa”.
                </p>
              </div>

              <Separator className="my-8 bg-purple-200" />

              {/* Footer */}
              <div className="text-center">
                <p className="text-2xl font-semibold text-purple-900 mb-3">
                  Your friend, always.
                </p>

                <div className="flex justify-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
                  <Heart className="w-5 h-5 text-purple-400" fill="currentColor" />
                  <Heart className="w-5 h-5 text-rose-400" fill="currentColor" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
