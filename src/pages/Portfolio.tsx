// Giữ nguyên tất cả import và code trước đó...

const Portfolio = () => {
  // ... giữ nguyên structuredData, enterpriseClients, coreServices, enterpriseStats...

  // FEATURED PROJECTS - Giữ nguyên + Bổ sung thêm
  const featuredProjects = [
    // === GIỮ NGUYÊN CÁC CASE STUDIES CŨ ===
    {
      id: "youtube-automation",
      icon: Youtube,
      title: "YouTube Content Automation Pipeline",
      category: "Media & Content",
      client: "Media channel with 100K+ subscribers",
      industry: "Media & Entertainment",
      region: "Global",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      excerpt: "Automated video publishing workflow reducing manual work by 95%",
      challenge: "Manual upload of 10+ videos daily consuming 4 hours. Inconsistent metadata and branding setup.",
      solution: "Full-stack n8n automation with YouTube API, AI integration, and FFmpeg media processing.",
      businessImpact:
        "Reduced publishing time from 4 hours to 15 minutes daily, eliminated human errors, increased consistency",
      results: [
        { label: "Time saved", value: "95%" },
        { label: "Zero errors", value: "6 months" },
        { label: "Savings", value: "$2K/mo" },
      ],
      metrics: {
        roi: "450%",
        timeframe: "3 months",
        complexity: "Advanced",
        integration: "8+ APIs",
      },
      tech: ["n8n", "YouTube API", "FFmpeg", "Google Cloud", "Docker"],
    },
    {
      id: "crm-automation",
      icon: Building2,
      title: "CRM Lead Management System",
      category: "Sales & CRM",
      client: "Real Estate company (50+ staff)",
      industry: "Real Estate",
      region: "North America",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      excerpt: "Intelligent lead scoring and routing system increasing conversions by 40%",
      challenge: "Leads scattered across platforms with manual scoring and delayed follow-ups.",
      solution: "Automated lead management with smart scoring and multi-channel follow-ups.",
      businessImpact:
        "Increased conversion rate by 40%, reduced response time by 75%, generated $15K additional monthly revenue",
      results: [
        { label: "Conversion", value: "+40%" },
        { label: "Speed", value: "-75%" },
        { label: "Revenue", value: "$15K/mo" },
      ],
      metrics: {
        roi: "320%",
        timeframe: "4 months",
        complexity: "Enterprise",
        integration: "6+ systems",
      },
      tech: ["n8n", "HubSpot", "Slack", "Google Analytics"],
    },
    {
      id: "ecommerce-sync",
      icon: ShoppingCart,
      title: "Multi-Store Inventory Sync",
      category: "E-commerce",
      client: "Online store with 1,000+ SKUs",
      industry: "E-commerce & Retail",
      region: "Asia-Pacific",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      excerpt: "Real-time inventory synchronization across 5 sales channels",
      challenge: "Manual stock updates causing frequent stockouts and inefficient monitoring.",
      solution: "Real-time inventory monitoring with automated supplier notifications.",
      businessImpact: "Reduced stockouts by 90%, decreased inventory costs by 30%, achieved 100% accuracy",
      results: [
        { label: "Stockouts", value: "-90%" },
        { label: "Cost", value: "-30%" },
        { label: "Accuracy", value: "100%" },
      ],
      metrics: {
        roi: "380%",
        timeframe: "2 months",
        complexity: "Advanced",
        integration: "5+ platforms",
      },
      tech: ["n8n", "WooCommerce", "PostgreSQL", "Telegram"],
    },

    // === CASE STUDIES MỚI - FOCUS N8N ===
    {
      id: "n8n-enterprise-migration",
      icon: Cloud,
      title: "Enterprise n8n Cloud Migration",
      category: "Infrastructure & DevOps",
      client: "Fortune 500 Technology Company",
      industry: "Technology & SaaS",
      region: "Global",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      excerpt: "Migrated 200+ legacy workflows to n8n with 99.9% uptime guarantee",
      challenge:
        "Legacy automation system reaching end-of-life with 200+ business-critical workflows across global operations, causing maintenance overhead and reliability issues.",
      solution:
        "Comprehensive n8n Enterprise deployment with automated workflow migration, enhanced security, and global clustering for high availability.",
      businessImpact: "Achieved 99.9% uptime, reduced maintenance costs by 60%, improved workflow performance by 3x",
      results: [
        { label: "Uptime", value: "99.9%" },
        { label: "Cost Reduction", value: "60%" },
        { label: "Performance", value: "+300%" },
      ],
      metrics: {
        roi: "420%",
        timeframe: "6 months",
        complexity: "Enterprise",
        integration: "200+ workflows",
      },
      tech: ["n8n Enterprise", "Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
      testimonial: {
        quote:
          "D2 Group's n8n expertise enabled a seamless migration with zero downtime. Their enterprise architecture approach exceeded our expectations.",
        author: "VP of Engineering",
        company: "Fortune 500 Technology Company",
      },
    },
    {
      id: "n8n-financial-compliance",
      icon: Shield,
      title: "n8n Financial Compliance Automation",
      category: "Finance & Compliance",
      client: "International Banking Group",
      industry: "Financial Services",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      excerpt: "Automated regulatory reporting with n8n ensuring 100% compliance accuracy",
      challenge:
        "Complex multi-jurisdictional regulatory reporting requiring manual data collection from 50+ systems, creating compliance risk and consuming 200+ hours monthly.",
      solution:
        "n8n-powered compliance automation platform with secure API integrations, automated data validation, and regulatory submission workflows.",
      businessImpact:
        "Achieved 100% compliance accuracy, reduced reporting time by 85%, eliminated regulatory violations",
      results: [
        { label: "Accuracy", value: "100%" },
        { label: "Time Saved", value: "85%" },
        { label: "Violations", value: "0" },
      ],
      metrics: {
        roi: "350%",
        timeframe: "5 months",
        complexity: "Enterprise",
        integration: "50+ systems",
      },
      tech: ["n8n", "Core Banking APIs", "Regulatory APIs", "PostgreSQL", "Encryption"],
    },
    {
      id: "n8n-manufacturing-iot",
      icon: Factory,
      title: "n8n IoT Manufacturing Integration",
      category: "Manufacturing & IoT",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      region: "Global",
      image: "https://images.unsplash.com/photo-1581092334538-6a7f1f57c6f5?w=800&auto=format&fit=crop",
      excerpt: "Connected 10,000+ IoT sensors with n8n for predictive maintenance",
      challenge:
        "10,000+ IoT sensors across 15 facilities generating unstructured data with no real-time monitoring, causing unexpected downtime and high maintenance costs.",
      solution:
        "n8n-based IoT data pipeline with real-time processing, predictive analytics, and automated maintenance scheduling integrated with existing ERP systems.",
      businessImpact: "Reduced unplanned downtime by 70%, decreased maintenance costs by 40%, improved OEE by 25%",
      results: [
        { label: "Downtime", value: "-70%" },
        { label: "Maintenance Cost", value: "-40%" },
        { label: "OEE", value: "+25%" },
      ],
      metrics: {
        roi: "480%",
        timeframe: "8 months",
        complexity: "Enterprise",
        integration: "10K+ sensors",
      },
      tech: ["n8n", "MQTT", "InfluxDB", "Grafana", "SAP", "Telegram"],
    },
    {
      id: "n8n-healthcare-hipaa",
      icon: MessageSquare,
      title: "n8n HIPAA-Compliant Patient Care",
      category: "Healthcare & Compliance",
      client: "Healthcare Network (50+ Clinics)",
      industry: "Healthcare",
      region: "North America",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
      excerpt: "HIPAA-compliant patient workflow automation with n8n",
      challenge:
        "Manual patient scheduling and care coordination across 50+ clinics causing delays, errors, and HIPAA compliance risks with patient data handling.",
      solution:
        "n8n-powered HIPAA-compliant automation platform for patient scheduling, care coordination, and automated communications with encrypted data handling.",
      businessImpact:
        "Improved patient satisfaction by 45%, reduced scheduling errors by 95%, achieved 100% HIPAA compliance",
      results: [
        { label: "Satisfaction", value: "+45%" },
        { label: "Errors", value: "-95%" },
        { label: "Compliance", value: "100%" },
      ],
      metrics: {
        roi: "290%",
        timeframe: "4 months",
        complexity: "Enterprise",
        integration: "EMR + 12 systems",
      },
      tech: ["n8n", "Epic EMR", "Encrypted APIs", "Twilio", "Slack"],
    },
    {
      id: "n8n-retail-personalization",
      icon: Target,
      title: "n8n AI-Powered Retail Personalization",
      category: "AI & Personalization",
      client: "Global Fashion Retailer",
      industry: "Fashion & Retail",
      region: "Global",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
      excerpt: "AI-driven personalization engine with n8n increasing sales by 55%",
      challenge:
        "Generic customer experience across online and offline channels resulting in low engagement and declining conversion rates in competitive fashion market.",
      solution:
        "n8n-orchestrated AI personalization engine integrating customer data, behavioral analytics, and ML models for real-time product recommendations and dynamic pricing.",
      businessImpact:
        "Increased online sales by 55%, improved customer lifetime value by 35%, boosted email engagement by 80%",
      results: [
        { label: "Sales", value: "+55%" },
        { label: "CLV", value: "+35%" },
        { label: "Engagement", value: "+80%" },
      ],
      metrics: {
        roi: "520%",
        timeframe: "6 months",
        complexity: "Advanced",
        integration: "AI/ML + 15 systems",
      },
      tech: ["n8n", "OpenAI", "Shopify Plus", "Google Analytics", "Klaviyo"],
    },
    {
      id: "n8n-logistics-optimization",
      icon: TrendingUp,
      title: "n8n Smart Logistics Optimization",
      category: "Supply Chain & Logistics",
      client: "International Logistics Provider",
      industry: "Logistics & Transportation",
      region: "Global",
      image: "https://images.unsplash.com/photo-1566024164372-0281d2c88c96?w=800&auto=format&fit=crop",
      excerpt: "Route optimization and fleet management with n8n reducing costs by 35%",
      challenge:
        "Inefficient route planning and fleet utilization across 200+ vehicles and 5,000+ daily deliveries causing high fuel costs and delivery delays.",
      solution:
        "n8n-powered logistics optimization platform with real-time GPS tracking, AI route planning, and automated dispatch coordination integrated with customer systems.",
      businessImpact:
        "Reduced transportation costs by 35%, improved on-time delivery to 98%, decreased fuel consumption by 25%",
      results: [
        { label: "Cost", value: "-35%" },
        { label: "On-time", value: "98%" },
        { label: "Fuel", value: "-25%" },
      ],
      metrics: {
        roi: "360%",
        timeframe: "5 months",
        complexity: "Advanced",
        integration: "GPS + 10 systems",
      },
      tech: ["n8n", "Google Maps API", "Fleet Management", "PostgreSQL", "Telegram"],
    },
    {
      id: "n8n-fintech-onboarding",
      icon: DollarSign,
      title: "n8n Digital Banking Onboarding",
      category: "FinTech & Banking",
      client: "Digital Banking Startup",
      industry: "Financial Services",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop",
      excerpt: "Automated KYC/AML onboarding with n8n reducing approval time by 80%",
      challenge:
        "Manual KYC/AML customer onboarding process taking 5-7 days with high abandonment rates and regulatory compliance requirements in digital banking.",
      solution:
        "n8n-automated onboarding pipeline with identity verification, document processing, risk scoring, and regulatory compliance checks for instant account approval.",
      businessImpact:
        "Reduced onboarding time from 7 days to 4 hours, increased completion rate by 60%, maintained 100% compliance",
      results: [
        { label: "Time", value: "-80%" },
        { label: "Completion", value: "+60%" },
        { label: "Compliance", value: "100%" },
      ],
      metrics: {
        roi: "440%",
        timeframe: "3 months",
        complexity: "Advanced",
        integration: "KYC + 8 systems",
      },
      tech: ["n8n", "Jumio KYC", "Compliance APIs", "Core Banking", "WhatsApp"],
    },
    {
      id: "n8n-media-content-pipeline",
      icon: Sparkles,
      title: "n8n Media Content Distribution",
      category: "Media & Broadcasting",
      client: "International Media Company",
      industry: "Media & Entertainment",
      region: "Global",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&auto=format&fit=crop",
      excerpt: "Automated content distribution across 25+ platforms with n8n",
      challenge:
        "Manual content distribution across 25+ platforms and regions causing delays, inconsistencies, and high operational costs for global media operations.",
      solution:
        "n8n-orchestrated content distribution network with automated transcoding, localization, scheduling, and multi-platform publishing workflows.",
      businessImpact: "Reduced distribution time by 90%, cut operational costs by 50%, improved content reach by 3x",
      results: [
        { label: "Speed", value: "+90%" },
        { label: "Cost", value: "-50%" },
        { label: "Reach", value: "+300%" },
      ],
      metrics: {
        roi: "380%",
        timeframe: "4 months",
        complexity: "Advanced",
        integration: "25+ platforms",
      },
      tech: ["n8n", "FFmpeg", "AWS Media", "YouTube API", "Social APIs"],
    },
    {
      id: "n8n-education-automation",
      icon: Users,
      title: "n8n Educational Platform Integration",
      category: "Education & Training",
      client: "Global Online University",
      industry: "Education",
      region: "Global",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      excerpt: "Student lifecycle automation with n8n serving 100K+ students",
      challenge:
        "Manual student onboarding, course enrollment, and progress tracking across multiple systems causing poor student experience and high administrative overhead.",
      solution:
        "n8n-powered student lifecycle management with automated enrollment, personalized learning paths, progress tracking, and multi-channel communication.",
      businessImpact:
        "Improved student satisfaction by 40%, reduced administrative workload by 70%, increased course completion by 30%",
      results: [
        { label: "Satisfaction", value: "+40%" },
        { label: "Admin Work", value: "-70%" },
        { label: "Completion", value: "+30%" },
      ],
      metrics: {
        roi: "280%",
        timeframe: "5 months",
        complexity: "Advanced",
        integration: "LMS + 12 systems",
      },
      tech: ["n8n", "Moodle", "Zoom API", "Student Information System", "Email"],
    },
  ];

  // ... giữ nguyên tất cả code khác (methodology, testimonials, etc.)

  return (
    <>
      <SEO
        title="Enterprise n8n Automation & Integration Consultancy | D2 Group"
        description="Leading B2B automation consultancy specializing in enterprise n8n workflow development and API integrations for Fortune 1000 companies. 200+ successful projects, $50M+ cost savings delivered."
        keywords="enterprise automation, n8n consultancy, B2B workflow automation, API integration services, business process automation, enterprise n8n development"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* ... giữ nguyên Hero Section, Enterprise Clients, Core Services... */}

        {/* Enterprise Case Studies - Updated với nhiều case studies hơn */}
        <section id="case-studies" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real transformation stories from global enterprises powered by n8n automation with quantified business
                impact
              </p>
            </div>

            {/* Featured Projects Grid - Hiển thị 9 case studies */}
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 9).map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
                >
                  {/* Project Header with Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Project Icon & Category */}
                    <div className="absolute top-4 left-4">
                      <project.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary text-white px-2 py-1 text-xs">
                      {project.category}
                    </Badge>

                    {/* ROI Badge */}
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-green-600 text-white text-xs">ROI: {project.metrics.roi}</Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6 space-y-4 flex-grow">
                    {/* Title & Client */}
                    <div>
                      <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">{project.client}</div>
                      <div className="text-xs text-primary font-medium">
                        {project.industry} • {project.region}
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.excerpt}</p>

                    <Separator />

                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center p-2 bg-primary/5 rounded">
                          <div className="text-sm font-bold text-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* CTA */}
                    <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                      <Link to={`/case-study/${project.id}`}>
                        View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button size="lg" asChild>
                <Link to="/case-studies">
                  View All {featuredProjects.length} Case Studies <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ... giữ nguyên các sections khác... */}
      </div>
    </>
  );
};

export default Portfolio;
