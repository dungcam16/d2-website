-- Create function to increment migration guide views
CREATE OR REPLACE FUNCTION public.increment_migration_guide_views(guide_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.migration_guides
  SET views = views + 1
  WHERE slug = guide_slug;
END;
$$;