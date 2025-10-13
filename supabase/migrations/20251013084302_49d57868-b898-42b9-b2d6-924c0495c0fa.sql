-- Create case_studies table
CREATE TABLE public.case_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT,
  client TEXT,
  image_url TEXT,
  excerpt TEXT,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results JSONB DEFAULT '[]'::jsonb,
  tech TEXT[] DEFAULT '{}'::text[],
  icon_name TEXT DEFAULT 'Workflow',
  is_published BOOLEAN DEFAULT true,
  views INTEGER DEFAULT 0,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (published only)
CREATE POLICY "Published case studies are publicly readable"
ON public.case_studies
FOR SELECT
USING (is_published = true);

-- Create policies for admin full access
CREATE POLICY "Admins can view all case studies"
ON public.case_studies
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert case studies"
ON public.case_studies
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update case studies"
ON public.case_studies
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete case studies"
ON public.case_studies
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing case studies data
INSERT INTO public.case_studies (slug, title, category, client, image_url, excerpt, challenge, solution, results, tech, icon_name, order_index) VALUES
('youtube-automation', 'YouTube Content Automation Pipeline', 'Media & Content', 'Media channel with 100K+ subscribers', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop', 'Automated video publishing workflow reducing manual work by 95%', 'Manual upload of 10+ videos daily consuming 4 hours. Inconsistent metadata and branding setup.', 'Full-stack n8n automation with YouTube API, AI integration, and FFmpeg media processing.', '[{"label":"Time saved","value":"95%"},{"label":"Zero errors","value":"6 months"},{"label":"Savings","value":"$2K/mo"}]'::jsonb, '{n8n,YouTube API,FFmpeg,Google Cloud,Docker}', 'Youtube', 1),
('crm-automation', 'CRM Lead Management System', 'Sales & CRM', 'Real Estate company (50+ staff)', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop', 'Intelligent lead scoring and routing system increasing conversions by 40%', 'Leads scattered across platforms with manual scoring and delayed follow-ups.', 'Automated lead management with smart scoring and multi-channel follow-ups.', '[{"label":"Conversion","value":"+40%"},{"label":"Speed","value":"-75%"},{"label":"Revenue","value":"$15K/mo"}]'::jsonb, '{n8n,HubSpot,Slack,Google Analytics}', 'Building2', 2),
('ecommerce-sync', 'Multi-Store Inventory Sync', 'E-commerce', 'Online store with 1,000+ SKUs', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop', 'Real-time inventory synchronization across 5 sales channels', 'Manual stock updates causing frequent stockouts and inefficient monitoring.', 'Real-time inventory monitoring with automated supplier notifications.', '[{"label":"Stockouts","value":"-90%"},{"label":"Cost","value":"-30%"},{"label":"Accuracy","value":"100%"}]'::jsonb, '{n8n,WooCommerce,PostgreSQL,Telegram}', 'ShoppingCart', 3),
('ai-content-workflow', 'AI Content Generation Pipeline', 'Marketing Automation', 'Digital marketing agency', 'https://images.unsplash.com/photo-1554774853-b414d2a2b3b6?w=800&auto=format&fit=crop', 'Automated content creation and social publishing with AI', 'Manual content creation bottleneck limiting production capacity.', 'OpenAI integration with automated scheduling across social platforms.', '[{"label":"Output","value":"+3x"},{"label":"Time","value":"-85%"},{"label":"Quality","value":"4.5/5"}]'::jsonb, '{n8n,OpenAI,Buffer,Google Drive}', 'Sparkles', 4),
('slack-notion-sync', 'Slack & Notion Integration', 'Team Productivity', 'Tech startup (25 employees)', 'https://images.unsplash.com/photo-1581092334538-6a7f1f57c6f5?w=800&auto=format&fit=crop', 'Bi-directional sync between communication and project management', 'Disjointed communication with manual task duplication across platforms.', 'Real-time synchronization bot with smart task creation and updates.', '[{"label":"Efficiency","value":"+60%"},{"label":"Manual","value":"-90%"},{"label":"Adoption","value":"98%"}]'::jsonb, '{n8n,Slack API,Notion API,Node.js}', 'MessageSquare', 5),
('data-analytics-dashboard', 'Multi-Platform Analytics Hub', 'Data Analytics', 'Marketing analytics team', 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800&auto=format&fit=crop', 'Unified reporting dashboard aggregating data from 8 platforms', 'Data scattered across multiple platforms making reporting impossible.', 'Automated data collection and unified dashboard with normalized metrics.', '[{"label":"Report time","value":"-90%"},{"label":"Accuracy","value":"99%"},{"label":"Insights","value":"+70%"}]'::jsonb, '{n8n,Google Analytics,Meta Ads,HubSpot}', 'BarChart3', 6),
('telegram-monitoring', 'Real-Time Alert System', 'DevOps & Monitoring', 'SaaS platform', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop', 'Instant business alerts via Telegram for critical events', 'Delayed awareness of system issues leading to slow response times.', 'Webhook-based alerting with instant Telegram notifications.', '[{"label":"Alert","value":"<2s"},{"label":"Uptime","value":"99.9%"},{"label":"MTTR","value":"-80%"}]'::jsonb, '{n8n,Telegram,PostgreSQL,Webhooks}', 'MessageSquare', 7),
('shopify-automation', 'Shopify Order Automation', 'E-commerce', 'Fashion e-commerce brand', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop', 'End-to-end order processing and customer communication', 'Manual tracking updates causing delays and high support tickets.', 'Automated order workflow with stage-based customer notifications.', '[{"label":"CSAT","value":"+35%"},{"label":"Tickets","value":"-60%"},{"label":"Speed","value":"-50%"}]'::jsonb, '{n8n,Shopify,Google Sheets,Slack}', 'ShoppingCart', 8),
('hubspot-pipeline', 'HubSpot Sales Pipeline', 'Sales Automation', 'B2B SaaS company', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop', 'Dynamic lead scoring and automated pipeline management', 'Inefficient lead qualification with slow sales cycles.', 'Smart scoring with automated progression based on engagement metrics.', '[{"label":"Cycle","value":"-30%"},{"label":"Win rate","value":"+25%"},{"label":"Quality","value":"+45%"}]'::jsonb, '{n8n,HubSpot,Zapier,Slack}', 'Building2', 9);