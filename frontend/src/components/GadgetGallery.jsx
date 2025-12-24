import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Cpu, Headphones, Camera, Laptop, Smartphone, Watch } from 'lucide-react';

const gadgets = [
  {
    name: 'Premium Headphones',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxnYWRnZXRzfGVufDB8fHx8MTc2NjMzMzEyNXww&ixlib=rb-4.1.0&q=85',
    icon: Headphones,
    category: 'Audio'
  },
  {
    name: 'Workspace Setup',
    image: 'https://images.unsplash.com/photo-1595303526913-c7037797ebe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxnYWRnZXRzfGVufDB8fHx8MTc2NjMzMzEyNXww&ixlib=rb-4.1.0&q=85',
    icon: Laptop,
    category: 'Computing'
  },
  {
    name: 'Gaming Collection',
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxnYWRnZXRzfGVufDB8fHx8MTc2NjMzMzEyNXww&ixlib=rb-4.1.0&q=85',
    icon: Smartphone,
    category: 'Gaming'
  },
  {
    name: 'Tech Essentials',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxnYWRnZXRzfGVufDB8fHx8MTc2NjMzMzEyNXww&ixlib=rb-4.1.0&q=85',
    icon: Camera,
    category: 'Photography'
  },
  {
    name: 'Electronics Hub',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    icon: Cpu,
    category: 'Electronics'
  },
  {
    name: 'Modern Tech',
    image: 'https://images.pexels.com/photos/8004014/pexels-photo-8004014.jpeg',
    icon: Watch,
    category: 'Wearables'
  }
];

export default function GadgetGallery() {
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
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Just Like Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Gadget Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each one carefully chosen, each one special – just like every moment with you
          </p>
        </div>

        {/* Gadget Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gadgets.map((gadget, index) => {
            const Icon = gadget.icon;
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
                    src={gadget.image}
                    alt={gadget.name}
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
                    {gadget.category}
                  </Badge>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {gadget.name}
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
