import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp } from "lucide-react";

const RoiCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [automationCost, setAutomationCost] = useState(5000);

  const calculateROI = () => {
    const yearlySavings = hoursPerWeek * hourlyRate * 52;
    const roi = ((yearlySavings - automationCost) / automationCost) * 100;
    const breakEvenWeeks = Math.ceil(automationCost / (hoursPerWeek * hourlyRate));
    
    return {
      yearlySavings,
      roi,
      breakEvenWeeks
    };
  };

  const results = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ROI Calculator | D2 Group"
        description="Calculate the return on investment for automation workflows"
        keywords="roi calculator, automation roi, workflow cost savings"
        canonicalUrl="/resources/roi-calculator"
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-foreground">ROI </span>
              <span className="text-primary">Calculator</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate your potential savings with automation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Input Your Data</CardTitle>
                <CardDescription>Enter your current workflow details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="hours">Hours spent per week on manual tasks</Label>
                  <Input
                    id="hours"
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    min="0"
                  />
                </div>

                <div>
                  <Label htmlFor="rate">Average hourly rate ($)</Label>
                  <Input
                    id="rate"
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    min="0"
                  />
                </div>

                <div>
                  <Label htmlFor="cost">Estimated automation cost ($)</Label>
                  <Input
                    id="cost"
                    type="number"
                    value={automationCost}
                    onChange={(e) => setAutomationCost(Number(e.target.value))}
                    min="0"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your Results
                </CardTitle>
                <CardDescription className="text-white/80">
                  Potential savings and ROI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-sm text-white/80 mb-1">Yearly Savings</div>
                  <div className="text-4xl font-bold">
                    ${results.yearlySavings.toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-white/80 mb-1">Return on Investment</div>
                  <div className="text-4xl font-bold">
                    {results.roi.toFixed(0)}%
                  </div>
                </div>

                <div>
                  <div className="text-sm text-white/80 mb-1">Break-even Period</div>
                  <div className="text-4xl font-bold">
                    {results.breakEvenWeeks} weeks
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-sm text-center">
                * This calculator provides estimates based on the inputs provided. Actual results may vary depending on
                specific use cases and implementation details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoiCalculator;
