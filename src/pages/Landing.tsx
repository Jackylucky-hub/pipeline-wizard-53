import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Play, Code, Brain, Users, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-ai-pipeline.jpg';

interface LandingProps {
  onGetStarted: () => void;
}

export function Landing({ onGetStarted }: LandingProps) {
  const features = [
    {
      icon: '🔄',
      title: 'Visual Pipeline Builder',
      description: 'Drag and drop AI steps to create powerful workflows without coding'
    },
    {
      icon: '⚡',
      title: 'Instant Execution',
      description: 'Run your pipelines with real-time results and detailed feedback'
    },
    {
      icon: '🌐',
      title: 'Multi-Language Support',
      description: 'Translate, summarize, and rewrite content in multiple languages'
    },
    {
      icon: '🎯',
      title: 'Smart Optimization',
      description: 'AI-powered suggestions to improve your pipeline performance'
    }
  ];

  const useCases = [
    'Content localization for global teams',
    'Automated research summarization',
    'Social media content adaptation',
    'Technical documentation processing',
    'Customer support automation',
    'Educational content creation'
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
              AI Agent Builder
            </span>
          </div>
          <Button variant="ai" onClick={onGetStarted}>
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 animated-bg" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Brain className="mr-2 h-3 w-3" />
                  Powered by Advanced AI
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Build AI Workflows
                  <span className="bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
                    {' '}Without Code
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Create powerful AI pipelines that summarize, translate, and rewrite content in minutes. 
                  No programming required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" onClick={onGetStarted}>
                  <Play className="mr-2 h-5 w-5" />
                  Start Building Free
                </Button>
                <Button variant="outline" size="lg">
                  <Code className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-ai-primary" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-ai-primary" />
                  Free forever plan
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="AI Pipeline Visualization" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build AI workflows
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our intuitive platform makes it easy to create, test, and deploy AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-ai transition-all duration-300 group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2 group-hover:text-ai-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Perfect for teams of all sizes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From startups to enterprises, AI Agent Builder helps teams automate 
                repetitive text processing tasks and focus on what matters most.
              </p>
              
              <div className="grid gap-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ai-primary flex-shrink-0" />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="ai" size="lg" onClick={onGetStarted}>
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/10 to-ai-secondary/10 rounded-3xl blur-2xl" />
              <Card className="relative p-8 shadow-ai">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-ai-primary" />
                    <div>
                      <h3 className="font-semibold">Join 10,000+ users</h3>
                      <p className="text-sm text-muted-foreground">Building AI workflows daily</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Content processed</span>
                      <Badge variant="secondary">2.5M+ documents</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Languages supported</span>
                      <Badge variant="secondary">15+ languages</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Average time saved</span>
                      <Badge variant="secondary">8 hours/week</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of teams using AI Agent Builder to automate their content processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={onGetStarted}>
                <Zap className="mr-2 h-5 w-5" />
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              14-day free trial • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">AI Agent Builder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AI Agent Builder. Built with love for the AI community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}