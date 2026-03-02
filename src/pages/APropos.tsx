import { motion, useScroll, useTransform } from "framer-motion";
import { Wind, Zap, Wrench, Paintbrush, Lightbulb, ShieldCheck, Eye, BarChart3, FileCheck, Users, Building2, Award } from "lucide-react";
import aboutBg from "@/assets/about-bg.webp";
import heroImg from "@/assets/hero-light.webp";
import visionBg from "@/assets/vision-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const APropos = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = [
    { icon: Users, value: "50+", label: t("Techniciens", "Technicians") },
    { icon: Building2, value: "150+", label: t("Projets", "Projects") },
    { icon: Award, value: "12+", label: t("Années", "Years") },
  ];

  const expertises = [
    { icon: Wind, title: t("HVAC & Climatisation", "HVAC & Air Conditioning"), desc: t("Gestion complète des systèmes de climatisation : installation, maintenance, optimisation des performances et amélioration de l'efficacité énergétique.", "Complete management of air conditioning systems: installation, maintenance, performance optimization and energy efficiency improvement.") },
    { icon: Zap, title: "MEP (Mechanical, Electrical & Plumbing)", desc: t("Supervision et maintenance des systèmes électriques, hydrauliques et mécaniques essentiels au bon fonctionnement des bâtiments.", "Supervision and maintenance of electrical, hydraulic and mechanical systems essential to building operations.") },
    { icon: Wrench, title: t("Travaux Civils & Rénovation", "Civil Works & Renovation"), desc: t("Modernisation d'espaces résidentiels et commerciaux, rénovation complète, transformations techniques et amélioration des finitions.", "Modernization of residential and commercial spaces, complete renovation, technical transformations and finishing improvements.") },
    { icon: Paintbrush, title: t("Design Intérieur & Aménagement", "Interior Design & Fit-Out"), desc: t("Optimisation des espaces, solutions esthétiques et fonctionnelles, exécution clé en main.", "Space optimization, aesthetic and functional solutions, turnkey execution.") },
    { icon: Lightbulb, title: "Energy Saving & Optimization", desc: t("Audit énergétique, réduction des consommations, amélioration des performances techniques et durabilité des équipements.", "Energy audit, consumption reduction, technical performance improvement and equipment sustainability.") },
  ];

  const pillars = [
    { icon: ShieldCheck, num: "01", title: t("Prévention", "Prevention"), desc: t("Mettre en place des plans de maintenance structurés afin de limiter les interruptions et prolonger la durée de vie des équipements.", "Implementing structured maintenance plans to limit interruptions and extend equipment lifespan.") },
    { icon: BarChart3, num: "02", title: "Performance", desc: t("Optimiser les systèmes techniques pour garantir un fonctionnement fiable et efficace.", "Optimizing technical systems to ensure reliable and efficient operation.") },
    { icon: Eye, num: "03", title: t("Transparence", "Transparency"), desc: t("Reporting clair, suivi des interventions, communication structurée avec nos clients.", "Clear reporting, intervention tracking, structured communication with our clients.") },
    { icon: FileCheck, num: "04", title: t("Sécurité & Conformité", "Safety & Compliance"), desc: t("Respect strict des réglementations locales et des standards techniques en vigueur aux Émirats Arabes Unis.", "Strict compliance with local regulations and technical standards in the United Arab Emirates.") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative py-32 overflow-hidden min-h-[55vh] flex items-center">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <motion.img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
          <div className="absolute inset-0 bg-background/50" />
        </motion.div>
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-1/4 h-64 w-64 rounded-full bg-primary/8 blur-[100px]"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div style={{ opacity: heroOpacity }} className="container relative mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary">
            {t("Qui sommes-nous", "Who we are")}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-6xl">
            {t("À ", "")}<span className="text-gradient">{t("Propos", "About")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t("KFM – Khayra Facilities Management, votre partenaire de confiance à Abu Dhabi.", "KFM – Khayra Facilities Management, your trusted partner in Abu Dhabi.")}
          </motion.p>
        </motion.div>
      </section>

      {/* Floating stats bar */}
      <section className="relative -mt-10 z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-6 shadow-xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center text-center gap-2"
              >
                <stat.icon className="h-6 w-6 text-primary" />
                <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <motion.img
                  src={aboutBg}
                  alt={t("Équipe KFM", "KFM Team")}
                  className="h-[500px] w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 font-display shadow-xl">
                <div className="text-3xl font-bold text-primary-foreground">Abu Dhabi</div>
                <div className="text-sm text-primary-foreground/80">{t("Émirats Arabes Unis", "United Arab Emirates")}</div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                KFM – Khayra <span className="text-gradient">Facilities Management</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {t(
                  "KFM – Khayra Facilities Management est une société spécialisée en Facility Management basée à Abu Dhabi, aux Émirats Arabes Unis.",
                  "KFM – Khayra Facilities Management is a company specializing in Facility Management based in Abu Dhabi, United Arab Emirates."
                )}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(
                  "Nous accompagnons les propriétaires d'actifs immobiliers, les entreprises, les industries, les institutions et les résidences haut de gamme dans la gestion, la maintenance et l'optimisation technique de leurs bâtiments.",
                  "We support real estate asset owners, businesses, industries, institutions and high-end residences in the management, maintenance and technical optimization of their buildings."
                )}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(
                  "KFM s'appuie sur une équipe technique qualifiée et expérimentée couvrant plusieurs domaines d'expertise.",
                  "KFM relies on a qualified and experienced technical team covering multiple areas of expertise."
                )}
              </p>
              <motion.div
                className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.4)" }}
              >
                <p className="text-sm font-medium leading-relaxed">
                  {t(
                    <>Chez KFM, le Facility Management ne se limite pas à l'entretien. Il s'agit d'une approche globale visant à garantir la <strong>performance</strong>, la <strong>sécurité</strong> et la <strong>durabilité</strong> des infrastructures.</>,
                    <>At KFM, Facility Management goes beyond maintenance. It is a comprehensive approach aimed at ensuring the <strong>performance</strong>, <strong>safety</strong> and <strong>sustainability</strong> of infrastructure.</>
                  )}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision section with parallax image */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={visionBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container relative mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <motion.img
                src={visionBg}
                alt={t("Technicien HVAC", "HVAC Technician")}
                className="h-[400px] w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Notre Vision", "Our Vision")}</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                {t("Excellence ", "Operational ")}<span className="text-gradient">{t("opérationnelle", "Excellence")}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t(
                  "L'objectif principal de KFM est d'assurer le bon fonctionnement des installations de ses clients, en veillant à ce qu'elles soient entretenues de manière optimale, sécurisées et conformes aux normes réglementaires.",
                  "KFM's main objective is to ensure the smooth operation of its clients' facilities, ensuring they are optimally maintained, secure, and compliant with regulatory standards."
                )}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t(
                  "Que ce soit pour des entreprises, des institutions publiques, des centres commerciaux ou d'autres organisations, KFM est un partenaire fiable pour la gestion complète des installations.",
                  "Whether for businesses, public institutions, shopping centers, or other organizations, KFM is a reliable partner for complete facility management."
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Expertise", "Expertise")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos domaines d'", "Our areas of ")}<span className="text-gradient">{t("expertise", "expertise")}</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((item, i) => (
              <motion.div key={item.title} custom={i} variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <motion.div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="h-7 w-7" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Méthodologie", "Methodology")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Notre ", "Our ")}<span className="text-gradient">{t("Approche", "Approach")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t("Notre approche repose sur quatre piliers fondamentaux :", "Our approach is based on four fundamental pillars:")}
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} custom={i} variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  {pillar.num}
                </div>
                <motion.div
                  className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <pillar.icon className="h-7 w-7" />
                </motion.div>
                <h4 className="font-display text-lg font-semibold">{pillar.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
