import { Wind, Zap, Wrench, Paintbrush, Lightbulb } from "lucide-react";

export interface ServiceSubSection {
  title: string;
  intro?: string;
  items: string[];
  benefits?: string[];
}

export interface ServiceData {
  slug: string;
  icon: typeof Wind;
  title: string;
  titleEn: string;
  intro: string;
  color: string;
  sections: ServiceSubSection[];
  engagement?: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "hvac",
    icon: Wind,
    title: "HVAC & Climatisation",
    titleEn: "HVAC & Air Conditioning",
    intro: "Chez KFM, Khayra Facilities Management, nous proposons des solutions complètes en chauffage, ventilation et climatisation adaptées aux conditions climatiques exigeantes des Émirats Arabes Unis. Nos services couvrent l'ensemble du cycle de vie des systèmes HVAC : installation, maintenance, optimisation et amélioration de la qualité de l'air.",
    color: "from-sky-500/20 to-blue-500/20",
    sections: [
      {
        title: "Installation & Mise en Service",
        intro: "Nous intervenons sur :",
        items: [
          "Split Units",
          "FCU (Fan Coil Units)",
          "Systèmes VRF / VRV",
          "Systèmes gainables (Ducted AC)",
          "Air Handling Units (AHU)",
          "Thermostats intelligents",
        ],
      },
      {
        title: "Maintenance Préventive & Corrective",
        intro: "Nous mettons en place des programmes de maintenance structurés incluant :",
        items: [
          "Nettoyage et remplacement des filtres",
          "Vérification des composants essentiels",
          "Contrôle des performances",
          "Diagnostic et réparation en cas de panne",
        ],
      },
      {
        title: "Duct Cleaning & Qualité de l'Air",
        intro: "Aux Émirats, l'accumulation de poussière et d'humidité dans les conduits peut impacter la santé et la performance du système. KFM propose :",
        items: [
          "Inspection des conduits",
          "Nettoyage mécanique professionnel",
          "Aspiration haute puissance",
          "Désinfection antibactérienne",
          "Rapport avant / après intervention",
        ],
        benefits: [
          "Amélioration de la qualité de l'air intérieur",
          "Meilleure circulation d'air",
          "Réduction de la consommation énergétique",
        ],
      },
      {
        title: "Optimisation & Efficacité Énergétique",
        intro: "Nous analysons les performances du système afin de :",
        items: [
          "Ajuster les réglages",
          "Améliorer le rendement",
          "Réduire la consommation électrique",
          "Prolonger la durée de vie des installations",
        ],
      },
      {
        title: "Contrats de Maintenance HVAC (AMC)",
        intro: "Nos contrats annuels incluent :",
        items: [
          "Visites planifiées",
          "Entretien complet des unités",
          "Inspection des conduits",
          "Intervention prioritaire",
          "Reporting technique",
        ],
      },
    ],
  },
  {
    slug: "mep",
    icon: Zap,
    title: "Électricité & Plomberie (MEP)",
    titleEn: "Electrical & Plumbing (MEP)",
    intro: "Chez KFM, Khayra Facilities Management, nous assurons la gestion, l'installation et la maintenance des systèmes électriques et de plomberie essentiels au bon fonctionnement des bâtiments. Nos interventions respectent les normes techniques en vigueur aux Émirats Arabes Unis et garantissent sécurité, fiabilité et performance.",
    color: "from-amber-500/20 to-orange-500/20",
    sections: [
      {
        title: "Installations & Mise à Niveau Électrique",
        intro: "Nous réalisons :",
        items: [
          "Installation et remplacement de tableaux électriques (DB)",
          "Mise à niveau des systèmes électriques existants",
          "Installation de prises et interrupteurs",
          "Éclairage intérieur et extérieur",
          "Éclairage d'urgence",
          "Protection et sécurisation des circuits",
        ],
      },
      {
        title: "Maintenance & Dépannage Électrique",
        intro: "Nous intervenons rapidement pour :",
        items: [
          "Diagnostic des pannes électriques",
          "Réparation de circuits défectueux",
          "Remplacement de composants",
          "Correction de surcharges",
          "Vérification de la sécurité des installations",
        ],
      },
      {
        title: "Installation & Maintenance Plomberie",
        intro: "Nous prenons en charge :",
        items: [
          "Installation des réseaux d'alimentation en eau",
          "Systèmes d'évacuation et drainage",
          "Installation et remplacement de pompes",
          "Modification de plomberie lors de rénovations",
          "Détection et réparation de fuites",
        ],
      },
      {
        title: "Optimisation & Prévention",
        intro: "Dans le cadre de nos contrats de maintenance, nous proposons :",
        items: [
          "Inspection périodique des installations",
          "Vérification des pressions d'eau",
          "Contrôle des tableaux électriques",
          "Prévention des risques de surchauffe ou d'infiltration",
        ],
      },
    ],
    engagement: [
      "Sécurité et conformité aux normes UAE",
      "Interventions rapides et structurées",
      "Solutions durables",
      "Coordination avec les autres corps de métier (HVAC, civil, fit-out)",
      "Reporting professionnel",
    ],
  },
  {
    slug: "travaux-civils",
    icon: Wrench,
    title: "Travaux Civils & Rénovation",
    titleEn: "Civil Works & Renovation",
    intro: "Chez KFM, Khayra Facilities Management, nous réalisons des projets de rénovation et de travaux civils pour des villas, immeubles résidentiels, espaces commerciaux et installations techniques aux Émirats Arabes Unis. Nous intervenons avec une approche structurée, garantissant qualité d'exécution, respect des délais et conformité aux standards locaux.",
    color: "from-stone-500/20 to-zinc-500/20",
    sections: [
      {
        title: "Rénovation Résidentielle & Commerciale",
        intro: "Nous prenons en charge :",
        items: [
          "Rénovation complète de villas et appartements",
          "Modernisation d'espaces intérieurs",
          "Transformation de salles de bain (bathtub to shower)",
          "Rénovation de cuisines",
          "Réaménagement d'espaces existants",
        ],
      },
      {
        title: "Travaux de Maçonnerie & Structure",
        intro: "Nos équipes réalisent :",
        items: [
          "Travaux de maçonnerie",
          "Fermeture et modification d'ouvertures",
          "Création de cloisons",
          "Réparations structurelles légères",
          "Réfection de surfaces murales et sols",
        ],
      },
      {
        title: "Étanchéité & Protection",
        intro: "Dans le climat des Émirats, la protection des structures est essentielle. Nous intervenons sur :",
        items: [
          "Étanchéité des salles d'eau",
          "Traitement des infiltrations",
          "Réfection des joints",
          "Protection des surfaces exposées",
        ],
      },
      {
        title: "Aménagements Extérieurs",
        intro: "Nous réalisons également :",
        items: [
          "Remplacement d'interlock",
          "Réfection d'allées et parkings",
          "Travaux de nivellement",
          "Amélioration d'espaces extérieurs",
        ],
      },
      {
        title: "Gestion & Qualité",
        intro: "Chaque projet est encadré par :",
        items: [
          "Une planification claire",
          "Une coordination technique",
          "Un contrôle qualité",
          "Une gestion des déchets conforme aux exigences locales",
          "Un suivi jusqu'à la remise finale",
        ],
      },
    ],
    engagement: [
      "Exécution professionnelle",
      "Matériaux adaptés au climat UAE",
      "Respect des normes locales",
      "Finitions soignées",
      "Transparence et suivi structuré",
    ],
  },
  {
    slug: "design-interieur",
    icon: Paintbrush,
    title: "Design Intérieur & Fit-Out",
    titleEn: "Interior Design & Fit-Out",
    intro: "Chez KFM, Khayra Facilities Management, nous concevons et réalisons des espaces intérieurs alliant esthétique, fonctionnalité et durabilité. Nous accompagnons nos clients résidentiels et commerciaux dans la transformation complète de leurs espaces, avec une approche structurée allant du concept initial à l'exécution finale.",
    color: "from-rose-500/20 to-pink-500/20",
    sections: [
      {
        title: "Conception & Planification",
        intro: "Nous développons des solutions personnalisées incluant :",
        items: [
          "Étude des besoins et analyse de l'espace",
          "Optimisation des volumes",
          "Planification fonctionnelle",
          "Sélection des matériaux",
          "Harmonisation des finitions",
        ],
      },
      {
        title: "Visualisation & Développement du Concept",
        intro: "Pour permettre une projection claire du projet, nous proposons :",
        items: [
          "Plans d'aménagement",
          "Visualisations 3D",
          "Propositions de matériaux et palettes",
          "Recommandations techniques adaptées au climat des EAU",
        ],
      },
      {
        title: "Travaux de Fit-Out",
        intro: "Nous assurons l'exécution complète des travaux :",
        items: [
          "Cloisons et faux plafonds",
          "Revêtements de sols et murs",
          "Menuiserie sur mesure",
          "Installation de portes",
          "Solutions de wrapping pour cuisines et salles de bain",
          "Finitions haut de gamme",
        ],
      },
      {
        title: "Projets Résidentiels & Commerciaux",
        intro: "Nous intervenons pour :",
        items: [
          "Villas et résidences haut de gamme",
          "Appartements",
          "Bureaux",
          "Espaces commerciaux",
          "Compounds",
        ],
      },
    ],
    engagement: [
      "Conception fonctionnelle et esthétique",
      "Coordination technique maîtrisée",
      "Matériaux adaptés au climat UAE",
      "Finitions de qualité",
      "Livraison clé en main",
    ],
  },
  {
    slug: "energy-saving",
    icon: Lightbulb,
    title: "Energy Saving & Optimisation",
    titleEn: "Energy Efficiency Solutions",
    intro: "Chez KFM, Khayra Facilities Management, nous aidons nos clients à réduire leurs coûts énergétiques tout en améliorant la performance globale de leurs installations. Dans un contexte climatique exigeant comme celui des Émirats Arabes Unis, l'optimisation énergétique est un levier stratégique pour maîtriser les dépenses d'exploitation et prolonger la durée de vie des équipements.",
    color: "from-emerald-500/20 to-green-500/20",
    sections: [
      {
        title: "Audit & Analyse Énergétique",
        intro: "Nous réalisons une évaluation des systèmes techniques afin d'identifier :",
        items: [
          "Les surconsommations",
          "Les pertes d'efficacité",
          "Les équipements énergivores",
          "Les opportunités d'amélioration",
        ],
      },
      {
        title: "Optimisation HVAC",
        intro: "La climatisation représentant la principale charge énergétique d'un bâtiment, nous intervenons sur :",
        items: [
          "Calibration des thermostats",
          "Optimisation des cycles de fonctionnement",
          "Air balancing",
          "Réglage des débits",
          "Maintenance préventive renforcée",
        ],
      },
      {
        title: "Modernisation des Installations",
        intro: "Nous proposons des solutions concrètes telles que :",
        items: [
          "Conversion LED",
          "Installation de capteurs et systèmes intelligents",
          "Optimisation des pompes et moteurs",
          "Amélioration de l'isolation thermique",
        ],
      },
    ],
    engagement: [
      "Réduction des factures d'électricité",
      "Amélioration des performances techniques",
      "Prolongation de la durée de vie des équipements",
      "Diminution de l'empreinte énergétique",
      "Valorisation de l'actif immobilier",
    ],
  },
];
