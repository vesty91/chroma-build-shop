
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ConfigurationSummaryProps {
  selectedComponents: any;
  components: any;
  steps: Array<{ name: string; key: string }>;
  compatibilityIssues: string[];
  calculateTotalPrice: () => number;
}

const ConfigurationSummary = ({
  selectedComponents,
  components,
  steps,
  compatibilityIssues,
  calculateTotalPrice
}: ConfigurationSummaryProps) => {
  return (
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
            const servicesArray = Array.isArray(value) ? value : [];
            return servicesArray.length > 0 ? (
              <div key={key} className="flex justify-between items-center p-3 bg-gaming-gray rounded-lg">
                <div>
                  <span className="text-white font-medium">Services sélectionnés</span>
                  <div className="text-sm text-gray-400">
                    {servicesArray.map(serviceId => {
                      const service = components.services.find(s => s.id === serviceId);
                      return service ? service.name : '';
                    }).join(', ')}
                  </div>
                </div>
                <span className="text-gaming-cyan font-bold">
                  {servicesArray.reduce((total, serviceId) => {
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
  );
};

export default ConfigurationSummary;
