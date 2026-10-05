import HeroSection from "@/components/sections/hero-section";
import TrustBar from "@/components/sections/trust-bar";
import CategoriesSection from "@/components/sections/categories-section";
import WhyUsSection from "@/components/sections/why-us-section";
import IndustriesSection from "@/components/sections/industries-section";
import FactorySection from "@/components/sections/factory-section";
import CertificatesSection from "@/components/sections/certificates-section";
import CTASection from "@/components/sections/cta-section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <CategoriesSection />
        <WhyUsSection />
        <IndustriesSection />
        <FactorySection />
        <CertificatesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
