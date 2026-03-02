import { motion } from "framer-motion";
import { Wind, Zap, Wrench, Paintbrush, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import productHvac from "@/assets/product-hvac.webp";
import productMep from "@/assets/product-mep.webp";
import productCivil from "@/assets/product-civil.webp";
import productInterior from "@/assets/product-interior.webp";
import productEnergy from "@/assets/product-energy.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const services = [
  {
    icon: Wind, img: productHvac,
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
    icon: Zap, img: productMep,
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
    icon: Wrench, img: productCivil,
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
    icon: Paintbrush, img: productInterior,
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
    icon: Lightbulb, img: productEnergy,
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

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            Nos <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Des solutions sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.
          </motion.p>
        </div>
      </section>

      {/* Services list with images */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}
            >
              {/* Image */}
              <motion.div
                className={`overflow-hidden rounded-2xl shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={service.img} alt={service.title} className="h-[350px] w-full object-cover" />
              </motion.div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-2xl font-bold md:text-3xl">{service.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.short}</p>

                <ul className="mt-6 space-y-3">
                  {service.details.map((detail, j) => (
                    <motion.li
                      key={detail}
                      custom={j}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>

                <Link to="/contact" className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow">
                  Demander un devis →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
