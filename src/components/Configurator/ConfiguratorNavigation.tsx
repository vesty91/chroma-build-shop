
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, SkipForward, RotateCcw } from 'lucide-react';

interface ConfiguratorNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSkipToSummary: () => void;
  onReset: () => void;
  canSkip: boolean;
}

const ConfiguratorNavigation = ({
  currentStep,
  totalSteps,
  onPrevStep,
  onNextStep,
  onSkipToSummary,
  onReset,
  canSkip
}: ConfiguratorNavigationProps) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 p-4 bg-gaming-gray/30 rounded-lg backdrop-blur-sm">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onPrevStep}
          disabled={isFirstStep}
          className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark transition-all duration-300"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Précédent
        </Button>
        
        <Button
          variant="outline"
          onClick={onReset}
          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <div className="text-center">
        <div className="text-sm text-gray-400 mb-1">
          Étape {currentStep + 1} sur {totalSteps}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i <= currentStep 
                  ? 'bg-gaming-cyan shadow-sm shadow-gaming-cyan' 
                  : 'bg-gaming-gray'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {canSkip && !isLastStep && (
          <Button
            variant="outline"
            onClick={onSkipToSummary}
            className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300"
          >
            <SkipForward className="h-4 w-4 mr-2" />
            Aller au résumé
          </Button>
        )}
        
        <Button
          onClick={onNextStep}
          disabled={isLastStep}
          className="gaming-button transition-all duration-300 hover:scale-105"
        >
          Suivant
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ConfiguratorNavigation;
