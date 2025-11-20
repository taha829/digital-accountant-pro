import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const { language } = useLanguage();

  const faqData = {
    en: [
      {
        question: "What accounting services do you provide?",
        answer: "We offer comprehensive accounting services including bookkeeping, financial statement preparation, payroll management, tax planning and compliance, budget analysis, and financial consulting. Our team ensures accurate record-keeping and compliance with all regulatory requirements."
      },
      {
        question: "How can you help with tax compliance?",
        answer: "We provide full tax services including tax return preparation, tax planning strategies, VAT registration and filing, income tax calculations, and representation before tax authorities. We stay updated with the latest tax laws to ensure your complete compliance and optimize your tax position."
      },
      {
        question: "What types of software solutions do you develop?",
        answer: "We develop custom business software, ERP systems, inventory management systems, CRM solutions, e-commerce platforms, mobile applications, and web-based solutions tailored to your specific business needs. All solutions are designed with scalability and user experience in mind."
      },
      {
        question: "Do you offer digital marketing services?",
        answer: "Yes, we provide comprehensive digital marketing services including social media management, content creation, SEO optimization, paid advertising campaigns, brand strategy, email marketing, and analytics reporting to help grow your online presence and reach your target audience effectively."
      },
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the scope and complexity of services required. We offer customized packages tailored to your business needs and budget. Contact us for a free consultation where we'll assess your requirements and provide a detailed quote."
      },
      {
        question: "How long does it take to complete a project?",
        answer: "Project timelines vary depending on complexity and scope. Simple accounting tasks may take days, while custom software development can take weeks to months. During our initial consultation, we'll provide you with a realistic timeline based on your specific requirements."
      },
      {
        question: "Do you work with small businesses or only large companies?",
        answer: "We work with businesses of all sizes, from startups and small businesses to medium and large enterprises. Our services are scalable and can be customized to meet the unique needs and budget of any organization."
      },
      {
        question: "What are your business hours?",
        answer: "We're open Sunday through Thursday from 9:00 AM to 6:00 PM. For urgent matters outside business hours, you can reach us via WhatsApp or email, and we'll respond as soon as possible."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! Contact us through phone, WhatsApp, or our contact form to schedule a free consultation. We'll discuss your needs, answer your questions, and develop a customized plan to help achieve your business goals."
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes, we provide comprehensive post-project support including training, maintenance, updates, and troubleshooting. We believe in building long-term partnerships with our clients and ensuring the continued success of all implemented solutions."
      }
    ],
    ar: [
      {
        question: "ما هي خدمات المحاسبة التي تقدمونها؟",
        answer: "نقدم خدمات محاسبية شاملة تشمل مسك الدفاتر، إعداد القوائم المالية، إدارة الرواتب، التخطيط الضريبي والامتثال، تحليل الميزانية، والاستشارات المالية. فريقنا يضمن دقة السجلات والامتثال لجميع المتطلبات التنظيمية."
      },
      {
        question: "كيف يمكنكم المساعدة في الامتثال الضريبي؟",
        answer: "نقدم خدمات ضريبية كاملة تشمل إعداد الإقرارات الضريبية، استراتيجيات التخطيط الضريبي، تسجيل وتقديم ضريبة القيمة المضافة، حساب ضريبة الدخل، والتمثيل أمام السلطات الضريبية. نبقى على اطلاع بأحدث القوانين الضريبية لضمان امتثالك الكامل وتحسين وضعك الضريبي."
      },
      {
        question: "ما أنواع الحلول البرمجية التي تطورونها؟",
        answer: "نطور برامج أعمال مخصصة، أنظمة تخطيط موارد المؤسسات (ERP)، أنظمة إدارة المخزون، حلول إدارة علاقات العملاء (CRM)، منصات التجارة الإلكترونية، تطبيقات الهاتف المحمول، والحلول المستندة إلى الويب المصممة خصيصاً لاحتياجات عملك. جميع الحلول مصممة مع مراعاة القابلية للتوسع وتجربة المستخدم."
      },
      {
        question: "هل تقدمون خدمات التسويق الرقمي؟",
        answer: "نعم، نقدم خدمات تسويق رقمي شاملة تشمل إدارة وسائل التواصل الاجتماعي، إنشاء المحتوى، تحسين محركات البحث (SEO)، حملات الإعلانات المدفوعة، استراتيجية العلامة التجارية، التسويق عبر البريد الإلكتروني، وتقارير التحليلات لمساعدتك في تنمية حضورك الإلكتروني والوصول إلى جمهورك المستهدف بفعالية."
      },
      {
        question: "ما هي تكلفة خدماتكم؟",
        answer: "تختلف أسعارنا بناءً على نطاق وتعقيد الخدمات المطلوبة. نقدم باقات مخصصة تناسب احتياجات عملك وميزانيتك. اتصل بنا للحصول على استشارة مجانية حيث سنقيم متطلباتك ونقدم لك عرض أسعار مفصل."
      },
      {
        question: "كم من الوقت يستغرق إنجاز المشروع؟",
        answer: "تختلف المدة الزمنية للمشاريع حسب التعقيد والنطاق. قد تستغرق المهام المحاسبية البسيطة أياماً، بينما قد يستغرق تطوير البرمجيات المخصصة من أسابيع إلى شهور. خلال استشارتنا الأولية، سنقدم لك جدولاً زمنياً واقعياً بناءً على متطلباتك المحددة."
      },
      {
        question: "هل تعملون مع الشركات الصغيرة أم الكبيرة فقط؟",
        answer: "نعمل مع الشركات بجميع أحجامها، من الشركات الناشئة والصغيرة إلى المتوسطة والكبيرة. خدماتنا قابلة للتوسع ويمكن تخصيصها لتلبية الاحتياجات والميزانية الفريدة لأي مؤسسة."
      },
      {
        question: "ما هي ساعات عملكم؟",
        answer: "نحن مفتوحون من الأحد إلى الخميس من 9:00 صباحاً حتى 6:00 مساءً. للأمور العاجلة خارج ساعات العمل، يمكنك التواصل معنا عبر الواتساب أو البريد الإلكتروني، وسنرد في أقرب وقت ممكن."
      },
      {
        question: "كيف يمكنني البدء بخدماتكم؟",
        answer: "البدء سهل! تواصل معنا عبر الهاتف أو الواتساب أو نموذج الاتصال لجدولة استشارة مجانية. سنناقش احتياجاتك، نجيب على أسئلتك، ونطور خطة مخصصة لمساعدتك في تحقيق أهداف عملك."
      },
      {
        question: "هل تقدمون دعماً مستمراً بعد إنجاز المشروع؟",
        answer: "نعم، نقدم دعماً شاملاً بعد المشروع يشمل التدريب، الصيانة، التحديثات، وحل المشكلات. نؤمن ببناء شراكات طويلة الأمد مع عملائنا وضمان النجاح المستمر لجميع الحلول المنفذة."
      }
    ]
  };

  const currentFAQ = language === "en" ? faqData.en : faqData.ar;

  return (
    <div className="min-h-screen" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-elegant">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {language === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Find answers to common questions about our services, processes, and how we can help your business grow."
                : "احصل على إجابات للأسئلة الشائعة حول خدماتنا وعملياتنا وكيف يمكننا مساعدة عملك على النمو."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {currentFAQ.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold mt-1">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-lg">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2 pl-12">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Still Have Questions?" : "لا تزال لديك أسئلة؟"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === "en" 
                ? "Our team is here to help. Get in touch and we'll answer all your questions."
                : "فريقنا هنا للمساعدة. تواصل معنا وسنجيب على جميع أسئلتك."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  {language === "en" ? "Contact Us" : "تواصل معنا"}
                </Button>
              </Link>
              <a href="https://wa.me/962798239913" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 transition-all duration-300">
                  {language === "en" ? "WhatsApp Chat" : "محادثة واتساب"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;