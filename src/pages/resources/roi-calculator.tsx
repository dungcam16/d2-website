import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Download,
  Share2,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const RoiCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [automationCost, setAutomationCost] = useState(5000);
  const [monthlyMaintenanceCost, setMonthlyMaintenanceCost] = useState(200);

  const calculateROI = () => {
    const weeklySavings = hoursPerWeek * hourlyRate;
    const monthlySavings = weeklySavings * 4.33;
    const yearlySavings = weeklySavings * 52;
    const yearlyMaintenanceCost = monthlyMaintenanceCost * 12;
    const netYearlySavings = yearlySavings - yearlyMaintenanceCost;
    const totalFirstYearSavings = netYearlySavings - automationCost;
    const roi = ((totalFirstYearSavings) / automationCost) * 100;
    const breakEvenWeeks = Math.ceil(automationCost / weeklySavings);
    const threeYearSavings = (netYearlySavings * 3) - automationCost;
    const fiveYearSavings = (netYearlySavings * 5) - automationCost;
    
    return {
      weeklySavings,
      monthlySavings,
      yearlySavings,
      netYearlySavings,
      totalFirstYearSavings,
      roi,
      breakEvenWeeks,
      threeYearSavings,
      fiveYearSavings
    };
  };

  const results = calculateROI();

  const examples = [
    {
      title: "Small Business",
      hours: 10,
      rate: 40,
      cost: 3000,
      maintenance: 150
    },
    {
      title: "Growing Company",
      hours: 20,
      rate: 50,
      cost: 5000,
      maintenance: 200
    },
    {
      title: "Enterprise",
      hours: 40,
      rate: 75,
      cost: 15000,
      maintenance: 500
    }
  ];

  const loadExample = (example) => {
    setHoursPerWeek(example.hours);
    setHourlyRate(example.rate);
    setAutomationCost(example.cost);
    setMonthlyMaintenanceCost(example.maintenance);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Automation ROI Calculator - Calculate Your Cost Savings | D2 Group"
        description="Calculate your return on investment for workflow automation. See potential savings, break-even timeline, and ROI with our interactive calculator."
        keywords="roi calculator, automation roi, workflow cost savings, automation savings calculator, business automation roi"
        canonicalUrl="/resources/roi-calculator"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <Calculator className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Automation ROI </span>
            <span className="text-primary">Calculator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Calculate your potential savings and return on investment with workflow automation. 
            See real numbers in seconds.
          </p>
          <Badge variant="secondary" className="text-sm">
            ✅ Used by 500+ businesses • Average ROI: 400%+ in Year 1
          </Badge>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Quick Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Quick Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {examples.map((example, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-lg transition-all hover:border-primary"
                  onClick={() => loadExample(example)}
                >
                  <CardContent className="pt-6 text-center">
                    <h4 className="font-bold mb-2">{example.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {example.hours} hrs/week • ${example.rate}/hr
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Load Example
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Input Section */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>📊 Your Current Situation</CardTitle>
                <CardDescription>Enter your workflow details below</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="hours" className="flex items-center justify-between">
                    <span>Hours spent per week on manual tasks</span>
                    <Badge variant="secondary">{hoursPerWeek} hrs</Badge>
                  </Label>
                  <Input
                    id="hours"
                    type="range"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    min="1"
                    max="80"
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Typical: 10-40 hours/week
                  </p>
                </div>

                <div>
                  <Label htmlFor="rate" className="flex items-center justify-between">
                    <span>Average hourly rate ($)</span>
                    <Badge variant="secondary">${hourlyRate}/hr</Badge>
                  </Label>
                  <Input
                    id="rate"
                    type="range"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    min="20"
                    max="200"
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Typical: $40-$80/hour
                  </p>
                </div>

                <div>
                  <Label htmlFor="cost" className="flex items-center justify-between">
                    <span>Initial automation investment ($)</span>
                    <Badge variant="secondary">${automationCost.toLocaleString()}</Badge>
                  </Label>
                  <Input
                    id="cost"
                    type="range"
                    value={automationCost}
                    onChange={(e) => setAutomationCost(Number(e.target.value))}
                    min="1000"
                    max="50000"
                    step="1000"
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Typical: $3,000-$15,000
                  </p>
                </div>

                <div>
                  <Label htmlFor="maintenance" className="flex items-center justify-between">
                    <span>Monthly maintenance cost ($)</span>
                    <Badge variant="secondary">${monthlyMaintenanceCost}/mo</Badge>
                  </Label>
                  <Input
                    id="maintenance"
                    type="range"
                    value={monthlyMaintenanceCost}
                    onChange={(e) => setMonthlyMaintenanceCost(Number(e.target.value))}
                    min="0"
                    max="2000"
                    step="50"
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Typical: $100-$500/month
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="lg:col-span-3 bg-gradient-to-br from-primary via-primary to-secondary text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Your Automation ROI
                </CardTitle>
                <CardDescription className="text-white/80">
                  Projected savings and return on investment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <DollarSign className="w-4 h-4" />
                      Net Year 1 Savings
                    </div>
                    <div className="text-3xl font-bold">
                      ${results.totalFirstYearSavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <BarChart3 className="w-4 h-4" />
                      ROI Percentage
                    </div>
                    <div className="text-3xl font-bold">
                      {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <Clock className="w-4 h-4" />
                      Break-even Time
                    </div>
                    <div className="text-3xl font-bold">
                      {results.breakEvenWeeks} weeks
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <Zap className="w-4 h-4" />
                      Monthly Savings
                    </div>
                    <div className="text-3xl font-bold">
                      ${results.monthlySavings.toFixed(0)}
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg space-y-3">
                  <h4 className="font-semibold text-lg mb-3">💰 Savings Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/80">Weekly time savings:</span>
                      <span className="font-semibold">{hoursPerWeek} hours × ${hourlyRate}/hr = ${results.weeklySavings.toLocaleString()}/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Gross annual savings:</span>
                      <span className="font-semibold">${results.yearlySavings.toLocaleString()}/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Annual maintenance:</span>
                      <span className="font-semibold">-${(monthlyMaintenanceCost * 12).toLocaleString()}/year</span>
                    </div>
                    <div className="flex justify-between border-t border-white/20 pt-2">
                      <span className="text-white/80">Net annual savings:</span>
                      <span className="font-semibold">${results.netYearlySavings.toLocaleString()}/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Initial investment:</span>
                      <span className="font-semibold">-${automationCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/20 pt-2 text-lg">
                      <span className="font-semibold">Year 1 Total:</span>
                      <span className="font-bold">${results.totalFirstYearSavings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Long-term Projections */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">📈 Long-term Projections</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/80">3-Year Total Savings:</span>
                      <span className="font-semibold">${results.threeYearSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">5-Year Total Savings:</span>
                      <span className="font-semibold">${results.fiveYearSavings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full shadow-glow"
                    asChild
                  >
                    <Link to="/company/contact">
                      Start Saving Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/50"
                      onClick={() => window.print()}
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Save PDF
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/50"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: 'My Automation ROI',
                            text: `I can save $${results.totalFirstYearSavings.toLocaleString()} in year 1 with automation!`,
                            url: window.location.href
                          });
                        }
                      }}
                    >
                      <Share2 className="mr-2 w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided. 
                    Actual results may vary depending on specific use cases, implementation complexity, and organizational factors. 
                    The calculations assume automation eliminates manual time completely, though actual time savings may be 70-95%. 
                    For a personalized ROI analysis tailored to your specific workflows, <Link to="/company/contact" className="text-primary hover:underline">contact us for a free consultation</Link>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What's <span className="text-primary">Included</span> in These Savings?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Time Savings",
                items: ["Eliminate manual data entry", "Reduce approval delays", "Faster task completion"]
              },
              {
                icon: DollarSign,
                title: "Cost Reduction",
                items: ["Lower labor costs", "Fewer errors & rework", "Reduced tool subscriptions"]
              },
              {
                icon: TrendingUp,
                title: "Revenue Impact",
                items: ["Faster customer onboarding", "Improved response times", "Scale without hiring"]
              },
              {
                icon: CheckCircle,
                title: "Quality Improvements",
                items: ["99%+ accuracy rate", "Consistent processes", "Better compliance"]
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Real <span className="text-primary">ROI Examples</span> from Our Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStart SaaS",
                industry: "B2B SaaS",
                investment: "$5,000",
                timeSaved: "25 hrs/week",
                yearOneSavings: "$58,000",
                roi: "1,060%",
                breakEven: "4 weeks"
              },
              {
                company: "E-commerce Brand",
                industry: "E-commerce",
                investment: "$8,000",
                timeSaved: "35 hrs/week",
                yearOneSavings: "$83,200",
                roi: "940%",
                breakEven: "5 weeks"
              },
              {
                company: "Marketing Agency",
                industry: "Digital Agency",
                investment: "$12,000",
                timeSaved: "50 hrs/week",
                yearOneSavings: "$118,000",
                roi: "883%",
                breakEven: "6 weeks"
              }
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-2">{example.company}</h3>
                <p className="text-sm text-muted-foreground mb-4">{example.industry}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-semibold">{example.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Saved:</span>
                    <span className="font-semibold">{example.timeSaved}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-muted-foreground">Year 1 Savings:</span>
                    <span className="font-semibold text-primary">{example.yearOneSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROI:</span>
                    <span className="font-semibold text-primary">{example.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Break-even:</span>
                    <span className="font-semibold">{example.breakEven}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Turn These Numbers Into Reality?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's build a custom automation solution tailored to your business. 
            Get a detailed ROI analysis and implementation plan in your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow" asChild>
              <Link to="/company/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 text-white border-white"
              asChild
            >
              <Link to="/portfolio">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoiCalculator;
