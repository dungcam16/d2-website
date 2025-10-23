import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  Video,
  Code,
  Target,
  Clock,
  Award,
  MessageSquare,
  Download,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  DollarSign,
  Shield,
  Brain,
  Lock,
  BarChart3,
  Zap,
  RefreshCw,
  GitBranch,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TrainingKnowledgeService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Training & Knowledge Transfer - Build Team Capability, Not Vendor Dependency",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Transform vendor dependency into team capability. 95% self-sufficiency in 90 days through comprehensive training, documentation, and certification programs.",
    areaServed: "Global",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://d2group.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://d2group.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Training & Knowledge Transfer",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a comprehensive training program take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical implementation is 8-12 weeks: Weeks 1-2 (Assessment), Weeks 3-6 (Content development), Weeks 7-10 (Live training workshops), Weeks 11-12 (Certification). Fast-track: 4-6 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "How much does this cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small team (8-15 people): $30K-40K. Medium team (20-40 people): $45K-65K. Large team (40+ people): $75K-120K+. Typical ROI: 200%-400% within 12 months.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Training & Knowledge Transfer | Build Team Capability | D2 Group"
        description="Transform vendor dependency into team capability. 95% self-sufficiency in 90 days. $180K annual savings through comprehensive training, documentation & certification."
        keywords="training programs, knowledge transfer, team enablement, staff certification, technical documentation, n8n training, automation training, capability building"
        canonicalUrl="/services/training-knowledge"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">Transform Vendor Dependency Into Team Capability.</span>
              <br />
              <span className="text-foreground">95% Self-Sufficiency In 90 Days</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Don't buy a system and stay dependent on consultants. Our comprehensive training and knowledge transfer
              programs empower your team to own, optimize, and evolve your automation independently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Your Training Needs Assessment
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: Knowledge Transfer Checklist
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "95%", label: "Team Self-Sufficiency", desc: "From 30% adoption to full ownership" },
              { icon: BookOpen, value: "100%", label: "Process Documentation", desc: "Everything captured, auditable" },
              { icon: DollarSign, value: "$180K", label: "Annual Savings", desc: "Eliminated ongoing support costs" },
              { icon: Clock, value: "2.4 weeks", label: "New Hire Ramp-Up", desc: "Down from 4 weeks" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "500+", label: "Staff Trained", desc: "Across 50+ enterprise clients" },
              { icon: Star, value: "4.8/5", label: "Training Satisfaction", desc: "Verified feedback from trainees" },
              { icon: Award, value: "99%", label: "Certification Pass Rate", desc: "Assessment-based mastery" },
              { icon: Lock, value: "100%", label: "Audit Ready", desc: "Documentation meets compliance" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Client Success Story: TechVenture Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> B2B SaaS (Enterprise Software)
              <br />
              <strong>Size:</strong> 280 employees, $120M ARR, 45-person operations team
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                TechVenture Solutions is a mid-market enterprise software company with 280 employees serving Fortune 500
                clients. After rapid scaling from 120 → 280 employees, they deployed n8n automation across 6 departments
                with a 3-day vendor training. However, adoption stalled at 30%. Teams reverted to manual processes on
                complex scenarios; new staff onboarding took 3-4 weeks; no documentation existed; compliance auditors
                flagged process documentation gaps. The new VP Operations recognized the real problem: they'd bought a
                system but didn't own the capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Challenge: When Training Becomes a Checkbox
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Most organizations assume training is a checkbox—a 1-3 day event where consultants show staff how to use
              the system. In reality, this "spray and pray" approach leaves teams confused, documentation gaps grow, and
              the business stays dependent on expensive vendors for every change or issue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Adoption Stalls After Training",
                description:
                  "Traditional training sessions teach mechanics but don't create muscle memory or confidence. Staff attend, nod along, then revert to manual processes when facing complexity.",
                impact: "30-50% utilization rates vs. 80%+ potential; 40-60% of automation ROI lost",
              },
              {
                icon: DollarSign,
                title: "Vendor Lock-In & Expensive Support",
                description:
                  "System deployed, but team can't operate/optimize independently. Every question, customization, or issue requires $500/hour consultant callback. Internal team never develops capability.",
                impact: "$15K-30K/month in ongoing support costs; 2-4 week lag for any change",
              },
              {
                icon: Users,
                title: "Onboarding Nightmare for New Staff",
                description:
                  "No documentation. New hires trained ad-hoc by whoever's available. Inconsistent knowledge across team. Key person dependency (if Jane leaves, what do we do?).",
                impact:
                  "3-4 week productivity ramp-up vs. 1-2 weeks with documentation; knowledge loss when staff departs",
              },
              {
                icon: Shield,
                title: "Compliance & Audit Risk",
                description:
                  "Zero documentation of processes, decision logic, or system configuration. Auditors ask: 'How do you ensure these workflows follow policy?' Can't prove it.",
                impact: "Compliance risk; audit inefficiency; repeated findings; costly exceptions",
              },
              {
                icon: Brain,
                title: "No Continuous Improvement Culture",
                description:
                  "Team doesn't understand 'why' behind system design. Can't troubleshoot independently. Can't innovate or optimize. System remains static instead of evolving with business needs.",
                impact: "Missed optimizations worth $50K+/year; stalled innovation; low team engagement",
              },
            ].map((pain, index) => {
              const IconComponent = pain.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{pain.description}</p>
                  <div className="bg-destructive/10 p-3 rounded-md">
                    <p className="text-xs font-semibold text-destructive">Impact: {pain.impact}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "We thought training was a 3-day event. We were wrong. We bought a system but didn't own it. Our team
              couldn't troubleshoot a simple error, let alone optimize. Paying $25K/month in vendor support made no
              sense. D2's training program flipped the script—now we own our system, our team is confident, and we've
              cut support costs to zero."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Sarah Mitchell, VP Operations, TechVenture Solutions</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Transformation Program, Not Training Workshop
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              Knowledge transfer is not a training workshop—it's a transformation program. We don't just teach
              mechanics; we build capability, embed best practices, and transfer ownership. Our approach combines
              documentation, hands-on training, certification, and continuous support to ensure your team doesn't just
              use the system— they own it, optimize it, and improve it continuously.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We start by capturing every process, decision, and configuration into comprehensive, auditable
              documentation. Then we deliver this knowledge through multiple modalities—written guides, video
              walkthroughs, live workshops, hands-on mentoring, and role-based certification. The result: your team goes
              from dependent to expert, your system evolves with your business, and your audit trail is ironclad.
            </p>
          </div>

          {/* User Journey */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">How It Works: User Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Intake & Assessment",
                  description:
                    "We start by understanding your team structure, skill levels, system complexity, and knowledge gaps. Interview stakeholders, observe current workflows.",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Documentation Foundation",
                  description:
                    "Before training anyone, we document EVERYTHING. Process playbooks, decision trees, troubleshooting guides, architecture diagrams.",
                  icon: FileText,
                },
                {
                  step: "3",
                  title: "Content Development",
                  description:
                    "We translate documentation into training content: short videos (5-15 min), live workshop modules, role-based learning paths, certification assessments.",
                  icon: Video,
                },
                {
                  step: "4",
                  title: "Live Training Delivery",
                  description:
                    "Hands-on workshops by role. Not death-by-PowerPoint—interactive, problem-solving focused. Participants work through real scenarios.",
                  icon: GraduationCap,
                },
                {
                  step: "5",
                  title: "Certification & Mastery",
                  description:
                    "Formal certification ensures mastery. Participants demonstrate competency through assessment, not just attendance.",
                  icon: Award,
                },
                {
                  step: "6",
                  title: "Continuous Improvement",
                  description:
                    "Training doesn't end at go-live. We establish channels for documentation updates, monthly office hours, quarterly refresher sessions.",
                  icon: RefreshCw,
                },
                {
                  step: "7",
                  title: "Handoff to Independence",
                  description:
                    "Your team is now equipped to operate, troubleshoot, optimize, and innovate independently. Vendor relationship transitions from dependency to partnership.",
                  icon: Target,
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {item.step}
                      </div>
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-md mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Program Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: GitBranch,
                  title: "Role-Based Training Paths",
                  description:
                    "Each team member gets customized learning path based on their role and skill level. Operations, Finance, IT—each gets relevant training.",
                  example: "Finance analyst: 4-module path. Operations engineer: 6-module path with architecture depth",
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Documentation Library",
                  description:
                    "100+ pages of organized, searchable documentation covering every process, decision, configuration, and troubleshooting path.",
                  example:
                    "'How to troubleshoot a stalled workflow' walks through diagnostic steps, solutions with screenshots",
                },
                {
                  icon: Award,
                  title: "Hands-On Certification Program",
                  description:
                    "Formal certification (not just attendance) proves mastery. Role-based assessments, hands-on tasks, knowledge checks.",
                  example: "'Certified n8n Workflow Operator' requires 3 knowledge assessments + 2 hands-on labs",
                },
                {
                  icon: Video,
                  title: "Multi-Modal Learning Content",
                  description:
                    "Knowledge delivered via video (learning-by-watching), live workshops (learning-by-doing), documentation (reference), mentoring (dialogue).",
                  example: "10-minute video → 2-hour live workshop → written playbook → optional 1-on-1 mentoring",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Improvement Culture",
                  description:
                    "Training teaches not just 'how' but 'why.' Team learns to think critically about process improvements, identify inefficiencies.",
                  example:
                    "Operations team identifies unnecessary validation rules; removes them, reduces processing time 35%",
                },
                {
                  icon: Shield,
                  title: "Audit-Ready Documentation",
                  description:
                    "Documentation structured for both operations AND audit/compliance requirements. Decision logic captured, audit trail immutable.",
                  example:
                    "Every workflow documents business reason, policy compliance, approval chain, validation rules, exceptions",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-semibold text-md mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-xs italic">{feature.example}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Implementation Journey: 8-12 Week Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Knowledge Capture & Assessment",
                duration: "Week 1-2",
                activities: [
                  "Stakeholder interviews with each team",
                  "Observe existing workflows, identify bottlenecks",
                  "Document current process landscape",
                  "Create training needs assessment",
                ],
                insight:
                  "Most organizations underestimate knowledge gaps. Discovery surfaces critical gaps that become focal points for training.",
                icon: Users,
              },
              {
                phase: "Content Development",
                duration: "Week 3-6",
                activities: [
                  "Create comprehensive process documentation",
                  "Develop video content (15-20 short videos)",
                  "Design role-based learning paths",
                  "Build certification assessments",
                ],
                insight:
                  "Content development is the heavy lifting. Creating good training materials takes time, but quality pays dividends—materials become evergreen reference for years.",
                icon: BookOpen,
              },
              {
                phase: "Live Training & Workshops",
                duration: "Week 7-10",
                activities: [
                  "Conduct role-based live training cohorts",
                  "Hands-on labs and scenario-based learning",
                  "Q&A forums and mentoring sessions",
                  "1-on-1 pairing for staff struggling",
                ],
                insight:
                  "Live training is where muscle memory builds. Teams learn faster when there's a trainer to turn to, peers to learn with, and immediate feedback.",
                icon: GraduationCap,
              },
              {
                phase: "Certification & Continuous Support",
                duration: "Week 11-12+",
                activities: [
                  "Formal certification testing",
                  "Monthly office hours for new questions",
                  "Quarterly refresher sessions",
                  "Build Living Knowledge Base",
                ],
                insight:
                  "Training doesn't end at go-live. Monthly office hours cost minimal but provide huge value—staff feel supported, questions get answered, documentation stays current.",
                icon: Award,
              },
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-fade-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-primary mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-md">
                    <p className="text-xs">
                      <strong>Key Learning:</strong> {phase.insight}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: From Dependent to Expert
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            Organizations that invest in comprehensive knowledge transfer transform from vendor-dependent to
            vendor-independent, from low-adoption to high-utilization, and from static systems to continuously evolving
            platforms.
          </p>

          {/* Quantitative Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="border p-3 text-left font-semibold">Metric</th>
                  <th className="border p-3 text-center font-semibold">Before</th>
                  <th className="border p-3 text-center font-semibold">After</th>
                  <th className="border p-3 text-center font-semibold">Change</th>
                  <th className="border p-3 text-left font-semibold">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "System Adoption Rate",
                    before: "30-35%",
                    after: "85-95%",
                    change: "+150-200%",
                    impact: "60-70% more automation value realized",
                  },
                  {
                    metric: "Vendor Support Costs",
                    before: "$20K-30K/month",
                    after: "$0-2K/month",
                    change: "-90%",
                    impact: "$180K-300K annual savings",
                  },
                  {
                    metric: "New Hire Onboarding Time",
                    before: "4-6 weeks",
                    after: "1.5-2.4 weeks",
                    change: "-60%",
                    impact: "Faster productivity ramp; less training burden",
                  },
                  {
                    metric: "Team Self-Sufficiency",
                    before: "10-15%",
                    after: "90-95%",
                    change: "+500-600%",
                    impact: "Independence; faster issue resolution",
                  },
                  {
                    metric: "Documentation Completeness",
                    before: "5-10%",
                    after: "100%",
                    change: "+900%",
                    impact: "Audit ready; compliance gaps eliminated",
                  },
                  {
                    metric: "Compliance Audit Issues",
                    before: "6-12 findings",
                    after: "0-1 findings",
                    change: "-95%",
                    impact: "Lower audit fees; zero repeat findings",
                  },
                  {
                    metric: "Continuous Improvement Ideas/Quarter",
                    before: "0-2",
                    after: "8-15",
                    change: "+400%",
                    impact: "System evolves; team engaged; ROI compounds",
                  },
                  {
                    metric: "Staff Confidence (Self-Rated)",
                    before: "2/10",
                    after: "8-9/10",
                    change: "+300%",
                    impact: "Morale improves; retention improves; innovation emerges",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/5"}>
                    <td className="border p-3 font-medium">{row.metric}</td>
                    <td className="border p-3 text-center">{row.before}</td>
                    <td className="border p-3 text-center text-primary font-semibold">{row.after}</td>
                    <td className="border p-3 text-center font-semibold">{row.change}</td>
                    <td className="border p-3 text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ROI Calculation */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in mb-12">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Training Program Cost</p>
                <p className="text-3xl font-bold text-primary">$45,000</p>
                <p className="text-xs text-muted-foreground mt-2">Team of 30-40 people, 8-week program</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$330,000+</p>
                <p className="text-xs text-muted-foreground mt-2">Support costs + onboarding + utilization gains</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even</p>
                <p className="text-3xl font-bold text-primary">1.6 months</p>
                <p className="text-xs text-muted-foreground mt-2">Fast return on investment</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">633%</p>
                <p className="text-xs text-muted-foreground mt-2">$330K savings / $45K investment</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Operations Team",
                icon: Users,
                impacts: [
                  "Confidence & Ownership: Team moves from uncertain to confident. Own the system, don't depend on consultants",
                  "Career Development: Learning marketable skills in n8n, automation, process optimization",
                  "Problem-Solving Autonomy: Can troubleshoot issues independently; solve problems creatively",
                ],
              },
              {
                title: "For Finance & Leadership",
                icon: DollarSign,
                impacts: [
                  "Cost Control: Massive reduction in support costs. Predictable, controlled expenses",
                  "Speed & Agility: Changes, optimizations, new workflows happen in days, not weeks",
                  "Risk Reduction: Compliance documentation complete; audit findings drop from 12 to 0",
                ],
              },
              {
                title: "For HR / Staff Retention",
                icon: Award,
                impacts: [
                  "Reduced Turnover: Staff feel valued, trained, invested in. Career path visible. Retention improves",
                  "Onboarding Excellence: New hires ramp faster, feel supported, see career path. Better hiring signal",
                  "Culture of Learning: Continuous improvement mindset spreads. Innovation increases. Morale improves",
                ],
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-semibold text-lg mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.impacts.map((impact, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-heading mb-4 animate-fade-in">Technical Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              For L&D Leaders & Decision Makers — See how we structure knowledge transfer scientifically
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setShowTechnicalDeepDive(!showTechnicalDeepDive)}
            >
              {showTechnicalDeepDive ? (
                <>
                  Hide Learning Science Details <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Learning Science Details <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showTechnicalDeepDive && (
            <div className="mt-8 animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="adult-learning">
                  <AccordionTrigger className="text-lg font-semibold">
                    Adult Learning Principles Behind Our Approach
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>Our training program is grounded in adult learning science (andragogy):</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Self-Directed Learning:</strong> Adults want autonomy. We provide resources and
                          guidance; learners chart their own path within structure.
                        </li>
                        <li>
                          <strong>Relevance:</strong> Training is role-specific and immediately applicable. Participants
                          learn skills they'll use tomorrow.
                        </li>
                        <li>
                          <strong>Experience-Based:</strong> We start with participants' existing knowledge and build on
                          it. Hands-on labs reinforce concepts.
                        </li>
                        <li>
                          <strong>Mastery-Oriented:</strong> We focus on competency, not compliance. Assessment proves
                          mastery, not just attendance.
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="multi-modal">
                  <AccordionTrigger className="text-lg font-semibold">Multi-Modal Learning Design</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>Research shows information retention improves dramatically with multi-modal delivery:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Video (Visual):</strong> 65% information retention after 3 days vs. 10% for text alone
                        </li>
                        <li>
                          <strong>Live Workshop (Kinesthetic + Social):</strong> 75% retention; muscle memory builds;
                          peer learning accelerates understanding
                        </li>
                        <li>
                          <strong>Documentation (Reference):</strong> 100% availability; self-service learning; audit
                          trail
                        </li>
                        <li>
                          <strong>Mentoring (Dialogue):</strong> 90% retention; immediate feedback; confidence building
                        </li>
                      </ul>
                      <p className="mt-4 font-semibold">
                        Our approach uses all four modalities, maximizing learning outcomes.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="spaced-repetition">
                  <AccordionTrigger className="text-lg font-semibold">
                    Spaced Repetition & Continuous Learning
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>Knowledge decays over time (Ebbinghaus Forgetting Curve). We prevent decay through:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Spaced Training:</strong> Core concepts taught in Week 1, revisited/deepened in Week
                          5, refreshed quarterly
                        </li>
                        <li>
                          <strong>Low-Stakes Quizzes:</strong> Monthly knowledge checks (not high-stress; just memory
                          reinforcement)
                        </li>
                        <li>
                          <strong>Quarterly Refreshers:</strong> Skill maintenance; awareness of new features/patterns
                        </li>
                        <li>
                          <strong>Living Documentation:</strong> Team contributes updates; they stay sharp by teaching
                          others
                        </li>
                      </ul>
                      <p className="mt-4 font-semibold">
                        Result: Knowledge retention stays high (85%+ at 6 months vs. 40% with single-training-event)
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="certification">
                  <AccordionTrigger className="text-lg font-semibold">
                    Certification & Assessment Design
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>Our certification program measures mastery across three dimensions:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <strong>Knowledge Assessment:</strong> Do they understand concepts? (Written quiz)
                        </li>
                        <li>
                          <strong>Skills Assessment:</strong> Can they execute procedures? (Hands-on lab in controlled
                          environment)
                        </li>
                        <li>
                          <strong>Applied Competency:</strong> Can they handle real-world scenarios? (Scenario-based
                          exam with constraints/surprises)
                        </li>
                      </ol>
                      <p className="mt-4 font-semibold">
                        Only passing all three dimensions earns certification. Ensures competency, not just attendance.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="knowledge-management">
                  <AccordionTrigger className="text-lg font-semibold">
                    Knowledge Management & Living Documentation
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>Documentation isn't a one-time deliverable; it's a living system:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Version Control:</strong> All documentation in Git; history preserved; changes tracked
                        </li>
                        <li>
                          <strong>Contribution Model:</strong> Team members can propose documentation updates; trainers
                          review/merge
                        </li>
                        <li>
                          <strong>Feedback Loop:</strong> Monthly reviews of documentation; updates based on new
                          issues/patterns
                        </li>
                        <li>
                          <strong>Searchability:</strong> Documentation indexed and searchable; staff find answers in 30
                          seconds
                        </li>
                        <li>
                          <strong>Accessibility:</strong> Multiple formats (PDF, web, mobile-friendly); available
                          offline and online
                        </li>
                      </ul>
                      <p className="mt-4 font-semibold">
                        Result: Documentation stays current; captures institutional knowledge; serves as evergreen
                        reference
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The training transformed how we think about our system. Before, n8n felt like a black box—we used it but didn't understand it. After D2's program, we own it. Team is confident troubleshooting issues, optimizing workflows, proposing improvements. We went from paying $25K/month in vendor support to $0. More importantly, the team feels empowered, not dependent. This is the training we wish we'd done from day one.",
                author: "Sarah Mitchell",
                role: "VP Operations, TechVenture Solutions",
              },
              {
                quote:
                  "Our audit used to find 10+ documentation gaps. After D2's training program, we had zero. The documentation they created is audit-ready, our team understands the logic, and we can defend our processes. Plus, new hires ramp 3x faster now.",
                author: "James Chen",
                role: "Finance Director",
              },
              {
                quote:
                  "I was skeptical that training could be this good. Turns out multi-modal learning, hands-on labs, and mentoring actually work. Our team is MORE confident than the vendor who sold us the system. They've become internal experts, teaching others. Best investment we made.",
                author: "Michelle Rodriguez",
                role: "Operations Manager",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-sm text-muted-foreground italic mb-4">{testimonial.quote}</blockquote>
                <div className="border-t pt-4">
                  <cite className="font-semibold not-italic block">{testimonial.author}</cite>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Training Packages</h2>
            <p className="text-xl text-muted-foreground">Choose the right training solution for your team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Documentation",
                price: "$30,000",
                description: "Small team (8-15 people), core training",
                features: [
                  "System architecture docs",
                  "Process playbooks",
                  "Video library (10+ videos)",
                  "User guides",
                  "Best practices guide",
                  "30-day post-training support",
                ],
              },
              {
                name: "Comprehensive",
                price: "$55,000",
                description: "Medium team (20-40 people)",
                features: [
                  "Complete documentation library",
                  "Role-based learning paths",
                  "Live workshops (4 weeks)",
                  "Hands-on certification program",
                  "Video tutorials (20+ videos)",
                  "90-day ongoing support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Large team (40+ people)",
                features: [
                  "Fully customized curriculum",
                  "Advanced certification tracks",
                  "Multiple workshop cohorts",
                  "Living knowledge base",
                  "Quarterly refreshers (1 year)",
                  "Dedicated training manager",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all ${pkg.popular ? "border-primary border-2" : ""}`}
              >
                <div className="text-center">
                  {pkg.popular && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-4">
                      <Star className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">
            Ready to Build Capability, Not Dependency?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            Stop paying consultants for answers your team should know. Transform your team into system owners who
            optimize continuously and drive innovation.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive documentation library (100% coverage)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Role-based training paths (customized for your team)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Hands-on certification program (mastery proven)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Continuous support & mentoring (knowledge stays fresh)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Audit-ready compliance documentation (zero findings)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Your Training Needs Assessment
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download Training Program Overview
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free assessment, zero obligation</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Typically 8-12 weeks implementation</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>ROI guarantee: 200%+ within 12 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="timeline">
              <AccordionTrigger>How long does a comprehensive training program take?</AccordionTrigger>
              <AccordionContent>
                Typical implementation is 8-12 weeks: Weeks 1-2 (Assessment, documentation capture) → Weeks 3-6 (Content
                development) → Weeks 7-10 (Live training workshops by role) → Weeks 11-12 (Certification, continuous
                support setup). Fast-track (core topics only): 4-6 weeks. Extended (deep certification + advanced
                topics): 12-16 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team-time">
              <AccordionTrigger>Do we need to dedicate team time?</AccordionTrigger>
              <AccordionContent>
                We need participation: Initial phase (4-6 hours of interviews) → During content development (2-3 hours
                per week validating accuracy) → During live training (100% participation, 20-30 hours depending on
                depth) → After training (Minimal time for monthly office hours). Total team lift: 50-60 hours over 12
                weeks. We handle 80% of the work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="remote">
              <AccordionTrigger>Can training work remotely for distributed teams?</AccordionTrigger>
              <AccordionContent>
                Absolutely. All training can be delivered remotely: Documentation (digital-first, accessible anywhere) →
                Video content (self-paced, on-demand) → Live workshops (virtual via Zoom/Teams) → Mentoring sessions
                (1-on-1 or small group via video) → Certification (proctored online assessments). We often see BETTER
                engagement with remote training.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="measurement">
              <AccordionTrigger>How do we measure whether the training actually worked?</AccordionTrigger>
              <AccordionContent>
                We track three layers: (1) Learning Metrics (Pre/post assessments, certification pass rates, knowledge
                checks) → (2) Adoption Metrics (System utilization rates, feature adoption, self-service resolution
                rates) → (3) Business Metrics (Cost savings, speed improvements, compliance gains). We measure at 30
                days, 90 days, 6 months, and 12 months post-training. ROI is typically evident by month 3.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="existing-certs">
              <AccordionTrigger>What if team members are already certified in this tech?</AccordionTrigger>
              <AccordionContent>
                External certifications are different from YOUR organizational training. We focus on: YOUR specific
                workflows and processes (not standard best practices) → YOUR business logic and decision rules → YOUR
                compliance and audit requirements → How to troubleshoot YOUR system, not systems in general. Someone
                with external certification benefits from YOUR organizational training and becomes a peer mentor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="non-technical">
              <AccordionTrigger>Can you train staff without technical backgrounds?</AccordionTrigger>
              <AccordionContent>
                Yes. Our role-based approach means non-technical staff (finance analysts, operations managers) get
                training focused on business processes, not code/infrastructure. Finance analyst path: Financial
                workflows, validation rules, reporting (not APIs). Operations manager path: Process design,
                optimization, monitoring (not technical implementation).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="after-training">
              <AccordionTrigger>What happens after training?</AccordionTrigger>
              <AccordionContent>
                Three tiers: (1) Included in Program: 8-week program includes live training + certification + office
                hours for first 4 weeks after → (2) Extended Support (Optional): Monthly office hours + quarterly
                refreshers (retainer model) → (3) Managed Relationship (Optional): Ongoing consultants available for
                complex issues. Most customers choose tier 1 (no ongoing costs).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="knowledge-retention">
              <AccordionTrigger>
                How do we ensure knowledge doesn't walk out the door if someone leaves?
              </AccordionTrigger>
              <AccordionContent>
                This is core to our approach: Documented (All processes, decisions, configurations documented) →
                Distributed (Knowledge isn't concentrated with one person; team is cross-trained) → Certified (Multiple
                people certified in each capability) → Searchable (Living knowledge base searchable; anyone can find
                answers) → Tested (Certification ensures multiple people CAN execute processes independently). Result:
                Someone leaving doesn't cause capability loss.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>How much does this cost?</AccordionTrigger>
              <AccordionContent>
                Pricing based on team size, complexity, and depth: Small team (8-15 people), core training: $30K-40K →
                Medium team (20-40 people), comprehensive: $45K-65K → Large team (40+ people), enterprise program:
                $75K-120K+. Investment typically breaks even in 2-4 months through cost savings (eliminated support
                costs, faster onboarding, increased utilization). 12-month ROI typically 200%-400%.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bundle">
              <AccordionTrigger>Can this be combined with implementation?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We often bundle implementation + training together: Implementation + Training Bundle (10-15%
                discount off combined price) → Phased Approach (Implement core, then train; implement advanced features,
                then train) → Integrated Timeline (Cleaner logistics; faster time-to-value). This is actually
                recommended; training embedded in implementation helps team learn faster during deployment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold font-heading text-center mb-12">Why Trust D2 Group</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Users, stat: "500+", label: "Professionals trained successfully" },
              { icon: Star, stat: "4.8/5", label: "Training satisfaction (verified)" },
              { icon: Award, stat: "n8n Partner", label: "Certified Training Partner" },
              { icon: BarChart3, stat: "200%+", label: "Typical ROI within 12 months" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Our Guarantees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>85%+ team capability within 90 days or extended training free</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>100% documentation ownership transferred to you</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>150%+ ROI within 12 months or additional training free</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Audit-ready documentation guaranteed</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">What Makes Us Different</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-primary mr-2" />
                  <span>Role-based training paths (not one-size-fits-all)</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-primary mr-2" />
                  <span>Documentation first approach</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 text-primary mr-2" />
                  <span>Formal certification program</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-primary mr-2" />
                  <span>Hands-on mentoring & continuous support</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingKnowledgeService;
