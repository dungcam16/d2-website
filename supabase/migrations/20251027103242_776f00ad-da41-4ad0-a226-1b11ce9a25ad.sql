-- Fix critical storage security issue: Restrict media uploads to admins only

-- Drop the overly permissive policy that allows all authenticated users to upload
DROP POLICY IF EXISTS "Authenticated users can upload media" ON storage.objects;

-- Create admin-only upload policy for media bucket
CREATE POLICY "Admins can upload media"
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (
  bucket_id = 'media' AND
  public.has_role(auth.uid(), 'admin'::app_role)
);