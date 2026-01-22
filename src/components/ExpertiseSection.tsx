import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 'Decades', label: 'IT Leadership' },
  { icon: Users, value: '50+', label: 'Projects Delivered' },
  { icon: Award, value: '4+', label: 'Years Odoo Focus' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Image Placeholder */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-elevated" />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-2xl -rotate-6" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-muted rounded-2xl rotate-6" />
              
              {/* Profile Card */}
              <div className="absolute inset-8 bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-full mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Expert Leadership Team</h4>
                  <p className="text-muted-foreground text-sm">
                    Decades of combined experience in enterprise IT solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Trusted Partner for{' '}
                <span className="gradient-text">Seamless Odoo Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bixsolve stands as a premier and trusted Odoo partner, consistently delivering top-notch 
                customization and implementation services. Our team comprises highly skilled technical 
                experts dedicated to developing, implementing, and designing ERP solutions that provide 
                unparalleled benefits. Operating across India & UAE, we help clients attain their strategic 
                business objectives through technical expertise and effective project management.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Deep Odoo Specialization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated team brings 4+ years of hands-on Odoo development, customization, 
                and troubleshooting expertise. We understand that every business is unique—our approach 
                involves carefully analyzing your specific needs and providing customized Odoo solutions 
                that align perfectly with your business goals and processes. From initial consultation 
                to ongoing support, we offer end-to-end services to ensure your business reaps full benefits.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-xl p-4 text-center hover:bg-muted transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
