import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import notFoundImg from "../assets/NotFound.png";
import { useLanguage } from "../context/LanguageContext";

export const NotFound = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* "Big Bear" Image */}
        <div className="relative w-64 mx-auto animate-fadeIn">
             <img 
               src={notFoundImg} 
               alt="Page Not Found" 
               className="w-full h-auto object-contain"
             />
        </div>
        
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          {t("notFound.title")}
        </h1>

         <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
        >
          <ArrowLeft size={18} />
          {t("notFound.back")}
        </Link>
      </div>
    </div>
  );
};
