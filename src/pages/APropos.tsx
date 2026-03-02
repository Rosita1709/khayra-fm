import { motion } from "framer-motion";
import { Wind, Zap, Wrench, Paintbrush, Lightbulb, ShieldCheck, Eye, BarChart3, FileCheck } from "lucide-react";
import aboutBg from "@/assets/about-bg.webp";
import heroImg from "@/assets/hero-light.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const expertises = [
  {
    icon: Wind,
    title: "HVAC & Climatisation",
    desc: "Gestion complète des systèmes de climatisation : installation, maintenance, optimisation des performances et amélioration de l'efficacité énergétique.",
  },
  {
    icon: Zap,
    title: "MEP (Mechanical, Electrical & Plumbing)",
    desc: "Supervision et maintenance des systèmes électriques, hydrauliques et mécaniques essentiels au bon fonctionnement des bâtiments.",
  },
  {
    icon: Wrench,
    title: "Travaux Civils & Rénovation",
    desc: "Modernisation d'espaces résidentiels et commerciaux, rénovation complète, transformations techniques et amélioration des finitions.",
  },
  {
    icon: Paintbrush,
    title: "Design Intérieur & Aménagement",
    desc: "Optimisation des espaces, solutions esthétiques et fonctionnelles, exécution clé en main.",
  },
  {
    icon: Lightbulb,
    title: "Energy Saving & Optimisation",
    desc: "Audit énergétique, réduction des consommations, amélioration des performances techniques et durabilité des équipements.",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Prévention",
    desc: "Mettre en place des plans de maintenance structurés afin de limiter les interruptions et prolonger la durée de vie des équipements.",
  },
  {
    icon: BarChart3,
    num: "02",
    title: "Performance",
    desc: "Optimiser les systèmes techniques pour garantir un fonctionnement fiable et efficace.",
  },
  {
    icon: Eye,
    num: "03",
    title: "Transparence",
    desc: "Reporting clair, suivi des interventions, communication structurée avec nos clients.",
  },
  {
    icon: FileCheck,
    num: "04",
    title: "Sécurité & Conformité",
    desc: "Respect strict des réglementations locales et des standards techniques en vigueur aux Émirats Arabes Unis.",
  },
];

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover opacity-30"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="container relative mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary"
          >
            Qui sommes-nous
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            À <span className="text-gradient">Propos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            KFM – Khayra Facilities Management, votre partenaire de confiance à Abu Dhabi.
          </motion.p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={aboutBg} alt="Équipe KFM" className="h-[500px] w-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 font-display shadow-xl"
              >
                <div className="text-3xl font-bold text-primary-foreground">Abu Dhabi</div>
                <div className="text-sm text-primary-foreground/80">Émirats Arabes Unis</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                KFM – Khayra <span className="text-gradient">Facilities Management</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                KFM – Khayra Facilities Management est une société spécialisée en Facility Management basée à Abu Dhabi,
                aux Émirats Arabes Unis.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Nous accompagnons les propriétaires d'actifs immobiliers, les entreprises, les industries,
                les institutions et les résidences haut de gamme dans la gestion, la maintenance et l'optimisation
                technique de leurs bâtiments.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                KFM s'appuie sur une équipe technique qualifiée et expérimentée couvrant plusieurs domaines d'expertise.
              </p>
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4">
                <p className="text-sm font-medium leading-relaxed">
                  Chez KFM, le Facility Management ne se limite pas à l'entretien. Il s'agit d'une approche globale
                  visant à garantir la <strong>performance</strong>, la <strong>sécurité</strong> et la{" "}
                  <strong>durabilité</strong> des infrastructures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Expertise</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Nos domaines d'<span className="text-gradient">expertise</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche — 4 piliers */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Méthodologie</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Notre <span className="text-gradient">Approche</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Notre approche repose sur quatre piliers fondamentaux :
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg">
                  {pillar.num}
                </div>
                <div className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <pillar.icon className="h-7 w-7" />
                </div>
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
