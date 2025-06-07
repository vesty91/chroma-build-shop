import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronRight, 
  Cpu, 
  Monitor, 
  HardDrive, 
  HardDrive as Memory,
  Power, 
  Box, 
  Check,
  Star,
  Zap,
  Fan
} from 'lucide-react';

const prebuiltPCs = {
  'gaming-starter': {
    id: 1,
    name: "Gaming Starter",
    price: 799,
    originalPrice: 899,
    image: "/placeholder.svg",
    badge: "POPULAIRE",
    description: "Configuration d'entrée de gamme idéale pour le gaming en Full HD avec processeur Intel dernière génération",
    specs: {
      cpu: {
        name: "Intel Core i5-14400F",
        details: "10 cœurs / 16 threads, jusqu'à 4.7 GHz, LGA1700"
      },
      gpu: {
        name: "RTX 4060 8GB",
        details: "8 Go GDDR6, Ray Tracing, DLSS 3 (ASUS/MSI/Gigabyte)"
      },
      ram: {
        name: "16GB DDR4 3200",
        details: "Corsair CM4X8GD3200C16K2E (2x8Go DDR4 3200 PC24000)"
      },
      storage: {
        name: "1TB SSD NVMe Kingston",
        details: "Kingston NV2 M.2 NVMe - SNV2S/1000G"
      },
      motherboard: {
        name: "MSI PRO B760M-P DDR4",
        details: "Intel B760, LGA1700, DDR4, mATX"
      },
      psu: {
        name: "D by M.RED ATX 550W",
        details: "80+ Bronze - DU-550B"
      },
      case: {
        name: "D by M.RED Silent Force",
        details: "Boîtier PC silencieux et performant"
      },
      cooling: {
        name: "M.RED Zephyr Dark Pro",
        details: "Ventilateur CPU optimisé pour Intel LGA1700"
      }
    },
    performance: {
      fps1080p: "120+ FPS",
      games: [
        { name: "Fortnite", fps: "180 FPS" },
        { name: "Valorant", fps: "200+ FPS" },
        { name: "CS2", fps: "160 FPS" }
      ]
    },
    features: [
      "Ray Tracing Ready",
      "Montage soigné",
      "Sans système d'exploitation",
      "Garantie 2 ans"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  'performance-pro': {
    id: 2,
    name: "Performance Pro",
    price: 1299,
    originalPrice: 1499,
    image: "/placeholder.svg",
    badge: "BEST VALUE",
    description: "Configuration gaming haut de gamme pour une expérience QHD fluide",
    specs: {
      cpu: {
        name: "AMD Ryzen 7 5700X",
        details: "8 cœurs / 16 threads, 3.8 GHz - 4.7 GHz"
      },
      gpu: {
        name: "RTX 4070",
        details: "12 Go GDDR6X, Ray Tracing, DLSS 3"
      },
      ram: {
        name: "32GB DDR4",
        details: "2x16 Go, 3600 MHz, CL16"
      },
      storage: {
        name: "1TB SSD NVMe",
        details: "PCIe 4.0, 7000 Mo/s"
      },
      motherboard: {
        name: "ASUS ROG STRIX B550-F",
        details: "AMD B550, PCIe 4.0, USB 3.2 Gen 2"
      },
      psu: {
        name: "Corsair RM850",
        details: "80+ Gold, Modulaire"
      },
      case: {
        name: "Lian Li O11 Dynamic",
        details: "ATX, USB 3.1 Type-C, RGB"
      }
    },
    performance: {
      fps1080p: "144+ FPS",
      games: [
        { name: "Cyberpunk 2077", fps: "120 FPS (RT On)" },
        { name: "Call of Duty", fps: "165+ FPS" },
        { name: "Apex Legends", fps: "180+ FPS" }
      ]
    },
    features: [
      "Ray Tracing Ultra",
      "Overclocking Optimisé",
      "Windows 11 Pro Préinstallé",
      "Garantie 3 ans"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
};

const PrebuiltPCDetail = () => {
  const { id } = useParams();
  const pc = prebuiltPCs[id];

  if (!pc) {
    return (
      <div className="min-h-screen bg-gaming-dark">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-2xl text-white">Configuration non trouvée</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <a href="/" className="hover:text-gaming-cyan">Accueil</a>
            <ChevronRight className="h-4 w-4" />
            <a href="/prebuilt" className="hover:text-gaming-cyan">PC Préconfigurés</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{pc.name}</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <Badge className="absolute top-4 right-4 z-10 bg-gaming-cyan text-gaming-dark font-bold">
                  {pc.badge}
                </Badge>
                <img 
                  src={pc.image} 
                  alt={pc.name}
                  className="w-full h-[400px] object-cover rounded-lg gaming-card"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {pc.images.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${pc.name} view ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg gaming-card cursor-pointer hover:border-gaming-cyan transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-white">{pc.name}</h1>
              <p className="text-gray-300 text-lg">{pc.description}</p>
              
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gaming-cyan">{pc.price}€</span>
                {pc.originalPrice > pc.price && (
                  <span className="text-xl text-gray-400 line-through">{pc.originalPrice}€</span>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <Button className="gaming-button text-lg w-full">
                  <Zap className="mr-2 h-5 w-5" />
                  Ajouter au panier
                </Button>
                <Button variant="outline" className="w-full border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark">
                  Configurer un PC similaire
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-gaming-green" />
                  <span>Livraison gratuite</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-gaming-green" />
                  <span>Montage 48h</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-gaming-green" />
                  <span>Garantie 2 ans</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-gaming-green" />
                  <span>Support technique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Info Tabs */}
          <Tabs defaultValue="specs" className="space-y-8">
            <TabsList className="w-full justify-start bg-gaming-gray border-b border-gaming-gray-light rounded-none p-0 h-auto">
              <TabsTrigger 
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gaming-cyan data-[state=active]:bg-transparent py-4"
              >
                Spécifications
              </TabsTrigger>
              <TabsTrigger 
                value="performance"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gaming-cyan data-[state=active]:bg-transparent py-4"
              >
                Performance
              </TabsTrigger>
              <TabsTrigger 
                value="features"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gaming-cyan data-[state=active]:bg-transparent py-4"
              >
                Caractéristiques
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="h-6 w-6 text-gaming-cyan" />
                      <h3 className="text-lg font-semibold text-white">Processeur</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.cpu.name}</p>
                      <p className="text-gray-400">{pc.specs.cpu.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Monitor className="h-6 w-6 text-gaming-purple" />
                      <h3 className="text-lg font-semibold text-white">Carte Graphique</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.gpu.name}</p>
                      <p className="text-gray-400">{pc.specs.gpu.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Memory className="h-6 w-6 text-gaming-green" />
                      <h3 className="text-lg font-semibold text-white">Mémoire RAM</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.ram.name}</p>
                      <p className="text-gray-400">{pc.specs.ram.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HardDrive className="h-6 w-6 text-gaming-orange" />
                      <h3 className="text-lg font-semibold text-white">Stockage</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.storage.name}</p>
                      <p className="text-gray-400">{pc.specs.storage.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Box className="h-6 w-6 text-gaming-cyan" />
                      <h3 className="text-lg font-semibold text-white">Carte Mère</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.motherboard.name}</p>
                      <p className="text-gray-400">{pc.specs.motherboard.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Power className="h-6 w-6 text-gaming-purple" />
                      <h3 className="text-lg font-semibold text-white">Alimentation</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.psu.name}</p>
                      <p className="text-gray-400">{pc.specs.psu.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Box className="h-6 w-6 text-gaming-green" />
                      <h3 className="text-lg font-semibold text-white">Boîtier</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.case.name}</p>
                      <p className="text-gray-400">{pc.specs.case.details}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gaming-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Fan className="h-6 w-6 text-gaming-cyan" />
                      <h3 className="text-lg font-semibold text-white">Refroidissement</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">{pc.specs.cooling.name}</p>
                      <p className="text-gray-400">{pc.specs.cooling.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="gaming-card col-span-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Performance Gaming</h3>
                    <div className="space-y-4">
                      {pc.performance.games.map((game, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gaming-gray rounded-lg">
                          <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-gaming-cyan" />
                            <span className="text-white">{game.name}</span>
                          </div>
                          <span className="text-gaming-cyan font-bold">{game.fps}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pc.features.map((feature, index) => (
                  <Card key={index} className="gaming-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-gaming-green" />
                        <span className="text-white">{feature}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrebuiltPCDetail;
