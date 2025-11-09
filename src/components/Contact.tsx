import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      consentMarketing: false,
    },
    mode: "onChange", // Enable real-time validation
  });

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const { data: result, error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || "",
          message: data.message,
          consentMarketing: data.consentMarketing || false,
          website: "", // Honeypot field
        },
      });

      if (error) throw error;

      if (result?.success) {
        setIsSuccess(true);
        toast({
          title: "Successfully Sent!",
          description: "Thank you for your message! We will get back to you as soon as possible.",
        });
        form.reset();
        
        // Reset success state after animation
        setTimeout(() => setIsSuccess(false), 3000);
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
                  name="message"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="Tell us about your automation needs..."
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
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border/50 p-3 bg-card/30">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I agree to receive marketing communications from D2 Group
                        </FormLabel>
                        <FormDescription className="text-xs">
                          You can unsubscribe anytime. <Link to="/legal/privacy-policy" className="underline text-primary">Privacy Policy</Link>
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
