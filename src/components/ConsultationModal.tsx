import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate inputs
    const name = formData.name.trim().slice(0, 100);
    const email = formData.email.trim().slice(0, 255);
    const company = formData.company.trim().slice(0, 100);
    const phone = formData.phone.trim().slice(0, 20);
    const message = formData.message.trim().slice(0, 1000);

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Save enquiry to database for marketing purposes
    const { error: dbError } = await supabase
      .from('consultation_enquiries')
      .insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        message,
      });

    if (dbError) {
      console.error('Error saving enquiry:', dbError);
      // Continue with email even if database save fails
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Odoo Consultation Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company || 'Not provided'}\n` +
      `Phone: ${phone || 'Not provided'}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent from Bixsolve IT Website`
    );

    // Open mailto link
    window.location.href = `mailto:abdunazeerkt@gmail.com?subject=${subject}&body=${body}`;

    setIsLoading(false);
    toast({
      title: "Request Submitted",
      description: "Your enquiry has been saved and email client opened.",
    });

    // Reset form and close modal
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-elevated w-full max-w-md max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-4 py-3 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-foreground">Start Your Odoo Journey</h2>
            <p className="text-xs text-muted-foreground">Get a free consultation</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-muted rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                maxLength={100}
                className="h-9 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                maxLength={255}
                className="h-9 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="company" className="block text-xs font-medium text-foreground mb-1">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                maxLength={100}
                className="h-9 text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                maxLength={20}
                className="h-9 text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
              How can we help? <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={2}
              required
              maxLength={1000}
              className="text-sm resize-none"
            />
          </div>

          <p className="text-xs text-muted-foreground">
            📧 Sent to <strong className="text-foreground">abdunazeerkt@gmail.com</strong>
          </p>

          <Button
            type="submit"
            className="w-full"
            size="default"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Opening Email...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Consultation Request
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
