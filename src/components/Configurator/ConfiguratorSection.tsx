import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RecommendationEngine from './RecommendationEngine';

const ConfiguratorSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cpuFilter, setCpuFilter] = useState('all'); // 'all', 'intel', 'amd'
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    gpu: null,
    psu: null,
    case: null,
    services: []
  });

  const steps = [
    { name: 'CPU', key: 'cpu' },
    { name: 'Carte Mère', key: 'motherboard' },
    { name: 'RAM', key: 'ram' },
    { name: 'Stockage', key: 'storage' },
    { name: 'Carte Graphique', key: 'gpu' },
    { name: 'Alimentation', key: 'psu' },
    { name: 'Boîtier', key: 'case' },
    { name: 'Services', key: 'services' },
    { name: 'Récapitulatif', key: 'summary' }
  ];

  const components = {
    cpu: [
      { id: 1, name: 'AMD Ryzen 5 5600', price: 159, socket: 'AM4', brand: 'AMD', power: 65, usage: ['Gaming', 'Bureautique'] },
      { id: 2, name: 'AMD Ryzen 7 5700X', price: 229, socket: 'AM4', brand: 'AMD', power: 105, usage: ['Gaming', '3D', 'Streaming'] },
      { id: 3, name: 'Intel Core i5-12400F', price: 189, socket: 'LGA1700', brand: 'Intel', power: 65, usage: ['Gaming', 'Bureautique'] },
      { id: 4, name: 'Intel Core i7-12700K', price: 329, socket: 'LGA1700', brand: 'Intel', power: 125, usage: ['Gaming', '3D', 'Streaming'] },
      { id: 5, name: 'AMD Ryzen 9 5900X', price: 399, socket: 'AM4', brand: 'AMD', power: 105, usage: ['Gaming Pro', '3D', 'Streaming'] },
      { id: 6, name: 'Intel Core i9-12900K', price: 589, socket: 'LGA1700', brand: 'Intel', power: 125, usage: ['Gaming Pro', '3D', 'Streaming'] }
    ],
    motherboard: [
      { id: 1, name: 'MSI B450 TOMAHAWK MAX', price: 89, socket: 'AM4', ramSlots: 4, maxRam: 128 },
      { id: 2, name: 'ASUS ROG STRIX B550-F', price: 189, socket: 'AM4', ramSlots: 4, maxRam: 128 },
      { id: 3, name: 'MSI PRO B660M-A', price: 119, socket: 'LGA1700', ramSlots: 4, maxRam: 128 },
      { id: 4, name: 'ASUS ROG STRIX Z690-E', price: 399, socket: 'LGA1700', ramSlots: 4, maxRam: 128 }
    ],
    ram: [
      { id: 1, name: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200', price: 59, capacity: 16, type: 'DDR4', speed: 3200 },
      { id: 2, name: 'G.Skill Ripjaws V 32GB (2x16GB) DDR4-3600', price: 119, capacity: 32, type: 'DDR4', speed: 3600 },
      { id: 3, name: 'Corsair Dominator 32GB (2x16GB) DDR5-5600', price: 189, capacity: 32, type: 'DDR5', speed: 5600 },
      { id: 4, name: 'G.Skill Trident Z5 64GB (2x32GB) DDR5-6000', price: 399, capacity: 64, type: 'DDR5', speed: 6000 }
    ],
    storage: [
      { id: 1, name: 'Samsung 980 500GB NVMe SSD', price: 59, capacity: 500, type: 'SSD' },
      { id: 2, name: 'Samsung 980 PRO 1TB NVMe SSD', price: 129, capacity: 1000, type: 'SSD' },
      { id: 3, name: 'WD Black SN850X 2TB NVMe SSD', price: 199, capacity: 2000, type: 'SSD' },
      { id: 4, name: 'Seagate Barracuda 2TB HDD', price: 79, capacity: 2000, type: 'HDD' }
    ],
    gpu: [
      { id: 1, name: 'RTX 4060', price: 329, power: 115, performance: 'FHD Gaming' },
      { id: 2, name: 'RTX 4060 Ti', price: 449, power: 165, performance: 'FHD High' },
      { id: 3, name: 'RTX 4070', price: 629, power: 200, performance: 'QHD Gaming' },
      { id: 4, name: 'RTX 4070 Ti', price: 829, power: 285, performance: 'QHD High' },
      { id: 5, name: 'RTX 4080', price: 1229, power: 320, performance: '4K Gaming' },
      { id: 6, name: 'RTX 4090', price: 1699, power: 450, performance: '4K Ultra' }
    ],
    psu: [
      { id: 1, name: 'Corsair CV650 650W 80+ Bronze', price: 79, wattage: 650, efficiency: 'Bronze' },
      { id: 2, name: 'Seasonic Focus GX-750 750W 80+ Gold', price: 129, wattage: 750, efficiency: 'Gold' },
      { id: 3, name: 'Corsair RM850 850W 80+ Gold', price: 149, wattage: 850, efficiency: 'Gold' },
      { id: 4, name: 'Seasonic Prime TX-1000 1000W 80+ Titanium', price: 299, wattage: 1000, efficiency: 'Titanium' }
    ],
    case: [
      { id: 1, name: 'Fractal Design Core 1000', price: 49, type: 'Micro-ATX', style: 'Minimaliste' },
      { id: 2, name: 'NZXT H510', price: 79, type: 'ATX', style: 'Moderne' },
      { id: 3, name: 'Corsair 4000D Airflow', price: 109, type: 'ATX', style: 'Performance' },
      { id: 4, name: 'Lian Li O11 Dynamic', price: 149, type: 'ATX', style: 'Premium' }
    ],
    services: [
      { id: 1, name: 'Installation Windows 11', price: 29, description: 'Installation complète et activation' },
      { id: 2, name: 'Overclocking CPU/GPU', price: 49, description: 'Optimisation des performances' },
      { id: 3, name: 'Cable Management Premium', price: 39, description: 'Câblage soigné et esthétique' },
      { id: 4, name: 'Garantie étendue 3 ans', price: 99, description: 'Extension de garantie' }
    ]
  };

  const calculateTotalPrice = () => {
    let total = 0;
    Object.entries(selectedComponents).forEach(([key, value]) => {
      if (key === 'services' && Array.isArray(value)) {
        value.forEach(serviceId => {
          const service = components.services.find(s => s.id === serviceId);
          if (service) total += service.price;
        });
      } else if (value) {
        const component = components[key]?.find(c => c.id === value);
        if (component) total += component.price;
      }
    });
    return total;
  };

  const checkCompatibility = () => {
    const issues = [];
    const cpu = selectedComponents.cpu ? components.cpu.find(c => c.id === selectedComponents.cpu) : null;
    const motherboard = selectedComponents.motherboard ? components.motherboard.find(c => c.id === selectedComponents.motherboard) : null;
    const gpu = selectedComponents.gpu ? components.gpu.find(c => c.id === selectedComponents.gpu) : null;
    const psu = selectedComponents.psu ? components.psu.find(c => c.id === selectedComponents.psu) : null;

    if (cpu && motherboard && cpu.socket !== motherboard.socket) {
      issues.push('Le processeur et la carte mère ne sont pas compatibles (socket différent)');
    }

    if (gpu && psu) {
      const totalPower = (cpu?.power || 0) + gpu.power + 150; // +150W pour le reste
      if (psu.wattage < totalPower) {
        issues.push('L\'alimentation est insuffisante pour cette configuration');
      }
    }

    return issues;
  };

  const getFilteredComponents = (type) => {
    let filteredComponents = components[type] || [];
    
    // Appliquer le filtre CPU par marque
    if (type === 'cpu' && cpuFilter !== 'all') {
      filteredComponents = filteredComponents.filter(cpu => 
        cpu.brand.toLowerCase() === cpuFilter.toLowerCase()
      );
    }
    
    if (type === 'motherboard' && selectedComponents.cpu) {
      const cpu = components.cpu.find(c => c.id === selectedComponents.cpu);
      return filteredComponents.filter(mb => mb.socket === cpu.socket);
    }
    if (type === 'psu' && selectedComponents.gpu) {
      const gpu = components.gpu.find(g => g.id === selectedComponents.gpu);
      const cpu = selectedComponents.cpu ? components.cpu.find(c => c.id === selectedComponents.cpu) : null;
      const minWattage = (cpu?.power || 65) + gpu.power + 150;
      return filteredComponents.filter(psu => psu.wattage >= minWattage);
    }
    return filteredComponents;
  };

  const selectComponent = (type, componentId) => {
    if (type === 'services') {
      const currentServices = selectedComponents.services || [];
      if (currentServices.includes(componentId)) {
        setSelectedComponents({
          ...selectedComponents,
          services: currentServices.filter(id => id !== componentId)
        });
      } else {
        setSelectedComponents({
          ...selectedComponents,
          services: [...currentServices, componentId]
        });
      }
    } else {
      setSelectedComponents({
        ...selectedComponents,
        [type]: componentId
      });
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepKey = steps[currentStep].key;
  const compatibilityIssues = checkCompatibility();

  const getUsageBadgeColor = (usage) => {
    switch (usage) {
      case 'Gaming': return 'bg-gaming-cyan text-gaming-dark';
      case 'Gaming Pro': return 'bg-gaming-purple text-white';
      case '3D': return 'bg-gaming-green text-gaming-dark';
      case 'Streaming': return 'bg-gaming-orange text-white';
      case 'Bureautique': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="configurator" className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              Configurateur PC
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Créez votre PC gaming sur-mesure avec notre configurateur intelligent.
            Vérification automatique de compatibilité incluse.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Étape {currentStep + 1} / {steps.length}</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2 bg-gaming-gray" />
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <div
                  key={step.key}
                  className={`text-xs ${index === currentStep ? 'text-gaming-cyan' : index < currentStep ? 'text-gaming-green' : 'text-gray-400'}`}
                >
                  {step.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    {steps[currentStep].name}
                    {selectedComponents[currentStepKey] && currentStepKey !== 'services' && currentStepKey !== 'summary' && (
                      <CheckCircle className="ml-2 h-6 w-6 text-gaming-green" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {currentStepKey === 'summary' ? 'Vérifiez votre configuration avant de commander' : 'Sélectionnez un composant pour continuer'}
                  </CardDescription>
                  
                  {/* Filtres pour CPU */}
                  {currentStepKey === 'cpu' && (
                    <div className="flex gap-2 mt-4">
                      <Button
                        variant={cpuFilter === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCpuFilter('all')}
                        className={cpuFilter === 'all' ? 'gaming-button' : 'border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark'}
                      >
                        Tous
                      </Button>
                      <Button
                        variant={cpuFilter === 'intel' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCpuFilter('intel')}
                        className={cpuFilter === 'intel' ? 'gaming-button' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}
                      >
                        Intel
                      </Button>
                      <Button
                        variant={cpuFilter === 'amd' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCpuFilter('amd')}
                        className={cpuFilter === 'amd' ? 'gaming-button' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'}
                      >
                        AMD
                      </Button>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {currentStepKey === 'summary' ? (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Configuration finale</h3>
                      
                      {compatibilityIssues.length > 0 && (
                        <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6">
                          <div className="flex items-center mb-2">
                            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                            <span className="text-red-500 font-medium">Problèmes de compatibilité détectés</span>
                          </div>
                          <ul className="text-red-400 text-sm space-y-1">
                            {compatibilityIssues.map((issue, index) => (
                              <li key={index}>• {issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="space-y-4">
                        {Object.entries(selectedComponents).map(([key, value]) => {
                          if (key === 'services') {
                            return value.length > 0 ? (
                              <div key={key} className="flex justify-between items-center p-3 bg-gaming-gray rounded-lg">
                                <div>
                                  <span className="text-white font-medium">Services sélectionnés</span>
                                  <div className="text-sm text-gray-400">
                                    {value.map(serviceId => {
                                      const service = components.services.find(s => s.id === serviceId);
                                      return service ? service.name : '';
                                    }).join(', ')}
                                  </div>
                                </div>
                                <span className="text-gaming-cyan font-bold">
                                  {value.reduce((total, serviceId) => {
                                    const service = components.services.find(s => s.id === serviceId);
                                    return total + (service ? service.price : 0);
                                  }, 0)}€
                                </span>
                              </div>
                            ) : null;
                          } else if (value) {
                            const component = components[key]?.find(c => c.id === value);
                            return component ? (
                              <div key={key} className="flex justify-between items-center p-3 bg-gaming-gray rounded-lg">
                                <div>
                                  <span className="text-white font-medium">{steps.find(s => s.key === key)?.name}</span>
                                  <div className="text-sm text-gray-400">{component.name}</div>
                                </div>
                                <span className="text-gaming-cyan font-bold">{component.price}€</span>
                              </div>
                            ) : null;
                          }
                          return null;
                        })}
                      </div>

                      <div className="border-t border-gaming-gray pt-4">
                        <div className="flex justify-between items-center text-xl font-bold">
                          <span className="text-white">Prix total</span>
                          <span className="text-gaming-cyan">{calculateTotalPrice()}€</span>
                        </div>
                      </div>

                      <Button 
                        className="gaming-button w-full text-lg py-3"
                        disabled={compatibilityIssues.length > 0}
                      >
                        Ajouter au panier
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getFilteredComponents(currentStepKey).map((component) => {
                        const isSelected = currentStepKey === 'services' 
                          ? selectedComponents.services?.includes(component.id)
                          : selectedComponents[currentStepKey] === component.id;
                        
                        return (
                          <Card
                            key={component.id}
                            className={`cursor-pointer transition-all duration-200 ${
                              isSelected 
                                ? 'neon-border bg-gaming-cyan/10' 
                                : 'gaming-card hover:border-gaming-cyan/50'
                            }`}
                            onClick={() => selectComponent(currentStepKey, component.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-semibold text-white">{component.name}</h4>
                                <span className="text-gaming-cyan font-bold">{component.price}€</span>
                              </div>
                              
                              <div className="space-y-2 text-sm text-gray-400">
                                {currentStepKey === 'cpu' && (
                                  <>
                                    <div>Socket: {component.socket}</div>
                                    <div>Consommation: {component.power}W</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      <Badge variant="outline" className={component.brand === 'AMD' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'}>
                                        {component.brand}
                                      </Badge>
                                      {component.usage.map((use, index) => (
                                        <Badge key={index} className={getUsageBadgeColor(use)}>
                                          {use}
                                        </Badge>
                                      ))}
                                    </div>
                                  </>
                                )}
                                {currentStepKey === 'motherboard' && (
                                  <>
                                    <div>Socket: {component.socket}</div>
                                    <div>Slots RAM: {component.ramSlots}</div>
                                  </>
                                )}
                                {currentStepKey === 'ram' && (
                                  <>
                                    <div>Capacité: {component.capacity}GB</div>
                                    <div>Type: {component.type}</div>
                                    <div>Fréquence: {component.speed}MHz</div>
                                  </>
                                )}
                                {currentStepKey === 'storage' && (
                                  <>
                                    <div>Capacité: {component.capacity}GB</div>
                                    <div>Type: {component.type}</div>
                                  </>
                                )}
                                {currentStepKey === 'gpu' && (
                                  <>
                                    <div>Consommation: {component.power}W</div>
                                    <div>Performance: {component.performance}</div>
                                  </>
                                )}
                                {currentStepKey === 'psu' && (
                                  <>
                                    <div>Puissance: {component.wattage}W</div>
                                    <div>Certification: 80+ {component.efficiency}</div>
                                  </>
                                )}
                                {currentStepKey === 'case' && (
                                  <>
                                    <div>Format: {component.type}</div>
                                    <div>Style: {component.style}</div>
                                  </>
                                )}
                                {currentStepKey === 'services' && (
                                  <div>{component.description}</div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recommandations Engine */}
              {currentStepKey !== 'summary' && (
                <RecommendationEngine
                  selectedComponents={selectedComponents}
                  components={components}
                  currentStep={currentStepKey}
                  onSelectComponent={selectComponent}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="gaming-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Configuration actuelle</CardTitle>
                  <CardDescription>Prix total: {calculateTotalPrice()}€</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {steps.slice(0, -1).map((step) => {
                    const component = step.key === 'services' 
                      ? (selectedComponents.services?.length > 0 ? { name: `${selectedComponents.services.length} service(s)` } : null)
                      : selectedComponents[step.key] ? components[step.key]?.find(c => c.id === selectedComponents[step.key]) : null;
                    
                    return (
                      <div key={step.key} className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{step.name}:</span>
                        <span className="text-white">
                          {component ? (step.key === 'services' ? component.name : component.name.substring(0, 20) + '...') : 'Non sélectionné'}
                        </span>
                      </div>
                    );
                  })}

                  {compatibilityIssues.length > 0 && (
                    <div className="bg-red-500/10 border border-red-500 rounded-lg p-3 mt-4">
                      <div className="flex items-center text-red-500 text-sm font-medium mb-1">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Attention
                      </div>
                      <p className="text-red-400 text-xs">
                        {compatibilityIssues.length} problème(s) de compatibilité
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Précédent
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className="gaming-button"
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorSection;
