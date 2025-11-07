import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory cache
let cachedSitemap: string | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check cache
    const now = Date.now();
    if (cachedSitemap && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
      console.log('Serving cached sitemap');
      return new Response(cachedSitemap, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    console.log('Generating fresh sitemap');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const baseUrl = 'https://d2group.co';
    const urls: SitemapUrl[] = [];

    // Static pages
    const staticPages = [
      { loc: '/', changefreq: 'weekly', priority: '1.0' },
      { loc: '/pricing', changefreq: 'monthly', priority: '0.8' },
      { loc: '/portfolio', changefreq: 'weekly', priority: '0.8' },
      { loc: '/company/about', changefreq: 'monthly', priority: '0.7' },
      { loc: '/company/team', changefreq: 'monthly', priority: '0.7' },
      { loc: '/company/partners', changefreq: 'monthly', priority: '0.6' },
      { loc: '/company/contact', changefreq: 'monthly', priority: '0.9' },
      { loc: '/services/n8n-automation', changefreq: 'monthly', priority: '0.9' },
      { loc: '/services/ai-chatbots', changefreq: 'monthly', priority: '0.9' },
      { loc: '/services/marketing-automation', changefreq: 'monthly', priority: '0.9' },
      { loc: '/services/zapier-migration', changefreq: 'monthly', priority: '0.8' },
      { loc: '/services/nocode-lowcode', changefreq: 'monthly', priority: '0.8' },
      { loc: '/solutions/saas-companies', changefreq: 'monthly', priority: '0.8' },
      { loc: '/solutions/ecommerce-brands', changefreq: 'monthly', priority: '0.8' },
      { loc: '/solutions/digital-agencies', changefreq: 'monthly', priority: '0.8' },
      { loc: '/solutions/fintech-companies', changefreq: 'monthly', priority: '0.8' },
      { loc: '/resources/blog', changefreq: 'daily', priority: '0.9' },
      { loc: '/resources/casestudies', changefreq: 'weekly', priority: '0.9' },
      { loc: '/resources/templates', changefreq: 'weekly', priority: '0.9' },
      { loc: '/resources/migration-guides', changefreq: 'monthly', priority: '0.7' },
      { loc: '/resources/roi-calculator', changefreq: 'monthly', priority: '0.7' },
      { loc: '/legal/privacy-policy', changefreq: 'yearly', priority: '0.3' },
      { loc: '/legal/terms-of-service', changefreq: 'yearly', priority: '0.3' },
      { loc: '/legal/cookie-policy', changefreq: 'yearly', priority: '0.3' },
      { loc: '/legal/gdpr-compliance', changefreq: 'yearly', priority: '0.3' },
    ];

    staticPages.forEach(page => {
      urls.push({
        loc: `${baseUrl}${page.loc}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: page.changefreq,
        priority: page.priority,
      });
    });

    // Fetch blog posts
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (blogError) {
      console.error('Error fetching blog posts:', blogError);
    } else if (blogPosts) {
      blogPosts.forEach(post => {
        urls.push({
          loc: `${baseUrl}/resources/blog/${post.slug}`,
          lastmod: (post.updated_at || post.published_at).split('T')[0],
          changefreq: 'monthly',
          priority: '0.7',
        });
      });
    }

    // Fetch case studies
    const { data: caseStudies, error: caseError } = await supabase
      .from('case_studies')
      .select('slug, updated_at')
      .eq('is_published', true)
      .order('sort', { ascending: true });

    if (caseError) {
      console.error('Error fetching case studies:', caseError);
    } else if (caseStudies) {
      caseStudies.forEach(study => {
        urls.push({
          loc: `${baseUrl}/resources/casestudies/${study.slug}`,
          lastmod: study.updated_at.split('T')[0],
          changefreq: 'monthly',
          priority: '0.7',
        });
      });
    }

    // Fetch workflow templates
    const { data: templates, error: templateError } = await supabase
      .from('workflow_templates')
      .select('slug, updated_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (templateError) {
      console.error('Error fetching templates:', templateError);
    } else if (templates) {
      templates.forEach(template => {
        urls.push({
          loc: `${baseUrl}/resources/templates/${template.slug}`,
          lastmod: template.updated_at.split('T')[0],
          changefreq: 'monthly',
          priority: '0.6',
        });
      });
    }

    // Generate XML
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Update cache
    cachedSitemap = xmlContent;
    cacheTimestamp = now;

    console.log(`Sitemap generated with ${urls.length} URLs`);

    return new Response(xmlContent, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
