
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PrebuiltSection from '@/components/PrebuiltPCs/PrebuiltSection';

const PrebuiltPCs = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <PrebuiltSection />
      </main>
      <Footer />
    </div>
  );
};

export default PrebuiltPCs;
