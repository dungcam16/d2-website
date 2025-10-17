import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload, User } from "lucide-react";
import { useState } from "react";

interface ResumeFormStep1Props {
  form: UseFormReturn<any>;
}

const ResumeFormStep1 = ({ form }: ResumeFormStep1Props) => {
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setAvatarPreview(base64);
        form.setValue("avatar", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Basic Information</h3>
        <p className="text-sm text-muted-foreground">
          Let's start with your basic details
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            {...form.register("fullName")}
          />
          {form.formState.errors.fullName && (
            <p className="text-sm text-destructive">
              {form.formState.errors.fullName.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            {...form.register("phone")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetRole">Target Role *</Label>
          <Input
            id="targetRole"
            placeholder="Software Engineer"
            {...form.register("targetRole")}
          />
          {form.formState.errors.targetRole && (
            <p className="text-sm text-destructive">
              {form.formState.errors.targetRole.message as string}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredTone">Preferred Tone *</Label>
          <Select
            onValueChange={(value) => form.setValue("preferredTone", value)}
            defaultValue={form.watch("preferredTone")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
              <SelectItem value="concise">Concise</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="template">Template *</Label>
          <Select
            onValueChange={(value) => form.setValue("template", value)}
            defaultValue={form.watch("template")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="classic">Classic Professional</SelectItem>
              <SelectItem value="modern">Modern Minimalist</SelectItem>
              <SelectItem value="creative">Creative Bold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Upload Avatar (Optional)</Label>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              {avatarPreview ? (
                <AvatarImage src={avatarPreview} alt="Avatar preview" />
              ) : (
                <AvatarFallback>
                  <User className="w-8 h-8" />
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("avatar")?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                JPG, PNG or GIF (max. 2MB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFormStep1;
