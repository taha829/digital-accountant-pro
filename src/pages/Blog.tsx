import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const { language } = useLanguage();

  const blogPosts = {
    en: [
      {
        id: 1,
        title: "Top 5 Tax Tips for Small Businesses",
        excerpt: "Essential tax planning strategies to help small businesses minimize their tax burden and maximize savings.",
        date: "2024-01-15",
        author: "Al-Samhadani Team",
        category: "Tax",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "How Accounting Automation Saves Time",
        excerpt: "Discover how modern accounting software can streamline your financial processes and boost productivity.",
        date: "2024-01-10",
        author: "Al-Samhadani Team",
        category: "Accounting",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "Understanding Corporate Tax in Jordan",
        excerpt: "A comprehensive guide to corporate taxation laws, rates, and compliance requirements in Jordan.",
        date: "2024-01-05",
        author: "Al-Samhadani Team",
        category: "Tax",
        image: "/placeholder.svg"
      },
      {
        id: 4,
        title: "Digital Marketing Strategies for Finance Firms",
        excerpt: "Learn how financial service providers can leverage digital marketing to attract and retain clients.",
        date: "2023-12-28",
        author: "Al-Samhadani Team",
        category: "Marketing",
        image: "/placeholder.svg"
      },
      {
        id: 5,
        title: "Best Practices for Financial Record Keeping",
        excerpt: "Expert tips on maintaining accurate and organized financial records for better business management.",
        date: "2023-12-20",
        author: "Al-Samhadani Team",
        category: "Accounting",
        image: "/placeholder.svg"
      },
      {
        id: 6,
        title: "VAT Registration: What You Need to Know",
        excerpt: "Everything businesses need to understand about VAT registration, filing, and compliance in Jordan.",
        date: "2023-12-15",
        author: "Al-Samhadani Team",
        category: "Tax",
        image: "/placeholder.svg"
      }
    ],
    ar: [
      {
        id: 1,
        title: "أفضل 5 نصائح ضريبية للشركات الصغيرة",
        excerpt: "استراتيجيات التخطيط الضريبي الأساسية لمساعدة الشركات الصغيرة على تقليل العبء الضريبي وزيادة المدخرات.",
        date: "2024-01-15",
        author: "فريق السمهداني",
        category: "الضرائب",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "كيف توفر أتمتة المحاسبة الوقت",
        excerpt: "اكتشف كيف يمكن لبرامج المحاسبة الحديثة تبسيط عملياتك المالية وتعزيز الإنتاجية.",
        date: "2024-01-10",
        author: "فريق السمهداني",
        category: "المحاسبة",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "فهم ضريبة الشركات في الأردن",
        excerpt: "دليل شامل لقوانين ضرائب الشركات والمعدلات ومتطلبات الامتثال في الأردن.",
        date: "2024-01-05",
        author: "فريق السمهداني",
        category: "الضرائب",
        image: "/placeholder.svg"
      },
      {
        id: 4,
        title: "استراتيجيات التسويق الرقمي لشركات المالية",
        excerpt: "تعلم كيف يمكن لمقدمي الخدمات المالية الاستفادة من التسويق الرقمي لجذب العملاء والاحتفاظ بهم.",
        date: "2023-12-28",
        author: "فريق السمهداني",
        category: "التسويق",
        image: "/placeholder.svg"
      },
      {
        id: 5,
        title: "أفضل الممارسات لحفظ السجلات المالية",
        excerpt: "نصائح من الخبراء حول الحفاظ على سجلات مالية دقيقة ومنظمة لإدارة أفضل للأعمال.",
        date: "2023-12-20",
        author: "فريق السمهداني",
        category: "المحاسبة",
        image: "/placeholder.svg"
      },
      {
        id: 6,
        title: "تسجيل ضريبة القيمة المضافة: ما تحتاج معرفته",
        excerpt: "كل ما تحتاج الشركات لفهمه حول تسجيل ضريبة القيمة المضافة والإيداع والامتثال في الأردن.",
        date: "2023-12-15",
        author: "فريق السمهداني",
        category: "الضرائب",
        image: "/placeholder.svg"
      }
    ]
  };

  const posts = blogPosts[language];

  return (
    <div className="min-h-screen" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            {language === "en" ? "Our Blog" : "مدونتنا"}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-slide-in">
            {language === "en" 
              ? "Stay updated with the latest insights on accounting, taxation, and business growth"
              : "ابقَ على اطلاع بأحدث الأفكار حول المحاسبة والضرائب ونمو الأعمال"}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card 
                  className="hover:shadow-elegant transition-all duration-300 animate-fade-in cursor-pointer group h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === "en" ? "Subscribe to Our Newsletter" : "اشترك في نشرتنا الإخبارية"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Get the latest articles, tips, and insights delivered straight to your inbox"
              : "احصل على أحدث المقالات والنصائح والأفكار مباشرة في بريدك الوارد"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all">
              {language === "en" ? "Subscribe" : "اشترك"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
