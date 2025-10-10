import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface ContactFormProps {
  service?: string;
  title?: string;
  description?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  service = "general",
  title = "Get a Free Consultation",
  description = "Share your automation needs, and we'll create a customized solution for your business.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://n8n.d2group.co/webhook/website_d2group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: service,
          note: formData.message,
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
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An Error Occurred",
        description: "Please try again later or contact us directly via our hotline.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="gradient-card border-border tech-border p-8 animate-scale-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
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
            placeholder="e.g., 0912 345 678"
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
            placeholder={`Tell us about your ${service} needs...`}
            className="bg-card/50 border-border focus:border-primary transition-colors min-h-[120px]"
            required
          />
        </div>

        <Button type="submit" className="w-full shadow-glow group">
          <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
          Send Inquiry
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
