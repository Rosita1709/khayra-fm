import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wind, Zap, Wrench, Paintbrush, Lightbulb, ShieldCheck,
  Settings, ClipboardCheck, Headphones, ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const services = [
  {
    icon: Wind,
    title: "HVAC & Climatisation",
    short: "Solutions complètes en chauffage, ventilation et climatisation adaptées au climat des EAU.",
    details: [
      "Installation & Mise en Service (Split, FCU, VRF/VRV, AHU)",
      "Maintenance Préventive & Corrective",
      "Duct Cleaning & Qualité de l'Air",
      "Optimisation & Efficacité Énergétique",
      "Contrats de Maintenance Annuels (AMC)",
    ],
    color: "from-sky-500/20 to-blue-500/20",
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
    color: "from-amber-500/20 to-orange-500/20",
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
    color: "from-stone-500/20 to-zinc-500/20",
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
    color: "from-rose-500/20 to-pink-500/20",
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
    color: "from-emerald-500/20 to-green-500/20",
  },
];

const processSteps = [
  { icon: Headphones, title: "Consultation", desc: "Écoute de vos besoins et analyse de vos installations." },
  { icon: ClipboardCheck, title: "Audit & Diagnostic", desc: "Évaluation technique complète sur site." },
  { icon: Settings, title: "Mise en Œuvre", desc: "Exécution par nos techniciens qualifiés." },
  { icon: ShieldCheck, title: "Suivi & Garantie", desc: "Maintenance continue et reporting transparent." },
];

const Services = () => {
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
            Ce que nous faisons
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            Nos <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Des solutions sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.
          </motion.p>
        </div>
      </section>

      {/* Services cards */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="grid lg:grid-cols-[1fr_1.5fr]">
                {/* Left: Icon & Title */}
                <div className={`flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br ${service.color}`}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    <service.icon className="h-10 w-10" />
                  </motion.div>
                  <h2 className="font-display text-2xl font-bold">{service.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground max-w-xs">{service.short}</p>
                </div>

                {/* Right: Details */}
                <div className="p-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                    Prestations incluses
                  </h3>
                  <ul className="space-y-4">
                    {service.details.map((detail, j) => (
                      <motion.li
                        key={detail}
                        custom={j}
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-sm group/item"
                      >
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary transition-transform group-hover/item:translate-x-1" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Méthodologie</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Notre <span className="text-gradient">Processus</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative text-center rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-primary p-12 md:p-20 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              Un besoin spécifique ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Nos experts analysent vos installations et vous proposent une solution adaptée sous 48h.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg"
              >
                Nous contacter
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

export default Services;
