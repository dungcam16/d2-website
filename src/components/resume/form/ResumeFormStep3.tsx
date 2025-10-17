import { UseFormReturn } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, Briefcase, Award, BookOpen, FileText } from "lucide-react";

interface ResumeFormStep3Props {
  form: UseFormReturn<any>;
}

const ResumeFormStep3 = ({ form }: ResumeFormStep3Props) => {
  const values = form.getValues();
  const skillsArray = values.skills ? values.skills.split(',').map((s: string) => s.trim()).filter(Boolean) : [];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Review Your Information</h3>
        <p className="text-sm text-muted-foreground">
          Please review your details before generating your resume
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              {values.avatar ? (
                <AvatarImage src={values.avatar} alt="Avatar" />
              ) : (
                <AvatarFallback>
                  <User className="w-8 h-8" />
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">{values.fullName || "Not provided"}</h4>
              <p className="text-sm text-muted-foreground">{values.targetRole || "Not provided"}</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>{values.email || "Not provided"}</span>
            </div>
            {values.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{values.phone}</span>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Professional Details</h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Current Title</p>
              <p className="font-medium">{values.currentTitle || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
              <p className="font-medium">{values.yearsOfExperience || 0} years</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Template</p>
              <Badge variant="outline">{values.template || "Not selected"}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tone</p>
              <Badge variant="outline">{values.preferredTone || "Not selected"}</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Skills</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsArray.length > 0 ? (
              skillsArray.map((skill: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No skills provided</p>
            )}
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Education</h4>
          </div>
          <p className="text-sm whitespace-pre-wrap">{values.education || "Not provided"}</p>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Professional Summary</h4>
          </div>
          <p className="text-sm whitespace-pre-wrap">{values.professionalSummary || "Not provided"}</p>
        </Card>
      </div>
    </div>
  );
};

export default ResumeFormStep3;
