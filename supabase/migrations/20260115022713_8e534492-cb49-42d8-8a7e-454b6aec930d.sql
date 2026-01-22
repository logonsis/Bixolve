-- Drop the insecure public read policy
DROP POLICY IF EXISTS "Allow public read for now" ON public.consultation_enquiries;

-- Create a restrictive policy - only service role can read (via backend/Cloud tab)
CREATE POLICY "Service role only read access" 
ON public.consultation_enquiries 
FOR SELECT 
USING (false);