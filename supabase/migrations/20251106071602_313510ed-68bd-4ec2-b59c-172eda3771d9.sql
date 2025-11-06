-- Drop unused thumbnail column from workflow_templates
ALTER TABLE public.workflow_templates
DROP COLUMN IF EXISTS thumbnail_url;