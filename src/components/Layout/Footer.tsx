
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gaming-darker border-t border-gaming-gray py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-neon-gradient bg-clip-text text-transparent mb-4">
              GamerPC.fr
            </h3>
            <p className="text-gray-400 text-sm">
              Spécialiste français du PC gaming sur-mesure. 
              Montage expert, livraison rapide, garantie 2 ans.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#prebuilt" className="hover:text-gaming-cyan transition-colors">PC Préconfigurés</a></li>
              <li><a href="#configurator" className="hover:text-gaming-cyan transition-colors">Configurateur</a></li>
              <li><a href="#components" className="hover:text-gaming-cyan transition-colors">Composants</a></li>
              <li><a href="#services" className="hover:text-gaming-cyan transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#tracking" className="hover:text-gaming-cyan transition-colors">Suivi de commande</a></li>
              <li><a href="#" className="hover:text-gaming-cyan transition-colors">Garantie</a></li>
              <li><a href="#" className="hover:text-gaming-cyan transition-colors">SAV</a></li>
              <li><a href="#contact" className="hover:text-gaming-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 contact@gamerpc.fr</li>
              <li>📱 +33 1 23 45 67 89</li>
              <li>📍 Paris, France</li>
              <li>🕒 9h-18h du lundi au vendredi</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gaming-gray mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 GamerPC.fr - Tous droits réservés - Made with 💜 in France</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
