import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, CheckCircle, ArrowRight, DollarSign, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.webp";

import ambassadeFrance1 from "@/assets/projects/ambassade-france-1.jpg";
import embassyHvac from "@/assets/projects/embassy-hvac-diagnostic.jpg";
import coldRoom from "@/assets/projects/cold-room-real.jpg";
import vrfContainers from "@/assets/projects/vrv-installation.png";
import villaReno1 from "@/assets/projects/villa-renovation-1.jpg";
import villaReno2 from "@/assets/projects/villa-renovation-2.jpg";
import villaReno3 from "@/assets/projects/villa-renovation-3.jpg";
import villaReno4 from "@/assets/projects/villa-renovation-4.jpg";
import villaReno5 from "@/assets/projects/villa-renovation-5.jpg";
import sandwichPanel1 from "@/assets/projects/sandwich-panel-1.jpg";
import sandwichPanel2 from "@/assets/projects/sandwich-panel-2.jpg";
import sandwichPanel3 from "@/assets/projects/sandwich-panel-3.jpg";
import terrainSport from "@/assets/projects/terrain-sport.jpg";
import saadiyatProject from "@/assets/projects/saadiyat-project.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const Produits = () => {
  const { t } = useLanguage();

  const projects = [
    {
      img: vrfContainers,
      title: t("Installation Système VRF : Containers Modulaires", "VRF System Installation : Modular Office Containers"),
      location: t("Base Navale Française, Abu Dhabi", "French Naval Base, Abu Dhabi"),
      year: "2024",
      category: t("HVAC & Climatisation", "HVAC & Air Conditioning"),
      client: t("Base Navale Française", "French Naval Base"),
      desc: t(
        "Étude thermique, conception et installation d'un système VRF sur mesure pour des bureaux en containers modulaires. Installation complète incluant 2 unités extérieures VRF (24HP) et 8 cassettes plafonnières, tuyauterie, isolation et charge en réfrigérant.",
        "Technical site survey and thermal load calculations. Design and configuration of a customized VRF system suited for portable container offices. Supply, installation, and commissioning of 2 VRF outdoor units (24HP) and 8 ceiling cassette indoor units, piping, insulation, and refrigerant charge works."
      ),
      scope: [
        t("Étude thermique et calculs de charge", "Technical site survey and thermal load calculations"),
        t("2 unités extérieures VRF (24HP)", "2 VRF outdoor units (24HP)"),
        t("8 cassettes plafonnières", "8 ceiling cassette indoor units"),
        t("Tuyauterie, isolation et charge réfrigérant", "Piping, insulation and refrigerant charge"),
      ],
      result: t("Livré dans les délais : Températures maintenues entre 18°C et 24°C en été", "Delivered under tight deadlines : Room temperatures maintained between 18°C and 24°C during peak summer"),
    },
    {
      img: embassyHvac,
      title: t("Diagnostic HVAC & Retrofit VAV : Ambassade de France", "HVAC Diagnostics & VAV Retrofit : French Embassy"),
      location: "Etihad Towers, Abu Dhabi",
      year: "2024",
      category: t("HVAC & Climatisation", "HVAC & Air Conditioning"),
      client: t("Ambassade de France", "French Embassy"),
      value: "AED 35,000",
      duration: t("Diagnostic 1 semaine, Installation 2 semaines", "Diagnostics 1 week, Installation 2 weeks"),
      desc: t(
        "Audit de performance HVAC sur deux étages de bureaux administratifs. Identification des zones de flux d'air incohérentes et des pertes d'énergie. Remplacement des unités obsolètes par des terminaux VAV modernes.",
        "HVAC performance audit across two floors of administrative office space. Identification of inconsistent airflow zones and energy losses. Replacement of outdated units with modern Variable Air Volume (VAV) terminals."
      ),
      scope: [
        t("5 boîtiers VAV avec contrôleurs de zone", "5 VAV boxes with individual zone controllers"),
        t("Équilibrage des conduits et isolation acoustique", "Ductwork balancing and acoustic insulation"),
        t("Monitoring centralisé via interface BMS", "Centralized monitoring via building control interface"),
        t("Amélioration de l'efficacité énergétique HVAC", "Increase in HVAC energy efficiency"),
      ],
      result: t("Confort amélioré dans les bureaux diplomatiques sensibles", "Enhanced comfort and quiet operation in sensitive diplomatic offices"),
    },
    {
      img: coldRoom,
      title: t("Réhabilitation Chambre Froide : Restaurant", "Cold Room Refurbishment : Restaurant"),
      location: "Abu Dhabi, UAE",
      year: "2024",
      category: t("HVAC & Réfrigération", "HVAC & Refrigeration"),
      client: t("Base Navale Française", "French Naval Base"),
      value: "AED 210,000",
      duration: t("1 mois", "1 month"),
      desc: t(
        "Démantèlement complet de l'infrastructure frigorifique obsolète. Installation d'un sol antidérapant renforcé, d'une enveloppe thermique avec panneaux sandwich isolés de 150mm, et d'un nouveau système de condensation avec contrôle digital.",
        "Full dismantling of outdated cold storage infrastructure. Installation of heavy-duty anti-slip flooring, thermal envelope upgrade with 150mm insulated sandwich panels, and new condensing unit with digital control."
      ),
      scope: [
        t("Dalle béton renforcée et sol antidérapant", "Reinforced concrete slab and anti-slip flooring"),
        t("Panneaux sandwich isolés 150mm", "150mm insulated sandwich panels"),
        t("Nouveau groupe de condensation avec contrôle digital", "New condensing unit and evaporator with digital control"),
        t("Test de charge jusqu'à 2 000 kg", "Load testing for palletized goods up to 2,000 kg"),
      ],
      result: t("+35% volume de stockage : Conforme HACCP & ESMA", "+35% usable storage volume : HACCP & ESMA compliant"),
    },
    {
      img: villaReno4,
      title: t("Rénovation Villas : Palm Jumeirah", "Villas Renovation : Palm Jumeirah"),
      location: "Palm Jumeirah, Dubai",
      year: "2024",
      category: t("Travaux Civils & Rénovation", "Civil Works & Renovation"),
      client: t("Client Privé", "Private Client"),
      duration: t("2 mois", "2 months"),
      desc: t(
        "Maintenance et réhabilitation complètes de deux villas de luxe à Palm Jumeirah. Peinture intérieure et extérieure, réparation de fissures structurelles, maintenance préventive et mise à niveau des finitions.",
        "Comprehensive maintenance and refurbishment of two luxury villas on Palm Jumeirah. Full internal & external painting works, structural crack repair, preventive maintenance and finishing upgrades."
      ),
      scope: [
        t("Peinture intérieure et extérieure complète", "Full internal & external painting works"),
        t("Réparation de fissures structurelles", "Structural crack repair and surface treatment"),
        t("Maintenance préventive", "Preventive maintenance and finishing upgrades"),
        t("Restauration des façades", "Restoration of façade and interior surfaces"),
      ],
      result: t("Apparence premium restaurée : Durée de vie prolongée", "Restored premium appearance and extended lifecycle"),
      gallery: [villaReno1, villaReno2, villaReno3, villaReno4, villaReno5],
    },
    {
      img: terrainSport,
      title: t("Terrain de Football : Lycée Louis Massignon", "Football Soccer Field : Lycée Louis Massignon"),
      location: "Abu Dhabi, UAE",
      year: "2024",
      category: t("Travaux Civils & Aménagement", "Civil Works & Landscaping"),
      client: "Lycée Louis Massignon",
      value: "AED 100,000",
      duration: t("3 semaines", "3 weeks"),
      desc: t(
        "Création complète d'un terrain de football pour l'école Lycée Louis Massignon à Abu Dhabi. Installation de gazon synthétique, éclairage LED puissant, clôtures et filets PVC.",
        "Complete creation of a football soccer field for Lycée Louis Massignon school in Abu Dhabi. Supply and installation of artificial grass, powerful LED flood lights, fencing and PVC net."
      ),
      scope: [
        t("Gazon synthétique 40mm", "Artificial Grass 40mm thickness"),
        t("Éclairage LED 200W outdoor", "200W LED flood light outdoor"),
        t("Buts de football et clôtures", "Football goal and double fence door"),
        t("Filet PVC tout autour du terrain", "PVC net installed all around the field"),
      ],
      result: t("100% précision de nivellement : Satisfaction client totale", "100% surface leveling accuracy : Full client satisfaction"),
    },
    {
      img: sandwichPanel1,
      title: t("Remplacement Panneaux Sandwich Toiture", "Roof Sandwich Panel Replacement"),
      location: t("Base Navale, Abu Dhabi", "Naval Base, Abu Dhabi"),
      year: "2024",
      category: t("Travaux Civils", "Civil Works"),
      client: t("Base Militaire Française", "French Military Base"),
      value: "AED 250,000",
      duration: t("2 mois", "2 months"),
      desc: t(
        "Évaluation complète de l'état de la toiture et cartographie des dommages. Retrait sécurisé de tous les anciens panneaux sandwich et installation de nouveaux panneaux sandwich isolés PU haute performance.",
        "Comprehensive roof condition assessment and damage mapping. Safe removal of all old sandwich panels. Supply and installation of new customized high-performance PU-core insulated sandwich panels."
      ),
      scope: [
        t("Retrait sécurisé des anciens panneaux", "Safe removal of all old sandwich panels"),
        t("Panneaux sandwich isolés PU haute performance", "High-performance PU-core insulated sandwich panels"),
        t("Installation de flashings et joints étanches", "Flashing and waterproof sealing for joints"),
        t("Inspection et renforcement de la structure", "Structural inspection and reinforcement"),
      ],
      result: t("Efficacité thermique restaurée : Risques de fuite éliminés", "Restored thermal efficiency : Eliminated all water leakage risks"),
      gallery: [sandwichPanel1, sandwichPanel2, sandwichPanel3],
    },
    {
      img: saadiyatProject,
      title: t("Rénovation Complète Appartement : Saadiyat Island", "Full Apartment Renovation : Saadiyat Island"),
      location: "Saadiyat Island, Abu Dhabi",
      year: "2024",
      category: t("Rénovation & Fit-Out", "Renovation & Fit-Out"),
      client: t("Client Privé (Résidentiel Haut de Gamme)", "Private Client (High-End Residential)"),
      desc: t(
        "Transformation complète d'un appartement avec démolition de cloisons pour créer un espace cuisine ouvert, modification de salles de bain, installation de revêtements de sol SPC, remplacement des accessoires électriques, thermostat intelligent et habillage des placards.",
        "Complete apartment transformation with demolition of internal partition wall for open-plan kitchen, bathroom modifications, SPC flooring installation, full replacement of electrical accessories, smart thermostat and built-in wardrobe wrapping."
      ),
      scope: [
        t("Démolition cloison pour cuisine ouverte", "Demolition of internal wall for open-plan kitchen"),
        t("Modification et mise à niveau salles de bain", "Bathroom modifications and upgrades"),
        t("Revêtement sol SPC sur carrelage existant", "SPC flooring over existing tiles"),
        t("Thermostat intelligent (domotique)", "Smart thermostat (home automation)"),
      ],
      result: t("Espace moderne et fonctionnel : Valeur du bien augmentée", "Modern functional living space : Increased property value"),
    },
  ];

  const stats = [
    { value: "150+", label: t("Projets Réalisés", "Completed Projects") },
    { value: "98%", label: t("Clients Satisfaits", "Satisfied Clients") },
    { value: "20+", label: t("Années d'Expérience", "Years of Experience") },
    { value: "35%", label: t("Économie Moyenne", "Average Savings") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img src={heroBg} alt="" className="h-full w-full object-cover" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        </div>
        <motion.div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
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

      {/* Stats */}
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
                <motion.img src={project.img} alt={project.title} className="h-[420px] w-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
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
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />{project.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{project.year}</span>
                  {(project as any).value && (
                    <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5 text-primary" />{(project as any).value}</span>
                  )}
                  {(project as any).duration && (
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" />{(project as any).duration}</span>
                  )}
                </div>
                <h2 className="font-display text-2xl font-bold md:text-3xl">{project.title}</h2>
                {(project as any).client && (
                  <p className="mt-1 text-sm font-medium text-primary">{t("Client : ", "Client: ")}{(project as any).client}</p>
                )}
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

                {/* Gallery thumbnails */}
                {(project as any).gallery && (
                  <div className="mt-4 flex gap-2 overflow-x-auto">
                    {(project as any).gallery.slice(0, 4).map((img: string, gi: number) => (
                      <motion.img key={gi} src={img} alt="" className="h-16 w-20 rounded-lg object-cover border border-border flex-shrink-0 hover:border-primary/50 transition-colors"
                        whileHover={{ scale: 1.1 }} />
                    ))}
                  </div>
                )}
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
            <motion.div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-[60px]" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-4xl">
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
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Produits;