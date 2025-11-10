-- Add lead qualification fields to contact_submissions table
ALTER TABLE public.contact_submissions
ADD COLUMN IF NOT EXISTS lead_score integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS company_size text,
ADD COLUMN IF NOT EXISTS budget_range text,
ADD COLUMN IF NOT EXISTS utm_source text,
ADD COLUMN IF NOT EXISTS utm_medium text,
ADD COLUMN IF NOT EXISTS utm_campaign text,
ADD COLUMN IF NOT EXISTS utm_term text,
ADD COLUMN IF NOT EXISTS utm_content text,
ADD COLUMN IF NOT EXISTS priority text DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent'));

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_lead_score ON public.contact_submissions(lead_score DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_priority ON public.contact_submissions(priority);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);

-- Add demo bookings table
CREATE TABLE IF NOT EXISTS public.demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  company_size text,
  use_case text,
  preferred_date timestamp with time zone,
  preferred_time text,
  notes text,
  status text DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')),
  contact_submission_id uuid REFERENCES public.contact_submissions(id),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on demo_bookings
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- RLS policies for demo_bookings
CREATE POLICY "Admins can view all demo bookings"
ON public.demo_bookings
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert demo bookings"
ON public.demo_bookings
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update demo bookings"
ON public.demo_bookings
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete demo bookings"
ON public.demo_bookings
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_demo_bookings_updated_at
BEFORE UPDATE ON public.demo_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();