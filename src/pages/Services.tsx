import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Code, Megaphone, ArrowRight } from "lucide-react";
import taxImage from "@/assets/services-tax.jpg";
import softwareImage from "@/assets/services-software.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  
  const servicesReveal1 = useScrollReveal();
  const servicesReveal2 = useScrollReveal();
  const servicesReveal3 = useScrollReveal();
  const servicesReveal4 = useScrollReveal();
  const ctaReveal = useScrollReveal();
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Auditing",
      titleAr: "المحاسبة والتدقيق",
      description: "Comprehensive bookkeeping, financial reporting, payroll management, and annual auditing services ensuring full compliance with local and international standards.",
      features: [
        "Professional bookkeeping and record management",
        "Detailed financial reporting and analysis",
        "Payroll processing and management",
        "Annual auditing and compliance verification"
      ],
      image: null,
    },
    {
      icon: FileText,
      title: "Tax Services",
      titleAr: "الخدمات الضريبية",
      description: "Expert tax consulting including corporate tax, sales tax, and income tax registration and filing with full support in audits and strategic tax planning.",
      features: [
        "Corporate and sales tax management",
        "Income tax registration and filing",
        "Tax audit support and representation",
        "Strategic tax planning to minimize risks"
      ],
      image: taxImage,
    },
    {
      icon: Code,
      title: "Software Solutions",
      titleAr: "حلول البرمجة",
      description: "Custom software development for financial management, accounting dashboards, and ERP tools. Cloud-based and mobile-ready solutions tailored to your needs.",
      features: [
        "Custom financial management systems",
        "Interactive accounting dashboards",
        "Comprehensive ERP solutions",
        "Cloud-based and mobile applications"
      ],
      image: softwareImage,
    },
    {
      icon: Megaphone,
      title: "Social Media & Marketing",
      titleAr: "إدارة السوشال ميديا",
      description: "Strategic digital marketing services including brand development, content creation, and paid advertising campaigns aligned with your business goals.",
      features: [
        "Brand development and positioning",
        "Creative content creation",
        "Targeted paid advertising campaigns",
        "Digital strategy and growth planning"
      ],
      image: null,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Poppins" }}>
            Our <span className="text-white">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive business solutions designed to drive your success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const serviceReveal = index === 0 ? servicesReveal1 : 
                                   index === 1 ? servicesReveal2 : 
                                   index === 2 ? servicesReveal3 : servicesReveal4;
              
              return (
              <div
                key={index}
                ref={serviceReveal.ref}
                className={`transition-all duration-1000 ${
                  serviceReveal.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
              <Card 
                className={`overflow-hidden hover:shadow-elegant transition-all duration-300 ${
                  index % 2 === 0 ? "" : "bg-secondary/10"
                }`}
              >
                <div className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-8`}>
                  {service.image && (
                    <div 
                      className="h-64 lg:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  )}
                  
                  <div className={service.image ? "" : "max-w-4xl mx-auto"}>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl" style={{ fontFamily: "Poppins" }}>
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a href="/contact">
                          Request This Service
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaReveal.ref}
        className={`py-20 bg-secondary/20 transition-all duration-1000 ${
          ctaReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Poppins" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-lg px-8"
              asChild
            >
              <a href="tel:+962798239913">
                📞 Call: 0798239913
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8"
              asChild
            >
              <a href="https://wa.me/962798239913" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
