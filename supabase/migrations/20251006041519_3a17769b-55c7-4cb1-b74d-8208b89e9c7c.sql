-- Create workflow_templates table
CREATE TABLE public.workflow_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  content TEXT NOT NULL,
  workflow_json JSONB,
  author TEXT NOT NULL DEFAULT 'D2 Group',
  thumbnail_url TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  node_count INTEGER DEFAULT 0,
  integrations TEXT[] DEFAULT '{}',
  views INTEGER DEFAULT 0,
  downloads INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.workflow_templates ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to published templates
CREATE POLICY "Published workflow templates are publicly readable" 
ON public.workflow_templates 
FOR SELECT 
USING (is_published = true);

-- Create index on slug for faster lookups
CREATE INDEX idx_workflow_templates_slug ON public.workflow_templates(slug);

-- Create index on tags for filtering
CREATE INDEX idx_workflow_templates_tags ON public.workflow_templates USING GIN(tags);

-- Create index on category for filtering
CREATE INDEX idx_workflow_templates_category ON public.workflow_templates(category);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_workflow_templates_updated_at
BEFORE UPDATE ON public.workflow_templates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();