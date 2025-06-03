
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface ComponentSelectorProps {
  currentStepKey: string;
  steps: Array<{ name: string; key: string }>;
  currentStep: number;
  selectedComponents: any;
  cpuFilter: string;
  setCpuFilter: (filter: string) => void;
  getFilteredComponents: (type: string) => any[];
  selectComponent: (type: string, componentId: number) => void;
}

const ComponentSelector = ({
  currentStepKey,
  steps,
  currentStep,
  selectedComponents,
  cpuFilter,
  setCpuFilter,
  getFilteredComponents,
  selectComponent
}: ComponentSelectorProps) => {
  const getUsageBadgeColor = (usage: string) => {
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
                          {component.usage.map((use: string, index: number) => (
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
      </CardContent>
    </Card>
  );
};

export default ComponentSelector;
