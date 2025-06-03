
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, Star, Zap } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  description: string;
  component: any;
  reason: string;
  priority: 'high' | 'medium' | 'low';
  onSelect: () => void;
}

const RecommendationCard = ({ title, description, component, reason, priority, onSelect }: RecommendationCardProps) => {
  const getPriorityIcon = () => {
    switch (priority) {
      case 'high': return <Star className="h-4 w-4 text-yellow-500" />;
      case 'medium': return <Zap className="h-4 w-4 text-blue-500" />;
      case 'low': return <Lightbulb className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityColor = () => {
    switch (priority) {
      case 'high': return 'border-yellow-500 bg-yellow-500/10';
      case 'medium': return 'border-blue-500 bg-blue-500/10';
      case 'low': return 'border-green-500 bg-green-500/10';
    }
  };

  return (
    <Card className={`gaming-card border ${getPriorityColor()}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-white flex items-center gap-2">
            {getPriorityIcon()}
            {title}
          </CardTitle>
          <Badge variant="outline" className="text-gaming-cyan border-gaming-cyan">
            {component.price}€
          </Badge>
        </div>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-sm text-white font-medium">{component.name}</div>
          <div className="text-xs text-gray-400 bg-gaming-gray p-2 rounded">
            <strong>Pourquoi :</strong> {reason}
          </div>
          <Button 
            onClick={onSelect}
            className="gaming-button w-full"
            size="sm"
          >
            Sélectionner
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
