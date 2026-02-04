import { Briefcase, Code, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.title")} <span className="text-primary">{t("about.me")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Côté gauche - Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t("about.subtitle")}
            </h3>

            <p className="text-muted-foreground">
              {t("about.description1")}
            </p>

            <p className="text-muted-foreground">
              {t("about.description2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("about.contact")}
              </a>

              {/* Bouton de téléchargement du CV */}
              <a
                href="/CV_stage_2025.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t("about.cv")}
              </a>
            </div>
          </div>

          {/* Côté droit - Compétences */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.dev_title")}</h4>
                  <p className="text-muted-foreground">
                    {t("about.dev_desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.tech_title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.tech_desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.exp_title")}</h4>
                  <p className="text-muted-foreground">
                    {t("about.exp_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
