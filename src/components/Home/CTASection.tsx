
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-cyan/10 via-gaming-purple/10 to-gaming-green/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gaming-cyan/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-white">Prêt à dominer</span>
            <br />
            <span className="bg-neon-gradient bg-clip-text text-transparent neon-text">
              le gaming ?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les centaines de gamers qui nous font confiance pour leurs configurations gaming sur-mesure.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/configurator">
              <Button
                size="lg"
                className="gaming-button text-lg px-10 py-6 h-auto font-semibold group"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Configurer mon PC
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white text-lg px-10 py-6 h-auto font-semibold transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Besoin de conseils ?
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            ⚡ Livraison gratuite dès 1500€ • 🔧 Montage en 48h • 🛡️ Garantie 2 ans
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
