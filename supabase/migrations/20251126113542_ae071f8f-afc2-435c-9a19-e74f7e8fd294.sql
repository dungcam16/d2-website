-- Add INSERT policies for anonymous users to allow form submissions

-- Contact submissions: Allow anyone to insert (edge function handles validation & rate limiting)
CREATE POLICY "Anyone can submit contact forms"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Demo bookings: Allow anyone to insert (edge function handles validation)
CREATE POLICY "Anyone can book demos"
ON public.demo_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Newsletter subscribers: Allow anyone to insert (edge function handles validation & duplicate checking)
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);