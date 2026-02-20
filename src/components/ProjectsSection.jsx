import { ExternalLink } from "lucide-react";
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

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("projects.title")} <span className="text-primary">{t("projects.subtitle")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-primary/5 text-primary border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold mb-2 leading-tight">
                    {projectTranslations && projectTranslations[project.id] 
                      ? projectTranslations[project.id].title 
                      : project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {projectTranslations && projectTranslations[project.id] 
                      ? projectTranslations[project.id].description 
                      : project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline text-sm font-semibold transition-all group"
                  >
                    {t("projects.viewReport")} <ExternalLink size={15} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
