
import React from 'react';
import { useConfigurator } from '@/hooks/useConfigurator';
import ConfiguratorSteps from './ConfiguratorSteps';
import ComponentSelector from './ComponentSelector';
import ConfigurationSidebar from './ConfigurationSidebar';
import ConfigurationSummary from './ConfigurationSummary';
import RecommendationEngine from './RecommendationEngine';
import ConfiguratorNavigation from './ConfiguratorNavigation';
import AdvancedFilters from './AdvancedFilters';

const ConfiguratorSection = () => {
  const {
    currentStep,
    cpuFilter,
    setCpuFilter,
    selectedComponents,
    advancedFilters,
    setAdvancedFilters,
    steps,
    components,
    calculateTotalPrice,
    checkCompatibility,
    getFilteredComponents,
    selectComponent,
    nextStep,
    prevStep,
    skipToSummary,
    resetConfiguration,
    clearFilters,
    hasSelectedComponents
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

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="animate-fade-in">
            <ConfiguratorSteps currentStep={currentStep} steps={steps} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            {currentStepKey !== 'summary' && currentStepKey !== 'services' && (
              <div className="lg:col-span-1 animate-slide-in-right">
                <AdvancedFilters
                  currentStepKey={currentStepKey}
                  filters={advancedFilters}
                  onFiltersChange={setAdvancedFilters}
                  onClearFilters={clearFilters}
                />
              </div>
            )}

            {/* Main Content */}
            <div className={`${currentStepKey !== 'summary' && currentStepKey !== 'services' ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-6 animate-fade-in`}>
              {currentStepKey === 'summary' ? (
                <div className="gaming-card p-6 animate-scale-in">
                  <ConfigurationSummary
                    selectedComponents={selectedComponents}
                    components={components}
                    steps={steps}
                    compatibilityIssues={compatibilityIssues}
                    calculateTotalPrice={calculateTotalPrice}
                  />
                </div>
              ) : (
                <div className="animate-scale-in">
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
                </div>
              )}

              {/* Recommandations Engine */}
              {currentStepKey !== 'summary' && (
                <div className="animate-fade-in">
                  <RecommendationEngine
                    selectedComponents={selectedComponents}
                    components={components}
                    currentStep={currentStepKey}
                    onSelectComponent={selectComponent}
                  />
                </div>
              )}
            </div>

            {/* Configuration Sidebar */}
            <div className="lg:col-span-1 animate-slide-in-right">
              <div className="sticky top-4">
                <ConfigurationSidebar
                  steps={steps}
                  selectedComponents={selectedComponents}
                  components={components}
                  calculateTotalPrice={calculateTotalPrice}
                  compatibilityIssues={compatibilityIssues}
                />
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="animate-fade-in">
            <ConfiguratorNavigation
              currentStep={currentStep}
              totalSteps={steps.length}
              onPrevStep={prevStep}
              onNextStep={nextStep}
              onSkipToSummary={skipToSummary}
              onReset={resetConfiguration}
              canSkip={hasSelectedComponents}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorSection;
