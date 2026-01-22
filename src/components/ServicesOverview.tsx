import { Settings, Code2, Headphones, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Odoo Implementation',
    description: 'End-to-end project management, from discovery to go-live training. We ensure seamless deployment tailored to your business needs.',
    link: '#services',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailor Odoo to your unique workflows with custom modules & APIs. No limitation is too complex for our development team.',
    link: '#services',
  },
  {
    icon: Headphones,
    title: 'Support & Optimization',
    description: 'Proactive maintenance, bug fixes, and performance tuning. Keep your Odoo running at peak efficiency 24/7.',
    link: '#services',
  },
];

const ServicesOverview = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-10 md:mb-16 animate-fade-in px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Our Core Odoo Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to transform your business operations with the power of Odoo ERP
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection(service.link)}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
