import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import ResumeFormStep1 from "./form/ResumeFormStep1";
import ResumeFormStep2 from "./form/ResumeFormStep2";
import ResumeFormStep3 from "./form/ResumeFormStep3";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  targetRole: z.string().min(2, "Target role is required"),
  preferredTone: z.enum(["professional", "creative", "concise"]),
  template: z.enum(["classic", "modern", "creative"]),
  avatar: z.string().optional(),
  currentTitle: z.string().min(2, "Current title is required"),
  yearsOfExperience: z.number().min(0, "Years of experience must be 0 or greater"),
  skills: z.string().min(3, "Skills are required"),
  education: z.string().min(10, "Education details are required"),
  professionalSummary: z.string().min(20, "Professional summary must be at least 20 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ResumeFormProps {
  onResumeGenerated: (html: string) => void;
}

const ResumeForm = ({ onResumeGenerated }: ResumeFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      targetRole: "",
      preferredTone: "professional",
      template: "modern",
      avatar: "",
      currentTitle: "",
      yearsOfExperience: 0,
      skills: "",
      education: "",
      professionalSummary: "",
    },
  });

  const progress = (currentStep / 3) * 100;

  const validateStep = async (step: number) => {
    const fieldsToValidate: (keyof FormData)[] = 
      step === 1 
        ? ["fullName", "email", "targetRole", "preferredTone", "template"]
        : step === 2
        ? ["currentTitle", "yearsOfExperience", "skills", "education", "professionalSummary"]
        : [];

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: FormData) => {
    setIsGenerating(true);

    try {
      const skillsArray = data.skills.split(',').map(skill => skill.trim()).filter(Boolean);
      
      const payload = {
        ...data,
        skills: skillsArray,
        utm_source: "landing_page",
        campaign_id: "default",
        flow: "create",
        submitted_at: new Date().toISOString(),
      };

      console.log("Submitting resume data:", payload);

      const response = await fetch("https://n8n.d2group.co/webhook/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const htmlContent = await response.text();
      
      toast({
        title: "Success!",
        description: "Your resume has been generated successfully.",
      });

      onResumeGenerated(htmlContent);
    } catch (error) {
      console.error("Error generating resume:", error);
      toast({
        title: "Error",
        description: "Failed to generate resume. Please try again.",
        variant: "destructive",
      });
      setIsGenerating(false);
    }
  };

  return (
    <Card className="p-8 space-y-8 animate-fade-in relative">
      {isGenerating && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg">
          <div className="text-center space-y-4">
            <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Generating Your Resume...</h3>
              <p className="text-sm text-muted-foreground">
                Our AI is crafting your professional resume. This may take a few moments.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Step {currentStep} of 3
          </h2>
          <span className="text-sm text-muted-foreground">
            {currentStep === 1 && "Basic Information"}
            {currentStep === 2 && "Professional Details"}
            {currentStep === 3 && "Review & Generate"}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 1 && <ResumeFormStep1 form={form} />}
        {currentStep === 2 && <ResumeFormStep2 form={form} />}
        {currentStep === 3 && <ResumeFormStep3 form={form} />}

        <div className="flex gap-4 pt-6 border-t">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={isGenerating}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          
          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isGenerating}
              className="flex-1 bg-gradient-primary"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Resume"
              )}
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default ResumeForm;
