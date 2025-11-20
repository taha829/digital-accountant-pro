import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, Code, Megaphone, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTypewriter } from "@/hooks/useTypewriter";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-accounting.jpg";
import serviceAccounting from "@/assets/service-accounting.jpg";
import serviceTax from "@/assets/services-tax.jpg";
import serviceSoftware from "@/assets/services-software.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import whyChooseTeam from "@/assets/why-choose-team.jpg";
import whyChooseGrowth from "@/assets/why-choose-growth.jpg";
import whyChooseAccuracy from "@/assets/why-choose-accuracy.jpg";
import whyChooseClient from "@/assets/why-choose-client.jpg";

const Home = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const servicesReveal = useScrollReveal();
  const whyChooseReveal = useScrollReveal();
  const statsReveal = useScrollReveal();
  const teamReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  
  const heroTitle = {
    en: "Accounting, Tax, and Digital Solutions",
    ar: "المحاسبة والضرائب والحلول الرقمية"
  };
  
  const typedText = useTypewriter(heroTitle[language], 80);

  const services = [
    { 
      icon: Calculator, 
      title: "Accounting", 
      titleAr: "المحاسبة", 
      color: "text-primary",
      image: serviceAccounting,
      description: "Professional bookkeeping and financial reporting",
      descriptionAr: "المحاسبة الاحترافية وإعداد التقارير المالية"
    },
    { 
      icon: FileText, 
      title: "Tax Services", 
      titleAr: "الضرائب", 
      color: "text-primary",
      image: serviceTax,
      description: "Expert tax consulting and compliance",
      descriptionAr: "استشارات ضريبية متخصصة والامتثال"
    },
    { 
      icon: Code, 
      title: "Software", 
      titleAr: "البرمجة", 
      color: "text-primary",
      image: serviceSoftware,
      description: "Custom software solutions for your business",
      descriptionAr: "حلول برمجية مخصصة لعملك"
    },
    { 
      icon: Megaphone, 
      title: "Marketing", 
      titleAr: "التسويق", 
      color: "text-primary",
      image: serviceMarketing,
      description: "Strategic digital marketing campaigns",
      descriptionAr: "حملات تسويق رقمي استراتيجية"
    },
  ];

  const features = [
    { 
      icon: Users, 
      title: "Professional Team", 
      titleAr: "فريق محترف",
      image: whyChooseTeam,
      description: "Certified experts dedicated to your success",
      descriptionAr: "خبراء معتمدون ملتزمون بنجاحك"
    },
    { 
      icon: TrendingUp, 
      title: "Fast & Reliable", 
      titleAr: "سريع وموثوق",
      image: whyChooseGrowth,
      description: "Quick turnaround with consistent quality",
      descriptionAr: "تنفيذ سريع بجودة متسقة"
    },
    { 
      icon: CheckCircle, 
      title: "Accurate Reporting", 
      titleAr: "تقارير دقيقة",
      image: whyChooseAccuracy,
      description: "Precision in every financial detail",
      descriptionAr: "دقة في كل تفاصيل المالية"
    },
    { 
      icon: Shield, 
      title: "Client-Focused", 
      titleAr: "تركيز على العميل",
      image: whyChooseClient,
      description: "Your goals are our priority",
      descriptionAr: "أهدافك هي أولويتنا"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en" ? "Your Trusted Partner for" : "شريكك الموثوق في"}<br />
            <span className="text-primary min-h-[1.2em] inline-block">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en" 
              ? "We simplify financial management, tax compliance, and digital growth for your business success."
              : "نبسط الإدارة المالية والامتثال الضريبي والنمو الرقمي لنجاح أعمالك"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8"
              asChild
            >
              <a href="tel:+962798239913">
                📞 {language === "en" ? "Call Us" : "اتصل بنا"}
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8"
              asChild
            >
              <a href="https://wa.me/962798239913" target="_blank" rel="noopener noreferrer">
                💬 {language === "en" ? "Chat on WhatsApp" : "محادثة واتساب"}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xl">
            <span className="text-primary font-bold">📞 0798239913</span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesReveal.ref}
        className={`py-20 bg-background transition-all duration-1000 ${
          servicesReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Our Services" : "خدماتنا"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" 
                ? "Al-Samhadani combines expertise in accounting, taxation, software development, and digital marketing to empower your business growth."
                : "يجمع السمهداني الخبرة في المحاسبة والضرائب وتطوير البرمجيات والتسويق الرقمي لتمكين نمو أعمالك"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate('/services')}
              >
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <service.icon className="h-10 w-10 text-white mb-2" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                    {language === "en" ? service.title : service.titleAr}
                  </h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                    {language === "en" ? service.description : service.descriptionAr}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={whyChooseReveal.ref}
        className={`py-20 bg-secondary/20 transition-all duration-1000 ${
          whyChooseReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Why Choose Al-Samhadani?" : "لماذا تختار السمهداني؟"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div 
                    className="h-64 md:h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <feature.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" ? feature.title : feature.titleAr}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" ? feature.description : feature.descriptionAr}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Team Section */}
      <div 
        ref={teamReveal.ref}
        className={`transition-all duration-1000 ${
          teamReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <TeamSection />
      </div>

      {/* CTA Section */}
      <section 
        ref={ctaReveal.ref}
        className={`py-20 bg-gradient-hero transition-all duration-1000 ${
          ctaReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en" 
              ? "Let's Handle Your Accounting and Digital Growth"
              : "دعنا نتولى محاسبتك ونموك الرقمي"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en"
              ? "While you focus on your business, we'll take care of your finances and online presence."
              : "بينما تركز على عملك، سنهتم بأموالك وحضورك الرقمي"}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
            asChild
          >
            <a href="/contact">
              {language === "en" ? "Get a Free Consultation" : "احصل على استشارة مجانية"}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
