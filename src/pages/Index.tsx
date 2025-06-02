
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import PrebuiltSection from '@/components/PrebuiltPCs/PrebuiltSection';
import ConfiguratorSection from '@/components/Configurator/ConfiguratorSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main>
        <HeroSection />
        <PrebuiltSection />
        <ConfiguratorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
