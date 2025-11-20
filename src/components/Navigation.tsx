import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const mainNavItems = {
    en: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Blog", path: "/blog" },
    ],
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "من نحن", path: "/about" },
      { name: "الخدمات", path: "/services" },
      { name: "معرض الأعمال", path: "/portfolio" },
      { name: "المدونة", path: "/blog" },
    ],
  };

  const moreNavItems = {
    en: [
      { name: "FAQ", path: "/faq" },
      { name: "Consultation", path: "/consultation" },
      { name: "Contact", path: "/contact" },
    ],
    ar: [
      { name: "الأسئلة الشائعة", path: "/faq" },
      { name: "استشارة", path: "/consultation" },
      { name: "تواصل معنا", path: "/contact" },
    ],
  };

  const allNavItems = {
    en: [...mainNavItems.en, ...moreNavItems.en],
    ar: [...mainNavItems.ar, ...moreNavItems.ar],
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const isMoreItemActive = moreNavItems[language].some(
    (item) => location.pathname === item.path
  );

  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Al-Samhadani Logo" className="h-12 w-auto" />
            <span className="font-bold text-lg hidden sm:block" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Al-Samhadani" : "السمهداني"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {mainNavItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium gap-1 ${
                    isMoreItemActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {language === "en" ? "More" : "المزيد"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-md border-border/40">
                {moreNavItems[language].map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`cursor-pointer ${
                        location.pathname === item.path ? "text-primary font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {allNavItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
