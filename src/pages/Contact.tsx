
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-neon-gradient bg-clip-text text-transparent">
                  Contact
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une question ? Besoin d'aide pour votre configuration ? Notre équipe est là pour vous accompagner.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6">Nous contacter</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-gaming-cyan">📧</span>
                    <span className="text-gray-300">contact@gamerpc.fr</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gaming-cyan">📱</span>
                    <span className="text-gray-300">+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gaming-cyan">📍</span>
                    <span className="text-gray-300">Paris, France</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gaming-cyan">🕒</span>
                    <span className="text-gray-300">9h-18h du lundi au vendredi</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6">Formulaire de contact</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Nom</label>
                    <input 
                      type="text" 
                      className="w-full bg-gaming-gray border border-gaming-gray-light rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gaming-gray border border-gaming-gray-light rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-gaming-gray border border-gaming-gray-light rounded-lg px-4 py-3 text-white"
                    ></textarea>
                  </div>
                  <button type="submit" className="gaming-button w-full">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
