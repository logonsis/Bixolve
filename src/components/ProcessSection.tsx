import { Search, FileText, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'We analyze your current processes, pain points, and goals to understand your unique needs.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Design & Plan',
    description: 'Create a detailed roadmap with timelines, milestones, and resource allocation.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Develop & Integrate',
    description: 'Build, customize, and integrate your Odoo solution with rigorous testing.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deploy & Support',
    description: 'Launch your system with full training and ongoing support to ensure success.',
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="section-container px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
            Our Clear-Cut Process
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time and exceeds expectations
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/20 -translate-y-1/2" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-accent">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mt-2 group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-primary-foreground mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10">
                    <div className="w-full h-full bg-accent rounded-full flex items-center justify-center shadow-accent">
                      <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
