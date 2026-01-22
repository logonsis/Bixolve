import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import bixolveLogo from '@/assets/bixolve-logo.jpeg';

const footerLinks = {
  services: [
    { label: 'Implementation', href: '#services' },
    { label: 'Customization', href: '#services' },
    { label: 'Support', href: '#services' },
    { label: 'Odoo Audit', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#expertise' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:info@bixolve.com', label: 'Email' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img src={bixolveLogo} alt="Bixolve Logo" className="w-10 h-10 rounded-lg object-contain bg-white" />
              <span className="font-bold text-xl">
                Bixolve<span className="text-accent"> IT</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-4 max-w-sm">
              Bixolve IT Solutions | Your Trusted Partner for Seamless Odoo Solutions. 
              Premier Odoo ERP Implementation & Post-Implementation Support across India & UAE.
            </p>
            
            {/* Office Locations */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">India Office</p>
                  <p className="text-sm text-primary-foreground/70">Bixolve IT Solutions</p>
                  <p className="text-sm text-primary-foreground/70">+91 8157822165</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">UAE Office</p>
                  <p className="text-sm text-primary-foreground/70">Al Nahda, Dubai, UAE</p>
                  <p className="text-sm text-primary-foreground/70">+971 507 727 489</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Bixolve IT Solutions. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Crafted with expertise for your business success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
