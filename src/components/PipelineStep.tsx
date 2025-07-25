import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GripVertical, X, Settings, Zap } from 'lucide-react';

interface PipelineStepProps {
  id: string;
  type: 'summarize' | 'translate' | 'rewrite' | 'extract';
  parameters: Record<string, any>;
  onUpdate: (id: string, parameters: Record<string, any>) => void;
  onRemove: (id: string) => void;
  isDragging?: boolean;
}

const stepIcons = {
  summarize: '📝',
  translate: '🌐',
  rewrite: '✍️',
  extract: '🔍'
};

const stepTitles = {
  summarize: 'Summarize',
  translate: 'Translate',
  rewrite: 'Rewrite',
  extract: 'Extract'
};

export function PipelineStep({ 
  id, 
  type, 
  parameters, 
  onUpdate, 
  onRemove,
  isDragging = false 
}: PipelineStepProps) {
  const handleParameterChange = (key: string, value: string) => {
    onUpdate(id, { ...parameters, [key]: value });
  };

  return (
    <div className="relative group">
      <Card className={`pipeline-step ${isDragging ? 'ai-glow' : ''}`}>
        {/* Drag Handle */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
        </div>

        {/* Remove Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive/10 hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onRemove(id)}
        >
          <X className="h-3 w-3" />
        </Button>

        <div className="flex items-start gap-4">
          {/* Step Icon & Title */}
          <div className="flex items-center gap-3 flex-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-2xl">
              {stepIcons[type]}
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">{stepTitles[type]}</h3>
              <p className="text-sm text-muted-foreground">
                {type === 'summarize' && 'Condense text to key points'}
                {type === 'translate' && 'Convert to target language'}
                {type === 'rewrite' && 'Adjust tone and style'}
                {type === 'extract' && 'Extract keywords and entities'}
              </p>
            </div>
          </div>

          {/* Parameters */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              <Settings className="h-3 w-3 mr-1" />
              {Object.keys(parameters).length} params
            </Badge>
          </div>
        </div>

        {/* Parameter Configuration */}
        <div className="mt-4 space-y-3">
          {type === 'translate' && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Target Language</label>
              <Select 
                value={parameters.language || 'en'} 
                onValueChange={(value) => handleParameterChange('language', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="nl">Dutch</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {type === 'rewrite' && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Tone</label>
              <Select 
                value={parameters.tone || 'professional'} 
                onValueChange={(value) => handleParameterChange('tone', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {type === 'summarize' && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Length</label>
              <Select 
                value={parameters.length || 'medium'} 
                onValueChange={(value) => handleParameterChange('length', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short (1-2 sentences)</SelectItem>
                  <SelectItem value="medium">Medium (1 paragraph)</SelectItem>
                  <SelectItem value="long">Long (2-3 paragraphs)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* AI Indicator */}
        <div className="absolute bottom-2 right-2 opacity-50">
          <Zap className="h-4 w-4 text-ai-primary" />
        </div>
      </Card>

      {/* Connection Line */}
      <div className="pipeline-connector" />
    </div>
  );
}