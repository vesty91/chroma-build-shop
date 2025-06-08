
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const PrebuiltSection = () => {
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedUsage, setSelectedUsage] = useState('all');

  const prebuiltPCs = [
    {
      id: 'gaming-starter',
      name: "Gaming Starter",
      price: 940,
      originalPrice: 899,
      image: "/placeholder.svg",
      specs: {
        cpu: "Intel Core i5-14400F",
        gpu: "RTX 4060 8GB",
        ram: "16GB DDR4 3200",
        storage: "1TB SSD NVMe Kingston",
        case: "D by M.RED Silent Force",
        motherboard: "MSI PRO B760M-P DDR4",
        psu: "D by M.RED ATX 550W 80+ Bronze",
        cooling: "M.RED Zephyr Dark Pro"
      },
      performance: {
        fps1080p: "120+ FPS",
        games: ["Fortnite", "Valorant", "CS2"]
      },
      badge: "POPULAIRE",
      category: "entry",
      usage: "gaming"
    },
    {
      id: 'performance-pro',
      name: "Performance Pro",
      price: 1299,
      originalPrice: 1499,
      image: "/placeholder.svg",
      specs: {
        cpu: "AMD Ryzen 7 5700X",
        gpu: "RTX 4070",
        ram: "32GB DDR4",
        storage: "1TB SSD NVMe"
      },
      performance: {
        fps1080p: "144+ FPS",
        games: ["Cyberpunk 2077", "Call of Duty", "Apex Legends"]
      },
      badge: "BEST VALUE",
      category: "mid",
      usage: "gaming"
    },
    {
      id: 'creator-beast',
      name: "Creator Beast",
      price: 2199,
      originalPrice: 2399,
      image: "/placeholder.svg",
      specs: {
        cpu: "Intel i7-13700K",
        gpu: "RTX 4080",
        ram: "32GB DDR5",
        storage: "2TB SSD NVMe"
      },
      performance: {
        fps1080p: "200+ FPS",
        games: ["Streaming + Gaming", "Content Creation"]
      },
      badge: "CRÉATEUR",
      category: "high",
      usage: "creation"
    },
    {
      id: 'ultimate-4k',
      name: "Ultimate 4K",
      price: 3499,
      originalPrice: 3799,
      image: "/placeholder.svg",
      specs: {
        cpu: "Intel i9-13900K",
        gpu: "RTX 4090",
        ram: "64GB DDR5",
        storage: "4TB SSD NVMe"
      },
      performance: {
        fps1080p: "240+ FPS",
        games: ["4K Gaming", "Ray Tracing Ultra"]
      },
      badge: "FLAGSHIP",
      category: "premium",
      usage: "gaming"
    },
    {
      id: 'workstation-pro',
      name: "Workstation Pro",
      price: 2899,
      originalPrice: 3199,
      image: "/placeholder.svg",
      specs: {
        cpu: "AMD Ryzen 9 5950X",
        gpu: "RTX 4070 Ti",
        ram: "64GB DDR4",
        storage: "2TB SSD NVMe"
      },
      performance: {
        fps1080p: "160+ FPS",
        games: ["Rendu 3D", "Montage Vidéo 4K"]
      },
      badge: "WORKSTATION",
      category: "high",
      usage: "creation"
    },
    {
      id: 'compact-gaming',
      name: "Compact Gaming",
      price: 1099,
      originalPrice: 1299,
      image: "/placeholder.svg",
      specs: {
        cpu: "AMD Ryzen 5 5600G",
        gpu: "RTX 4060 Ti",
        ram: "16GB DDR4",
        storage: "1TB SSD NVMe"
      },
      performance: {
        fps1080p: "140+ FPS",
        games: ["Format Mini-ITX", "Silent Gaming"]
      },
      badge: "COMPACT",
      category: "mid",
      usage: "gaming"
    }
  ];

  const filteredPCs = prebuiltPCs.filter(pc => {
    const budgetMatch = selectedBudget === 'all' || 
      (selectedBudget === 'entry' && pc.price < 1000) ||
      (selectedBudget === 'mid' && pc.price >= 1000 && pc.price < 2000) ||
      (selectedBudget === 'high' && pc.price >= 2000 && pc.price < 3000) ||
      (selectedBudget === 'premium' && pc.price >= 3000);
    
    const usageMatch = selectedUsage === 'all' || pc.usage === selectedUsage;
    
    return budgetMatch && usageMatch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'POPULAIRE': return 'bg-gaming-green text-gaming-dark';
      case 'BEST VALUE': return 'bg-gaming-cyan text-gaming-dark';
      case 'CRÉATEUR': return 'bg-gaming-purple text-white';
      case 'FLAGSHIP': return 'bg-gaming-orange text-white';
      case 'WORKSTATION': return 'bg-blue-500 text-white';
      case 'COMPACT': return 'bg-yellow-500 text-gaming-dark';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="prebuilt" className="py-20 bg-gaming-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              PC Préconfigurés
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Configurations optimisées par nos experts, testées et garanties. 
            Prêtes à jouer dès réception.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
          <Select value={selectedBudget} onValueChange={setSelectedBudget}>
            <SelectTrigger className="bg-gaming-gray border-gaming-gray-light text-white">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent className="bg-gaming-gray border-gaming-gray-light">
              <SelectItem value="all">Tous budgets</SelectItem>
              <SelectItem value="entry">€ Moins de 1000€</SelectItem>
              <SelectItem value="mid">€€ 1000€ - 2000€</SelectItem>
              <SelectItem value="high">€€€ 2000€ - 3000€</SelectItem>
              <SelectItem value="premium">€€€€ Plus de 3000€</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedUsage} onValueChange={setSelectedUsage}>
            <SelectTrigger className="bg-gaming-gray border-gaming-gray-light text-white">
              <SelectValue placeholder="Usage" />
            </SelectTrigger>
            <SelectContent className="bg-gaming-gray border-gaming-gray-light">
              <SelectItem value="all">Tous usages</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
              <SelectItem value="creation">Création</SelectItem>
              <SelectItem value="workstation">Workstation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* PC Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPCs.map((pc, index) => (
            <Card key={pc.id} className="gaming-card group hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="relative">
                <Badge className={`absolute top-4 right-4 ${getBadgeColor(pc.badge)} z-10`}>
                  {pc.badge}
                </Badge>
                <div className="w-full h-48 bg-gaming-gray rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={pc.image} 
                    alt={pc.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-white">{pc.name}</CardTitle>
                <CardDescription className="text-gaming-cyan font-semibold">
                  {pc.performance.fps1080p}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white">{pc.specs.cpu}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">GPU:</span>
                    <span className="text-white">{pc.specs.gpu}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white">{pc.specs.ram}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Stockage:</span>
                    <span className="text-white">{pc.specs.storage}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gaming-gray">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {pc.originalPrice > pc.price && (
                        <div className="text-sm text-gray-400 line-through">
                          {pc.originalPrice}€
                        </div>
                      )}
                      <div className="text-2xl font-bold text-gaming-cyan">
                        {pc.price}€
                      </div>
                    </div>
                    {pc.originalPrice > pc.price && (
                      <Badge variant="destructive">
                        -{Math.round((1 - pc.price / pc.originalPrice) * 100)}%
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button className="gaming-button w-full">
                      Ajouter au panier
                    </Button>
                    <Link to={`/prebuilt/${pc.id}`}>
                      <Button variant="outline" className="w-full border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark">
                        Voir détails
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPCs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Aucun PC ne correspond à vos critères.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrebuiltSection;
