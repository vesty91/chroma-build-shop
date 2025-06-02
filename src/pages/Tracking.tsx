
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Tracking = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-neon-gradient bg-clip-text text-transparent">
                  Suivi de Commande
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Suivez en temps réel l'état de votre commande et la progression du montage.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Rechercher votre commande</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Numéro de commande</label>
                  <input 
                    type="text" 
                    placeholder="Ex: CMD-2024-001234"
                    className="w-full bg-gaming-gray border border-gaming-gray-light rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email de commande</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full bg-gaming-gray border border-gaming-gray-light rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <button className="gaming-button w-full">
                  Suivre ma commande
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
