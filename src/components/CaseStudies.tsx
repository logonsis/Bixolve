import { Factory, ShoppingCart, Building2, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    icon: Factory,
    industry: 'Manufacturing Distributor',
    challenge: 'Disconnected inventory & sales led to frequent stockouts and overordering.',
    solution: 'Custom Odoo MRP & CRM integration with real-time inventory sync.',
    result: '20% reduction in carrying costs',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: ShoppingCart,
    industry: 'E-Commerce Retailer',
    challenge: 'Manual order processing causing delays and customer complaints.',
    solution: 'Automated order workflow with Odoo Sales and integrated shipping.',
    result: '60% faster order fulfillment',
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    icon: Building2,
    industry: 'Professional Services',
    challenge: 'Scattered project data made billing and resource planning chaotic.',
    solution: 'Unified Odoo Project + Invoicing with custom timesheets.',
    result: '35% improvement in billable hours',
    color: 'from-purple-500/20 to-purple-600/10',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding bg-muted/50">
      <div className="section-container px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses that trusted us with their Odoo transformation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-br ${study.color}`}>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft">
                    <study.icon className="w-6 h-6 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground/50 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mt-4">
                  {study.industry}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Challenge</span>
                  <p className="text-muted-foreground text-sm mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Our Solution</span>
                  <p className="text-muted-foreground text-sm mt-1">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Result</span>
                  <p className="text-xl font-bold text-foreground mt-1">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
