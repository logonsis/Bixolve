import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Headphones } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfYourFormId/viewform';

const benefits = [
  'Bespoke Implementation',
  '4+ Years Odoo Expertise',
  'Dedicated Support Plans',
];

const HeroSection = () => {
  const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/1i573YPuo3-GPBIQf21BQBh68hOi0Eh7bo0EGB2Izqjo/viewform', '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
              Transform Your Operations with{' '}
              <span className="gradient-text">Tailored Odoo ERP</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed">
              Implementation, Customization & Expert Support.{' '}
              <span className="text-accent font-semibold">Powered by Decades of IT Leadership.</span>
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-8 md:mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-primary-foreground font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto text-base"
                onClick={openGoogleForm}
              >
                Start Your Odoo Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base"
                onClick={() => scrollToSection('#contact')}
              >
                <Headphones className="w-5 h-5" />
                <span className="hidden xs:inline">Existing User?</span> Get Support
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-elevated p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded-full w-3/4" />
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-muted rounded-lg p-4 space-y-2">
                        <div className="h-8 bg-accent/20 rounded" />
                        <div className="h-2 bg-muted-foreground/20 rounded w-2/3" />
                      </div>
                    ))}
                  </div>
                  <div className="h-32 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-lg px-4 py-2 shadow-accent animate-bounce">
                <span className="font-bold">+45%</span>
                <span className="text-sm ml-1">Efficiency</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg px-4 py-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-sm font-semibold text-foreground">All Systems Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
