
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ConfiguratorStepsProps {
  currentStep: number;
  steps: Array<{ name: string; key: string }>;
}

const ConfiguratorSteps = ({ currentStep, steps }: ConfiguratorStepsProps) => {
  return (
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
  );
};

export default ConfiguratorSteps;
