import { useState, useEffect } from "react";
import { ExternalLink, ArrowRight, Github, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const personalProjects = [
  {
    id: 1,
    title: "Portfolio V2",
    description: "Un site portfolio personnel moderne et performant, construit avec les dernières technologies de l'écosystème React (React 18, Vite, Tailwind v4). Met l'accent sur une interface épurée et des transitions rapides.",
    image: "/projects/portfolioV.2.png", 
    tags: ["React", "Vite", "Tailwind CSS", "Radix UI"],
    demoUrl: "https://portfolio-v-2-ivory.vercel.app/",
    githubUrl: "https://github.com/SBS-santhosh/portfolioV.2" 
  },
  {
    id: 2,
    title: "Portfolio V1",
    description: "Un portfolio web statique classique présentant compétences et projets. Construit avec les technologies web fondamentales (HTML5, CSS3, JS) pour la simplicité et la rapidité.",
    image: "/projects/PortfolioV.1.png", 
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: null ,
    githubUrl: "https://github.com/SBS-santhosh/site-portfolio.1"
  },
  {
    id: 3,
    title: "Service MailSender",
    description: "Un service backend Node.js/Express robuste pour gérer les formulaires de contact et l'envoi d'emails via Nodemailer. Inclut une réponse automatique et une configuration sécurisée.",
    image: "/projects/node_mailer.png", 
    tags: ["Node.js", "Express", "Nodemailer", "Backend"],
    demoUrl: null,
    githubUrl: "https://github.com/SBS-santhosh/mailsender-nodemailer-"
  },
];

const professionalProjects = [
  {
    id: 1,
    title: "93Moove",
    description: "Une application web dédiée à la gestion et à la promotion d'activités sportives, manuelles et culturelles pour l'association 93Moove à Saint-Ouen. Inclut la gestion des sessions, un espace admin et une authentification sécurisée.",
    image: "/projects/93moove.png",
    tags: ["Next.js 15", "Prisma", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/SBS-santhosh/93-moove-crud-",
    demoUrl: null 
  },
  {
    id: 2,
    title: "Octogone Battle Arena",
    description: "Un moteur de simulation de combat au tour par tour en TypeScript. Dispose d'une architecture orientée objet complète avec classes de personnages, héritage d'objets et mécaniques de jeu stratégiques.",
    image: "/projects/TP_TypeScript_octogone.png",
    tags: ["TypeScript", "OOP", "Node.js"],
    githubUrl: "https://github.com/SBS-santhosh/TP_TypeScript_octogone",
    demoUrl: null 
  },
  {
    id: 3,
    title: "Plateforme de Recrutement",
    description: "Un système complet de gestion de recrutement construit avec Next.js et Redux Toolkit. Inclut le suivi des candidats, des tableaux de bord recruteurs et un stockage local persistant.",
    image: "/projects/Recruitment Platform.png",
    tags: ["Next.js", "React", "Redux Toolkit", "Ant Design", "i18n"],
    githubUrl: "https://github.com/SBS-santhosh/recruitment-platform-challenge", 
    demoUrl: "https://recruitment-platform-challenge.vercel.app/login"
  },
  {
    id: 4,
    title: "Annuaire Médical GSB",
    description: "Une application Angular moderne pour la gestion des dossiers des praticiens. Exploite Angular Signals, un routage robuste et des composants autonomes pour une expérience utilisateur réactive.",
    image: "/projects/gsb-doc.png",
    tags: ["Angular", "TypeScript", "RxJS", "Standalone Components"],
    githubUrl: "https://github.com/SBS-santhosh/Angular-Module_Medecins",
    demoUrl: null
  },
];

export const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState("professionnel");
  const projects = activeTab === "personnel" ? personalProjects : professionalProjects;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [activeTab]);

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
    <section id="showcase" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Projets <span className="text-primary">Professionnels & Personnels</span>
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-secondary/50 p-1 rounded-full flex">
            <button
              onClick={() => setActiveTab("personnel")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "personnel"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projets Personnels
            </button>
            <button
              onClick={() => setActiveTab("professionnel")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "professionnel"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projets Professionnels
            </button>
          </div>
        </div>

        {/* Project Slider */}
        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${activeTab}-${currentIndex}`}
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
              className="absolute w-full max-w-md"
            >
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs border border-primary/10">
                <div className="h-48 overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {projects[currentIndex].description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {projects[currentIndex].githubUrl && (
                        <a
                          href={projects[currentIndex].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                          title="Voir le code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {projects[currentIndex].demoUrl && (
                        <a
                          href={projects[currentIndex].demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                          title="Voir la démo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {projects.length > 1 && (
            <>
              <button
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                onClick={() => paginate(1)}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
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
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            className="cosmic-button w-fit flex items-center gap-2"
            target="_blank"
            href="https://github.com/SBS-santhosh"
          >
            Voir mon Github <ArrowRight size={16} />
          </a>

          <a
            className="cosmic-button w-fit flex items-center gap-2"
            href="/files/Tableau-Synthese-Epreuve-BTS-SIO.pdf"
            download="Tableau-Synthese-Epreuve-BTS-SIO.pdf"
          >
            Tableau Synthèse <Download size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
