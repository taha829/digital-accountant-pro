import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import SocialShare from "@/components/SocialShare";
import CommentSection from "@/components/CommentSection";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const blogPosts = {
    en: {
      "1": {
        title: "Top 5 Tax Tips for Small Businesses",
        excerpt: "Essential tax planning strategies to help small businesses minimize their tax burden and maximize savings.",
        date: "2024-01-15",
        author: "Al-Samhadani Team",
        category: "Tax",
        readTime: "8 min read",
        image: "/placeholder.svg",
        content: `
          <h2>Understanding Tax Planning for Small Businesses</h2>
          <p>Tax planning is a crucial aspect of running a successful small business. By implementing strategic tax planning techniques, you can significantly reduce your tax liability while remaining compliant with all regulations.</p>
          
          <h3>1. Keep Accurate Records</h3>
          <p>Maintaining detailed financial records is the foundation of effective tax planning. Use accounting software to track all income, expenses, and receipts throughout the year. This not only helps during tax season but also provides valuable insights into your business performance.</p>
          
          <h3>2. Maximize Business Deductions</h3>
          <p>Many small business owners miss out on valuable deductions. Common deductible expenses include:</p>
          <ul>
            <li>Office supplies and equipment</li>
            <li>Business travel and meals</li>
            <li>Professional services and subscriptions</li>
            <li>Home office expenses (if applicable)</li>
            <li>Vehicle expenses for business use</li>
          </ul>
          
          <h3>3. Choose the Right Business Structure</h3>
          <p>Your business structure significantly impacts your tax obligations. Whether you operate as a sole proprietorship, LLC, or corporation, each structure has different tax implications. Consult with a tax professional to determine the most beneficial structure for your situation.</p>
          
          <h3>4. Plan for Estimated Tax Payments</h3>
          <p>Small business owners typically need to make quarterly estimated tax payments. Calculate these payments accurately to avoid penalties and interest charges. Set aside a portion of your income throughout the year to ensure you have funds available when payments are due.</p>
          
          <h3>5. Consider Retirement Contributions</h3>
          <p>Contributing to retirement plans like SEP-IRA or Solo 401(k) offers dual benefits: reducing current taxable income while building retirement savings. These contributions are tax-deductible and grow tax-deferred until withdrawal.</p>
          
          <h2>Working with a Tax Professional</h2>
          <p>While these tips provide a solid foundation, working with a qualified tax professional ensures you're taking advantage of all available tax benefits while remaining compliant with current tax laws. At Al-Samhadani, we specialize in helping small businesses optimize their tax strategies.</p>
          
          <h2>Conclusion</h2>
          <p>Implementing these tax planning strategies can lead to significant savings for your small business. Start early, stay organized, and don't hesitate to seek professional guidance. Contact us today for a personalized tax planning consultation.</p>
        `
      },
      "2": {
        title: "How Accounting Automation Saves Time",
        excerpt: "Discover how modern accounting software can streamline your financial processes and boost productivity.",
        date: "2024-01-10",
        author: "Al-Samhadani Team",
        category: "Accounting",
        readTime: "6 min read",
        image: "/placeholder.svg",
        content: `
          <h2>The Power of Accounting Automation</h2>
          <p>In today's fast-paced business environment, manual accounting processes can be time-consuming and prone to errors. Automation transforms how businesses manage their finances, offering efficiency and accuracy.</p>
          
          <h3>Benefits of Automated Accounting</h3>
          <ul>
            <li>Reduced manual data entry and human errors</li>
            <li>Real-time financial reporting and insights</li>
            <li>Streamlined invoice processing and payments</li>
            <li>Automated bank reconciliation</li>
            <li>Compliance with tax regulations</li>
          </ul>
          
          <h3>Key Features to Look For</h3>
          <p>When choosing accounting software, consider features like cloud access, integration capabilities, and user-friendly interfaces. The right solution should scale with your business needs.</p>
          
          <h2>Implementation Best Practices</h2>
          <p>Successful automation requires proper planning, staff training, and ongoing support. Our team at Al-Samhadani helps businesses transition smoothly to automated systems.</p>
        `
      },
      "3": {
        title: "Understanding Corporate Tax in Jordan",
        excerpt: "A comprehensive guide to corporate taxation laws, rates, and compliance requirements in Jordan.",
        date: "2024-01-05",
        author: "Al-Samhadani Team",
        category: "Tax",
        readTime: "10 min read",
        image: "/placeholder.svg",
        content: `
          <h2>Corporate Tax Framework in Jordan</h2>
          <p>Jordan's corporate tax system is designed to promote business growth while ensuring fair taxation. Understanding the regulations is essential for compliance and strategic planning.</p>
          
          <h3>Current Tax Rates</h3>
          <p>Corporate tax rates in Jordan vary by industry and company size. Standard rates apply to most businesses, with special provisions for certain sectors and free zones.</p>
          
          <h3>Filing Requirements</h3>
          <p>Companies must submit annual tax returns with supporting documentation. Deadlines are strictly enforced, and late filing can result in penalties.</p>
          
          <h2>Tax Incentives and Exemptions</h2>
          <p>Jordan offers various tax incentives to encourage investment in specific sectors and regions. Understanding these opportunities can significantly reduce your tax burden.</p>
        `
      }
    },
    ar: {
      "1": {
        title: "أفضل 5 نصائح ضريبية للشركات الصغيرة",
        excerpt: "استراتيجيات التخطيط الضريبي الأساسية لمساعدة الشركات الصغيرة على تقليل العبء الضريبي وزيادة المدخرات.",
        date: "2024-01-15",
        author: "فريق السمهداني",
        category: "الضرائب",
        readTime: "8 دقائق قراءة",
        image: "/placeholder.svg",
        content: `
          <h2>فهم التخطيط الضريبي للشركات الصغيرة</h2>
          <p>التخطيط الضريبي هو جانب حاسم في إدارة شركة صغيرة ناجحة. من خلال تطبيق تقنيات التخطيط الضريبي الاستراتيجية، يمكنك تقليل التزاماتك الضريبية بشكل كبير مع البقاء متوافقاً مع جميع اللوائح.</p>
          
          <h3>1. حافظ على سجلات دقيقة</h3>
          <p>الحفاظ على سجلات مالية مفصلة هو أساس التخطيط الضريبي الفعال. استخدم برامج المحاسبة لتتبع جميع الدخل والنفقات والإيصالات على مدار العام. هذا لا يساعد فقط خلال موسم الضرائب ولكن يوفر أيضاً رؤى قيمة حول أداء عملك.</p>
          
          <h3>2. زيادة الخصومات التجارية</h3>
          <p>يفوت العديد من أصحاب الشركات الصغيرة خصومات قيمة. تشمل النفقات القابلة للخصم الشائعة:</p>
          <ul>
            <li>اللوازم والمعدات المكتبية</li>
            <li>السفر ووجبات العمل</li>
            <li>الخدمات والاشتراكات المهنية</li>
            <li>نفقات المكتب المنزلي (إن أمكن)</li>
            <li>نفقات المركبات للاستخدام التجاري</li>
          </ul>
          
          <h3>3. اختر الهيكل التجاري المناسب</h3>
          <p>يؤثر هيكل عملك بشكل كبير على التزاماتك الضريبية. سواء كنت تعمل كملكية فردية أو شركة ذات مسؤولية محدودة أو شركة مساهمة، فإن لكل هيكل آثار ضريبية مختلفة. استشر متخصص ضرائب لتحديد الهيكل الأكثر فائدة لحالتك.</p>
          
          <h3>4. خطط لمدفوعات الضرائب المقدرة</h3>
          <p>يحتاج أصحاب الشركات الصغيرة عادةً إلى إجراء مدفوعات ضريبية مقدرة ربع سنوية. احسب هذه المدفوعات بدقة لتجنب الغرامات ورسوم الفائدة. خصص جزءاً من دخلك على مدار العام للتأكد من توفر الأموال عند استحقاق المدفوعات.</p>
          
          <h3>5. فكر في مساهمات التقاعد</h3>
          <p>المساهمة في خطط التقاعد مثل SEP-IRA أو Solo 401(k) توفر فوائد مزدوجة: تقليل الدخل الخاضع للضريبة الحالي مع بناء مدخرات التقاعد. هذه المساهمات معفاة من الضرائب وتنمو بشكل مؤجل حتى السحب.</p>
          
          <h2>العمل مع متخصص ضرائب</h2>
          <p>بينما توفر هذه النصائح أساساً قوياً، فإن العمل مع متخصص ضرائب مؤهل يضمن أنك تستفيد من جميع الفوائد الضريبية المتاحة مع البقاء متوافقاً مع قوانين الضرائب الحالية. في السمهداني، نتخصص في مساعدة الشركات الصغيرة على تحسين استراتيجياتها الضريبية.</p>
          
          <h2>الخلاصة</h2>
          <p>تنفيذ استراتيجيات التخطيط الضريبي هذه يمكن أن يؤدي إلى وفورات كبيرة لشركتك الصغيرة. ابدأ مبكراً، وابقَ منظماً، ولا تتردد في طلب التوجيه المهني. اتصل بنا اليوم للحصول على استشارة تخطيط ضريبي شخصية.</p>
        `
      },
      "2": {
        title: "كيف توفر أتمتة المحاسبة الوقت",
        excerpt: "اكتشف كيف يمكن لبرامج المحاسبة الحديثة تبسيط عملياتك المالية وتعزيز الإنتاجية.",
        date: "2024-01-10",
        author: "فريق السمهداني",
        category: "المحاسبة",
        readTime: "6 دقائق قراءة",
        image: "/placeholder.svg",
        content: `
          <h2>قوة أتمتة المحاسبة</h2>
          <p>في بيئة الأعمال السريعة اليوم، يمكن أن تكون عمليات المحاسبة اليدوية مستهلكة للوقت وعرضة للأخطاء. الأتمتة تحول كيفية إدارة الشركات لشؤونها المالية، وتوفر الكفاءة والدقة.</p>
          
          <h3>فوائد المحاسبة الآلية</h3>
          <ul>
            <li>تقليل إدخال البيانات اليدوي والأخطاء البشرية</li>
            <li>تقارير مالية ورؤى في الوقت الفعلي</li>
            <li>معالجة مبسطة للفواتير والمدفوعات</li>
            <li>مطابقة بنكية آلية</li>
            <li>الامتثال للوائح الضريبية</li>
          </ul>
          
          <h3>الميزات الرئيسية التي يجب البحث عنها</h3>
          <p>عند اختيار برنامج محاسبة، ضع في اعتبارك ميزات مثل الوصول السحابي وقدرات التكامل والواجهات سهلة الاستخدام. يجب أن يتناسب الحل المناسب مع احتياجات عملك.</p>
          
          <h2>أفضل ممارسات التنفيذ</h2>
          <p>تتطلب الأتمتة الناجحة التخطيط السليم وتدريب الموظفين والدعم المستمر. يساعد فريقنا في السمهداني الشركات على الانتقال بسلاسة إلى الأنظمة الآلية.</p>
        `
      },
      "3": {
        title: "فهم ضريبة الشركات في الأردن",
        excerpt: "دليل شامل لقوانين ضرائب الشركات والمعدلات ومتطلبات الامتثال في الأردن.",
        date: "2024-01-05",
        author: "فريق السمهداني",
        category: "الضرائب",
        readTime: "10 دقائق قراءة",
        image: "/placeholder.svg",
        content: `
          <h2>إطار ضريبة الشركات في الأردن</h2>
          <p>تم تصميم نظام ضرائب الشركات في الأردن لتعزيز نمو الأعمال مع ضمان الضرائب العادلة. فهم اللوائح ضروري للامتثال والتخطيط الاستراتيجي.</p>
          
          <h3>معدلات الضرائب الحالية</h3>
          <p>تختلف معدلات ضرائب الشركات في الأردن حسب الصناعة وحجم الشركة. تنطبق المعدلات القياسية على معظم الشركات، مع أحكام خاصة لقطاعات ومناطق حرة معينة.</p>
          
          <h3>متطلبات التقديم</h3>
          <p>يجب على الشركات تقديم إقرارات ضريبية سنوية مع الوثائق الداعمة. يتم تطبيق المواعيد النهائية بصرامة، ويمكن أن يؤدي التقديم المتأخر إلى غرامات.</p>
          
          <h2>الحوافز والإعفاءات الضريبية</h2>
          <p>يقدم الأردن حوافز ضريبية مختلفة لتشجيع الاستثمار في قطاعات ومناطق محددة. فهم هذه الفرص يمكن أن يقلل بشكل كبير من عبئك الضريبي.</p>
        `
      }
    }
  };

  const post = blogPosts[language][id as keyof typeof blogPosts[typeof language]];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Post Not Found" : "المقال غير موجود"}
          </h1>
          <Button onClick={() => navigate('/blog')}>
            {language === "en" ? "Back to Blog" : "العودة للمدونة"}
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-elegant animate-fade-in">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="mb-6"
            >
              <ArrowLeft className={`w-4 h-4 ${language === "ar" ? "ml-2 rotate-180" : "mr-2"}`} />
              {language === "en" ? "Back to Blog" : "العودة للمدونة"}
            </Button>

            {/* Category Badge */}
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                direction: language === "ar" ? "rtl" : "ltr"
              }}
            />

            {/* Social Share */}
            <div className="border-t border-b py-8 mb-12">
              <SocialShare title={post.title} url={currentUrl} />
            </div>

            {/* Comments Section */}
            <CommentSection />
          </Card>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">
              {language === "en" ? "Related Articles" : "مقالات ذات صلة"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts[language])
                .filter(([postId]) => postId !== id)
                .slice(0, 2)
                .map(([postId, relatedPost]) => (
                  <Link key={postId} to={`/blog/${postId}`}>
                    <Card className="hover:shadow-elegant transition-all group cursor-pointer">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <Badge className="mb-2 bg-primary text-primary-foreground">
                          {relatedPost.category}
                        </Badge>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
