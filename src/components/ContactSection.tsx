import { Button } from '@/components/ui/button';
import { Mail, Phone, AlertTriangle, ExternalLink, Calendar } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1i573YPuo3-GPBIQf21BQBh68hOi0Eh7bo0EGB2Izqjo/viewform';

const ContactSection = () => {
  const openGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="section-container px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8">
              Tell us about your project or challenge. Our team across India & UAE is ready to help you 
              transform your operations with Odoo.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 md:mb-8">
              {/* India Office */}
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">🇮🇳</span> India Office
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <a href="mailto:support@bixsolve.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      support@bixsolve.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <a href="tel:+918157822165" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      +91 8157822165
                    </a>
                  </div>
                </div>
              </div>

              {/* UAE Office */}
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">🇦🇪</span> UAE Office
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <a href="mailto:info@bixsolve.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      info@bixsolve.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <a href="tel:+971507727489" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      +971 507 727 489
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Al Nahda, Dubai, UAE</p>
                </div>
              </div>
            </div>

            {/* Urgent Support Notice */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Existing Odoo Issue?</h4>
                  <p className="text-muted-foreground text-sm">
                    We prioritize urgent support requests. Mention "URGENT" in your message 
                    or call us directly for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-card p-5 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <ExternalLink className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Fill out our quick consultation form and our team will get back to you within 24 hours 
              to discuss your Odoo requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <Button
                variant="accent"
                size="lg"
                className="flex-1"
                onClick={openGoogleForm}
              >
                Start Your Odoo Journey
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={openGoogleForm}
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
