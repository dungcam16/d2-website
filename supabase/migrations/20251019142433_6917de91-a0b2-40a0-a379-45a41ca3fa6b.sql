-- Create public media bucket for storing uploaded images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media',
  'media',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
);

-- Allow authenticated users to upload media
CREATE POLICY "Authenticated users can upload media"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'media');

-- Allow authenticated users to update their own media
CREATE POLICY "Authenticated users can update media"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'media');

-- Allow authenticated users to delete media
CREATE POLICY "Authenticated users can delete media"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'media');

-- Allow public read access to media
CREATE POLICY "Public can view media"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'media');