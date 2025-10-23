-- Fix overly permissive storage policies
-- Drop existing policies that allow any authenticated user to delete/update
DROP POLICY IF EXISTS "Authenticated users can delete media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update media" ON storage.objects;

-- Create admin-only policies for delete and update
CREATE POLICY "Admins can delete media"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'media' AND
  has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update media"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'media' AND
  has_role(auth.uid(), 'admin'::app_role)
);