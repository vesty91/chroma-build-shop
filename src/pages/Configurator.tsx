
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ConfiguratorSection from '@/components/Configurator/ConfiguratorSection';

const Configurator = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <ConfiguratorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Configurator;
