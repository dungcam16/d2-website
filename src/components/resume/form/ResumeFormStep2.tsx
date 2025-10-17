import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ResumeFormStep2Props {
  form: UseFormReturn<any>;
}

const ResumeFormStep2 = ({ form }: ResumeFormStep2Props) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Professional Information</h3>
        <p className="text-sm text-muted-foreground">
          Tell us about your professional background
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentTitle">Current Title *</Label>
          <Input
            id="currentTitle"
            placeholder="Senior Software Engineer"
            {...form.register("currentTitle")}
          />
          {form.formState.errors.currentTitle && (
            <p className="text-sm text-destructive">
              {form.formState.errors.currentTitle.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
          <Input
            id="yearsOfExperience"
            type="number"
            min="0"
            placeholder="5"
            {...form.register("yearsOfExperience", { valueAsNumber: true })}
          />
          {form.formState.errors.yearsOfExperience && (
            <p className="text-sm text-destructive">
              {form.formState.errors.yearsOfExperience.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills (comma-separated) *</Label>
          <Textarea
            id="skills"
            placeholder="JavaScript, React, Node.js, TypeScript, AWS"
            rows={3}
            {...form.register("skills")}
          />
          <p className="text-xs text-muted-foreground">
            Separate each skill with a comma
          </p>
          {form.formState.errors.skills && (
            <p className="text-sm text-destructive">
              {form.formState.errors.skills.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="education">Education *</Label>
          <Textarea
            id="education"
            placeholder="Bachelor of Science in Computer Science&#10;University of Example, 2015-2019"
            rows={4}
            {...form.register("education")}
          />
          {form.formState.errors.education && (
            <p className="text-sm text-destructive">
              {form.formState.errors.education.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="professionalSummary">Professional Summary *</Label>
          <Textarea
            id="professionalSummary"
            placeholder="Experienced software engineer with 5+ years in full-stack development..."
            rows={6}
            {...form.register("professionalSummary")}
          />
          <p className="text-xs text-muted-foreground">
            Write a brief overview of your professional experience and key achievements
          </p>
          {form.formState.errors.professionalSummary && (
            <p className="text-sm text-destructive">
              {form.formState.errors.professionalSummary.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeFormStep2;
