import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  position: string;
  positionAr: string;
  company: string;
  companyAr: string;
  testimonial: string;
  testimonialAr: string;
  rating: number;
  initials: string;
}

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const testimonialsReveal = useScrollReveal();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mohammed Al-Rashid",
      nameAr: "محمد الراشد",
      position: "CEO",
      positionAr: "المدير التنفيذي",
      company: "Tech Solutions Jordan",
      companyAr: "حلول التقنية الأردن",
      testimonial: "Al-Samhadani transformed our financial management completely. Their expertise in accounting and tax services saved us significant time and money. Highly professional team!",
      testimonialAr: "حوّل السمهداني إدارتنا المالية بالكامل. خبرتهم في المحاسبة والخدمات الضريبية وفرت لنا وقتاً وأموالاً كبيرة. فريق محترف للغاية!",
      rating: 5,
      initials: "MA"
    },
    {
      id: 2,
      name: "Sarah Al-Khatib",
      nameAr: "سارة الخطيب",
      position: "Founder",
      positionAr: "المؤسسة",
      company: "Aqaba Retail Co.",
      companyAr: "شركة العقبة للتجزئة",
      testimonial: "Outstanding service! The custom software they developed for our inventory management has streamlined our entire operation. Their attention to detail is remarkable.",
      testimonialAr: "خدمة متميزة! البرنامج المخصص الذي طوروه لإدارة مخزوننا سهّل عملياتنا بالكامل. اهتمامهم بالتفاصيل رائع.",
      rating: 5,
      initials: "SA"
    },
    {
      id: 3,
      name: "Ahmad Khaled",
      nameAr: "أحمد خالد",
      position: "Operations Manager",
      positionAr: "مدير العمليات",
      company: "Export Plus",
      companyAr: "إكسبورت بلس",
      testimonial: "Their tax consulting services helped us navigate complex regulations with ease. The team is knowledgeable, responsive, and always available when we need them.",
      testimonialAr: "ساعدتنا خدمات الاستشارات الضريبية في التعامل مع اللوائح المعقدة بسهولة. الفريق على دراية وسريع الاستجابة ومتاح دائماً عندما نحتاجهم.",
      rating: 5,
      initials: "AK"
    },
    {
      id: 4,
      name: "Layla Hassan",
      nameAr: "ليلى حسن",
      position: "Marketing Director",
      positionAr: "مديرة التسويق",
      company: "Jordan Fashion House",
      companyAr: "دار الأزياء الأردنية",
      testimonial: "Their digital marketing strategies doubled our online presence in just three months. Creative, data-driven, and results-oriented approach. Couldn't be happier!",
      testimonialAr: "ضاعفت استراتيجياتهم للتسويق الرقمي حضورنا الإلكتروني في ثلاثة أشهر فقط. نهج إبداعي قائم على البيانات وموجه نحو النتائج. لا يمكن أن نكون أكثر سعادة!",
      rating: 5,
      initials: "LH"
    },
    {
      id: 5,
      name: "Yousef Ibrahim",
      nameAr: "يوسف إبراهيم",
      position: "Business Owner",
      positionAr: "صاحب العمل",
      company: "Al-Noor Trading",
      companyAr: "تجارة النور",
      testimonial: "Reliable, accurate, and always professional. Al-Samhadani handles all our accounting needs seamlessly. Their proactive approach to financial planning is invaluable.",
      testimonialAr: "موثوق ودقيق ومحترف دائماً. يتعامل السمهداني مع جميع احتياجاتنا المحاسبية بسلاسة. نهجهم الاستباقي في التخطيط المالي لا يقدر بثمن.",
      rating: 5,
      initials: "YI"
    },
    {
      id: 6,
      name: "Fatima Al-Omari",
      nameAr: "فاطمة العمري",
      position: "CFO",
      positionAr: "المدير المالي",
      company: "Green Energy Jordan",
      companyAr: "الطاقة الخضراء الأردن",
      testimonial: "Best decision we made was partnering with Al-Samhadani. Their comprehensive approach to accounting and business consulting has been instrumental in our growth.",
      testimonialAr: "أفضل قرار اتخذناه كان الشراكة مع السمهداني. نهجهم الشامل للمحاسبة والاستشارات التجارية كان له دور فعال في نمونا.",
      rating: 5,
      initials: "FO"
    }
  ];

  return (
    <section 
      ref={testimonialsReveal.ref}
      className={`py-20 bg-secondary/20 transition-all duration-1000 ${
        testimonialsReveal.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en" ? "What Our Clients Say" : "ماذا يقول عملاؤنا"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en" 
              ? "Don't just take our word for it - hear from businesses that have transformed their success with Al-Samhadani"
              : "لا تأخذ كلمتنا فقط - استمع من الشركات التي حولت نجاحها مع السمهداني"}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="flex-grow mb-6">
                      <Quote className="w-8 h-8 text-primary/20 mb-2" />
                      <p className="text-muted-foreground italic leading-relaxed" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                        "{language === "en" ? testimonial.testimonial : testimonial.testimonialAr}"
                      </p>
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                          {language === "en" ? testimonial.name : testimonial.nameAr}
                        </p>
                        <p className="text-sm text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                          {language === "en" ? testimonial.position : testimonial.positionAr}
                        </p>
                        <p className="text-xs text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                          {language === "en" ? testimonial.company : testimonial.companyAr}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                {language === "en" ? "5.0 Average Rating" : "تقييم 5.0 في المتوسط"}
              </span>
            </div>
            <div className="text-sm" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "500+ Happy Clients" : "500+ عميل راضٍ"}
            </div>
            <div className="text-sm" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "10+ Years Experience" : "10+ سنوات خبرة"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
