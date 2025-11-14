-- Add SEO metadata columns to blog_posts
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS meta_title VARCHAR(60),
ADD COLUMN IF NOT EXISTS meta_description VARCHAR(160),
ADD COLUMN IF NOT EXISTS focus_keyword VARCHAR(100),
ADD COLUMN IF NOT EXISTS canonical_url TEXT;

-- Add SEO metadata columns to case_studies
ALTER TABLE case_studies
ADD COLUMN IF NOT EXISTS meta_title VARCHAR(60),
ADD COLUMN IF NOT EXISTS meta_description VARCHAR(160),
ADD COLUMN IF NOT EXISTS focus_keyword VARCHAR(100);

-- Add SEO metadata columns to workflow_templates
ALTER TABLE workflow_templates
ADD COLUMN IF NOT EXISTS meta_title VARCHAR(60),
ADD COLUMN IF NOT EXISTS meta_description VARCHAR(160),
ADD COLUMN IF NOT EXISTS focus_keyword VARCHAR(100);

-- Add SEO metadata columns to migration_guides
ALTER TABLE migration_guides
ADD COLUMN IF NOT EXISTS meta_title VARCHAR(60),
ADD COLUMN IF NOT EXISTS meta_description VARCHAR(160),
ADD COLUMN IF NOT EXISTS focus_keyword VARCHAR(100);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_workflow_templates_slug ON workflow_templates(slug);
CREATE INDEX IF NOT EXISTS idx_migration_guides_slug ON migration_guides(slug);

-- Create index for published content
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(is_published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_workflow_templates_published ON workflow_templates(is_published, published_at DESC);

-- Comment on new columns
COMMENT ON COLUMN blog_posts.meta_title IS 'SEO optimized title (max 60 chars)';
COMMENT ON COLUMN blog_posts.meta_description IS 'SEO meta description (max 160 chars)';
COMMENT ON COLUMN blog_posts.focus_keyword IS 'Primary keyword for SEO optimization';
COMMENT ON COLUMN blog_posts.canonical_url IS 'Canonical URL to prevent duplicate content issues';