import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Camera, Scissors, Tv, Film } from 'lucide-react';

const hobbies = [
  {
    name: 'Photography',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    icon: Camera,
    category: 'Creative'
  },
  {
    name: 'Knitting',
    image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed',
    icon: Scissors,
    category: 'Handcraft'
  },
  {
    name: 'Anime',
    image: 'https://www.reddit.com/r/animequestions/comments/1lblcg1/show_me_your_best_anime_wallpaper/',
    icon: Tv,
    category: 'Entertainment'
  },
  {
    name: 'K-Dramas',
    image: 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a',
    icon: Film,
    category: 'Entertainment'
  }
];

export default function HobbyGallery() {
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
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Things You <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Love</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments, stories, and creativity — the little joys that define you
          </p>
        </div>

        {/* Hobby Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <Card
                key={index}
                className={`group overflow-hidden border-2 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {hobby.category}
                  </Badge>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {hobby.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
