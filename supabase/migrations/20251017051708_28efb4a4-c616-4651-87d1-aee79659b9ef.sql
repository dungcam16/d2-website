-- Update case_studies table structure to match blog format
-- Keep: image_url (banner), title, excerpt, slug, and metadata fields
-- Add: content column for HTML content
-- Remove: challenge, solution, results, tech columns

ALTER TABLE public.case_studies 
ADD COLUMN IF NOT EXISTS content text;

ALTER TABLE public.case_studies 
DROP COLUMN IF EXISTS challenge,
DROP COLUMN IF EXISTS solution,
DROP COLUMN IF EXISTS results,
DROP COLUMN IF EXISTS tech;