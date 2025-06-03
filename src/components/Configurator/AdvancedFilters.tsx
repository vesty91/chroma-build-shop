
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';

interface AdvancedFiltersProps {
  currentStepKey: string;
  filters: {
    budget: [number, number];
    usage: string[];
    performance: string;
    brand: string;
  };
  onFiltersChange: (filters: any) => void;
  onClearFilters: () => void;
}

const AdvancedFilters = ({
  currentStepKey,
  filters,
  onFiltersChange,
  onClearFilters
}: AdvancedFiltersProps) => {
  const usageOptions = ['Gaming', 'Gaming Pro', '3D', 'Streaming', 'Bureautique'];
  const performanceOptions = {
    gpu: ['FHD Gaming', 'FHD High', 'QHD Gaming', 'QHD High', '4K Gaming', '4K Ultra'],
    cpu: ['Entrée de gamme', 'Milieu de gamme', 'Haut de gamme', 'Enthusiast'],
    ram: ['16GB', '32GB', '64GB'],
    storage: ['500GB', '1TB', '2TB+']
  };

  const brandOptions = {
    cpu: ['Intel', 'AMD'],
    gpu: ['NVIDIA', 'AMD'],
    ram: ['Corsair', 'G.Skill', 'Kingston'],
    motherboard: ['ASUS', 'MSI', 'Gigabyte'],
    psu: ['Corsair', 'Seasonic', 'EVGA'],
    case: ['NZXT', 'Fractal Design', 'Corsair', 'Lian Li']
  };

  const maxBudgets = {
    cpu: 1000,
    gpu: 2000,
    motherboard: 500,
    ram: 500,
    storage: 400,
    psu: 400,
    case: 300,
    services: 200
  };

  const maxBudget = maxBudgets[currentStepKey] || 1000;

  const updateFilters = (key: string, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const toggleUsage = (usage: string) => {
    const currentUsages = filters.usage || [];
    const newUsages = currentUsages.includes(usage)
      ? currentUsages.filter(u => u !== usage)
      : [...currentUsages, usage];
    updateFilters('usage', newUsages);
  };

  const hasActiveFilters = 
    filters.budget[0] > 0 || 
    filters.budget[1] < maxBudget ||
    filters.usage.length > 0 ||
    filters.performance !== 'all' ||
    filters.brand !== 'all';

  return (
    <Card className="gaming-card animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-white flex items-center justify-between">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gaming-cyan mr-2" />
            Filtres avancés
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
            >
              <X className="h-4 w-4 mr-1" />
              Effacer
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Budget Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">
            Budget: {filters.budget[0]}€ - {filters.budget[1]}€
          </label>
          <Slider
            value={filters.budget}
            onValueChange={(value) => updateFilters('budget', value)}
            max={maxBudget}
            step={10}
            className="w-full"
          />
        </div>

        {/* Usage Filter */}
        {(currentStepKey === 'cpu' || currentStepKey === 'gpu') && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Usage</label>
            <div className="flex flex-wrap gap-2">
              {usageOptions.map((usage) => (
                <Badge
                  key={usage}
                  variant={filters.usage.includes(usage) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    filters.usage.includes(usage)
                      ? 'bg-gaming-cyan text-gaming-dark hover:bg-gaming-cyan/80'
                      : 'border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark'
                  }`}
                  onClick={() => toggleUsage(usage)}
                >
                  {usage}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Performance Filter */}
        {performanceOptions[currentStepKey] && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Performance</label>
            <Select value={filters.performance} onValueChange={(value) => updateFilters('performance', value)}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray-light text-white">
                <SelectValue placeholder="Toutes performances" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes performances</SelectItem>
                {performanceOptions[currentStepKey].map((perf) => (
                  <SelectItem key={perf} value={perf}>{perf}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Brand Filter */}
        {brandOptions[currentStepKey] && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Marque</label>
            <Select value={filters.brand} onValueChange={(value) => updateFilters('brand', value)}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray-light text-white">
                <SelectValue placeholder="Toutes marques" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes marques</SelectItem>
                {brandOptions[currentStepKey].map((brand) => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdvancedFilters;
