import { ReactNode } from "react";
import Navigation from "./Navigation";
import FloatingButtons from "./FloatingButtons";
import AppSidebar from "./AppSidebar";
import { ThemeProvider } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import logo from "@/assets/logo.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider defaultOpen={true}>
        <div className={`${language === "ar" ? "rtl" : "ltr"} min-h-screen flex w-full`}>
          {/* Sidebar for desktop */}
          <div className="hidden lg:block">
            <AppSidebar />
          </div>

          {/* Main content wrapper */}
          <div className="flex-1 flex flex-col w-full">
            <Navigation language={language} setLanguage={setLanguage} />
            
            {/* Sidebar toggle for desktop - always visible */}
            <div className="hidden lg:flex items-center h-12 border-b border-border/40 bg-background/80 backdrop-blur-md px-4">
              <SidebarTrigger className="hover:bg-muted rounded-md" />
            </div>

            <main className="flex-1 pt-16 lg:pt-0">{children}</main>
            <FloatingButtons />
            
            <footer className="bg-card border-t border-border mt-20">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={logo} alt="Al-Samhadani Logo" className="h-16 w-auto" />
                    </div>
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" ? "Al-Samhadani" : "السمهداني"}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" 
                        ? "Your trusted partner for accounting, tax, and digital solutions."
                        : "شريكك الموثوق للمحاسبة والضرائب والحلول الرقمية"}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" ? "Contact" : "تواصل معنا"}
                    </h3>
                    <div className="space-y-2 text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      <p>📍 {language === "en" ? "Aqaba, Ninth District, Jordan" : "العقبة، الحي التاسع، الأردن"}</p>
                      <p className="text-primary font-semibold">📞 0798239913</p>
                      <p>💬 <a href={`https://wa.me/962798239913`} className="hover:text-primary transition-colors">WhatsApp Chat</a></p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" ? "Business Hours" : "ساعات العمل"}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                      {language === "en" 
                        ? "Sunday - Thursday: 9:00 AM - 6:00 PM"
                        : "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً"}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  <p>&copy; {new Date().getFullYear()} {language === "en" ? "Al-Samhadani. All rights reserved." : "السمهداني. جميع الحقوق محفوظة."}</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
