
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alexandre M.",
      role: "Streamer Twitch",
      content: "PC livré en 2 jours, montage impeccable ! Mes viewers n'en reviennent pas de la qualité du stream. RTX 4080 + i7-13700K, un régal !",
      rating: 5,
      game: "Valorant Pro"
    },
    {
      name: "Sarah L.",
      role: "Game Designer",
      content: "Service client exceptionnel, ils ont su me conseiller la config parfaite pour mes projets 3D. L'équipe comprend vraiment les besoins des créateurs.",
      rating: 5,
      game: "Créatrice de contenu"
    },
    {
      name: "Maxime R.",
      role: "Gamer Compétitif",
      content: "Config sur-mesure parfaite pour l'esport ! 240 FPS constants sur CS2, le rêve de tout gamer compétitif. Merci l'équipe !",
      rating: 5,
      game: "CS2 Global Elite"
    }
  ];

  return (
    <section className="py-20 bg-gaming-gray relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gaming-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gaming-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ils nous font</span>
            <br />
            <span className="bg-neon-gradient bg-clip-text text-transparent">confiance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez les retours de notre communauté de gamers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 relative group hover:scale-105 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gaming-cyan/30" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gaming-cyan fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gaming-gray-light pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gaming-cyan text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-xs mt-1">{testimonial.game}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
