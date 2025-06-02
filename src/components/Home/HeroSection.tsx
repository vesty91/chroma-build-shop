
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Award, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gaming-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-cyan/10 via-transparent to-gaming-purple/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaming-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gaming-green/3 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gaming-cyan/10 border border-gaming-cyan/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-gaming-cyan" />
            <span className="text-sm text-gaming-cyan font-medium">PC Gaming Haut de Gamme</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-neon-gradient bg-clip-text text-transparent neon-text block mb-4">
              GAMING PC
            </span>
            <span className="text-white text-4xl md:text-5xl font-medium">
              Assemblé en France
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Configurations sur-mesure, montage expert par nos techniciens passionnés. 
            <br className="hidden md:block" />
            <span className="text-gaming-cyan font-semibold">Livraison 48h</span> partout en France avec garantie 2 ans.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/configurator">
              <Button
                size="lg"
                className="gaming-button text-lg px-10 py-6 h-auto font-semibold"
              >
                <Zap className="mr-2 h-5 w-5" />
                Créer mon PC
              </Button>
            </Link>
            <Link to="/prebuilt">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark text-lg px-10 py-6 h-auto font-semibold transition-all duration-300"
              >
                PC Préconfigurés
              </Button>
            </Link>
          </div>

          {/* USP Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="bg-gaming-cyan/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:bg-gaming-cyan/20 transition-colors">
                <Award className="h-8 w-8 text-gaming-cyan" />
              </div>
              <div className="text-4xl font-bold text-gaming-cyan mb-3">500+</div>
              <div className="text-gray-300 text-lg">PC Gaming livrés</div>
              <div className="text-gray-400 text-sm mt-2">Clients satisfaits depuis 2020</div>
            </div>
            
            <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="bg-gaming-green/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:bg-gaming-green/20 transition-colors">
                <Zap className="h-8 w-8 text-gaming-green" />
              </div>
              <div className="text-4xl font-bold text-gaming-green mb-3">48h</div>
              <div className="text-gray-300 text-lg">Montage & Tests</div>
              <div className="text-gray-400 text-sm mt-2">Assemblage professionnel</div>
            </div>
            
            <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="bg-gaming-purple/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:bg-gaming-purple/20 transition-colors">
                <Truck className="h-8 w-8 text-gaming-purple" />
              </div>
              <div className="text-4xl font-bold text-gaming-purple mb-3">2 ans</div>
              <div className="text-gray-300 text-lg">Garantie incluse</div>
              <div className="text-gray-400 text-sm mt-2">Support technique gratuit</div>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-gaming-cyan opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
