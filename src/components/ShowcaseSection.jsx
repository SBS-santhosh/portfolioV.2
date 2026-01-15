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
    title: "Octogone Battle Arena",
    description: "Un moteur de simulation de combat au tour par tour en TypeScript. Dispose d'une architecture orientée objet complète avec classes de personnages, héritage d'objets et mécaniques de jeu stratégiques.",
    image: "/projects/TP_TypeScript_octogone.png",
    tags: ["TypeScript", "OOP", "Node.js"],
    githubUrl: "https://github.com/SBS-santhosh/TP_TypeScript_octogone",
    demoUrl: null 
  },
  {
    id: 2,
    title: "Plateforme de Recrutement",
    description: "Un système complet de gestion de recrutement construit avec Next.js et Redux Toolkit. Inclut le suivi des candidats, des tableaux de bord recruteurs et un stockage local persistant.",
    image: "/projects/Recruitment Platform.png",
    tags: ["Next.js", "React", "Redux Toolkit", "Ant Design", "i18n"],
    githubUrl: "https://github.com/SBS-santhosh/recruitment-platform-challenge", 
    demoUrl: "https://recruitment-platform-challenge.vercel.app/login"
  },
  {
    id: 3,
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
    <section id="showcase" className="py-24 px-4 relative">
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={`${activeTab}-${project.id}`}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover animate-fadeIn"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                          title="Voir le code"
                        >
                          <Github size={20} />
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
                          <ExternalLink size={20} />
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
