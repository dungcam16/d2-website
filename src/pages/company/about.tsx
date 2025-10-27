import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      description: "To empower businesses with intelligent automation solutions that drive growth and efficiency",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Our Team",
      description: "Expert developers and automation specialists passionate about solving complex problems",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Our Values",
      description: "Excellence, innovation, and client success guide everything we do",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Our Reach",
      description: "Serving clients globally with 24/7 support and reliable solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us | D2 Group"
        description="Learn about D2 Group - Your trusted AI automation and workflow development partner"
        keywords="about d2 group, automation agency, ai development team"
        canonicalUrl="/company/about"
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="text-primary">D2 Group</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate automation experts dedicated to transforming how businesses operate through
              intelligent workflow solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-primary p-8 md:p-12">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Founded with a vision to democratize automation, D2 Group has grown from a small team of developers into
                a trusted partner for businesses worldwide. We specialize in n8n workflow automation, AI integration, and
                custom SaaS development, helping our clients save time and scale their operations.
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-white/80">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Workflows Built</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10x</div>
                  <div className="text-white/80">Average ROI</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
