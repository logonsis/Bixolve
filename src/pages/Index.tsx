import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import TrustBanner from '@/components/TrustBanner';
import DetailedServices from '@/components/DetailedServices';
import ExpertiseSection from '@/components/ExpertiseSection';
import ProcessSection from '@/components/ProcessSection';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <TrustBanner />
      <DetailedServices />
      <ExpertiseSection />
      <ProcessSection />
      <CaseStudies />
      <Testimonials />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
