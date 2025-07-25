import React, { useState } from 'react';
import { PipelineList } from '@/components/PipelineList';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LogOut, User, Settings, Zap, TrendingUp, Clock, BarChart3 } from 'lucide-react';

// Mock data - replace with real data from Supabase
const mockPipelines = [
  {
    id: '1',
    name: 'Content Localization',
    steps: [
      { id: '1', type: 'summarize' as const, parameters: { length: 'medium' } },
      { id: '2', type: 'translate' as const, parameters: { language: 'es' } },
      { id: '3', type: 'rewrite' as const, parameters: { tone: 'professional' } }
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Research Assistant',
    steps: [
      { id: '1', type: 'summarize' as const, parameters: { length: 'short' } },
      { id: '2', type: 'extract' as const, parameters: {} }
    ],
    createdAt: new Date('2024-01-10')
  }
];

interface DashboardProps {
  onLogout: () => void;
  onCreatePipeline: () => void;
  onEditPipeline: (id: string) => void;
  onRunPipeline: (id: string) => void;
}

export function Dashboard({ 
  onLogout, 
  onCreatePipeline, 
  onEditPipeline, 
  onRunPipeline 
}: DashboardProps) {
  const [pipelines, setPipelines] = useState(mockPipelines);

  const handleDeletePipeline = (id: string) => {
    setPipelines(prev => prev.filter(p => p.id !== id));
  };

  const stats = [
    {
      label: 'Total Pipelines',
      value: pipelines.length,
      icon: Zap,
      change: '+12%',
      positive: true
    },
    {
      label: 'Runs This Month',
      value: '2.4K',
      icon: TrendingUp,
      change: '+24%',
      positive: true
    },
    {
      label: 'Processing Time Saved',
      value: '48h',
      icon: Clock,
      change: '+18%',
      positive: true
    },
    {
      label: 'Success Rate',
      value: '99.2%',
      icon: BarChart3,
      change: '+0.8%',
      positive: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
              AI Agent Builder
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">
            Manage your AI pipelines and track your automation progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge 
                      variant={stat.positive ? "secondary" : "destructive"} 
                      className="text-xs"
                    >
                      {stat.change}
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-xl">
                  <stat.icon className="h-6 w-6 text-ai-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-r from-ai-primary/10 to-ai-secondary/10 border-ai-primary/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready to create your next pipeline?</h3>
                <p className="text-muted-foreground">
                  Build powerful AI workflows in minutes with our visual editor
                </p>
              </div>
              <Button variant="ai" size="lg" onClick={onCreatePipeline}>
                <Zap className="mr-2 h-5 w-5" />
                Create New Pipeline
              </Button>
            </div>
          </Card>
        </div>

        {/* Pipelines List */}
        <PipelineList
          pipelines={pipelines}
          onEdit={onEditPipeline}
          onRun={onRunPipeline}
          onDelete={handleDeletePipeline}
          onCreate={onCreatePipeline}
        />
      </div>
    </div>
  );
}