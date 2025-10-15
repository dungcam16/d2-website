import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";

const BlogInsights = () => {
  const posts = [
    {
      title: "How to Combine GPT + n8n for Smarter Client Workflows",
      excerpt: "Learn how to integrate AI into your automation workflows for intelligent decision-making.",
      image: "blog-1",
    },
    {
      title: "5 Automation Ideas for Digital Agencies",
      excerpt: "Practical workflows that can save your agency 20+ hours per week.",
      image: "blog-2",
    },
    {
      title: "RAG Systems Explained (for Non-engineers)",
      excerpt: "Understand how Retrieval-Augmented Generation works and when to use it.",
      image: "blog-3",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest from the Lab
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <FileText className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 group">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
