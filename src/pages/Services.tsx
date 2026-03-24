import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Settings, ClipboardCheck, Headphones, ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesBg from "@/assets/services-bg.webp";

import productHvac from "@/assets/product-hvac.webp";
import productMep from "@/assets/product-mep.webp";
import productCivil from "@/assets/product-civil.webp";
import productInterior from "@/assets/product-interior.webp";
import productEnergy from "@/assets/product-energy.webp";

const serviceImages: Record<string, string> = {
  hvac: productHvac,
  mep: productMep,
  "travaux-civils": productCivil,
  "design-interieur": productInterior,
  "energy-saving": productEnergy,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
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

      {/* Hero — inchangé */}
      <section className="relative py-32 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={servicesBg}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/50 to-foreground/25" />
        </div>
        <motion.div
          className="absolute top-20 right-20 h-64 w-64 rounded-full blur-[100px]"
          style={{ background: "hsl(var(--primary) / 0.12)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-xs font-semibold tracking-widest uppercase text-primary backdrop-blur-sm"
          >
            {t("Ce que nous faisons", "What we do")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold md:text-7xl text-background"
          >
            {t("Nos ", "Our ")}<span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-lg text-background/75"
          >
            {t(
              "Des solutions sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.",
              "Tailored solutions for optimal management of your facilities in the United Arab Emirates."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("Demander un devis", "Request a quote")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES — deux blocs séparés, alternés ── */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Nos expertises", "Our expertise")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              {t("Nos ", "Our ")}<span className="text-gradient">{t("Solutions", "Solutions")}</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={service.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`flex flex-col gap-6 lg:gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch`}
                >
                  {/* ── Bloc IMAGE ── */}
                  <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative w-full h-56 lg:h-full min-h-[260px]">
                      <img
                        src={serviceImages[service.slug] || servicesBg}
                        alt={t(service.title, service.titleEn)}
                        className="w-full h-full object-cover"
                      />
                      {/* Numéro */}
                      <div className="absolute top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg font-display">
                        0{i + 1}
                      </div>
                      {/* Icône service */}
                      <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* ── Bloc TEXTE ── */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="group lg:w-1/2 rounded-2xl border border-border bg-card p-6 lg:p-8 flex flex-col justify-center shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.sections.slice(0, 3).map((s) => (
                        <span
                          key={s.title}
                          className="rounded-full bg-primary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
                        >
                          {s.title.split(" ").slice(0, 2).join(" ")}
                        </span>
                      ))}
                    </div>

                    {/* Titre */}
                    <h2 className="font-display text-2xl font-bold lg:text-3xl">
                      {t(service.title, service.titleEn)}
                    </h2>

                    {/* Intro */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.intro}
                    </p>

                    {/* Points clés */}
                    {service.sections[0]?.items?.length > 0 && (
                      <ul className="mt-6 space-y-2">
                        {service.sections[0].items.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-2 font-display text-sm font-semibold text-primary">
                      {t("Découvrir en détail", "View details")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </Link>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — inchangé */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-muted/40" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{ background: "hsl(var(--primary) / 0.04)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Méthodologie", "Methodology")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Notre ", "Our ")}<span className="text-gradient">{t("Processus", "Process")}</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative text-center rounded-2xl border border-border bg-card p-8 pt-10 mt-4 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg z-10 font-display">
                  {i + 1}
                </div>
                <motion.div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="h-7 w-7" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — inchangé */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20 text-center"
          >
            <motion.div
              className="absolute top-0 right-0 h-64 w-64 rounded-full blur-[80px]"
              style={{ background: "hsl(0 0% 100% / 0.1)" }}
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              {t("Un besoin spécifique ?", "A specific need?")}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/70">
              {t(
                "Nos experts analysent vos installations et vous proposent une solution adaptée sous 48h.",
                "Our experts analyze your facilities and propose a tailored solution within 48 hours."
              )}
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-2xl bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-premium hover:-translate-y-1"
              >
                {t("Nous contacter", "Contact us")}
              </Link>
              <a
                href="https://wa.me/971508054220"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-primary-foreground/25 px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 hover:-translate-y-0.5"
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
