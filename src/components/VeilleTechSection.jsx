import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, BookOpen, Award, ChevronRight, ExternalLink, Code, Zap, Users, CheckCircle, Lightbulb, Layers, Search, X, Trophy, Check, AlertTriangle, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";

export const VeilleTechSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [currentQuizStep, setCurrentQuizStep] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizKey, setQuizKey] = useState(0);

  const sections = [
    {
      id: 0,
      title: "Introduction",
      icon: Lightbulb,
      duration: "1 min",
      content: {
        theme: "Low Code / No Code",
        definition: {
          lowCode: "Développement d'applications à l'aide d'interfaces visuelles, de composants préconfigurés et, si nécessaire, de code complémentaire",
          noCode: "Création d'applications ou d'automatisations sans écrire de code, grâce à des interfaces visuelles",
          ai: "Développement assisté par IA : décrire un besoin en langage naturel pour générer une première version d'application"
        },
        reason: "Démocratise la création d'applications, accélère la transformation numérique, aide les entreprises à répondre plus vite aux besoins, et permet aux équipes métier de participer au développement",
        note: "Le Low Code / No Code ne remplace pas totalement les développeurs : ils restent indispensables pour l'architecture, la sécurité, l'intégration des systèmes, la qualité et la maintenance."
      }
    },
    {
      id: 1,
      title: "Fondements",
      icon: Layers,
      duration: "2 min",
      content: {
        objective: "Accélérer la transformation numérique en permettant de développer rapidement des applications, sites web, formulaires, tableaux de bord et automatisations",
        targets: ["PME & Startups", "Services internes", "Équipes marketing/commerciales", "Développeurs professionnels", "Étudiants & reconversion", "Administrations"],
        platforms: {
          lowCode: ["Microsoft Power Apps", "Mendix", "OutSystems", "Appian", "ServiceNow App Engine", "Node-RED", "Google AppSheet"],
          noCode: ["Bubble", "Glide", "Webflow", "Make", "Notion", "Airtable", "Zapier"]
        },
        advantages: ["Développement plus rapide", "Accessibilité pour les profils non techniques", "Automatisation des tâches répétitives", "Meilleure collaboration métier / IT"],
        limits: ["Personnalisation parfois limitée", "Dépendance à l'éditeur (lock-in)", "Sécurité et conformité à surveiller", "Shadow IT : applications non contrôlées par l'IT"],
        highlight: "Bubble évolue vers un modèle hybride : sa plateforme reste visuelle, mais propose désormais des fonctions d'IA capables de générer et modifier des applications. La gouvernance (droits, données, sécurité) devient un enjeu essentiel."
      }
    },
    {
      id: 2,
      title: "Outils",
      icon: Search,
      duration: "1.5 min",
      content: {
        tools: [
          {
            name: "Flux RSS",
            tool: "Feedly",
            sources: ["TechCrunch", "Journal du Net", "Maddyness", "ZDNET", "Blogs Microsoft / Google / Bubble / Make"]
          },
          {
            name: "Alertes IA",
            tool: "Google Alerts",
            keywords: ["Low Code 2026", "No Code 2026", "AI app builder", "Power Apps Copilot", "AppSheet Gemini", "Bubble AI Agent", "Make AI Agents", "gouvernance Low Code"]
          },
          {
            name: "IA Résumés",
            tool: "Perplexity / ChatGPT",
            use: "Résumer les actualités Low Code/No Code depuis déc. 2025 (dates, sources, impacts)"
          },
          {
            name: "Newsletters",
            tool: "N/A",
            examples: ["NoCode.tech Weekly", "Product Hunt", "Blog Bubble", "Blog Make", "Microsoft Power Platform Blog", "Google Workspace Updates"]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Actualités",
      icon: BookOpen,
      duration: "4 min",
      content: {
        news: [
          {
            date: "Oct. – Déc. 2025",
            title: "Bubble accélère avec l'IA (Bubble AI Agent)",
            description: "Bubble lance un assistant IA capable de comprendre une application, générer des éléments, corriger des workflows et accompagner la construction du projet, avec une extension aux applications mobiles natives.",
            impact: "La frontière entre No Code et développement assisté par IA devient moins nette",
            example: "Un entrepreneur demande : « Crée une application mobile de réservation avec espace client et paiement. » Bubble génère une base modifiable et testable.",
            source: "Bubble Blog",
            link: "https://bubble.io/blog/bubble-tour-founder-keynote-2025"
          },
          {
            date: "Novembre 2025",
            title: "Make transforme l'automatisation avec l'IA",
            description: "Make présente ses AI Agents ainsi que Maia, un assistant permettant de créer des automatisations à partir d'une description en langage naturel.",
            impact: "L'automatisation devient accessible aux services non techniques",
            example: "« Quand un formulaire est reçu, analyse-le, classe-le, enregistre-le dans Google Sheets et envoie une réponse personnalisée » — le scénario est proposé automatiquement puis vérifié par l'utilisateur.",
            source: "Make — Press release",
            link: "https://www.make.com/en/make-ai-agents-press-release"
          },
          {
            date: "Mars – Sept. 2026",
            title: "Microsoft renforce Power Platform (2026 Release Wave 1)",
            description: "Le plan combine développement visuel, génération par langage naturel, automatisation, agents IA et intégration avec Microsoft 365, Azure et Dataverse.",
            impact: "Développeurs et équipes métier collaborent sur une même plateforme, avec un besoin accru de gouvernance",
            example: "Un service commercial demande une appli de suivi des prospects connectée à Outlook/Teams/Dataverse ; Power Apps génère la structure, l'IT contrôle l'accès et la sécurité.",
            source: "learn.microsoft.com",
            link: "https://learn.microsoft.com/power-platform/release-plan/2026wave1/"
          },
          {
            date: "Jan. – Août 2026",
            title: "Le développement par langage naturel progresse",
            description: "Les plateformes ne proposent plus seulement des blocs visuels : elles génèrent une application, un workflow ou un agent à partir d'un objectif décrit en langage naturel (Maia chez Make, agent IA renforcé chez Bubble).",
            impact: "Prototypage plus rapide, mais vigilance requise : erreurs de logique, sécurité, gestion des données à vérifier avant mise en production",
            example: "Passer d'une idée à une première démonstration fonctionnelle en quelques minutes, puis tester avant utilisation réelle.",
            source: "Make Blog",
            link: "https://www.make.com/en/blog/natural-language-automation"
          }
        ],
        trends: [
          {
            icon: "agent",
            title: "Des outils No Code vers des agents IA",
            text: "Le No Code assemblait des composants visuels ; en 2026 les outils créent des agents capables d'exécuter des actions et de répondre en langage naturel."
          },
          {
            icon: "team",
            title: "Des équipes hybrides (« fusion teams »)",
            text: "Développeurs, experts métier, designers, responsables sécurité et utilisateurs créateurs travaillent désormais ensemble."
          },
          {
            icon: "governance",
            title: "La gouvernance devient indispensable",
            text: "Règles d'utilisation, gestion des droits, validation des applications, protection des données et surveillance des coûts."
          },
          {
            icon: "skill",
            title: "Low Code ne veut pas dire « sans compétence »",
            text: "Bases de données, droits d'accès, API, sécurité, tests et limites de l'IA restent à comprendre."
          }
        ]
      }
    },
    { 
      id: 4, 
      title: "Conclusion", 
      icon: CheckCircle, 
      duration: "1 min" 
    },
    { 
      id: 5, 
      title: "Quiz", 
      icon: Award, 
      duration: "2 min" 
    }
  ];

  // Base quiz questions (without randomization) — mis à jour 2025-2026
const baseQuizQuestions = [
  {
    q: "Qu'est-ce que le Low Code ?",
    options: [
      { id: "B", text: "Créer des applications sans aucune programmation", correct: false },
      { id: "A", text: "Développer des applications avec des interfaces visuelles et peu de code", correct: true },
      { id: "C", text: "Un nouveau langage de programmation", correct: false },
    ],
  },
  {
    q: "Quel est l'objectif principal du No Code ?",
    options: [
      { id: "B", text: "Remplacer tous les développeurs professionnels", correct: false },
      { id: "C", text: "Créer uniquement des logiciels système", correct: false },
      { id: "A", text: "Permettre à des utilisateurs de créer des applications ou des automatisations sans coder", correct: true },
    ],
  },
  {
    q: "Quelle plateforme est principalement orientée No Code ?",
    options: [
      { id: "A", text: "Make", correct: true },
      { id: "B", text: "OutSystems", correct: false },
      { id: "C", text: "Mendix", correct: false },
    ],
  },
  {
    q: "Quelle évolution caractérise particulièrement le Low Code / No Code en 2026 ?",
    options: [
      { id: "B", text: "La disparition complète des tests", correct: false },
      { id: "A", text: "La génération d'applications et de workflows par langage naturel et par IA", correct: true },
      { id: "C", text: "L'obligation d'écrire davantage de code manuellement", correct: false },
    ],
  },
  {
    q: "Quel est un avantage du Low Code / No Code ?",
    options: [
      { id: "B", text: "Une complexité accrue pour tous les projets", correct: false },
      { id: "C", text: "Une personnalisation toujours illimitée", correct: false },
      { id: "A", text: "Une réduction du temps de développement et d'automatisation", correct: true },
    ],
  },
];

  // Quiz questions with randomized option positions (re-randomizes when quizKey changes)
  const quizQuestions = useMemo(() => {
    return baseQuizQuestions.map(question => ({
      ...question,
      options: [...question.options].sort(() => Math.random() - 0.5)
    }));
  }, [quizKey]);

  const handleAnswerSelect = (questionNumber, answer) => {
    if (!quizCompleted) {
      setSelectedAnswers(prev => ({ ...prev, [questionNumber]: answer }));
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      const questionNum = index + 1;
      const selectedAnswer = selectedAnswers[questionNum];
      const correctOption = question.options.find(opt => opt.correct);
      if (selectedAnswer === correctOption.id) {
        score++;
      }
    });
    return score;
  };

  const handleFinishQuiz = () => {
    if (Object.keys(selectedAnswers).length === quizQuestions.length) {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizCompleted(false);
    setCurrentQuizStep(1);
    setQuizKey(prev => prev + 1); // Re-randomize options
  };

  // Randomize options when quiz section is first accessed
  useEffect(() => {
    if (activeSection === 5 && quizKey === 0 && !quizCompleted) {
      setQuizKey(1);
    }
  }, [activeSection, quizKey, quizCompleted]);

  const renderQuizQuestion = (stepNum) => {
    const question = quizQuestions[stepNum - 1];
    return (
      <div className="space-y-4 animate-fadeIn">
        <h4 className="text-lg font-semibold mb-4">{stepNum}. {question.q}</h4>
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswers[stepNum] === option.id;
            const showFeedback = quizCompleted;
            const isCorrect = option.correct;
            
            return (
              <div
                key={option.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  showFeedback
                    ? isCorrect
                      ? 'border-green-500 bg-green-500/10'
                      : isSelected
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-muted bg-muted/20'
                    : isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-muted hover:border-primary/50 hover:bg-muted/30'
                } ${quizCompleted ? 'cursor-default' : ''}`}
                onClick={() => handleAnswerSelect(stepNum, option.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showFeedback
                      ? isCorrect
                        ? 'border-green-500 bg-green-500'
                        : isSelected
                        ? 'border-red-500 bg-red-500'
                        : 'border-muted'
                      : isSelected
                      ? 'border-primary bg-primary'
                      : 'border-muted'
                  }`}>
                    {showFeedback ? (
                      isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : isSelected ? (
                        <X className="w-4 h-4 text-white" />
                      ) : null
                    ) : isSelected ? (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    ) : null}
                  </div>
                  <span className={showFeedback && isCorrect ? 'font-semibold' : ''}>
                    {option.text}
                  </span>
                  {showFeedback && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderAnswerSummary = () => {
    return (
      <div className="mt-8 space-y-6">
        <h4 className="text-xl font-semibold text-center mb-6"> Résumé des Réponses Correctes</h4>
        <div className="grid gap-4">
          {quizQuestions.map((question, index) => {
            const questionNum = index + 1;
            const correctOption = question.options.find(opt => opt.correct);
            const userAnswer = selectedAnswers[questionNum];
            const isCorrect = userAnswer === correctOption.id;
            
            return (
              <div 
                key={index} 
                className={`p-4 rounded-lg border-l-4 ${
                  isCorrect 
                    ? 'border-transparent bg-green-500/10' 
                    : 'border-transparent bg-red-500/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                    isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {isCorrect ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <X className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2 text-foreground">{questionNum}. {question.q}</p>
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">
                        ✅ <strong>Réponse correcte:</strong> {correctOption.text}
                      </p>
                      {!isCorrect && (
                        <p className="text-foreground">
                          ❌ <strong>Votre réponse:</strong> {
                            question.options.find(opt => opt.id === userAnswer)?.text || "Non répondue"
                          }
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderQuizResults = () => {
    const score = calculateScore();
    const percentage = (score / quizQuestions.length) * 100;
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 mb-4">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mb-2">Quiz Terminé !</h3>
          <p className="text-5xl font-bold text-primary mb-2">{score}/{quizQuestions.length}</p>
          <p className="text-xl text-muted-foreground mb-4">Score: {percentage.toFixed(0)}%</p>
          
          <div className="w-full bg-muted rounded-full h-4 mb-6">
            <div 
              className="bg-primary h-4 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          {percentage === 100 && (
            <p className="text-lg text-green-600 font-semibold"> Parfait ! Vous maîtrisez le sujet !</p>
          )}
          {percentage >= 80 && percentage < 100 && (
            <p className="text-lg text-primary font-semibold"> Excellent travail !</p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="text-lg text-blue-600 font-semibold"> Bon résultat !</p>
          )}
          {percentage < 60 && (
            <p className="text-lg text-orange-600 font-semibold"> Continuez à apprendre !</p>
          )}
        </div>

        {/* Answer Summary Section */}
        {renderAnswerSummary()}

        {/* Modified final message - removed colored background block */}
        <div className="p-6 rounded-lg mt-6">
          <p className="text-center text-sm leading-relaxed text-muted-foreground">
            🙏 <strong className="text-primary">Merci infiniment</strong> d'avoir participé à ce quiz ! 
            <br className="mb-2" />
            Si vous remarquez la moindre erreur dans le quiz ou sur le site, 
            <strong className="text-primary"> n'hésitez surtout pas</strong> à me le faire savoir. 
            <br className="mb-2" />
            <em className="text-xs">Les erreurs nous aident à grandir et à nous perfectionner. 🌱</em>
            <br className="mb-2" />
            Je m'excuse sincèrement si j'ai pu dire ou faire quelque chose d'inapproprié.
            <br className="mb-2" />
            <strong className="text-primary">À bientôt et bonne continuation ! 👋✨</strong>
          </p>
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={handleResetQuiz}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 hover:shadow-lg transition-all border border-primary"
          >
            Recommencer le Quiz
          </button>
        </div>
      </div>
    );
  };

  const trendIcon = (key) => {
    switch (key) {
      case "agent": return Sparkles;
      case "team": return Users;
      case "governance": return ShieldCheck;
      case "skill": return Layers;
      default: return TrendingUp;
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">I. Introduction</h3>
            <div className="bg-primary/10 p-3 md:p-4 rounded-lg border-l-4 border-primary">
              <p className="text-sm md:text-base italic">
                "J'ai choisi le thème du <strong className="text-primary">{sections[0].content.theme}</strong>, une évolution technologique qui permet de créer des applications avec très peu de programmation, voire sans écrire directement de code."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  Low Code
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">{sections[0].content.definition.lowCode}</p>
              </div>
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  No Code
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">{sections[0].content.definition.noCode}</p>
              </div>
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Dév. assisté par IA
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">{sections[0].content.definition.ai}</p>
              </div>
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 text-primary">Pourquoi ?</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{sections[0].content.reason}</p>
              </div>
            </div>
            <div className="bg-orange-50 p-3 md:p-4 rounded-lg border-l-4 border-orange-500 mt-3 md:mt-4">
              <p className="text-xs md:text-sm text-orange-700">{sections[0].content.note}</p>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">II. Les Fondements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-primary/10 p-3 md:p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-xs md:text-sm mb-2 text-primary"> Objectif</h4>
                <p className="text-xs md:text-sm">{sections[1].content.objective}</p>
              </div>
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  Publics concernés
                </h4>
                <div className="flex flex-wrap gap-1">
                  {sections[1].content.targets.map((target, index) => (
                    <span key={index} className="px-2 py-1 text-[10px] md:text-xs font-medium border border-border rounded-full bg-background">{target}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-primary">Plateformes Low Code</h4>
                <ul className="space-y-1">
                  {sections[1].content.platforms.lowCode.map((platform, index) => (
                    <li key={index} className="flex items-center gap-1 text-[10px] md:text-xs">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-primary">Plateformes No Code</h4>
                <ul className="space-y-1">
                  {sections[1].content.platforms.noCode.map((platform, index) => (
                    <li key={index} className="flex items-center gap-1 text-[10px] md:text-xs">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
              <div className="bg-green-50 p-3 md:p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-xs md:text-sm mb-2 text-green-700"> Avantages</h4>
                <ul className="space-y-1">
                  {sections[1].content.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-1 text-[10px] md:text-xs text-green-700">
                      <Check className="w-3 h-3 text-green-500" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-3 md:p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-xs md:text-sm mb-2 text-orange-700"> Limites & risques</h4>
                <ul className="space-y-1">
                  {sections[1].content.limits.map((limit, index) => (
                    <li key={index} className="flex items-center gap-1 text-[10px] md:text-xs text-orange-700">
                      <AlertTriangle className="w-3 h-3 text-orange-500" />
                      {limit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 p-3 md:p-4 rounded-lg border-l-4 border-primary mt-3 md:mt-4">
              <p className="text-xs md:text-sm">{sections[1].content.highlight}</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">III. Outils de Veille</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections[2].content.tools.map((tool, index) => (
                <div key={index} className="bg-card/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Search className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg text-primary">{tool.name}</h4>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outil :</span>
                    <p className="text-sm font-medium">{tool.tool || "N/A"}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tool.sources?.map((source, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs bg-secondary/50 border border-border/50 rounded-md">{source}</span>
                    ))}
                    {tool.keywords?.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs bg-secondary/50 border border-border/50 rounded-md">{keyword}</span>
                    ))}
                    {tool.examples?.map((example, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs bg-secondary/50 border border-border/50 rounded-md">{example}</span>
                    ))}
                    {tool.use && (
                      <span className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 text-primary rounded-md">{tool.use}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">IV. Actualités 2025–2026</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sections[3].content.news.map((item, index) => (
                  <div key={index} className="bg-card/50 rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
                    <div className="p-5 border-b border-border/30 bg-primary/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-bold text-sm text-primary uppercase tracking-wider">{item.date}</span>
                      </div>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-background hover:text-primary transition-colors border border-border/50 shadow-xs"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <div className="p-6 space-y-4 flex-1">
                      <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                      {item.source && (
                        <p className="text-xs text-muted-foreground -mt-2">Source : {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{item.source}</a>
                        ) : item.source}</p>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      
                      <div className="pt-4 space-y-3">
                        <div className="p-3 rounded-lg bg-primary/10 border-l-4 border-primary">
                          <p className="text-xs font-semibold text-primary uppercase mb-1 tracking-tighter">Impact</p>
                          <p className="text-sm font-medium">{item.impact}</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-blue-500/10 border-l-4 border-blue-500">
                          <p className="text-xs font-semibold text-blue-500 uppercase mb-1 tracking-tighter">Exemple concret</p>
                          <p className="text-sm text-muted-foreground leading-snug">{item.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Tendances principales en 2026
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections[3].content.trends.map((trend, index) => {
                  const TrendIcon = trendIcon(trend.icon);
                  return (
                    <div key={index} className="bg-muted/50 p-4 rounded-lg border border-border flex gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 h-fit">
                        <TrendIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs md:text-sm mb-1">{trend.title}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{trend.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-semibold mb-4">V. Conclusion</h3>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 space-y-3">
              <p className="text-base md:text-lg">
                En 2026, le Low Code / No Code ne consiste plus seulement à créer des applications avec des blocs visuels. Il évolue vers le développement assisté par l'intelligence artificielle, les agents autonomes et l'automatisation des processus.
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Il ne remplace donc pas les développeurs : il transforme leur rôle et facilite la collaboration entre équipes techniques et utilisateurs.
              </p>
              <p className="text-sm text-muted-foreground">Merci de votre attention !</p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Quiz - 5 Questions
            </h3>
            
            {!quizCompleted ? (
              <>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3, 4, 5].map((step, index) => (
                      <React.Fragment key={step}>
                        <div className="flex flex-col items-center">
                          <div 
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                              step === currentQuizStep 
                                ? 'bg-primary text-primary-foreground scale-110 shadow-lg' 
                                : selectedAnswers[step]
                                ? 'bg-primary/20 text-primary border-2 border-primary' 
                                : 'bg-muted text-muted-foreground'
                            }`}
                            onClick={() => setCurrentQuizStep(step)}
                          >
                            {selectedAnswers[step] ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <span className="font-semibold">{step}</span>
                            )}
                          </div>
                        </div>
                        {index < 4 && (
                          <div className="flex-1 h-1 bg-muted mx-2 relative">
                            <div 
                              className={`absolute top-0 left-0 h-full bg-primary transition-all duration-500 ${
                                selectedAnswers[step] ? 'w-full' : 'w-0'
                              }`}
                            />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="min-h-[200px]">
                    {renderQuizQuestion(currentQuizStep)}
                  </div>
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => setCurrentQuizStep(Math.max(1, currentQuizStep - 1))}
                      disabled={currentQuizStep === 1}
                      className="px-4 py-2 bg-muted/50 rounded-lg disabled:opacity-50 hover:bg-muted transition-colors border border-border"
                    >
                      Précédent
                    </button>
                    {currentQuizStep < 5 ? (
                      <button
                        onClick={() => setCurrentQuizStep(Math.min(5, currentQuizStep + 1))}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all"
                      >
                        Suivant
                      </button>
                    ) : (
                      <button
                        onClick={handleFinishQuiz}
                        disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                      >
                        Terminer le Quiz
                      </button>
                    )}
                  </div>
                  {currentQuizStep === 5 && Object.keys(selectedAnswers).length !== quizQuestions.length && (
                    <p className="text-center text-sm text-orange-600 mt-4">
                      ⚠️ Veuillez répondre à toutes les questions avant de terminer
                    </p>
                  )}
                </div>
              </>
            ) : (
              renderQuizResults()
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="veille-tech" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
            Veille Technologique <span className="text-primary">2025-2026</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-1">Low Code / No Code</p>
          <p className="text-xs md:text-sm text-muted-foreground">Présentation orale • 8-10 minutes</p>
        </div>

        <div className="relative mb-12">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted hidden md:block"></div>
          <div 
            className="absolute top-6 left-0 h-0.5 bg-primary transition-all duration-500 hidden md:block"
            style={{ width: `${(activeSection / (sections.length - 1)) * 100}%` }}
          ></div>

          <div className="relative flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 md:gap-0">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group w-16 md:w-auto"
                  onClick={() => setActiveSection(index)}
                >
                  <div className="relative z-10 mb-2">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-3 flex items-center justify-center transition-all duration-300 ${
                      index <= activeSection 
                        ? 'bg-primary border-primary shadow-lg scale-105' 
                        : 'bg-card border-muted group-hover:border-primary/50'
                    }`}>
                      <Icon className={`w-4 h-4 md:w-5 md:h-5 ${index <= activeSection ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                    {index === activeSection && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                    )}
                  </div>
                  <div className={`text-[10px] md:text-xs font-semibold text-center ${index <= activeSection ? 'text-primary' : 'text-muted-foreground'}`}>
                    {section.title}
                  </div>
                  <div className="text-[9px] md:text-xs text-muted-foreground mt-0.5 hidden md:block">{section.duration}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-4 md:p-6 mb-4 md:mb-6 border border-border">
          {renderSectionContent()}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="px-6 py-3 bg-muted/50 rounded-lg disabled:opacity-50 font-medium hover:bg-muted transition-colors border border-border"
          >
            ← Précédent
          </button>
          <button
            onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
            disabled={activeSection === sections.length - 1}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg disabled:opacity-50 font-medium hover:shadow-lg transition-all"
          >
            Suivant →
          </button>
        </div>
      </div>
    </section>
  );
}