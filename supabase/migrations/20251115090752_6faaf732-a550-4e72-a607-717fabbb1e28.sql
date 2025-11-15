-- Fix search_path for security
DROP FUNCTION IF EXISTS public.search_knowledge_base(vector, float, int);

CREATE OR REPLACE FUNCTION public.search_knowledge_base(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  title text,
  content text,
  excerpt text,
  category text,
  slug text,
  similarity float
)
LANGUAGE sql STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT
    kb.id,
    kb.title,
    kb.content,
    kb.excerpt,
    kb.category,
    kb.slug,
    1 - (kb.embedding <=> query_embedding) as similarity
  FROM public.knowledge_base kb
  WHERE kb.is_published = true
    AND 1 - (kb.embedding <=> query_embedding) > match_threshold
  ORDER BY kb.embedding <=> query_embedding
  LIMIT match_count;
$$;