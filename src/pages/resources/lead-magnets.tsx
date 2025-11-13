import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LeadMagnetForm } from '@/components/LeadMagnetForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, FileSpreadsheet, FileText, CheckCircle, Workflow } from 'lucide-react';

const leadMagnets = [
  {
    id: 'roi-calculator',
    title: 'ROI Calculator Workbook',
    description: 'Calculate your automation ROI with our comprehensive Excel template. Includes pre-built formulas for time savings, cost reduction, and productivity gains.',
    type: 'excel' as const,
    icon: FileSpreadsheet,
    benefits: [
      'Pre-configured ROI formulas',
      'Visual charts and graphs',
      'Multi-scenario comparison',
      'Customizable for any business',
    ],
  },
  {
    id: 'n8n-migration-checklist',
    title: 'n8n Migration Checklist',
    description: 'Step-by-step guide to migrate from Zapier to n8n. Includes workflow mapping templates, cost comparison tools, and migration timeline.',
    type: 'pdf' as const,
    icon: FileText,
    benefits: [
      '50+ checkpoint items',
      'Risk assessment framework',
      'Timeline planning templates',
      'Budget estimation worksheets',
    ],
  },
  {
    id: 'automation-ideas',
    title: '100 Automation Ideas',
    description: 'Comprehensive list of automation workflows across marketing, sales, operations, and support. Real examples with implementation difficulty ratings.',
    type: 'pdf' as const,
    icon: Workflow,
    benefits: [
      '100+ ready-to-implement ideas',
      'Categorized by department',
      'Difficulty and ROI ratings',
      'Tool recommendations',
    ],
  },
  {
    id: 'zapier-cost-analysis',
    title: 'Zapier Cost Analysis Tool',
    description: 'Interactive Excel tool to analyze your current Zapier costs and project savings with n8n. Includes task forecasting and pricing scenarios.',
    type: 'excel' as const,
    icon: FileSpreadsheet,
    benefits: [
      'Automatic cost calculations',
      '12-month projections',
      'Alternative platform comparisons',
      'Savings visualization',
    ],
  },
];

export default function LeadMagnets() {
  return (
    <>
      <SEO
        title="Free Automation Resources | Templates & Guides - D2 Group"
        description="Download free automation resources including ROI calculators, migration checklists, workflow templates, and comprehensive guides for business automation."
        keywords="automation templates, free resources, ROI calculator, n8n migration guide, workflow templates, automation checklist"
        canonicalUrl="https://d2group.co/resources/lead-magnets"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Free Automation Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Download our expert-crafted templates, calculators, and guides to accelerate your automation journey. No credit card required.
              </p>
            </div>
          </section>

          {/* Lead Magnets Grid */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8">
                {leadMagnets.map((magnet) => (
                  <Card key={magnet.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <magnet.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{magnet.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {magnet.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {magnet.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Download Free
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Download {magnet.title}</DialogTitle>
                            <DialogDescription>
                              Enter your details to get instant access to this free resource.
                            </DialogDescription>
                          </DialogHeader>
                          <LeadMagnetForm
                            magnetId={magnet.id}
                            magnetTitle={magnet.title}
                            magnetType={magnet.type}
                          />
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need Custom Solutions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team can help you implement these strategies and build custom automation workflows tailored to your business needs.
              </p>
              <Button size="lg" variant="default" onClick={() => window.location.href = '/company/contact'}>
                Schedule Free Consultation
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
