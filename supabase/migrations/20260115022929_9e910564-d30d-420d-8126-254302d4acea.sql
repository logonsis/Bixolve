-- Drop the restrictive SELECT policy
DROP POLICY IF EXISTS "Service role only read access" ON public.consultation_enquiries;

-- Allow authenticated users to read enquiries
CREATE POLICY "Authenticated users can read enquiries" 
ON public.consultation_enquiries 
FOR SELECT 
TO authenticated
USING (true);

-- Allow authenticated users to delete enquiries
CREATE POLICY "Authenticated users can delete enquiries" 
ON public.consultation_enquiries 
FOR DELETE 
TO authenticated
USING (true);