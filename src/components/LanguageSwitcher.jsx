import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-3">
      <div 
        onClick={toggleLanguage}
        className={cn(
          "relative w-20 h-10 rounded-full cursor-pointer p-1 transition-colors duration-300",
          "bg-background/20 backdrop-blur-md border border-primary/20 shadow-lg",
          "hover:border-primary/40"
        )}
      >
        {/* Sliding Indicator */}
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 rounded-full bg-primary shadow-md flex items-center justify-center"
          animate={{ x: language === "fr" ? 0 : 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
           <span className="text-[10px] font-bold text-primary-foreground uppercase">
            {language}
          </span>
        </motion.div>

        {/* Labels */}
        <div className="flex h-full w-full justify-between items-center px-3 select-none">
          <span className={cn(
            "text-xs font-bold transition-opacity duration-300",
            language === "fr" ? "opacity-0" : "opacity-100 text-foreground/70"
          )}>
            FR
          </span>
          <span className={cn(
            "text-xs font-bold transition-opacity duration-300",
            language === "en" ? "opacity-0" : "opacity-100 text-foreground/70"
          )}>
            EN
          </span>
        </div>
      </div>
      
      {/* Decorative label next to toggle */}
      <span className="text-[10px] uppercase tracking-widest text-primary/60 font-medium hidden sm:block">
        {language === "fr" ? "Français" : "English"}
      </span>
    </div>
  );
};
