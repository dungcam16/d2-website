import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Eye } from "lucide-react";

interface MigrationGuide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  from_platform: string;
  to_platform: string;
  difficulty_level: string;
  estimated_time: string;
  thumbnail_url: string;
  author: string;
  views: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const MigrationGuidesManager = () => {
  const [guides, setGuides] = useState<MigrationGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingGuide, setEditingGuide] = useState<Partial<MigrationGuide>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    from_platform: "",
    to_platform: "",
    difficulty_level: "Intermediate",
    estimated_time: "",
    thumbnail_url: "",
    author: "D2 Group",
    is_published: true,
  });

  useEffect(() => {
    loadGuides();
  }, []);

  const loadGuides = async () => {
    try {
      const { data, error } = await supabase
        .from("migration_guides" as any)
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setGuides((data as any) || []);
    } catch (error) {
      console.error("Error loading migration guides:", error);
      toast.error("Failed to load migration guides");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editingGuide.id) {
        const { error } = await supabase
          .from("migration_guides" as any)
          .update(editingGuide)
          .eq("id", editingGuide.id);

        if (error) throw error;
        toast.success("Migration guide updated successfully");
      } else {
        const { error } = await supabase
          .from("migration_guides" as any)
          .insert([editingGuide]);

        if (error) throw error;
        toast.success("Migration guide created successfully");
      }

      setIsEditing(false);
      setEditingGuide({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        from_platform: "",
        to_platform: "",
        difficulty_level: "Intermediate",
        estimated_time: "",
        thumbnail_url: "",
        author: "D2 Group",
        is_published: true,
      });
      loadGuides();
    } catch (error) {
      console.error("Error saving migration guide:", error);
      toast.error("Failed to save migration guide");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this migration guide?")) return;

    try {
      const { error } = await supabase
        .from("migration_guides" as any)
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Migration guide deleted successfully");
      loadGuides();
    } catch (error) {
      console.error("Error deleting migration guide:", error);
      toast.error("Failed to delete migration guide");
    }
  };

  if (loading) {
    return <div className="p-8">Loading migration guides...</div>;
  }

  if (isEditing) {
    return (
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {editingGuide.id ? "Edit Migration Guide" : "Create Migration Guide"}
          </h2>
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={editingGuide.title}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, title: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={editingGuide.slug}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, slug: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from_platform">From Platform</Label>
              <Input
                id="from_platform"
                value={editingGuide.from_platform}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, from_platform: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="to_platform">To Platform</Label>
              <Input
                id="to_platform"
                value={editingGuide.to_platform}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, to_platform: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="difficulty_level">Difficulty Level</Label>
              <Input
                id="difficulty_level"
                value={editingGuide.difficulty_level}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, difficulty_level: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimated_time">Estimated Time</Label>
              <Input
                id="estimated_time"
                value={editingGuide.estimated_time}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, estimated_time: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={editingGuide.author}
                onChange={(e) =>
                  setEditingGuide({ ...editingGuide, author: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              id="excerpt"
              value={editingGuide.excerpt}
              onChange={(e) =>
                setEditingGuide({ ...editingGuide, excerpt: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="thumbnail_url">Thumbnail URL</Label>
            <Input
              id="thumbnail_url"
              value={editingGuide.thumbnail_url}
              onChange={(e) =>
                setEditingGuide({ ...editingGuide, thumbnail_url: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <ReactQuill
              theme="snow"
              value={editingGuide.content}
              onChange={(content) =>
                setEditingGuide({ ...editingGuide, content })
              }
              className="h-64 mb-12"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="is_published"
              checked={editingGuide.is_published}
              onChange={(e) =>
                setEditingGuide({ ...editingGuide, is_published: e.target.checked })
              }
              className="rounded"
            />
            <Label htmlFor="is_published">Published</Label>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleSave}>Save Migration Guide</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Migration Guides</h2>
        <Button
          onClick={() => {
            setEditingGuide({
              title: "",
              slug: "",
              excerpt: "",
              content: "",
              from_platform: "",
              to_platform: "",
              difficulty_level: "Intermediate",
              estimated_time: "",
              thumbnail_url: "",
              author: "D2 Group",
              is_published: true,
            });
            setIsEditing(true);
          }}
        >
          Create New Guide
        </Button>
      </div>

      <div className="grid gap-4">
        {guides.map((guide) => (
          <Card key={guide.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    {guide.title}
                    {!guide.is_published && (
                      <Badge variant="secondary">Draft</Badge>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {guide.from_platform} → {guide.to_platform} | {guide.difficulty_level} | {guide.estimated_time}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {guide.views} views
                    </div>
                    <span>By {guide.author}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEditingGuide(guide);
                      setIsEditing(true);
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(guide.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{guide.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
