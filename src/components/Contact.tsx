import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Vietnam Office",
      description: "Ho Chi Minh City, Vietnam",
      color: "text-red-400"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+84 xxx xxx xxx",
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      description: "hello@d2group.vn",
      color: "text-blue-400"
    },
    {
      icon: MessageSquare,
      title: "Quick Contact",
      description: "WhatsApp & Zalo Available",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Start Your <span className="gradient-primary bg-clip-text text-transparent">Automation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with intelligent automation? 
            Let's discuss how our solutions can revolutionize your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-border tech-border p-8 animate-scale-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-heading mb-4">Get Free Consultation</h3>
              <p className="text-muted-foreground">
                Share your automation needs and we'll create a customized solution for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-card/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-card/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="bg-card/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your automation needs..."
                  className="bg-card/50 border-border focus:border-primary transition-colors min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full shadow-glow group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold font-heading mb-8">Contact Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <Card 
                      key={info.title}
                      className="gradient-card border-border tech-border p-6 group hover:shadow-glow transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-card/50 ${info.color} mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
              
              <Button variant="outline" className="w-full justify-start tech-border group">
                <MessageSquare className="mr-3 h-5 w-5 text-green-400" />
                Chat on WhatsApp
              </Button>
              
              <Button variant="outline" className="w-full justify-start tech-border group">
                <MessageSquare className="mr-3 h-5 w-5 text-blue-400" />
                Message on Zalo
              </Button>
              
              <Button variant="outline" className="w-full justify-start tech-border group">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                Schedule a Call
              </Button>
            </div>

            {/* Call to Action */}
            <Card className="gradient-card border-border tech-border p-6 text-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <h4 className="text-xl font-bold text-foreground mb-2">Ready to Automate?</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Join 50+ Vietnamese businesses already benefiting from our automation solutions.
              </p>
              <Button className="shadow-glow">
                Book a Demo
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-light/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Contact;