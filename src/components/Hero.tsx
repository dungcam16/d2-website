import React from 'react';
import { ArrowRight, Play, Zap, Bot, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-automation.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Automation Technology Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Bot className="h-12 w-12 text-primary opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Workflow className="h-16 w-16 text-primary opacity-30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Zap className="h-10 w-10 text-primary opacity-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            <span className="block text-foreground">Automation Marketing</span>
            <span className="block gradient-primary bg-clip-text text-transparent animate-glow">
              Agency That Powers
            </span>
            <span className="block text-foreground">Vietnamese Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary business process automation with <span className="text-primary font-semibold">N8N workflows</span>, 
            multi-platform chatbots, and <span className="text-primary font-semibold">Zalo OA solutions</span> 
            designed specifically for the Vietnamese market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="shadow-glow group text-lg px-8 py-4">
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="tech-border group text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See Automation in Action
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-effect rounded-lg p-6 tech-border animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Successful Automations</div>
            </div>
            
            <div className="glass-effect rounded-lg p-6 tech-border animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-muted-foreground">ROI Improvement</div>
            </div>
            
            <div className="glass-effect rounded-lg p-6 tech-border animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Engagement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;