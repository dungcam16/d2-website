-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'D2 Group',
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  image_url TEXT,
  tags TEXT[] DEFAULT '{}',
  views INTEGER DEFAULT 0,
  read_time INTEGER DEFAULT 5,
  slug TEXT NOT NULL UNIQUE,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (is_published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample blog post
INSERT INTO public.blog_posts (title, excerpt, content, slug, tags, image_url) VALUES 
('Xu hướng Digital Marketing 2024', 
'Khám phá những xu hướng mới nhất trong Digital Marketing năm 2024 và cách ứng dụng vào doanh nghiệp của bạn.', 
'Digital Marketing đang không ngừng phát triển với những xu hướng mới. Trong năm 2024, các doanh nghiệp cần chú ý đến AI Marketing, Video Content, và Personalization để tăng hiệu quả marketing.', 
'xu-huong-digital-marketing-2024',
'{"Digital Marketing", "AI", "Xu hướng"}',
'/placeholder.svg');