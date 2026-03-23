import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.webp";

import productHvac from "@/assets/product-hvac.webp";
import ambassadeFrance1 from "@/assets/projects/ambassade-france-1.jpg";
import productLighting from "@/assets/product-lighting.webp";
import productMep from "@/assets/product-mep.webp";
import productInterior from "@/assets/product-interior.webp";
import productCivil from "@/assets/product-civil.webp";
import productEnergy from "@/assets/product-energy.webp";
import villaReno1 from "@/assets/projects/villa-renovation-1.jpg";
import villaReno2 from "@/assets/projects/villa-renovation-2.jpg";
import villaReno3 from "@/assets/projects/villa-renovation-3.jpg";
import villaReno4 from "@/assets/projects/villa-renovation-4.jpg";
import villaReno5 from "@/assets/projects/villa-renovation-5.jpg";
import sandwichPanel1 from "@/assets/projects/sandwich-panel-1.jpg";
import sandwichPanel2 from "@/assets/projects/sandwich-panel-2.jpg";
import sandwichPanel3 from "@/assets/projects/sandwich-panel-3.jpg";
import terrainSport from "@/assets/projects/terrain-sport.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const Produits = () => {
  const { t } = useLanguage();

  const projects = [
    {
      img: ambassadeFrance1,
      title: t("Rénovation Ambassade de France", "French Embassy Renovation"),
      location: "Abu Dhabi, UAE",
      year: "2024",
      category: t("Fit-Out & Design Intérieur", "Fit-Out & Interior Design"),
      desc: t(
        "Rénovation complète des espaces de réception et des bureaux de l'Ambassade de France à Abu Dhabi. Conception moderne respectant les normes diplomatiques, finitions haut de gamme et intégration de systèmes de sécurité avancés.",
        "Complete renovation of reception areas and offices of the French Embassy in Abu Dhabi. Modern design respecting diplomatic standards, high-end finishes and advanced security systems integration."
      ),
      scope: [
        t("Design intérieur sur mesure", "Custom interior design"),
        t("Faux plafonds acoustiques", "Acoustic false ceilings"),
        t("Menuiserie & mobilier premium", "Premium joinery & furniture"),
        t("Éclairage architectural LED", "LED architectural lighting"),
        t("Système de contrôle d'accès", "Access control system"),
      ],
      result: t("Livré en 3 mois — Satisfaction client 100%", "Delivered in 3 months — 100% client satisfaction"),
    },
    {
      img: productHvac,
      title: t("Maintenance HVAC — Complexe Résidentiel", "HVAC Maintenance — Residential Complex"),
      location: "Al Reem Island, Abu Dhabi",
      year: "2023",
      category: t("HVAC & Climatisation", "HVAC & Air Conditioning"),
      desc: t(
        "Contrat annuel de maintenance préventive et curative pour un complexe de 120 appartements.",
        "Annual preventive and corrective maintenance contract for a 120-apartment complex."
      ),
      scope: [
        t("Audit initial de 48 unités HVAC", "Initial audit of 48 HVAC units"),
        t("Remplacement de 32 FCU", "Replacement of 32 FCUs"),
        t("Nettoyage ductwork complet", "Complete ductwork cleaning"),
        t("Installation thermostats intelligents", "Smart thermostat installation"),
        t("Réduction consommation de 28%", "28% consumption reduction"),
      ],
      result: t("Économie énergétique de 28% — Contrat reconduit", "28% energy savings — Contract renewed"),
    },
    {
      img: villaReno4,
      title: t("Réhabilitation Villa Privée", "Private Villa Rehabilitation"),
      location: "Abu Dhabi, UAE",
      year: "2024",
      category: t("Travaux Civils & Rénovation", "Civil Works & Renovation"),
      desc: t(
        "Réhabilitation structurelle et esthétique d'une villa privée. Travaux de façade, étanchéité et aménagements extérieurs.",
        "Structural and aesthetic rehabilitation of a private villa. Facade works, waterproofing and exterior landscaping."
      ),
      scope: [
        t("Rénovation complète de la façade", "Complete facade renovation"),
        t("Étanchéité toiture & terrasses", "Roof & terrace waterproofing"),
        t("Réfection façades extérieures", "Exterior facade renovation"),
        t("Aménagement paysager", "Landscaping"),
        t("Échafaudage & travaux en hauteur", "Scaffolding & height works"),
      ],
      result: t("Transformation complète — Projet réel", "Complete transformation — Real project"),
      gallery: [villaReno1, villaReno2, villaReno3, villaReno4, villaReno5],
    },
    {
      img: sandwichPanel1,
      title: t("Installation Sandwich Panel", "Sandwich Panel Installation"),
      location: "Abu Dhabi, UAE",
      year: "2024",
      category: t("Travaux Civils", "Civil Works"),
      desc: t(
        "Installation complète de panneaux sandwich incluant les travaux d'étanchéité sur un site portuaire à Abu Dhabi.",
        "Complete sandwich panel installation including waterproofing works on a port site in Abu Dhabi."
      ),
      scope: [
        t("Installation panneaux sandwich", "Sandwich panel installation"),
        t("Travaux d'étanchéité", "Waterproofing works"),
        t("Préparation du site", "Site preparation"),
        t("Finitions & contrôle qualité", "Finishing & quality control"),
        t("Livraison dans les délais", "On-time delivery"),
      ],
      result: t("Installation complète — Projet réel", "Full installation — Real project"),
      gallery: [sandwichPanel1, sandwichPanel2, sandwichPanel3],
    },
    {
      img: terrainSport,
      title: t("Aménagement Terrain de Sport", "Sports Field Development"),
      location: "Abu Dhabi, UAE",
      year: "2024",
      category: t("Travaux Civils & Aménagement", "Civil Works & Landscaping"),
      desc: t(
        "Aménagement complet d'un terrain de sport avec gazon synthétique, structures d'ombrage et éclairage. Installation professionnelle incluant les travaux de terrassement et les finitions.",
        "Complete sports field development with synthetic turf, shade structures and lighting. Professional installation including earthworks and finishing."
      ),
      scope: [
        t("Installation gazon synthétique", "Synthetic turf installation"),
        t("Structures d'ombrage (shade sails)", "Shade sail structures"),
        t("Éclairage sportif LED", "LED sports lighting"),
        t("Travaux de terrassement", "Earthworks"),
        t("Clôtures et aménagements", "Fencing and landscaping"),
      ],
      result: t("Terrain livré — Projet réel", "Field delivered — Real project"),
    },
    {
      img: productMep,
      title: t("Mise aux Normes MEP — Économat des Armées", "MEP Compliance — Économat des Armées"),
      location: "Abu Dhabi, UAE",
      year: "2023",
      category: t("Électricité & Plomberie", "Electrical & Plumbing"),
      desc: t(
        "Mise aux normes complète des installations électriques et de plomberie.",
        "Complete compliance upgrade of electrical and plumbing installations."
      ),
      scope: [
        t("Remplacement 12 tableaux électriques", "Replacement of 12 electrical panels"),
        t("Modernisation réseau plomberie", "Plumbing network modernization"),
        t("Détection de fuites IoT", "IoT leak detection"),
        t("Mise en conformité sécurité incendie", "Fire safety compliance"),
        t("Documentation technique complète", "Complete technical documentation"),
      ],
      result: t("Conformité 100% aux normes UAE", "100% UAE standards compliance"),
    },
    {
      img: productEnergy,
      title: t("Audit Énergétique & Optimisation", "Energy Audit & Optimization"),
      location: "Corniche Road, Abu Dhabi",
      year: "2024",
      category: "Energy Saving",
      desc: t(
        "Audit énergétique complet d'un immeuble de bureaux de 15 étages.",
        "Complete energy audit of a 15-story office building."
      ),
      scope: [
        t("Audit thermique par caméra IR", "Thermal audit with IR camera"),
        t("Conversion LED intégrale", "Complete LED conversion"),
        t("Optimisation programmation HVAC", "HVAC scheduling optimization"),
        t("Isolation thermique façades", "Facade thermal insulation"),
        t("Rapport & plan d'action 5 ans", "Report & 5-year action plan"),
      ],
      result: t("Réduction de 35% des coûts énergétiques", "35% energy cost reduction"),
    },
    {
      img: productLighting,
      title: t("Éclairage Smart — Centre Commercial", "Smart Lighting — Shopping Center"),
      location: "Khalifa City, Abu Dhabi",
      year: "2023",
      category: t("Éclairage & Solutions Smart", "Lighting & Smart Solutions"),
      desc: t(
        "Déploiement d'un système d'éclairage intelligent sur 8 000m² de surface commerciale.",
        "Deployment of an intelligent lighting system across 8,000m² of commercial space."
      ),
      scope: [
        t("1 200 luminaires LED installés", "1,200 LED luminaires installed"),
        t("Capteurs de présence & luminosité", "Presence & light sensors"),
        t("Système de pilotage centralisé", "Centralized control system"),
        t("Éclairage d'urgence conforme", "Compliant emergency lighting"),
        t("Application de monitoring", "Monitoring application"),
      ],
      result: t("Économie de 42% sur l'éclairage", "42% lighting cost savings"),
    },
  ];

  const stats = [
    { value: "150+", label: t("Projets Réalisés", "Completed Projects") },
    { value: "98%", label: t("Clients Satisfaits", "Satisfied Clients") },
    { value: "12+", label: t("Années d'Expérience", "Years of Experience") },
    { value: "35%", label: t("Économie Moyenne", "Average Savings") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with background */}
      <section className="relative py-32 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        </div>
        <motion.div
          className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container relative mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary">
            Portfolio
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-6xl">
            {t("Nos ", "Our ")}<span className="text-gradient">{t("Projets", "Projects")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t(
              "Découvrez nos réalisations concrètes à Abu Dhabi et aux Émirats. Chaque projet reflète notre engagement envers l'excellence et la satisfaction client.",
              "Discover our concrete achievements in Abu Dhabi and the UAE. Each project reflects our commitment to excellence and client satisfaction."
            )}
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6 shadow-xl">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="text-center">
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
            <motion.div key={project.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
              className="grid items-center gap-12 lg:grid-cols-2">
              {/* Image */}
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative group overflow-hidden rounded-2xl shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="h-[420px] w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span
                    className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-4 right-4 rounded-xl bg-card/95 backdrop-blur-sm border border-border px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle className="h-3.5 w-3.5" />
                    {t("Terminé", "Completed")}
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: "easeOut" }}
                className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />{project.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{project.year}</span>
                </div>
                <h2 className="font-display text-3xl font-bold md:text-4xl">{project.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.desc}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{t("Périmètre du projet", "Project scope")}</h4>
                  <ul className="space-y-2">
                    {project.scope.map((item, j) => (
                      <motion.li key={item} custom={j} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-2.5 text-sm">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />{item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3">
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
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20 text-center">
            <motion.div
              className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-[60px]"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              {t("Votre projet est le prochain ?", "Is your project next?")}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t(
                "Contactez-nous pour discuter de vos besoins. Notre équipe d'experts est prête à vous accompagner.",
                "Contact us to discuss your needs. Our team of experts is ready to support you."
              )}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg hover:-translate-y-0.5">
                {t("Demander un devis gratuit", "Request a free quote")}
              </Link>
              <a href="https://wa.me/971508054220" target="_blank" rel="noopener noreferrer"
                className="rounded-lg border border-primary-foreground/30 px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10">
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
