import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calculator, TrendingUp, DollarSign, Clock, Users } from "lucide-react";

const RoiCalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: 50000,
    employeeCount: 10,
    avgHourlyWage: 25,
    hoursSpentOnManualTasks: 160,
    zapierMonthlyFee: 599,
  });

  const [results, setResults] = useState({
    currentMonthlyCost: 0,
    n8nMonthlyCost: 0,
    monthlySavings: 0,
    annualSavings: 0,
    timeReclaimed: 0,
    roi: 0,
  });

  const calculateROI = () => {
    const laborCost = inputs.hoursSpentOnManualTasks * inputs.avgHourlyWage;
    const currentMonthlyCost = laborCost + inputs.zapierMonthlyFee;
    
    // n8n estimated costs (self-hosted or cloud)
    const n8nMonthlyCost = 150; // Average for small-medium business
    const n8nLaborCost = inputs.hoursSpentOnManualTasks * 0.3 * inputs.avgHourlyWage; // 70% time saved
    
    const totalN8nCost = n8nMonthlyCost + n8nLaborCost;
    const monthlySavings = currentMonthlyCost - totalN8nCost;
    const annualSavings = monthlySavings * 12;
    const timeReclaimed = inputs.hoursSpentOnManualTasks * 0.7;
    const roi = ((annualSavings / (n8nMonthlyCost * 12)) * 100);

    setResults({
      currentMonthlyCost,
      n8nMonthlyCost: totalN8nCost,
      monthlySavings,
      annualSavings,
      timeReclaimed,
      roi,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <>
      <SEO 
        title="Automation ROI Calculator - Calculate Your n8n Savings | D2 Group"
        description="Calculate potential savings by switching to n8n automation. See your ROI, time saved, and cost reduction compared to Zapier, Make.com, and manual processes."
        keywords="automation roi calculator, n8n savings calculator, zapier cost comparison, automation cost savings"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Calculator className="w-4 h-4" />
                <span className="text-sm font-semibold">Free ROI Calculator</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Calculate Your Automation ROI
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how much you can save by switching to n8n automation. 
                Compare costs with Zapier, reduce manual work, and increase efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Input Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Your Current Situation
                  </CardTitle>
                  <CardDescription>
                    Enter your current automation and labor costs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyRevenue">Monthly Revenue ($)</Label>
                    <Input
                      id="monthlyRevenue"
                      type="number"
                      value={inputs.monthlyRevenue}
                      onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeCount">Number of Employees</Label>
                    <Input
                      id="employeeCount"
                      type="number"
                      value={inputs.employeeCount}
                      onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="avgHourlyWage">Average Hourly Wage ($)</Label>
                    <Input
                      id="avgHourlyWage"
                      type="number"
                      value={inputs.avgHourlyWage}
                      onChange={(e) => handleInputChange('avgHourlyWage', e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hoursSpentOnManualTasks">
                      Hours/Month on Manual Tasks
                    </Label>
                    <Input
                      id="hoursSpentOnManualTasks"
                      type="number"
                      value={inputs.hoursSpentOnManualTasks}
                      onChange={(e) => handleInputChange('hoursSpentOnManualTasks', e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground">
                      Data entry, reporting, copy-paste tasks, etc.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zapierMonthlyFee">
                      Current Automation Tool Cost ($/month)
                    </Label>
                    <Input
                      id="zapierMonthlyFee"
                      type="number"
                      value={inputs.zapierMonthlyFee}
                      onChange={(e) => handleInputChange('zapierMonthlyFee', e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground">
                      Zapier, Make.com, or other automation platforms
                    </p>
                  </div>

                  <Button 
                    onClick={calculateROI} 
                    className="w-full" 
                    size="lg"
                  >
                    Calculate ROI
                  </Button>
                </CardContent>
              </Card>

              {/* Results Card */}
              <div className="space-y-6">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Your Potential Savings
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      With n8n automation from D2 Group
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-6 border-b border-primary-foreground/20">
                      <div className="text-5xl font-bold mb-2">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <div className="text-lg opacity-90">Annual Savings</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                        <div className="text-2xl font-bold mb-1">
                          ${results.monthlySavings.toLocaleString()}
                        </div>
                        <div className="text-sm opacity-90">Per Month</div>
                      </div>
                      <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                        <div className="text-2xl font-bold mb-1">
                          {Math.round(results.roi)}%
                        </div>
                        <div className="text-sm opacity-90">ROI</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cost Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span>Current Monthly Cost</span>
                      </div>
                      <span className="font-semibold">
                        ${results.currentMonthlyCost.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>With n8n Automation</span>
                      </div>
                      <span className="font-semibold text-primary">
                        ${results.n8nMonthlyCost.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Time Reclaimed</span>
                      </div>
                      <span className="font-semibold text-primary">
                        {Math.round(results.timeReclaimed)} hrs/month
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>FTE Equivalent</span>
                      </div>
                      <span className="font-semibold text-primary">
                        {(results.timeReclaimed / 160).toFixed(1)} FTE
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss your automation strategy and get a detailed ROI analysis.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/company/contact'}>
              Book Free Consultation
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RoiCalculator;