
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import RecommendationCard from './RecommendationCard';

interface RecommendationEngineProps {
  selectedComponents: any;
  components: any;
  currentStep: string;
  onSelectComponent: (type: string, componentId: number) => void;
}

const RecommendationEngine = ({ selectedComponents, components, currentStep, onSelectComponent }: RecommendationEngineProps) => {
  const getRecommendations = () => {
    const recommendations = [];
    const cpu = selectedComponents.cpu ? components.cpu.find(c => c.id === selectedComponents.cpu) : null;
    const gpu = selectedComponents.gpu ? components.gpu.find(c => c.id === selectedComponents.gpu) : null;
    const motherboard = selectedComponents.motherboard ? components.motherboard.find(c => c.id === selectedComponents.motherboard) : null;

    // Recommandations basées sur l'étape actuelle
    switch (currentStep) {
      case 'cpu':
        if (!selectedComponents.cpu) {
          // Recommander un CPU populaire pour le gaming
          const recommendedCpu = components.cpu.find(c => c.name.includes('Ryzen 5 5600'));
          if (recommendedCpu) {
            recommendations.push({
              title: 'Choix populaire',
              description: 'Excellent rapport qualité-prix pour le gaming',
              component: recommendedCpu,
              reason: 'Processeur très apprécié pour les jeux, consommation faible et performances solides',
              priority: 'high' as const,
              type: 'cpu'
            });
          }
        }
        break;

      case 'motherboard':
        if (cpu && !selectedComponents.motherboard) {
          const compatibleMotherboards = components.motherboard.filter(mb => mb.socket === cpu.socket);
          const recommendedMb = compatibleMotherboards.find(mb => mb.name.includes('B550') || mb.name.includes('B660'));
          if (recommendedMb) {
            recommendations.push({
              title: 'Compatibilité parfaite',
              description: 'Carte mère compatible avec votre CPU',
              component: recommendedMb,
              reason: `Compatible avec le socket ${cpu.socket} de votre ${cpu.name}`,
              priority: 'high' as const,
              type: 'motherboard'
            });
          }
        }
        break;

      case 'ram':
        if (!selectedComponents.ram) {
          const recommendedRam = components.ram.find(c => c.capacity === 16 && c.type === 'DDR4');
          if (recommendedRam) {
            recommendations.push({
              title: 'Configuration standard',
              description: '16GB suffisent pour la plupart des jeux',
              component: recommendedRam,
              reason: 'Capacité idéale pour le gaming moderne sans surcoût inutile',
              priority: 'medium' as const,
              type: 'ram'
            });
          }
        }
        break;

      case 'gpu':
        if (cpu && !selectedComponents.gpu) {
          // Recommander une GPU équilibrée avec le CPU
          let recommendedGpu;
          if (cpu.name.includes('5600') || cpu.name.includes('12400')) {
            recommendedGpu = components.gpu.find(g => g.name.includes('RTX 4060'));
          } else if (cpu.name.includes('5700') || cpu.name.includes('12700')) {
            recommendedGpu = components.gpu.find(g => g.name.includes('RTX 4070'));
          }
          
          if (recommendedGpu) {
            recommendations.push({
              title: 'Équilibre parfait',
              description: 'GPU bien assortie à votre CPU',
              component: recommendedGpu,
              reason: `Cette carte graphique exploite parfaitement les capacités de votre ${cpu.name}`,
              priority: 'high' as const,
              type: 'gpu'
            });
          }
        }
        break;

      case 'psu':
        if (cpu && gpu && !selectedComponents.psu) {
          const totalPower = cpu.power + gpu.power + 150;
          const recommendedWattage = Math.ceil(totalPower * 1.2 / 50) * 50; // Arrondi au 50W supérieur avec 20% de marge
          const recommendedPsu = components.psu.find(p => p.wattage >= recommendedWattage);
          
          if (recommendedPsu) {
            recommendations.push({
              title: 'Puissance adaptée',
              description: 'Alimentation dimensionnée pour votre config',
              component: recommendedPsu,
              reason: `${recommendedPsu.wattage}W suffisent pour vos composants (besoin estimé: ${totalPower}W)`,
              priority: 'high' as const,
              type: 'psu'
            });
          }
        }
        break;

      case 'storage':
        if (!selectedComponents.storage) {
          const recommendedStorage = components.storage.find(s => s.capacity === 1000 && s.type === 'SSD');
          if (recommendedStorage) {
            recommendations.push({
              title: 'Stockage moderne',
              description: '1TB SSD pour des temps de chargement rapides',
              component: recommendedStorage,
              reason: 'Capacité suffisante pour l\'OS et plusieurs jeux avec d\'excellentes performances',
              priority: 'medium' as const,
              type: 'storage'
            });
          }
        }
        break;
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <Card className="gaming-card">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center">
          <Lightbulb className="h-6 w-6 text-gaming-cyan mr-2" />
          Recommandations
        </CardTitle>
        <CardDescription className="text-gray-300">
          Suggestions basées sur votre configuration actuelle
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <RecommendationCard
              key={index}
              title={rec.title}
              description={rec.description}
              component={rec.component}
              reason={rec.reason}
              priority={rec.priority}
              onSelect={() => onSelectComponent(rec.type, rec.component.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationEngine;
