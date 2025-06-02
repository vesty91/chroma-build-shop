
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import PrebuiltSection from '@/components/PrebuiltPCs/PrebuiltSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PrebuiltSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
