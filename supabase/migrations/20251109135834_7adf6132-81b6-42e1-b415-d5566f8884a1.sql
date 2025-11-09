-- Phase 1: Create Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
  source text DEFAULT 'contact_form',
  consent_marketing boolean DEFAULT false,
  ip_address text,
  user_agent text,
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Phase 1: Create Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'unsubscribed')),
  source text DEFAULT 'blog_page',
  consent_marketing boolean DEFAULT true,
  ip_address text,
  subscribed_at timestamptz,
  unsubscribed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
CREATE POLICY "Admins can view all submissions" 
ON public.contact_submissions
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert submissions" 
ON public.contact_submissions
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update submissions" 
ON public.contact_submissions
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete submissions" 
ON public.contact_submissions
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Admins can view all subscribers" 
ON public.newsletter_subscribers
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert subscribers" 
ON public.newsletter_subscribers
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update subscribers" 
ON public.newsletter_subscribers
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete subscribers" 
ON public.newsletter_subscribers
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Triggers for updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_newsletter_subscribers_updated_at
  BEFORE UPDATE ON public.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Phase 5: Database Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON public.blog_posts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON public.contact_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON public.newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON public.case_studies(is_published, order_index);
CREATE INDEX IF NOT EXISTS idx_workflow_templates_slug ON public.workflow_templates(slug);
CREATE INDEX IF NOT EXISTS idx_workflow_templates_published ON public.workflow_templates(is_published, published_at DESC);

-- Phase 2: Update blog_posts image_url (data update)
UPDATE public.blog_posts SET image_url = '/src/assets/blog-zapier-costs-control.jpg' WHERE slug = 'zapier-costs-control';
UPDATE public.blog_posts SET image_url = '/src/assets/blog-lowcode-developers.jpg' WHERE slug = 'lowcode-developers';
UPDATE public.blog_posts SET image_url = '/src/assets/blog-zapier-transition.jpg' WHERE slug = 'zapier-transition';
UPDATE public.blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'whatsapp-api';
UPDATE public.blog_posts SET image_url = '/src/assets/blog-ai-marketing-automation.jpg' WHERE slug = 'ai-marketing-automation';
UPDATE public.blog_posts SET image_url = '/src/assets/blog-sms-marketing.jpg' WHERE slug = 'sms-marketing';
UPDATE public.blog_posts SET image_url = '/src/assets/blog-n8n-pricing.jpg' WHERE slug = 'n8n-pricing';