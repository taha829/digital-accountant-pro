import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Users } from "lucide-react";
import TeamSection from "@/components/TeamSection";
import officeImage from "@/assets/about-office.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { language } = useLanguage();
  
  const overviewReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();
  const teamReveal = useScrollReveal();
  const statsReveal = useScrollReveal();

  return (
    <div style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${officeImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? (
              <>About <span className="text-primary">Al-Samhadani</span></>
            ) : (
              <>عن <span className="text-primary">السمهداني</span></>
            )}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {language === "en" 
              ? "Your trusted partner for accounting, tax, and digital excellence in Jordan"
              : "شريكك الموثوق للمحاسبة والضرائب والتميز الرقمي في الأردن"}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section 
        ref={overviewReveal.ref}
        className={`py-20 bg-background transition-all duration-1000 ${
          overviewReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {language === "en" ? "Who We Are" : "من نحن"}
            </h2>
            <div className="prose prose-lg mx-auto text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>{language === "en" ? "Al-Samhadani Accounting & Tax Solutions" : "السمهداني للمحاسبة والحلول الضريبية"}</strong>
                {language === "en" 
                  ? ", located in Aqaba's Ninth District, is a leading provider of comprehensive financial and digital services in Jordan. We combine decades of expertise with innovative technology to deliver exceptional results for our clients."
                  : "، الموجودة في الحي التاسع بالعقبة، هي مزود رائد للخدمات المالية والرقمية الشاملة في الأردن. نجمع بين عقود من الخبرة والتكنولوجيا المبتكرة لتقديم نتائج استثنائية لعملائنا."}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {language === "en" 
                  ? "Our team of certified professionals specializes in accounting, tax consulting, custom software development, and strategic digital marketing. We serve businesses of all sizes, from startups to established enterprises, helping them achieve financial clarity and sustainable growth."
                  : "يتخصص فريقنا من المحترفين المعتمدين في المحاسبة والاستشارات الضريبية وتطوير البرمجيات المخصصة والتسويق الرقمي الاستراتيجي. نخدم الشركات بجميع أحجامها، من الشركات الناشئة إلى المؤسسات الراسخة، لمساعدتها في تحقيق الوضوح المالي والنمو المستدام."}
              </p>
              <p className="text-lg leading-relaxed">
                {language === "en" 
                  ? "With a commitment to accuracy, transparency, and client success, we've built lasting relationships based on trust and measurable results."
                  : "مع التزامنا بالدقة والشفافية ونجاح العملاء، قمنا ببناء علاقات دائمة قائمة على الثقة والنتائج القابلة للقياس."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section 
        ref={valuesReveal.ref}
        className={`py-20 bg-secondary/20 transition-all duration-1000 ${
          valuesReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  {language === "en" ? "Mission" : "المهمة"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en" 
                    ? "To help individuals and businesses achieve financial clarity and digital excellence through professional, reliable, and innovative services."
                    : "مساعدة الأفراد والشركات على تحقيق الوضوح المالي والتميز الرقمي من خلال خدمات احترافية وموثوقة ومبتكرة."}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  {language === "en" ? "Vision" : "الرؤية"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en" 
                    ? "To be Jordan's most trusted partner for accounting, tax, and technology-driven business growth, recognized for excellence and innovation."
                    : "أن نكون الشريك الأكثر موثوقية في الأردن للمحاسبة والضرائب والنمو التجاري القائم على التكنولوجيا، معترف بنا للتميز والابتكار."}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  {language === "en" ? "Values" : "القيم"}
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• {language === "en" ? "Accuracy" : "الدقة"}</li>
                  <li>• {language === "en" ? "Integrity" : "النزاهة"}</li>
                  <li>• {language === "en" ? "Innovation" : "الابتكار"}</li>
                  <li>• {language === "en" ? "Commitment" : "الالتزام"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      {/* Stats Section */}
      <section 
        ref={statsReveal.ref}
        className={`py-20 bg-gradient-to-br from-primary via-accent to-primary text-white transition-all duration-1000 ${
          statsReveal.isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg">{language === "en" ? "Years Experience" : "سنوات الخبرة"}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">{language === "en" ? "Clients Served" : "عميل خدمناهم"}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg">{language === "en" ? "Projects Completed" : "مشروع منجز"}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">{language === "en" ? "Client Satisfaction" : "رضا العملاء"}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
