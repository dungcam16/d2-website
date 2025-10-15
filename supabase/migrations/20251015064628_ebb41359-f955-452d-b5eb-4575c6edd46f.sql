-- Add Row Level Security policies for the 'attachment' storage bucket
-- This ensures proper authorization checks beyond basic authentication

-- Policy: Allow users to view their own attachments
CREATE POLICY "Users can view their own attachments"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'attachment' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy: Allow users to upload their own attachments
CREATE POLICY "Users can upload their own attachments"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'attachment' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy: Allow users to update their own attachments
CREATE POLICY "Users can update their own attachments"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'attachment' 
  AND auth.uid()::text = (storage.foldername(name))[1]
)
WITH CHECK (
  bucket_id = 'attachment' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy: Allow users to delete their own attachments
CREATE POLICY "Users can delete their own attachments"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'attachment' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy: Allow admins full access to all attachments
CREATE POLICY "Admins have full access to attachments"
ON storage.objects
FOR ALL
TO authenticated
USING (
  bucket_id = 'attachment' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
)
WITH CHECK (
  bucket_id = 'attachment' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);