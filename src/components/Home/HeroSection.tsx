
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gaming-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-cyan/10 via-transparent to-gaming-purple/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaming-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-neon-gradient bg-clip-text text-transparent neon-text">
              PC GAMING
            </span>
            <br />
            <span className="text-white">MADE IN FRANCE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Configurations sur-mesure, montage expert, livraison rapide. 
            Créez le PC gaming de vos rêves avec nos spécialistes français.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gaming-button text-lg px-8 py-4"
              onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Configurateur PC
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark text-lg px-8 py-4"
              onClick={() => document.getElementById('prebuilt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              PC Préconfigurés
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-gaming-cyan mb-2">500+</div>
              <div className="text-gray-300">PC Gaming livrés</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-gaming-green mb-2">48h</div>
              <div className="text-gray-300">Montage & Tests</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-gaming-purple mb-2">2 ans</div>
              <div className="text-gray-300">Garantie incluse</div>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-gaming-cyan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
