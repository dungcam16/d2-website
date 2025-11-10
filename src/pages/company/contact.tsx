import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactFormSchema } from "@/lib/validations/contact";
import { supabase } from "@/integrations/supabase/client";

// Extended schema with service field and lead qualification
const contactPageSchema = contactFormSchema.extend({
  service: z.string().optional(),
  companySize: z.string().optional(),
  budgetRange: z.string().optional(),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "n8n Automation - Enterprise workflows with unlimited executions",
    "AI Agents & Chatbots - GPT-4 powered automation for support & sales",
    "Zapier Migration - Switch from Zapier and save 90% on costs",
    "No-Code/Low-Code Development - Build apps with Webflow, Bubble, Retool",
    "Digital Marketing Automation - Connect your entire marketing tech stack",
  ];

  const form = useForm<z.infer<typeof contactPageSchema>>({
    resolver: zodResolver(contactPageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      consentMarketing: false,
      companySize: "",
      budgetRange: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactPageSchema>) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Extract UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utmSource: urlParams.get('utm_source') || undefined,
        utmMedium: urlParams.get('utm_medium') || undefined,
        utmCampaign: urlParams.get('utm_campaign') || undefined,
        utmTerm: urlParams.get('utm_term') || undefined,
        utmContent: urlParams.get('utm_content') || undefined,
      };

      const { data: result, error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || "",
          service: data.service || "",
          message: data.message,
          consentMarketing: data.consentMarketing || false,
          companySize: data.companySize,
          budgetRange: data.budgetRange,
          ...utmParams,
          website: "", // Honeypot field
        },
      });

      if (error) throw error;

      if (result?.success) {
        setIsSuccess(true);
        toast({
          title: "Successfully Submitted!",
          description: "Thank you for contacting us! We'll respond as soon as possible.",
        });
        form.reset();
        
        // Reset success state after animation
        setTimeout(() => setIsSuccess(false), 3000);
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

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field, fieldState }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="Your full name"
                                  className="bg-card/50 border-border focus:border-primary transition-colors"
                                  {...field}
                                />
                                {fieldState.error && (
                                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  className="bg-card/50 border-border focus:border-primary transition-colors"
                                  {...field}
                                />
                                {fieldState.error && (
                                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                type="tel"
                                placeholder="+84 xxx xxx xxx"
                                className="bg-card/50 border-border focus:border-primary transition-colors"
                                {...field}
                              />
                              {fieldState.error && (
                                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company name"
                              className="bg-card/50 border-border focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service of Interest (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-card/50 border-border focus:border-primary transition-colors">
                                <SelectValue placeholder="Select the service you're interested in" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea
                                placeholder="Share your automation needs..."
                                className="bg-card/50 border-border focus:border-primary transition-colors min-h-[120px]"
                                {...field}
                              />
                              {fieldState.error && (
                                <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-destructive" />
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consentMarketing"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border/50 p-4 bg-card/30">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              I agree to receive marketing communications from D2 Group about automation solutions and industry insights.
                            </FormLabel>
                            <FormDescription className="text-xs">
                              You can unsubscribe at any time. Read our{" "}
                              <Link to="/legal/privacy-policy" className="underline text-primary hover:text-primary/80">
                                Privacy Policy
                              </Link>
                              {" "}and{" "}
                              <Link to="/legal/gdpr-compliance" className="underline text-primary hover:text-primary/80">
                                GDPR Compliance
                              </Link>
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full shadow-glow group relative" 
                      disabled={isSubmitting || isSuccess}
                    >
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isSuccess && <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />}
                      {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                      {!isSubmitting && !isSuccess && (
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </form>
                </Form>
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
