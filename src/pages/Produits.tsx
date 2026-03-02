import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";

import productHvac from "@/assets/product-hvac.webp";
import productLighting from "@/assets/product-lighting.webp";
import productMep from "@/assets/product-mep.webp";
import productInterior from "@/assets/product-interior.webp";
import productCivil from "@/assets/product-civil.webp";
import productEnergy from "@/assets/product-energy.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const projects = [
  {
    img: productInterior,
    title: "Rénovation Ambassade de France",
    location: "Abu Dhabi, UAE",
    year: "2024",
    category: "Fit-Out & Design Intérieur",
    desc: "Rénovation complète des espaces de réception et des bureaux de l'Ambassade de France à Abu Dhabi. Conception moderne respectant les normes diplomatiques, finitions haut de gamme et intégration de systèmes de sécurité avancés.",
    scope: ["Design intérieur sur mesure", "Faux plafonds acoustiques", "Menuiserie & mobilier premium", "Éclairage architectural LED", "Système de contrôle d'accès"],
    result: "Livré en 3 mois — Satisfaction client 100%",
  },
  {
    img: productHvac,
    title: "Maintenance HVAC — Complexe Résidentiel",
    location: "Al Reem Island, Abu Dhabi",
    year: "2023",
    category: "HVAC & Climatisation",
    desc: "Contrat annuel de maintenance préventive et curative pour un complexe de 120 appartements. Optimisation des systèmes VRF, remplacement des FCU défaillantes et nettoyage complet des conduits pour améliorer la qualité de l'air.",
    scope: ["Audit initial de 48 unités HVAC", "Remplacement de 32 FCU", "Nettoyage ductwork complet", "Installation thermostats intelligents", "Réduction consommation de 28%"],
    result: "Économie énergétique de 28% — Contrat reconduit",
  },
  {
    img: productCivil,
    title: "Réhabilitation Villa Privée",
    location: "Saadiyat Island, Abu Dhabi",
    year: "2024",
    category: "Travaux Civils & Rénovation",
    desc: "Réhabilitation structurelle et esthétique d'une villa de 600m². Travaux de maçonnerie, étanchéité de la toiture, réfection des façades, aménagement du jardin et de la piscine.",
    scope: ["Renforcement structurel", "Étanchéité toiture & terrasses", "Réfection façades extérieures", "Aménagement paysager", "Piscine & espace détente"],
    result: "Transformation complète en 4 mois",
  },
  {
    img: productMep,
    title: "Mise aux Normes MEP — Économat des Armées",
    location: "Abu Dhabi, UAE",
    year: "2023",
    category: "Électricité & Plomberie",
    desc: "Mise aux normes complète des installations électriques et de plomberie. Remplacement des tableaux électriques, modernisation du réseau d'eau et installation d'un système de détection de fuites intelligent.",
    scope: ["Remplacement 12 tableaux électriques", "Modernisation réseau plomberie", "Détection de fuites IoT", "Mise en conformité sécurité incendie", "Documentation technique complète"],
    result: "Conformité 100% aux normes UAE",
  },
  {
    img: productEnergy,
    title: "Audit Énergétique & Optimisation",
    location: "Corniche Road, Abu Dhabi",
    year: "2024",
    category: "Energy Saving",
    desc: "Audit énergétique complet d'un immeuble de bureaux de 15 étages. Identification des pertes, optimisation HVAC, conversion LED et recommandations d'isolation thermique pour réduire l'empreinte carbone.",
    scope: ["Audit thermique par caméra IR", "Conversion LED intégrale", "Optimisation programmation HVAC", "Isolation thermique façades", "Rapport & plan d'action 5 ans"],
    result: "Réduction de 35% des coûts énergétiques",
  },
  {
    img: productLighting,
    title: "Éclairage Smart — Centre Commercial",
    location: "Khalifa City, Abu Dhabi",
    year: "2023",
    category: "Éclairage & Solutions Smart",
    desc: "Déploiement d'un système d'éclairage intelligent sur 8 000m² de surface commerciale. Capteurs de présence, variation d'intensité automatique et pilotage centralisé via application mobile.",
    scope: ["1 200 luminaires LED installés", "Capteurs de présence & luminosité", "Système de pilotage centralisé", "Éclairage d'urgence conforme", "Application de monitoring"],
    result: "Économie de 42% sur l'éclairage",
  },
];

const stats = [
  { value: "150+", label: "Projets Réalisés" },
  { value: "98%", label: "Clients Satisfaits" },
  { value: "12+", label: "Années d'Expérience" },
  { value: "35%", label: "Économie Moyenne" },
];

const Produits = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            Nos <span className="text-gradient">Projets</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Découvrez nos réalisations concrètes à Abu Dhabi et aux Émirats. Chaque projet reflète notre engagement
            envers l'excellence et la satisfaction client.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6 shadow-lg"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-28">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid items-center gap-12 lg:grid-cols-2`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative group overflow-hidden rounded-2xl shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Result badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-4 right-4 rounded-xl bg-card/95 backdrop-blur-sm border border-border px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Terminé
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {project.year}
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold md:text-4xl">{project.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.desc}</p>

                {/* Scope */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Périmètre du projet</h4>
                  <ul className="space-y-2">
                    {project.scope.map((item, j) => (
                      <motion.li
                        key={item}
                        custom={j}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Result highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold">{project.result}</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-primary p-12 md:p-20 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              Votre projet est le prochain ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Contactez-nous pour discuter de vos besoins. Notre équipe d'experts est prête à vous accompagner.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="https://wa.me/971508054220"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-primary-foreground/30 px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Produits;
