import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The team's deep Odoo knowledge turned our complex requirements into a smooth-running system. What impressed us most was their ability to understand our business first, then apply the technology. It wasn't just implementation—it was transformation.",
    name: 'Sarah Mitchell',
    title: 'COO',
    company: 'TechFlow Manufacturing',
  },
  {
    quote: "From our veteran leader's strategy to the specialist's execution—the expertise is palpable. They didn't just set up Odoo; they became an extension of our team. The ongoing support has been exceptional.",
    name: 'Michael Chen',
    title: 'Director of Operations',
    company: 'GlobalTrade Solutions',
  },
  {
    quote: "We had a failing Odoo installation from another vendor. This team came in, diagnosed the issues in days, and had us running efficiently within weeks. Their audit process alone saved us thousands.",
    name: 'Jennifer Adams',
    title: 'CEO',
    company: 'Retail Dynamics Inc.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from businesses we've helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl sm:rounded-3xl shadow-elevated p-5 sm:p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-4 sm:-top-6 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-accent rounded-lg sm:rounded-xl flex items-center justify-center shadow-accent">
              <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-2 sm:pt-4">
              <blockquote className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm sm:text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm sm:text-base">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
