
import { useState } from 'react';

export const useConfigurator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cpuFilter, setCpuFilter] = useState('all');
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
      const totalPower = (cpu?.power || 0) + gpu.power + 150;
      if (psu.wattage < totalPower) {
        issues.push('L\'alimentation est insuffisante pour cette configuration');
      }
    }

    return issues;
  };

  const getFilteredComponents = (type) => {
    let filteredComponents = components[type] || [];
    
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

  return {
    currentStep,
    setCurrentStep,
    cpuFilter,
    setCpuFilter,
    selectedComponents,
    setSelectedComponents,
    steps,
    components,
    calculateTotalPrice,
    checkCompatibility,
    getFilteredComponents,
    selectComponent,
    nextStep,
    prevStep
  };
};
