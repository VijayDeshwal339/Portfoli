"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Heart, 
  FolderKanban,
  Menu,
  X
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  target: string;
}

export default function NavMenu() {
  const [activeItem, setActiveItem] = useState<string>("profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { icon: <User className="h-5 w-5" />, label: "Profile", target: "profile" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Experience", target: "experience" },
    { icon: <GraduationCap className="h-5 w-5" />, label: "Education", target: "education" },
    { icon: <Code className="h-5 w-5" />, label: "Skills", target: "skills" },
    { icon: <Heart className="h-5 w-5" />, label: "Interests", target: "interests" },
    { icon: <FolderKanban className="h-5 w-5" />, label: "Projects", target: "projects" },
  ];

  const handleItemClick = (target: string) => {
    setActiveItem(target);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Handle scroll to update active menu item
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const sections = navItems.map(item => item.target);
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current && current !== activeItem) {
        setActiveItem(current);
      }
    });
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-background p-2 rounded-full shadow-md border border-border"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={cn(
          "fixed inset-0 bg-background z-40 p-6 pt-16 md:hidden",
          mobileMenuOpen ? "flex flex-col" : "hidden"
        )}
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleItemClick(item.target)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-colors",
                activeItem === item.target 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Desktop nav */}
      <motion.div 
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <nav className="bg-background border border-border rounded-full shadow-md px-2 py-1.5 flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleItemClick(item.target)}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors",
                activeItem === item.target 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {item.icon}
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </motion.div>
    </>
  );
}