import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Portfolio = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filterReveal = useScrollReveal();
  const projectsReveal = useScrollReveal();

  const filters = {
    en: [
      { id: "all", name: "All Projects" },
      { id: "accounting", name: "Accounting" },
      { id: "tax", name: "Tax Consulting" },
      { id: "software", name: "Software Development" },
      { id: "marketing", name: "Digital Marketing" },
    ],
    ar: [
      { id: "all", name: "جميع المشاريع" },
      { id: "accounting", name: "محاسبة" },
      { id: "tax", name: "ضرائب" },
      { id: "software", name: "تطوير البرمجيات" },
      { id: "marketing", name: "تسويق رقمي" },
    ],
  };

  const projects = {
    en: [
      {
        id: 1,
        category: "accounting",
        title: "Financial Management System",
        client: "Retail Company",
        description: "Complete financial system implementation including bookkeeping, payroll, and financial reporting.",
        results: ["40% time savings", "100% accuracy", "Real-time reporting"],
        year: "2024"
      },
      {
        id: 2,
        category: "tax",
        title: "VAT Compliance Solution",
        client: "Import/Export Business",
        description: "Comprehensive VAT registration, filing, and compliance management for import/export operations.",
        results: ["Zero penalties", "On-time filing", "Tax optimization"],
        year: "2024"
      },
      {
        id: 3,
        category: "software",
        title: "Inventory Management Platform",
        client: "Wholesale Distributor",
        description: "Custom ERP system for inventory tracking, order management, and supplier coordination.",
        results: ["30% cost reduction", "Real-time tracking", "Automated alerts"],
        year: "2023"
      },
      {
        id: 4,
        category: "marketing",
        title: "Social Media Campaign",
        client: "Restaurant Chain",
        description: "Complete social media strategy, content creation, and paid advertising campaign.",
        results: ["200% engagement increase", "150% follower growth", "High ROI"],
        year: "2024"
      },
      {
        id: 5,
        category: "software",
        title: "E-Commerce Platform",
        client: "Fashion Retailer",
        description: "Full-featured online store with payment integration, inventory sync, and mobile app.",
        results: ["300% online sales", "Mobile-first design", "Secure payments"],
        year: "2023"
      },
      {
        id: 6,
        category: "accounting",
        title: "Budget Planning & Analysis",
        client: "Construction Company",
        description: "Strategic budget planning, cost analysis, and financial forecasting for construction projects.",
        results: ["25% cost savings", "Better forecasting", "Project profitability"],
        year: "2024"
      },
      {
        id: 7,
        category: "tax",
        title: "Tax Audit Preparation",
        client: "Manufacturing Company",
        description: "Complete tax audit preparation, documentation, and representation before tax authorities.",
        results: ["Successful audit", "No adjustments", "Clean record"],
        year: "2023"
      },
      {
        id: 8,
        category: "marketing",
        title: "Brand Identity & Website",
        client: "Legal Firm",
        description: "Complete brand identity development, website design, and content marketing strategy.",
        results: ["Professional image", "5x web traffic", "Lead generation"],
        year: "2024"
      },
      {
        id: 9,
        category: "software",
        title: "CRM System Implementation",
        client: "Real Estate Agency",
        description: "Custom CRM system for lead management, client tracking, and sales automation.",
        results: ["50% faster follow-up", "Better conversion", "Data insights"],
        year: "2023"
      },
    ],
    ar: [
      {
        id: 1,
        category: "accounting",
        title: "نظام إدارة مالية متكامل",
        client: "شركة تجزئة",
        description: "تطبيق نظام مالي شامل يتضمن مسك الدفاتر، الرواتب، والتقارير المالية.",
        results: ["توفير 40% من الوقت", "دقة 100%", "تقارير فورية"],
        year: "2024"
      },
      {
        id: 2,
        category: "tax",
        title: "حل الامتثال لضريبة القيمة المضافة",
        client: "شركة استيراد وتصدير",
        description: "إدارة شاملة لتسجيل وتقديم ضريبة القيمة المضافة لعمليات الاستيراد والتصدير.",
        results: ["صفر غرامات", "تقديم في الوقت المحدد", "تحسين ضريبي"],
        year: "2024"
      },
      {
        id: 3,
        category: "software",
        title: "منصة إدارة المخزون",
        client: "موزع بالجملة",
        description: "نظام ERP مخصص لتتبع المخزون، إدارة الطلبات، والتنسيق مع الموردين.",
        results: ["تخفيض 30% من التكاليف", "تتبع فوري", "تنبيهات تلقائية"],
        year: "2023"
      },
      {
        id: 4,
        category: "marketing",
        title: "حملة وسائل التواصل الاجتماعي",
        client: "سلسلة مطاعم",
        description: "استراتيجية كاملة لوسائل التواصل، إنشاء المحتوى، وحملة إعلانات مدفوعة.",
        results: ["زيادة 200% في التفاعل", "نمو 150% في المتابعين", "عائد استثمار عالي"],
        year: "2024"
      },
      {
        id: 5,
        category: "software",
        title: "منصة تجارة إلكترونية",
        client: "متجر أزياء",
        description: "متجر إلكتروني متكامل مع تكامل الدفع، مزامنة المخزون، وتطبيق محمول.",
        results: ["زيادة 300% في المبيعات", "تصميم للموبايل", "دفع آمن"],
        year: "2023"
      },
      {
        id: 6,
        category: "accounting",
        title: "تخطيط وتحليل الميزانية",
        client: "شركة إنشاءات",
        description: "تخطيط استراتيجي للميزانية، تحليل التكاليف، والتنبؤ المالي لمشاريع البناء.",
        results: ["توفير 25% من التكاليف", "تنبؤ أفضل", "ربحية المشاريع"],
        year: "2024"
      },
      {
        id: 7,
        category: "tax",
        title: "التحضير للتدقيق الضريبي",
        client: "شركة تصنيع",
        description: "تحضير كامل للتدقيق الضريبي، التوثيق، والتمثيل أمام السلطات الضريبية.",
        results: ["تدقيق ناجح", "لا تعديلات", "سجل نظيف"],
        year: "2023"
      },
      {
        id: 8,
        category: "marketing",
        title: "الهوية التجارية والموقع الإلكتروني",
        client: "مكتب محاماة",
        description: "تطوير هوية تجارية كاملة، تصميم موقع إلكتروني، واستراتيجية تسويق المحتوى.",
        results: ["صورة احترافية", "زيادة 5 أضعاف في الزيارات", "جذب عملاء محتملين"],
        year: "2024"
      },
      {
        id: 9,
        category: "software",
        title: "تطبيق نظام CRM",
        client: "وكالة عقارية",
        description: "نظام CRM مخصص لإدارة العملاء المحتملين، تتبع العملاء، وأتمتة المبيعات.",
        results: ["متابعة أسرع بـ 50%", "تحويل أفضل", "رؤى البيانات"],
        year: "2023"
      },
    ],
  };

  const currentFilters = language === "en" ? filters.en : filters.ar;
  const currentProjects = language === "en" ? projects.en : projects.ar;

  const filteredProjects = activeFilter === "all" 
    ? currentProjects 
    : currentProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-elegant">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {language === "en" ? "Our Portfolio" : "معرض أعمالنا"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Explore our successful projects and see how we've helped businesses achieve their goals through expert services and innovative solutions."
                : "استكشف مشاريعنا الناجحة وشاهد كيف ساعدنا الشركات على تحقيق أهدافها من خلال خدمات متخصصة وحلول مبتكرة."}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section 
        ref={filterReveal.ref}
        className={`py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40 transition-all duration-1000 ${
          filterReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {currentFilters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`
                  transition-all duration-300
                  ${activeFilter === filter.id 
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-elegant scale-105" 
                    : "hover:border-primary/50 hover:bg-primary/5"}
                `}
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section 
        ref={projectsReveal.ref}
        className={`py-16 transition-all duration-1000 ${
          projectsReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">
                      {currentFilters.find(f => f.id === project.category)?.name}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {language === "en" ? "Client: " : "العميل: "}{project.client}
                  </p>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-foreground">
                      {language === "en" ? "Key Results:" : "النتائج الرئيسية:"}
                    </p>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    {language === "en" ? "View Details" : "عرض التفاصيل"}
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {language === "en" ? "No projects found in this category." : "لا توجد مشاريع في هذا القسم."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                150+
              </div>
              <p className="text-muted-foreground">
                {language === "en" ? "Completed Projects" : "مشروع منجز"}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-muted-foreground">
                {language === "en" ? "Client Satisfaction" : "رضا العملاء"}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                8+
              </div>
              <p className="text-muted-foreground">
                {language === "en" ? "Years Experience" : "سنوات خبرة"}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-muted-foreground">
                {language === "en" ? "Happy Clients" : "عميل راضٍ"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;