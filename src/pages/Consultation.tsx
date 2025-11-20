import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, CheckCircle2, FileText, Briefcase, DollarSign, Clock, Phone } from "lucide-react";

const Consultation = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    position: "",
    
    // Business Info
    businessType: "",
    companySize: "",
    industry: "",
    
    // Service Info
    services: [] as string[],
    urgency: "",
    
    // Project Details
    projectDescription: "",
    currentChallenges: "",
    goals: "",
    
    // Budget & Timeline
    budget: "",
    timeline: "",
    preferredDate: "",
    preferredTime: "",
    
    // Additional
    hearAboutUs: "",
    additionalNotes: ""
  });

  const services = {
    en: [
      { id: "accounting", label: "Accounting & Bookkeeping" },
      { id: "auditing", label: "Financial Auditing" },
      { id: "tax", label: "Tax Consulting & Filing" },
      { id: "vat", label: "VAT Services" },
      { id: "software", label: "Accounting Software Solutions" },
      { id: "erp", label: "ERP Implementation" },
      { id: "social", label: "Social Media Management" },
      { id: "marketing", label: "Digital Marketing" }
    ],
    ar: [
      { id: "accounting", label: "المحاسبة ومسك الدفاتر" },
      { id: "auditing", label: "التدقيق المالي" },
      { id: "tax", label: "الاستشارات الضريبية والإقرارات" },
      { id: "vat", label: "خدمات ضريبة القيمة المضافة" },
      { id: "software", label: "حلول البرمجيات المحاسبية" },
      { id: "erp", label: "تطبيق أنظمة ERP" },
      { id: "social", label: "إدارة وسائل التواصل الاجتماعي" },
      { id: "marketing", label: "التسويق الرقمي" }
    ]
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const validateStep = (step: number) => {
    switch(step) {
      case 1:
        if (!formData.fullName || !formData.email || !formData.phone) {
          toast({
            title: language === "en" ? "Missing Information" : "معلومات ناقصة",
            description: language === "en" ? "Please fill in all required fields" : "الرجاء ملء جميع الحقول المطلوبة",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 2:
        if (!formData.businessType || !formData.companySize) {
          toast({
            title: language === "en" ? "Missing Information" : "معلومات ناقصة",
            description: language === "en" ? "Please provide business details" : "الرجاء تقديم تفاصيل العمل",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 3:
        if (formData.services.length === 0 || !formData.urgency) {
          toast({
            title: language === "en" ? "Missing Information" : "معلومات ناقصة",
            description: language === "en" ? "Please select at least one service" : "الرجاء اختيار خدمة واحدة على الأقل",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 4:
        if (!formData.projectDescription || !formData.goals) {
          toast({
            title: language === "en" ? "Missing Information" : "معلومات ناقصة",
            description: language === "en" ? "Please describe your project and goals" : "الرجاء وصف مشروعك وأهدافك",
            variant: "destructive"
          });
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    const selectedServices = formData.services
      .map(id => services[language].find(s => s.id === id)?.label)
      .join(", ");

    const message = `
*${language === "en" ? "Consultation Request" : "طلب استشارة"}*

*${language === "en" ? "Personal Information" : "المعلومات الشخصية"}:*
${language === "en" ? "Name" : "الاسم"}: ${formData.fullName}
${language === "en" ? "Email" : "البريد الإلكتروني"}: ${formData.email}
${language === "en" ? "Phone" : "الهاتف"}: ${formData.phone}
${language === "en" ? "Company" : "الشركة"}: ${formData.companyName || "N/A"}
${language === "en" ? "Position" : "المنصب"}: ${formData.position || "N/A"}

*${language === "en" ? "Business Details" : "تفاصيل العمل"}:*
${language === "en" ? "Type" : "النوع"}: ${formData.businessType}
${language === "en" ? "Size" : "الحجم"}: ${formData.companySize}
${language === "en" ? "Industry" : "المجال"}: ${formData.industry || "N/A"}

*${language === "en" ? "Services Requested" : "الخدمات المطلوبة"}:*
${selectedServices}
${language === "en" ? "Urgency" : "الأولوية"}: ${formData.urgency}

*${language === "en" ? "Project Details" : "تفاصيل المشروع"}:*
${formData.projectDescription}

*${language === "en" ? "Current Challenges" : "التحديات الحالية"}:*
${formData.currentChallenges || "N/A"}

*${language === "en" ? "Goals" : "الأهداف"}:*
${formData.goals}

*${language === "en" ? "Budget & Timeline" : "الميزانية والجدول الزمني"}:*
${language === "en" ? "Budget" : "الميزانية"}: ${formData.budget || "N/A"}
${language === "en" ? "Timeline" : "المدة"}: ${formData.timeline || "N/A"}
${language === "en" ? "Preferred Date" : "التاريخ المفضل"}: ${formData.preferredDate || "N/A"}
${language === "en" ? "Preferred Time" : "الوقت المفضل"}: ${formData.preferredTime || "N/A"}

*${language === "en" ? "Additional Notes" : "ملاحظات إضافية"}:*
${formData.additionalNotes || "N/A"}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/962798239913?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: language === "en" ? "Success!" : "نجح!",
      description: language === "en" 
        ? "Your consultation request is being sent via WhatsApp" 
        : "يتم إرسال طلب الاستشارة عبر WhatsApp"
    });
  };

  const steps = [
    { 
      number: 1, 
      title: language === "en" ? "Personal Info" : "المعلومات الشخصية",
      icon: <FileText className="w-5 h-5" />
    },
    { 
      number: 2, 
      title: language === "en" ? "Business Details" : "تفاصيل العمل",
      icon: <Briefcase className="w-5 h-5" />
    },
    { 
      number: 3, 
      title: language === "en" ? "Services" : "الخدمات",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    { 
      number: 4, 
      title: language === "en" ? "Project Details" : "تفاصيل المشروع",
      icon: <FileText className="w-5 h-5" />
    },
    { 
      number: 5, 
      title: language === "en" ? "Budget & Schedule" : "الميزانية والموعد",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            {language === "en" ? "Professional Consultation Request" : "طلب استشارة احترافية"}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-slide-in">
            {language === "en"
              ? "Get expert advice tailored to your business needs. Fill out the form and we'll contact you within 24 hours."
              : "احصل على استشارة خبراء مصممة خصيصاً لاحتياجات عملك. املأ النموذج وسنتواصل معك خلال 24 ساعة."}
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    currentStep >= step.number 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {currentStep > step.number ? <CheckCircle2 className="w-6 h-6" /> : step.icon}
                  </div>
                  <p className={`text-xs mt-2 text-center hidden md:block ${
                    currentStep >= step.number ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 transition-all ${
                    currentStep > step.number ? "bg-primary" : "bg-secondary"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? `Step ${currentStep} of ${steps.length}` 
                  : `الخطوة ${currentStep} من ${steps.length}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">{language === "en" ? "Full Name" : "الاسم الكامل"} *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder={language === "en" ? "John Doe" : "محمد أحمد"}
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{language === "en" ? "Email" : "البريد الإلكتروني"} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="email@example.com"
                          maxLength={255}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">{language === "en" ? "Phone Number" : "رقم الهاتف"} *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="07XXXXXXXX"
                          maxLength={20}
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">{language === "en" ? "Position/Title" : "المنصب"}</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => setFormData({...formData, position: e.target.value})}
                          placeholder={language === "en" ? "CEO, Manager, etc." : "مدير، رئيس تنفيذي، إلخ"}
                          maxLength={100}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="companyName">{language === "en" ? "Company Name" : "اسم الشركة"}</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        placeholder={language === "en" ? "Your Company Ltd." : "شركتك المحدودة"}
                        maxLength={100}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Business Details */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label>{language === "en" ? "Business Type" : "نوع العمل"} *</Label>
                      <RadioGroup value={formData.businessType} onValueChange={(value) => setFormData({...formData, businessType: value})}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="new" id="new" />
                          <Label htmlFor="new" className="font-normal cursor-pointer">
                            {language === "en" ? "New Business / Startup" : "عمل جديد / ناشئ"}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="existing" id="existing" />
                          <Label htmlFor="existing" className="font-normal cursor-pointer">
                            {language === "en" ? "Existing Business" : "عمل قائم"}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="font-normal cursor-pointer">
                            {language === "en" ? "Individual / Freelancer" : "فرد / مستقل"}
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="companySize">{language === "en" ? "Company Size" : "حجم الشركة"} *</Label>
                      <Select value={formData.companySize} onValueChange={(value) => setFormData({...formData, companySize: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "en" ? "Select size" : "اختر الحجم"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">{language === "en" ? "1-5 employees" : "1-5 موظفين"}</SelectItem>
                          <SelectItem value="6-20">{language === "en" ? "6-20 employees" : "6-20 موظف"}</SelectItem>
                          <SelectItem value="21-50">{language === "en" ? "21-50 employees" : "21-50 موظف"}</SelectItem>
                          <SelectItem value="51+">{language === "en" ? "51+ employees" : "51+ موظف"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="industry">{language === "en" ? "Industry/Sector" : "القطاع/المجال"}</Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        placeholder={language === "en" ? "e.g., Retail, Technology, Healthcare" : "مثلاً: التجزئة، التقنية، الرعاية الصحية"}
                        maxLength={100}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Services */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label className="text-base mb-4 block">
                        {language === "en" ? "Select Services You Need" : "اختر الخدمات التي تحتاجها"} *
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[language].map((service) => (
                          <div key={service.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-secondary/50 transition-colors">
                            <Checkbox
                              id={service.id}
                              checked={formData.services.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal cursor-pointer flex-1">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>{language === "en" ? "Project Urgency" : "أولوية المشروع"} *</Label>
                      <RadioGroup value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent" className="font-normal cursor-pointer">
                            {language === "en" ? "Urgent (Within 1 week)" : "عاجل (خلال أسبوع)"}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="soon" id="soon" />
                          <Label htmlFor="soon" className="font-normal cursor-pointer">
                            {language === "en" ? "Soon (1-4 weeks)" : "قريباً (1-4 أسابيع)"}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexible" id="flexible" />
                          <Label htmlFor="flexible" className="font-normal cursor-pointer">
                            {language === "en" ? "Flexible (1+ months)" : "مرن (شهر أو أكثر)"}
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 4: Project Details */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="projectDescription">
                        {language === "en" ? "Project Description" : "وصف المشروع"} *
                      </Label>
                      <Textarea
                        id="projectDescription"
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                        placeholder={language === "en" 
                          ? "Describe your project, what you need help with..."
                          : "صف مشروعك، ما الذي تحتاج المساعدة فيه..."}
                        rows={4}
                        maxLength={1000}
                      />
                    </div>

                    <div>
                      <Label htmlFor="currentChallenges">
                        {language === "en" ? "Current Challenges" : "التحديات الحالية"}
                      </Label>
                      <Textarea
                        id="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                        placeholder={language === "en"
                          ? "What problems are you facing?"
                          : "ما المشاكل التي تواجهها؟"}
                        rows={3}
                        maxLength={1000}
                      />
                    </div>

                    <div>
                      <Label htmlFor="goals">
                        {language === "en" ? "Goals & Objectives" : "الأهداف والغايات"} *
                      </Label>
                      <Textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => setFormData({...formData, goals: e.target.value})}
                        placeholder={language === "en"
                          ? "What do you want to achieve?"
                          : "ماذا تريد أن تحقق؟"}
                        rows={3}
                        maxLength={1000}
                      />
                    </div>
                  </div>
                )}

                {/* Step 5: Budget & Schedule */}
                {currentStep === 5 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          {language === "en" ? "Estimated Budget (JOD)" : "الميزانية التقديرية (دينار)"}
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={language === "en" ? "Select range" : "اختر المدى"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">{language === "en" ? "Under 500 JOD" : "أقل من 500 دينار"}</SelectItem>
                            <SelectItem value="500-1000">{language === "en" ? "500-1,000 JOD" : "500-1,000 دينار"}</SelectItem>
                            <SelectItem value="1000-3000">{language === "en" ? "1,000-3,000 JOD" : "1,000-3,000 دينار"}</SelectItem>
                            <SelectItem value="3000-5000">{language === "en" ? "3,000-5,000 JOD" : "3,000-5,000 دينار"}</SelectItem>
                            <SelectItem value="5000+">{language === "en" ? "5,000+ JOD" : "5,000+ دينار"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="timeline">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {language === "en" ? "Expected Timeline" : "الجدول الزمني المتوقع"}
                        </Label>
                        <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={language === "en" ? "Select duration" : "اختر المدة"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2weeks">{language === "en" ? "1-2 weeks" : "1-2 أسبوع"}</SelectItem>
                            <SelectItem value="1month">{language === "en" ? "1 month" : "شهر واحد"}</SelectItem>
                            <SelectItem value="2-3months">{language === "en" ? "2-3 months" : "2-3 أشهر"}</SelectItem>
                            <SelectItem value="3-6months">{language === "en" ? "3-6 months" : "3-6 أشهر"}</SelectItem>
                            <SelectItem value="ongoing">{language === "en" ? "Ongoing" : "مستمر"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {language === "en" ? "Preferred Consultation Date" : "تاريخ الاستشارة المفضل"}
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="preferredTime">
                          {language === "en" ? "Preferred Time" : "الوقت المفضل"}
                        </Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={language === "en" ? "Select time" : "اختر الوقت"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">{language === "en" ? "Morning (9AM-12PM)" : "صباحاً (9ص-12م)"}</SelectItem>
                            <SelectItem value="afternoon">{language === "en" ? "Afternoon (12PM-3PM)" : "بعد الظهر (12م-3م)"}</SelectItem>
                            <SelectItem value="evening">{language === "en" ? "Evening (3PM-6PM)" : "مساءً (3م-6م)"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="hearAboutUs">
                        {language === "en" ? "How did you hear about us?" : "كيف سمعت عنا؟"}
                      </Label>
                      <Select value={formData.hearAboutUs} onValueChange={(value) => setFormData({...formData, hearAboutUs: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "en" ? "Select option" : "اختر خياراً"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">{language === "en" ? "Google Search" : "بحث جوجل"}</SelectItem>
                          <SelectItem value="social">{language === "en" ? "Social Media" : "وسائل التواصل"}</SelectItem>
                          <SelectItem value="referral">{language === "en" ? "Referral" : "إحالة"}</SelectItem>
                          <SelectItem value="website">{language === "en" ? "Website" : "الموقع الإلكتروني"}</SelectItem>
                          <SelectItem value="other">{language === "en" ? "Other" : "أخرى"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="additionalNotes">
                        {language === "en" ? "Additional Notes" : "ملاحظات إضافية"}
                      </Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                        placeholder={language === "en"
                          ? "Any other information you'd like to share..."
                          : "أي معلومات أخرى تود مشاركتها..."}
                        rows={3}
                        maxLength={500}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      {language === "en" ? "Previous" : "السابق"}
                    </Button>
                  )}
                  
                  {currentStep < 5 ? (
                    <Button type="button" onClick={nextStep} className="ml-auto">
                      {language === "en" ? "Next" : "التالي"}
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto bg-primary hover:bg-primary/90">
                      {language === "en" ? "Submit Request" : "إرسال الطلب"}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "en" ? "What Happens Next?" : "ماذا يحدث بعد ذلك؟"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "1. Review" : "1. المراجعة"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "We review your request within 24 hours"
                  : "نراجع طلبك خلال 24 ساعة"}
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "2. Contact" : "2. التواصل"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "We'll call or message to discuss details"
                  : "سنتصل بك لمناقشة التفاصيل"}
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "3. Start Working" : "3. بدء العمل"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "We begin delivering results for your business"
                  : "نبدأ بتحقيق النتائج لعملك"}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
