import { Zap, FileText, Headset, Search, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const softSkills = [
  {
    name: "Polyvalence & Adaptabilité",
    description: "Capacité à s'adapter rapidement à de nouveaux environnements et à jongler entre différentes tâches techniques et organisationnelles.",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    name: "Communication Technique & Documentation",
    description: "Aptitude à expliquer des concepts complexes et à produire une documentation claire et structurée pour les projets.",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    name: "Sens du Service Client & Écoute",
    description: "Engagement à comprendre les besoins des utilisateurs et à fournir des solutions adaptées avec empathie et professionnalisme.",
    icon: <Headset className="h-6 w-6 text-primary" />,
  },
  {
    name: "Curiosité & Apprentissage Continu",
    description: "Veille technologique active et volonté constante d'explorer de nouvelles technologies pour rester à la pointe.",
    icon: <Search className="h-6 w-6 text-primary" />,
  },
  {
    name: "Communication Interculturelle",
    description: "Capacité à évoluer et à collaborer efficacement dans des environnements diversifiés et multiculturels.",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    name: "Rigueur & Précision",
    description: "Souci du détail et engagement envers l'excellence dans le code, les tests et le rendu final des projets.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
];

export const SoftSkillsSection = () => {
  const { t } = useLanguage();
  const skills = t("softSkills.skills");

  return (
    <section id="soft-skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("softSkills.title")} <span className="text-primary">{t("softSkills.subtitle")}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-2">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">
                {skills && skills[index] ? skills[index].name : skill.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skills && skills[index] ? skills[index].description : skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
