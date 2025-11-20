import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { NavLink } from "@/components/NavLink";
import {
  Home,
  Info,
  Briefcase,
  FolderKanban,
  BookOpen,
  HelpCircle,
  Calendar,
  Phone,
  ChevronRight,
} from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const { state } = useSidebar();
  const { language } = useLanguage();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const navItems = {
    en: [
      { name: "Home", path: "/", icon: Home },
      { name: "About Us", path: "/about", icon: Info },
      { name: "Services", path: "/services", icon: Briefcase },
      { name: "Portfolio", path: "/portfolio", icon: FolderKanban },
      { name: "Blog", path: "/blog", icon: BookOpen },
      { name: "FAQ", path: "/faq", icon: HelpCircle },
      { name: "Consultation", path: "/consultation", icon: Calendar },
      { name: "Contact", path: "/contact", icon: Phone },
    ],
    ar: [
      { name: "الرئيسية", path: "/", icon: Home },
      { name: "من نحن", path: "/about", icon: Info },
      { name: "الخدمات", path: "/services", icon: Briefcase },
      { name: "معرض الأعمال", path: "/portfolio", icon: FolderKanban },
      { name: "المدونة", path: "/blog", icon: BookOpen },
      { name: "الأسئلة الشائعة", path: "/faq", icon: HelpCircle },
      { name: "استشارة", path: "/consultation", icon: Calendar },
      { name: "تواصل معنا", path: "/contact", icon: Phone },
    ],
  };

  const currentItems = navItems[language];

  return (
    <Sidebar
      className={`
        ${collapsed ? "w-16" : "w-64"}
        lg:fixed lg:top-0 lg:left-0 
        lg:h-screen
        z-40
        transition-all duration-300 border-r 
        border-border bg-card/50 backdrop-blur-md
      `}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Al-Samhadani Logo" className="h-10 w-10 flex-shrink-0" />
          {!collapsed && (
            <div className="overflow-hidden">
              <span
                className="font-bold text-base truncate block"
                style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}
              >
                {language === "en" ? "Al-Samhadani" : "السمهداني"}
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            <span style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Navigation" : "التنقل"}
            </span>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {currentItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      tooltip={collapsed ? item.name : undefined}
                      className={`${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold border-r-2 border-primary"
                          : "text-foreground/80 hover:bg-muted/50"
                      } transition-all duration-200`}
                    >
                      <NavLink
                        to={item.path}
                        className="flex items-center gap-3 w-full"
                        style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}
                      >
                        <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-primary" : ""}`} />
                        {!collapsed && <span className="truncate">{item.name}</span>}
                        {!collapsed && language === "ar" && (
                          <ChevronRight className="h-4 w-4 mr-auto" />
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
