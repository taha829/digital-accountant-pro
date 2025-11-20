import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import TeamSection from "@/components/TeamSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const contactInfoReveal = useScrollReveal();
  const formReveal = useScrollReveal();
  const teamReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/962798239913?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === "en" ? (
              <>Get in <span className="text-white">Touch</span></>
            ) : (
              <><span className="text-white">تواصل</span> معنا</>
            )}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {language === "en"
              ? "We're here to help you succeed. Reach out for a free consultation."
              : "نحن هنا لمساعدتك على النجاح. تواصل معنا للحصول على استشارة مجانية."}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div 
              ref={contactInfoReveal.ref}
              className={`space-y-8 transition-all duration-1000 ${
                contactInfoReveal.isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  {language === "en" ? "Contact Information" : "معلومات التواصل"}
                </h2>
              </div>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle>{language === "en" ? "Location" : "الموقع"}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === "en" ? (
                      <>Aqaba, Ninth District<br />Jordan</>
                    ) : (
                      <>العقبة، الحي التاسع<br />الأردن</>
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <CardTitle>{language === "en" ? "Phone" : "الهاتف"}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:+962798239913" className="text-primary font-semibold text-lg hover:underline">
                    0798239913
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>{language === "en" ? "Business Hours" : "ساعات العمل"}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === "en" ? (
                      <>Sunday - Thursday<br />9:00 AM - 6:00 PM</>
                    ) : (
                      <>الأحد - الخميس<br />9:00 صباحاً - 6:00 مساءً</>
                    )}
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="w-full h-64 bg-secondary/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Aqaba, Ninth District, Jordan
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div 
              ref={formReveal.ref}
              className={`transition-all duration-1000 ${
                formReveal.isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ fontFamily: "Poppins" }}>
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="07XXXXXXXX"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your needs..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                    >
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
        <TeamSection showTitle={false} variant="compact" />
      </div>

      {/* Quick Contact CTA */}
      <section 
        ref={ctaReveal.ref}
        className={`py-20 bg-secondary/20 transition-all duration-1000 ${
          ctaReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en" ? "Prefer to Talk Directly?" : "تفضل التحدث مباشرة؟"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {language === "en"
              ? "Give us a call or send a WhatsApp message"
              : "اتصل بنا أو أرسل رسالة واتساب"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-lg px-8"
              asChild
            >
              <a href="tel:+962798239913">
                📞 {language === "en" ? "Call: 0798239913" : "اتصل: 0798239913"}
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8"
              asChild
            >
              <a href="https://wa.me/962798239913" target="_blank" rel="noopener noreferrer">
                💬 {language === "en" ? "WhatsApp Chat" : "محادثة واتساب"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
