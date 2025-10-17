import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ResumeHero from "@/components/resume/ResumeHero";
import ResumeFeatures from "@/components/resume/ResumeFeatures";
import ResumeTemplateGallery from "@/components/resume/ResumeTemplateGallery";
import ResumePricing from "@/components/resume/ResumePricing";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";

const ResumeBuilder = () => {
  const [showForm, setShowForm] = useState(false);
  const [generatedHtml, setGeneratedHtml] = useState<string>("");
  const [showPreview, setShowPreview] = useState(false);

  const handleStartBuilding = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("resume-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleResumeGenerated = (html: string) => {
    setGeneratedHtml(html);
    setShowPreview(true);
    setShowForm(false);
    setTimeout(() => {
      document.getElementById("resume-preview")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCreateAnother = () => {
    setShowPreview(false);
    setGeneratedHtml("");
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="AI Resume Builder | Create Professional CV in Minutes - D2 Group"
        description="Build stunning, ATS-friendly resumes in minutes with our AI-powered CV builder. Choose from professional templates and get hired faster."
        keywords="resume builder, CV maker, AI resume, professional CV, job application, ATS resume"
        canonicalUrl="https://d2group.co/resume-builder"
      />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="flex-1">
          <ResumeHero onStartBuilding={handleStartBuilding} />
          <ResumeFeatures />
          <ResumeTemplateGallery />
          <ResumePricing />
          
          {showForm && !showPreview && (
            <section id="resume-form" className="py-20 px-4">
              <div className="container max-w-4xl mx-auto">
                <ResumeForm onResumeGenerated={handleResumeGenerated} />
              </div>
            </section>
          )}

          {showPreview && generatedHtml && (
            <section id="resume-preview" className="py-20 px-4 bg-secondary/30">
              <div className="container max-w-6xl mx-auto">
                <ResumePreview 
                  htmlContent={generatedHtml}
                  onCreateAnother={handleCreateAnother}
                />
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResumeBuilder;
