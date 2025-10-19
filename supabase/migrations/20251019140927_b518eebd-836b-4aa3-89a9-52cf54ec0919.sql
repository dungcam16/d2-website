-- Create site_settings table for managing website configuration
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL DEFAULT '{}'::jsonb,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Admin can view all settings
CREATE POLICY "Admins can view all settings"
ON public.site_settings
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admin can update settings
CREATE POLICY "Admins can update settings"
ON public.site_settings
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admin can insert settings
CREATE POLICY "Admins can insert settings"
ON public.site_settings
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Admin can delete settings
CREATE POLICY "Admins can delete settings"
ON public.site_settings
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default settings
INSERT INTO public.site_settings (setting_key, setting_value, description) VALUES
  ('site_name', '{"value": "D2 Group"}', 'Website name'),
  ('site_description', '{"value": "AI Automation Agency for Remote Teams"}', 'Website description'),
  ('seo_title', '{"value": "D2 Group — AI Automation Agency"}', 'Default SEO title'),
  ('seo_description', '{"value": "Professional AI automation agency serving remote teams"}', 'Default SEO description'),
  ('seo_keywords', '{"value": "AI automation, n8n, RAG systems, workflow automation"}', 'SEO keywords'),
  ('social_facebook', '{"value": ""}', 'Facebook page URL'),
  ('social_linkedin', '{"value": ""}', 'LinkedIn company URL'),
  ('social_twitter', '{"value": ""}', 'Twitter profile URL'),
  ('contact_email', '{"value": "contact@d2group.co"}', 'Contact email address'),
  ('contact_phone', '{"value": ""}', 'Contact phone number'),
  ('google_analytics_id', '{"value": ""}', 'Google Analytics tracking ID'),
  ('language_default', '{"value": "vi"}', 'Default website language')
ON CONFLICT (setting_key) DO NOTHING;