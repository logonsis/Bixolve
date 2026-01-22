import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
vcan import { Rocket, Wrench, Users, Search, CheckCircle } from 'lucide-react';

const servicesData = [
  {
    id: 'implementation',
    icon: Rocket,
    title: 'Implementation & Migration',
    items: [
      { title: 'Process Consulting', description: 'Analyze and optimize your business processes before implementation' },
      { title: 'Data Migration', description: 'Seamlessly migrate your existing data with zero data loss' },
      { title: 'User Training', description: 'Comprehensive training programs for all user levels' },
      { title: 'Go-Live Support', description: '24/7 support during and after your launch' },
    ],
  },
  {
    id: 'customization',
    icon: Wrench,
    title: 'Customization & Integration',
    items: [
      { title: 'Module Customization', description: 'Tailor existing modules to match your workflow exactly' },
      { title: 'New Feature Development', description: 'Build custom features that Odoo doesn\'t provide out of the box' },
      { title: 'API Integration', description: 'Connect Odoo with your existing tools and third-party services' },
      { title: 'Performance Audit', description: 'Identify and eliminate bottlenecks in your system' },
    ],
  },
  {
    id: 'support',
    icon: Users,
    title: 'Support & Maintenance',
    items: [
      { title: 'Dedicated Support Plans', description: 'Choose from flexible support packages that fit your needs' },
      { title: 'Bug Fixing', description: 'Quick resolution of any issues affecting your operations' },
      { title: 'Security Updates', description: 'Keep your system secure with regular patches and updates' },
      { title: 'Upgrade Management', description: 'Smooth transitions to newer Odoo versions' },
    ],
  },
  {
    id: 'audit',
    icon: Search,
    title: 'Odoo Audit',
    items: [
      { title: 'System Health Check', description: 'Comprehensive review of your current Odoo setup' },
      { title: 'Bottleneck Report', description: 'Identify what\'s slowing down your operations' },
      { title: 'Optimization Roadmap', description: 'Clear action plan to improve system performance' },
      { title: 'Cost Analysis', description: 'Understand where you can save and optimize spending' },
    ],
  },
];

const DetailedServices = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="section-container px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Comprehensive Odoo Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial setup to ongoing optimization, we cover every aspect of your Odoo journey
          </p>
        </div>

        <Tabs defaultValue="implementation" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-6 md:mb-8">
            {servicesData.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-accent bg-card shadow-soft text-foreground text-xs sm:text-sm font-medium transition-all"
              >
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {servicesData.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="animate-fade-in"
            >
              <div className="bg-card rounded-xl sm:rounded-2xl shadow-card p-4 sm:p-8 md:p-12">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
                  {service.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DetailedServices;
