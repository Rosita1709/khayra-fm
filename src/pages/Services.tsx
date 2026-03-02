import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Settings, ClipboardCheck, Headphones, ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const Services = () => {
  const { t } = useLanguage();

  const processSteps = [
    { icon: Headphones, title: t("Consultation", "Consultation"), desc: t("Écoute de vos besoins et analyse de vos installations.", "Listening to your needs and analyzing your facilities.") },
    { icon: ClipboardCheck, title: t("Audit & Diagnostic", "Audit & Diagnosis"), desc: t("Évaluation technique complète sur site.", "Complete on-site technical assessment.") },
    { icon: Settings, title: t("Mise en Œuvre", "Implementation"), desc: t("Exécution par nos techniciens qualifiés.", "Execution by our qualified technicians.") },
    { icon: ShieldCheck, title: t("Suivi & Garantie", "Follow-up & Warranty"), desc: t("Maintenance continue et reporting transparent.", "Continuous maintenance and transparent reporting.") },
  ];

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
            {t("Ce que nous faisons", "What we do")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            {t("Nos ", "Our ")}<span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {t(
              "Des solutions sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.",
              "Tailored solutions for optimal management of your facilities in the United Arab Emirates."
            )}
          </motion.p>
        </div>
      </section>

      {/* Services cards */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${service.slug}`}
                className={`group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5`}
              >
                <div className={`flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br ${service.color}`}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                  <h2 className="font-display text-xl font-bold">{t(service.title, service.titleEn)}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{service.titleEn}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {service.intro}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                    {t("Découvrir en détail", "View details")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Méthodologie", "Methodology")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Notre ", "Our ")}<span className="text-gradient">{t("Processus", "Process")}</span>
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
              {t("Un besoin spécifique ?", "A specific need?")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t(
                "Nos experts analysent vos installations et vous proposent une solution adaptée sous 48h.",
                "Our experts analyze your facilities and propose a tailored solution within 48 hours."
              )}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg"
              >
                {t("Nous contacter", "Contact us")}
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
