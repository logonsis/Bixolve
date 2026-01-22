-- Create consultation enquiries table for lead capture
CREATE TABLE public.consultation_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for lead capture without auth)
CREATE POLICY "Allow anonymous inserts" 
ON public.consultation_enquiries 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated admins to read (you can add admin role later)
CREATE POLICY "Allow public read for now" 
ON public.consultation_enquiries 
FOR SELECT 
USING (true);