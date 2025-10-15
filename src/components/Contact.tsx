import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { contactFormSchema } from "@/lib/validations/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate form data
    const result = contactFormSchema.safeParse({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    });

    if (!result.success) {
      const errors = result.error.errors;
      toast({
        title: "Validation Error",
        description: errors[0]?.message || "Please check your input and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.d2group.co/webhook/website_d2group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          note: result.data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Successfully Sent!",
          description: "Thank you for your message! We will get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      toast({
        title: "An Error Occurred",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      description: "No. 3, Nguyen Co Thach, An Khanh Ward, Ho Chi Minh City, Vietnam",
      color: "text-muted-foreground",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+84 977 027 634",
      color: "text-muted-foreground",
    },
    {
      icon: Mail,
      title: "Email",
      description: "info@d2group.co",
      color: "text-muted-foreground",
    },
    {
      icon: MessageSquare,
      title: "Quick Contact",
      description: "WhatsApp & Zalo",
      color: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            Start Your <span className="text-primary">Automation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with intelligent automation? Let's discuss how our solutions can
            revolutionize your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-border tech-border p-8 animate-scale-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-heading mb-4">Get a Free Consultation</h3>
              <p className="text-muted-foreground">
                Share your automation needs and we'll create a custom solution for your business.
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
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0xxx xxx xxx"
                  className="bg-card/50 border-border focus:border-primary transition-colors"
                  required
                />
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

              <Button type="submit" className="w-full shadow-glow group" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
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
                      <div
                        className={`inline-flex p-3 rounded-lg bg-card/50 ${info.color} mb-4 group-hover:scale-110 transition-transform`}
                      >
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
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>

              <Button variant="outline" className="w-full justify-start tech-border group">
                <MessageSquare className="mr-3 h-5 w-5 text-muted-foreground" />
                Chat on WhatsApp
              </Button>

              <Button variant="outline" className="w-full justify-start tech-border group">
                <MessageSquare className="mr-3 h-5 w-5 text-muted-foreground" />
                Message on Zalo
              </Button>

              <Button variant="outline" className="w-full justify-start tech-border group">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                Schedule a Call
              </Button>
            </div>

            {/* Call to Action */}
            <Card
              className="gradient-card border-border tech-border p-6 text-center animate-scale-in"
              style={{ animationDelay: "0.7s" }}
            >
              <h4 className="text-xl font-bold text-foreground mb-2">Ready for Automation?</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Join over 50+ Vietnamese businesses that have benefited from our automation solutions.
              </p>
              <Button className="shadow-glow">Book a Demo</Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Contact;
