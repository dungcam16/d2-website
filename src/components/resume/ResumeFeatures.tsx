import { Bot, FileCheck, Download, Palette, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Content",
    description: "Smart suggestions for skills, summaries, and achievements tailored to your role."
  },
  {
    icon: FileCheck,
    title: "ATS-Friendly",
    description: "Optimized for Applicant Tracking Systems to increase your chances of getting noticed."
  },
  {
    icon: Palette,
    title: "Beautiful Templates",
    description: "Choose from professionally designed templates that make you stand out."
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Generate and download your resume in PDF format with one click."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is secure and never shared. We respect your privacy."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create a professional resume in just 3 minutes. No learning curve."
  }
];

const ResumeFeatures = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything You Need to Get <span className="text-primary">Hired</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create the perfect resume and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResumeFeatures;
