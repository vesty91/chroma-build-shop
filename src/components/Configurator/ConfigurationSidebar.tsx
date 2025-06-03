
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

interface ConfigurationSidebarProps {
  steps: Array<{ name: string; key: string }>;
  selectedComponents: any;
  components: any;
  calculateTotalPrice: () => number;
  compatibilityIssues: string[];
}

const ConfigurationSidebar = ({
  steps,
  selectedComponents,
  components,
  calculateTotalPrice,
  compatibilityIssues
}: ConfigurationSidebarProps) => {
  return (
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
  );
};

export default ConfigurationSidebar;
