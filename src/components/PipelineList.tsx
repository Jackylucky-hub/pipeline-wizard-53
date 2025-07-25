import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Edit, Trash2, Plus, Zap } from 'lucide-react';

interface Pipeline {
  id: string;
  name: string;
  steps: Array<{
    id: string;
    type: 'summarize' | 'translate' | 'rewrite' | 'extract';
    parameters: Record<string, any>;
  }>;
  createdAt: Date;
}

interface PipelineListProps {
  pipelines: Pipeline[];
  onEdit: (id: string) => void;
  onRun: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
}

const stepIcons = {
  summarize: '📝',
  translate: '🌐',
  rewrite: '✍️',
  extract: '🔍'
};

export function PipelineList({ pipelines, onEdit, onRun, onDelete, onCreate }: PipelineListProps) {
  if (pipelines.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="h-12 w-12 text-ai-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No pipelines yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Create your first AI pipeline to start automating text processing workflows.
        </p>
        <Button variant="ai" size="lg" onClick={onCreate}>
          <Plus className="mr-2 h-5 w-5" />
          Create Your First Pipeline
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Pipelines</h2>
          <p className="text-muted-foreground">Manage and run your AI workflows</p>
        </div>
        <Button variant="ai" onClick={onCreate}>
          <Plus className="mr-2 h-4 w-4" />
          New Pipeline
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pipelines.map((pipeline) => (
          <Card key={pipeline.id} className="p-6 hover:shadow-ai transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-ai-primary transition-colors">
                  {pipeline.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {pipeline.steps.length} steps
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(pipeline.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Pipeline Steps Preview */}
            <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
              {pipeline.steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-lg flex items-center justify-center text-sm">
                    {stepIcons[step.type]}
                  </div>
                  {index < pipeline.steps.length - 1 && (
                    <div className="w-4 h-px bg-border flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button 
                variant="ai" 
                size="sm" 
                className="flex-1"
                onClick={() => onRun(pipeline.id)}
              >
                <Play className="mr-2 h-4 w-4" />
                Run
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onEdit(pipeline.id)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onDelete(pipeline.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}