import { motion } from "framer-motion";
import { Wind, Zap, Wrench, Paintbrush, Lightbulb } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Wind,
    title: "HVAC & Climatisation",
    short: "Solutions complètes en chauffage, ventilation et climatisation adaptées au climat des EAU.",
    details: [
      "Installation & Mise en Service (Split, FCU, VRF/VRV, AHU, Thermostats intelligents)",
      "Maintenance Préventive & Corrective",
      "Duct Cleaning & Qualité de l'Air",
      "Optimisation & Efficacité Énergétique",
      "Contrats de Maintenance Annuels (AMC)",
    ],
  },
  {
    icon: Zap,
    title: "Électricité & Plomberie (MEP)",
    short: "Gestion, installation et maintenance des systèmes électriques et de plomberie.",
    details: [
      "Installation & mise à niveau électrique (DB, prises, éclairage)",
      "Diagnostic et dépannage électrique",
      "Réseaux d'alimentation en eau & drainage",
      "Détection et réparation de fuites",
      "Inspection périodique & prévention",
    ],
  },
  {
    icon: Wrench,
    title: "Travaux Civils & Rénovation",
    short: "Rénovation de villas, immeubles résidentiels et espaces commerciaux aux EAU.",
    details: [
      "Rénovation complète villas & appartements",
      "Travaux de maçonnerie & structure",
      "Étanchéité & protection des surfaces",
      "Aménagements extérieurs (interlock, allées, parkings)",
      "Gestion de projet & contrôle qualité",
    ],
  },
  {
    icon: Paintbrush,
    title: "Design Intérieur & Fit-Out",
    short: "Conception et réalisation d'espaces intérieurs alliant esthétique, fonctionnalité et durabilité.",
    details: [
      "Conception & planification personnalisée",
      "Visualisations 3D & plans d'aménagement",
      "Cloisons, faux plafonds, revêtements",
      "Menuiserie sur mesure & wrapping",
      "Livraison clé en main résidentiel & commercial",
    ],
  },
  {
    icon: Lightbulb,
    title: "Energy Saving & Optimisation",
    short: "Réduction des coûts énergétiques et amélioration des performances de vos installations.",
    details: [
      "Audit & analyse énergétique complète",
      "Optimisation HVAC & air balancing",
      "Conversion LED & capteurs intelligents",
      "Amélioration de l'isolation thermique",
      "Valorisation de l'actif immobilier",
    ],
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-kfm-teal/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Notre expertise</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Des solutions complètes et sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>

              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="mt-4 text-xs font-medium text-primary">
                {expanded === i ? "Réduire ↑" : "Voir les détails →"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
