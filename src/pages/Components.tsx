
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Components = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-neon-gradient bg-clip-text text-transparent">
                  Nos Composants
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez notre sélection de composants gaming haut de gamme pour votre configuration sur-mesure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder content - À développer */}
              <div className="glass-card p-6 text-center">
                <h3 className="text-xl font-bold text-gaming-cyan mb-4">Processeurs</h3>
                <p className="text-gray-300">Intel & AMD dernière génération</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="text-xl font-bold text-gaming-cyan mb-4">Cartes Graphiques</h3>
                <p className="text-gray-300">RTX 40 Series & RX 7000</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="text-xl font-bold text-gaming-cyan mb-4">Mémoire RAM</h3>
                <p className="text-gray-300">DDR4 & DDR5 haute fréquence</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Components;
