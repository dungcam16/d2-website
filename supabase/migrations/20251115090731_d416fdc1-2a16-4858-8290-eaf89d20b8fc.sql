-- Enable pgvector extension for AI embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Create knowledge_base table
CREATE TABLE public.knowledge_base (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  keywords TEXT[] DEFAULT '{}',
  metadata JSONB DEFAULT '{}',
  embedding vector(1536), -- OpenAI ada-002 embedding size
  is_published BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for efficient searching
CREATE INDEX idx_kb_category ON public.knowledge_base(category);
CREATE INDEX idx_kb_keywords ON public.knowledge_base USING GIN(keywords);
CREATE INDEX idx_kb_search ON public.knowledge_base USING GIN(to_tsvector('english', content));
CREATE INDEX idx_kb_embedding ON public.knowledge_base USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_kb_published ON public.knowledge_base(is_published);

-- Enable RLS
ALTER TABLE public.knowledge_base ENABLE ROW LEVEL SECURITY;

-- Public can view published articles
CREATE POLICY "Published knowledge base articles are publicly readable"
  ON public.knowledge_base
  FOR SELECT
  USING (is_published = true);

-- Admins can manage all articles
CREATE POLICY "Admins can manage knowledge base"
  ON public.knowledge_base
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_knowledge_base_updated_at
  BEFORE UPDATE ON public.knowledge_base
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Function to search knowledge base with vector similarity
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

-- Function to increment view count
CREATE OR REPLACE FUNCTION public.increment_kb_views(article_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  UPDATE public.knowledge_base
  SET view_count = view_count + 1
  WHERE slug = article_slug;
END;
$$;