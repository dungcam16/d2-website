import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactFormSchema } from "@/lib/validations/contact";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const services = [
    "n8n Automation - Enterprise workflows with unlimited executions",
    "AI Agents & Chatbots - GPT-4 powered automation for support & sales",
    "Zapier Migration - Switch from Zapier and save 90% on costs",
    "No-Code/Low-Code Development - Build apps with Webflow, Bubble, Retool",
    "Digital Marketing Automation - Connect your entire marketing tech stack",
  ];

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
      service: formData.service,
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
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          company: result.data.company || "",
          service: result.data.service || "",
          message: result.data.message,
          website: "", // Honeypot field (empty)
        },
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Successfully Submitted!",
          description: "Thank you for contacting us! We'll respond as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "An Error Occurred",
        description: "Please try again later or contact us directly via hotline.",
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

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Vietnam Office",
      description: "No. 3, Nguyen Co Thach Street, An Khanh Ward, Ho Chi Minh City, Vietnam",
      color: "text-muted-foreground",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+84909099421",
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
      description: "Zalo",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                Start Your <span className="text-primary">Automation Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your business with intelligent automation? Let's discuss how our solutions can
                revolutionize your operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="gradient-card border-border tech-border p-8 animate-scale-in">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold font-heading mb-4">Get Free Consultation</h2>
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
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+84 xxx xxx xxx"
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
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service of Interest</label>
                    <Select value={formData.service} onValueChange={handleServiceChange} required>
                      <SelectTrigger className="bg-card/50 border-border focus:border-primary transition-colors">
                        <SelectValue placeholder="Select the service you're interested in" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your automation needs..."
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

                  <Button variant="outline" className="w-full justify-start tech-border group" asChild>
                    <a href="https://wa.me/84909099421" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-green-500" />
                      Message on WhatsApp
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full justify-start tech-border group" asChild>
                    <a href="https://zalo.me/d2group" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-blue-500" />
                      Message on Zalo
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full justify-start tech-border group" asChild>
                    <a href="https://m.me/d2groupmarketing" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-blue-600" />
                      Message on Messenger
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full justify-start tech-border group" asChild>
                    <a href="https://t.me/d2group" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-sky-500" />
                      Message on Telegram
                    </a>
                  </Button>
                </div>

                {/* Support Information */}
                <Card
                  className="gradient-card border-border tech-border p-6 text-center animate-scale-in"
                  style={{ animationDelay: "0.7s" }}
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Our team of experts is always ready to assist you with any questions about our services.
                  </p>
                  <p className="text-primary font-semibold">Response within 1 hour</p>
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
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
