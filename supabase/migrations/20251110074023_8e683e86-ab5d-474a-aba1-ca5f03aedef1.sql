-- Phase 1: Blog Images, Migration Guides Table, and Security

-- 1. Create migration_guides table
CREATE TABLE IF NOT EXISTS public.migration_guides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  from_platform text NOT NULL,
  to_platform text NOT NULL DEFAULT 'n8n',
  difficulty_level text NOT NULL DEFAULT 'Intermediate',
  estimated_time text NOT NULL,
  thumbnail_url text,
  author text NOT NULL DEFAULT 'D2 Group',
  views integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.migration_guides ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Published migration guides are publicly readable"
  ON public.migration_guides
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage migration guides"
  ON public.migration_guides
  FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create indexes
CREATE INDEX idx_migration_guides_slug ON public.migration_guides(slug);
CREATE INDEX idx_migration_guides_published ON public.migration_guides(is_published, created_at DESC);

-- Add trigger for updated_at
CREATE TRIGGER update_migration_guides_updated_at
  BEFORE UPDATE ON public.migration_guides
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- 2. Update blog_posts images to use local assets
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = '/blog/whatsapp-business-api-guide';
UPDATE blog_posts SET image_url = '/src/assets/blog-ai-chatbots.jpg' WHERE slug = 'ai-chatbot-platforms-for-business-guide';
UPDATE blog_posts SET image_url = '/src/assets/blog-automation-ideas.jpg' WHERE slug = 'ai-driven-automation-solutions-for-complexity';
UPDATE blog_posts SET image_url = '/src/assets/blog-automation-ideas.jpg' WHERE slug = 'business-process-automation-consultant';
UPDATE blog_posts SET image_url = '/src/assets/blog-lowcode-developers.jpg' WHERE slug = 'citizen-developer-enablement-consulting';
UPDATE blog_posts SET image_url = '/src/assets/blog-marketing-automation.jpg' WHERE slug = 'custom-marketing-automation-solutions';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'd2-group-whatsapp-business-api-solutions-guide';
UPDATE blog_posts SET image_url = '/src/assets/blog-ai-chatbots.jpg' WHERE slug = 'enterprise-ai-chatbot-development';
UPDATE blog_posts SET image_url = '/src/assets/blog-n8n-automation.jpg' WHERE slug = 'hire-n8n-developer';
UPDATE blog_posts SET image_url = '/src/assets/blog-automation-ideas.jpg' WHERE slug = 'master-data-sync-errors-ai-automation';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'mastering-customer-engagement-whatsapp-business-api-d2-group';
UPDATE blog_posts SET image_url = '/src/assets/blog-seo-optimization.jpg' WHERE slug = 'mastering-seo-comprehensive-guide-content-optimization';
UPDATE blog_posts SET image_url = '/src/assets/blog-zapier-migration.jpg' WHERE slug = 'solving-slow-zapier-support-performance';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'unlock-business-growth-whatsapp-business-api-guide';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'unlock-business-growth-with-d2-groups-advanced-whatsapp-business-api-solutions';
UPDATE blog_posts SET image_url = '/src/assets/blog-sms-marketing.jpg' WHERE slug = 'unlock-business-growth-with-sms-marketing-comprehensive-guide-d2-group';
UPDATE blog_posts SET image_url = '/src/assets/blog-ai-automation.jpg' WHERE slug = 'unlocking-business-potential-d2-group-ai-automation';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'whatsapp-business-api-enterprise-guide-d2-group';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'whatsapp-business-api-guide';
UPDATE blog_posts SET image_url = '/src/assets/blog-whatsapp-api.jpg' WHERE slug = 'whatsapp-business-api-guide-d2group';
UPDATE blog_posts SET image_url = '/src/assets/blog-automation-ideas.jpg' WHERE slug = 'why-lead-nurturing-sequences-fail-and-how-to-fix-with-ai-automation';
UPDATE blog_posts SET image_url = '/src/assets/blog-zalo-oa.jpg' WHERE slug = 'zalo-oa-business-growth';
UPDATE blog_posts SET image_url = '/src/assets/blog-zapier-migration.jpg' WHERE slug = 'zapier-migration-consultant';
UPDATE blog_posts SET image_url = '/src/assets/blog-zapier-transition.jpg' WHERE slug = 'zapier-to-n8n-migration-timeline';

-- 3. Insert initial migration guides content
INSERT INTO public.migration_guides (title, slug, excerpt, content, from_platform, to_platform, difficulty_level, estimated_time, thumbnail_url) VALUES
(
  'Zapier to n8n Migration: Complete Guide',
  'zapier-to-n8n-migration',
  'Complete step-by-step guide to migrating your automation workflows from Zapier to n8n with zero downtime. Save 70-90% on automation costs.',
  '<h2>Why Migrate from Zapier to n8n?</h2>
<p>Zapier''s per-task pricing can quickly become expensive as your automation needs grow. n8n offers unlimited executions with a flat pricing model, saving businesses $6,000-$12,000 annually.</p>

<h3>Key Benefits</h3>
<ul>
<li><strong>Cost Savings:</strong> Reduce automation costs by 70-90%</li>
<li><strong>Unlimited Executions:</strong> No more task limits or overage charges</li>
<li><strong>Self-Hosted Option:</strong> Complete control over your data</li>
<li><strong>Advanced Features:</strong> Custom code, complex branching, and better error handling</li>
</ul>

<h2>Migration Process Overview</h2>

<h3>Phase 1: Assessment (Week 1)</h3>
<p>We audit your current Zapier setup:</p>
<ul>
<li>Document all active Zaps and their triggers/actions</li>
<li>Identify dependencies between workflows</li>
<li>Analyze monthly task usage and costs</li>
<li>Create detailed migration timeline</li>
</ul>

<h3>Phase 2: Design & Mapping (Week 2)</h3>
<p>Convert Zapier logic to n8n workflows:</p>
<ul>
<li>Map each Zapier app to n8n nodes</li>
<li>Optimize workflow logic for n8n''s capabilities</li>
<li>Design improved error handling</li>
<li>Set up staging environment for testing</li>
</ul>

<h3>Phase 3: Migration & Testing (Week 3-4)</h3>
<p>Execute zero-downtime migration:</p>
<ul>
<li>Migrate workflows in batches by priority</li>
<li>Run parallel testing (Zapier + n8n simultaneously)</li>
<li>Validate data accuracy and workflow performance</li>
<li>Monitor for edge cases and issues</li>
</ul>

<h3>Phase 4: Training & Handoff (Week 4+)</h3>
<ul>
<li>Train your team on n8n platform</li>
<li>Provide comprehensive documentation</li>
<li>30-day support period for any issues</li>
<li>Deactivate Zapier after confirmation</li>
</ul>

<h2>Common Zapier to n8n App Mappings</h2>
<table>
<tr><th>Zapier App</th><th>n8n Equivalent</th><th>Notes</th></tr>
<tr><td>Gmail</td><td>Gmail node</td><td>100% compatible</td></tr>
<tr><td>Slack</td><td>Slack node</td><td>All features supported</td></tr>
<tr><td>Google Sheets</td><td>Google Sheets node</td><td>Enhanced capabilities</td></tr>
<tr><td>Webhooks</td><td>Webhook node</td><td>More flexible options</td></tr>
<tr><td>Formatter</td><td>Function/Code nodes</td><td>More powerful transformations</td></tr>
</table>

<h2>Expected Results</h2>
<ul>
<li><strong>Cost Reduction:</strong> 70-90% savings on automation costs</li>
<li><strong>Zero Downtime:</strong> Seamless transition with parallel running</li>
<li><strong>Improved Performance:</strong> Faster execution times</li>
<li><strong>Better Control:</strong> Self-hosted option for data sovereignty</li>
</ul>

<h2>Get Started</h2>
<p>Ready to migrate? Contact D2 Group for a free migration assessment and cost-savings analysis.</p>',
  'Zapier',
  'n8n',
  'Intermediate',
  '2-4 weeks',
  '/src/assets/blog-zapier-migration.jpg'
),
(
  'Make (Integromat) to n8n Migration Guide',
  'make-to-n8n-migration',
  'Migrate from Make (Integromat) to n8n with our proven methodology. Maintain workflow complexity while reducing costs by 60%.',
  '<h2>Why Migrate from Make to n8n?</h2>
<p>Make (formerly Integromat) offers powerful visual automation, but n8n provides similar capabilities with better pricing and self-hosting options.</p>

<h3>Key Advantages</h3>
<ul>
<li><strong>Similar Interface:</strong> Visual workflow builder familiar to Make users</li>
<li><strong>Better Pricing:</strong> 40-60% cost reduction</li>
<li><strong>Self-Hosting:</strong> Complete data control</li>
<li><strong>Enhanced Features:</strong> More flexible node configuration</li>
</ul>

<h2>Migration Process</h2>

<h3>Week 1: Workflow Analysis</h3>
<p>Document your Make scenarios:</p>
<ul>
<li>Export scenario blueprints from Make</li>
<li>Map data structures and transformations</li>
<li>Identify custom functions and filters</li>
<li>Calculate current operation usage</li>
</ul>

<h3>Week 2: Rebuild & Test</h3>
<p>Recreate scenarios in n8n:</p>
<ul>
<li>Convert Make modules to n8n nodes</li>
<li>Replicate router and filter logic</li>
<li>Test with real data in staging</li>
<li>Optimize for n8n best practices</li>
</ul>

<h2>Make to n8n Node Mapping</h2>
<table>
<tr><th>Make Module</th><th>n8n Node</th><th>Migration Notes</th></tr>
<tr><td>HTTP</td><td>HTTP Request</td><td>Direct equivalent</td></tr>
<tr><td>Router</td><td>Switch/IF nodes</td><td>More flexible branching</td></tr>
<tr><td>Iterator</td><td>Loop nodes</td><td>Enhanced iteration control</td></tr>
<tr><td>Tools</td><td>Code/Function nodes</td><td>More capabilities</td></tr>
</table>

<h2>Expected Outcomes</h2>
<ul>
<li>40-60% cost reduction</li>
<li>Same or better performance</li>
<li>1-2 week migration timeline</li>
<li>Minimal workflow changes required</li>
</ul>

<p>Contact D2 Group for a personalized Make to n8n migration plan.</p>',
  'Make',
  'n8n',
  'Beginner',
  '1-2 weeks',
  '/src/assets/blog-automation-ideas.jpg'
),
(
  'IFTTT to n8n Migration: Upgrade Your Automation',
  'ifttt-to-n8n-migration',
  'Outgrow IFTTT''s simple applets with n8n''s professional automation platform. Unlock advanced workflows while maintaining simplicity.',
  '<h2>Why Upgrade from IFTTT to n8n?</h2>
<p>IFTTT is great for simple automations, but businesses quickly outgrow its "if this, then that" model. n8n offers professional features while remaining accessible.</p>

<h3>What You Gain</h3>
<ul>
<li><strong>Multi-Step Workflows:</strong> Go beyond single trigger-action pairs</li>
<li><strong>Conditional Logic:</strong> Build smart, branching workflows</li>
<li><strong>Data Transformation:</strong> Process and format data within workflows</li>
<li><strong>Self-Hosting:</strong> Run on your own infrastructure</li>
</ul>

<h2>Migration Steps</h2>

<h3>Step 1: Applet Inventory</h3>
<ul>
<li>List all active IFTTT applets</li>
<li>Document trigger and action details</li>
<li>Identify business-critical automations</li>
</ul>

<h3>Step 2: n8n Workflow Design</h3>
<ul>
<li>Convert simple applets 1:1 to n8n</li>
<li>Enhance with multi-step logic where valuable</li>
<li>Add error handling and notifications</li>
</ul>

<h3>Step 3: Testing & Deployment</h3>
<ul>
<li>Test each workflow thoroughly</li>
<li>Run parallel for 1 week</li>
<li>Disable IFTTT applets after confirmation</li>
</ul>

<h2>Common IFTTT to n8n Upgrades</h2>
<table>
<tr><th>IFTTT Applet</th><th>n8n Enhanced Version</th></tr>
<tr><td>Post tweet to Slack</td><td>Tweet → Sentiment analysis → Slack with priority</td></tr>
<tr><td>Email to Sheets</td><td>Email → Parse data → Multiple sheets + Notification</td></tr>
<tr><td>RSS to Email</td><td>RSS → Filter keywords → Format → Multiple channels</td></tr>
</table>

<h2>Migration Timeline</h2>
<p>Most IFTTT users complete migration in <strong>3-5 days</strong> with significant functionality improvements.</p>

<p>Ready to upgrade? Contact D2 Group for assistance.</p>',
  'IFTTT',
  'n8n',
  'Beginner',
  '3-5 days',
  '/src/assets/blog-automation-ideas.jpg'
);
