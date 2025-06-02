
import React from 'react';
import { Shield, Cpu, Headphones, Truck, Star, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Composants Premium",
      description: "Sélection rigoureuse des meilleurs composants gaming du marché",
      color: "text-gaming-cyan"
    },
    {
      icon: Shield,
      title: "Garantie 2 ans",
      description: "Protection complète avec support technique gratuit",
      color: "text-gaming-green"
    },
    {
      icon: Clock,
      title: "Livraison Express",
      description: "Montage en 48h et livraison rapide partout en France",
      color: "text-gaming-purple"
    },
    {
      icon: Headphones,
      title: "Support Expert",
      description: "Équipe de gamers passionnés à votre service",
      color: "text-gaming-orange"
    },
    {
      icon: Star,
      title: "Overclocking",
      description: "Optimisation des performances selon vos besoins",
      color: "text-gaming-cyan"
    },
    {
      icon: Truck,
      title: "Made in France",
      description: "Assemblage local par des techniciens certifiés",
      color: "text-gaming-green"
    }
  ];

  return (
    <section className="py-20 bg-gaming-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-gray/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              Pourquoi choisir
            </span>
            <br />
            <span className="text-white">GamerPC.fr ?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre expertise au service de votre passion gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
