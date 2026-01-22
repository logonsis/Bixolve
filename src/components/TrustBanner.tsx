import { Shield, Award, Users, Globe } from 'lucide-react';

const TrustBanner = () => {
  return (
    <section className="py-6 md:py-8 bg-primary">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 text-center">
          <div className="flex items-center gap-2 md:gap-3">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0" />
            <span className="text-primary-foreground font-semibold text-sm md:text-lg">
              Premier Odoo Partner
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-primary-foreground/20" />
          <div className="flex items-center gap-2 md:gap-3">
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
            <span className="text-primary-foreground/90 text-sm md:text-base">
              India & UAE Operations
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-primary-foreground/20" />
          <div className="flex items-center gap-2 md:gap-3">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
            <span className="text-primary-foreground/90 text-sm md:text-base">
              Decades of IT Leadership
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-primary-foreground/20" />
          <div className="flex items-center gap-2 md:gap-3">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
            <span className="text-primary-foreground/90 text-sm md:text-base">
              4+ Years Odoo Specialists
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
