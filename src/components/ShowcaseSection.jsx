import { useState } from "react";
import { ExternalLink, ArrowRight, Github, Download } from "lucide-react";

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

  return (
    <section id="showcase" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-h-[400px]">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-lg border border-primary/10 flex flex-col h-full card-hover">
              <div className="h-40 overflow-hidden bg-white/5 flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-primary/5 text-primary border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                        title="Voir le code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                        title="Voir la démo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
