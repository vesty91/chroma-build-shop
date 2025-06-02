
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-neon-gradient bg-clip-text text-transparent">
                  Nos Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Services professionnels pour votre PC gaming : montage, garantie, support technique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-gaming-cyan mb-4">Montage Expert</h3>
                <p className="text-gray-300 mb-4">Assemblage professionnel avec tests complets</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Montage soigné et optimisé</li>
                  <li>• Gestion des câbles</li>
                  <li>• Tests de stabilité</li>
                  <li>• Installation OS incluse</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-gaming-cyan mb-4">Garantie Premium</h3>
                <p className="text-gray-300 mb-4">Protection complète 2 ans pièces et main d'œuvre</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Support technique dédié</li>
                  <li>• Intervention sur site possible</li>
                  <li>• PC de prêt si nécessaire</li>
                  <li>• Mise à jour gratuite</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
