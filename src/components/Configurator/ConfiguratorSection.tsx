
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useConfigurator } from '@/hooks/useConfigurator';
import ConfiguratorSteps from './ConfiguratorSteps';
import ComponentSelector from './ComponentSelector';
import ConfigurationSidebar from './ConfigurationSidebar';
import ConfigurationSummary from './ConfigurationSummary';
import RecommendationEngine from './RecommendationEngine';

const ConfiguratorSection = () => {
  const {
    currentStep,
    cpuFilter,
    setCpuFilter,
    selectedComponents,
    steps,
    components,
    calculateTotalPrice,
    checkCompatibility,
    getFilteredComponents,
    selectComponent,
    nextStep,
    prevStep
  } = useConfigurator();

  const currentStepKey = steps[currentStep].key;
  const compatibilityIssues = checkCompatibility();

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
          <ConfiguratorSteps currentStep={currentStep} steps={steps} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {currentStepKey === 'summary' ? (
                <div className="gaming-card p-6">
                  <ConfigurationSummary
                    selectedComponents={selectedComponents}
                    components={components}
                    steps={steps}
                    compatibilityIssues={compatibilityIssues}
                    calculateTotalPrice={calculateTotalPrice}
                  />
                </div>
              ) : (
                <ComponentSelector
                  currentStepKey={currentStepKey}
                  steps={steps}
                  currentStep={currentStep}
                  selectedComponents={selectedComponents}
                  cpuFilter={cpuFilter}
                  setCpuFilter={setCpuFilter}
                  getFilteredComponents={getFilteredComponents}
                  selectComponent={selectComponent}
                />
              )}

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
              <ConfigurationSidebar
                steps={steps}
                selectedComponents={selectedComponents}
                components={components}
                calculateTotalPrice={calculateTotalPrice}
                compatibilityIssues={compatibilityIssues}
              />
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
