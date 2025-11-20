import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeamSectionProps {
  showTitle?: boolean;
  variant?: "default" | "compact";
}

const TeamSection = ({ showTitle = true, variant = "default" }: TeamSectionProps) => {
  const { language } = useLanguage();

  const teamMembers = {
    en: [
      {
        name: "Taha Al-Khatib",
        position: "Software Engineer",
        specialization: "Full-Stack Development",
        initials: "TK",
        description: "Expert in building scalable web applications and enterprise solutions using modern technologies.",
        skills: ["React", "Node.js", "TypeScript", "Cloud Architecture", "Database Design"],
        email: "taha@alsamhadani.com",
        linkedin: "https://linkedin.com/in/tahalkhatib",
        github: "https://github.com/tahalkhatib",
        phone: "+962798239913"
      },
      {
        name: "Ahmad Al-Samhadani",
        position: "Senior Accountant",
        specialization: "Certified Public Accountant",
        initials: "AA",
        description: "Seasoned accounting professional with extensive experience in financial reporting and tax compliance.",
        skills: ["Financial Reporting", "Tax Planning", "Auditing", "IFRS", "Compliance"],
        email: "ahmad@alsamhadani.com",
        linkedin: "https://linkedin.com/in/ahmadalsamhadani",
        phone: "+962798239913"
      }
    ],
    ar: [
      {
        name: "طه الخطيب",
        position: "مهندس برمجيات",
        specialization: "تطوير تطبيقات الويب الكاملة",
        initials: "TK",
        description: "خبير في بناء تطبيقات الويب القابلة للتوسع والحلول المؤسسية باستخدام التقنيات الحديثة.",
        skills: ["React", "Node.js", "TypeScript", "البنية السحابية", "تصميم قواعد البيانات"],
        email: "taha@alsamhadani.com",
        linkedin: "https://linkedin.com/in/tahalkhatib",
        github: "https://github.com/tahalkhatib",
        phone: "+962798239913"
      },
      {
        name: "أحمد السمهداني",
        position: "محاسب أول",
        specialization: "محاسب قانوني معتمد",
        initials: "AA",
        description: "محترف محاسبة متمرس مع خبرة واسعة في إعداد التقارير المالية والامتثال الضريبي.",
        skills: ["إعداد التقارير المالية", "التخطيط الضريبي", "التدقيق", "المعايير الدولية", "الامتثال"],
        email: "ahmad@alsamhadani.com",
        linkedin: "https://linkedin.com/in/ahmadalsamhadani",
        phone: "+962798239913"
      }
    ]
  };

  const currentTeam = language === "en" ? teamMembers.en : teamMembers.ar;

  return (
    <section 
      className={`${variant === "compact" ? "py-12" : "py-20"} bg-muted/30`}
      style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}
    >
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Meet Our Expert Team" : "تعرف على فريقنا المحترف"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "en"
                ? "Dedicated professionals committed to delivering excellence in every service we provide"
                : "محترفون متفانون ملتزمون بتقديم التميز في كل خدمة نقدمها"}
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 ${variant === "compact" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-2"} gap-8`}>
          {currentTeam.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-500 animate-fade-in border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Header with gradient */}
                  <div className="h-32 bg-gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  </div>
                  
                  {/* Avatar */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-glow border-4 border-background group-hover:scale-110 transition-transform duration-300">
                      {member.initials}
                    </div>
                  </div>
                </div>

                <div className="pt-20 pb-6 px-6 text-center">
                  {/* Name and Position */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.specialization}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-3">
                      {language === "en" ? "Key Skills:" : "المهارات الأساسية:"}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full"
                      asChild
                    >
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                    
                    {member.linkedin && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full"
                        asChild
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    
                    {member.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full"
                        asChild
                      >
                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full"
                      asChild
                    >
                      <a href={`tel:${member.phone}`} aria-label="Phone">
                        <Phone className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {variant === "default" && (
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              {language === "en"
                ? "Ready to work with our team? Get in touch today!"
                : "هل أنت مستعد للعمل مع فريقنا؟ تواصل معنا اليوم!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                asChild
              >
                <a href="tel:+962798239913">
                  📞 {language === "en" ? "Call Us Now" : "اتصل بنا الآن"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://wa.me/962798239913" target="_blank" rel="noopener noreferrer">
                  💬 {language === "en" ? "WhatsApp Chat" : "محادثة واتساب"}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
