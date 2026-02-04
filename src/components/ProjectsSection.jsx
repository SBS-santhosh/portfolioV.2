import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    id: 1,
    title: "Rapport de stage Arimayi",
    description: "Rapport de stage effectué du Du 1er Décembre 2025 au 23 janvier 2026 chez Arimayi.",
    image: "/exeprience/arimayi-logo.png",
    tags: ["Stage", "Arimayi", "Choisy Le Roi"],
    demoUrl: "https://drive.google.com/drive/folders/1BR-hpbm0kiGOz-0HEJ4QKxHbRsz__qzc?usp=sharing",
    date: "2026-01-23",
  },
  {
    id: 2,
    title: "Rapport de stage XEFI Sannois",
    description:
      "Rapport de stage effectué du 26 mai au 25 juillet 2025 chez XEFI Sannois.",
    image: "/exeprience/Logo xefi.png",
    tags: ["Stage", "XEFI", "Sannois"],
    demoUrl:
      "https://drive.google.com/drive/folders/1uR4cI2NWMntxLgwFTPUlVuI78uHnlRT9?usp=sharing",
    date: "2025-05-30",
  },
  {
    id: 3,
    title: "Rapport de stage Tekwave",
    description:
      "Rapport de stage effectué du 15 janvier au 9 février 2024 chez Tekwave, Bondy.",
    image: "/exeprience/Logo Tekwave.jpg",
    tags: ["Stage", "Tekwave", "Bondy"],
    demoUrl:
      "https://drive.google.com/drive/folders/1Yk5rtkEuymYIwcxrQARbezshRJNYA3Pn?usp=drive_link",
    date: "2024-02-30",
  },
  {
    id: 4,
    title: "Rapport de stage GK",
    description:
      "Rapport de stage effectué du 21 novembre au 16 décembre 2022 chez GK Multiservice, Bobigny.",
    image: "/exeprience/Logo GK.jpg",
    tags: ["Stage", "GK Multiservice", "Bobigny"],
    demoUrl:
      "https://drive.google.com/drive/folders/1LsPD_AXkQb2A-ke2So0Yj3agY4Pq3Xir?usp=drive_link",
    date: "2022-12-26",
  },
];

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const projectTranslations = t("projects.items");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("projects.title")} <span className="text-primary">{t("projects.subtitle")}</span>
        </h2>

        <div className="relative h-[420px] md:h-[380px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipePower) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-xl"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-primary/10 flex flex-col md:flex-row h-full">
                <div className="md:w-5/12 h-40 md:h-auto overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-7/12 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projects[currentIndex].tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-primary/5 text-primary border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {projectTranslations && projectTranslations[projects[currentIndex].id] 
                        ? projectTranslations[projects[currentIndex].id].title 
                        : projects[currentIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {projectTranslations && projectTranslations[projects[currentIndex].id] 
                        ? projectTranslations[projects[currentIndex].id].description 
                        : projects[currentIndex].description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={projects[currentIndex].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium transition-all group"
                    >
                      {t("projects.viewReport")} <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hidden md:block"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hidden md:block"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
