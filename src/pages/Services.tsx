import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Settings, ClipboardCheck, Headphones, ArrowRight, CheckCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesBg from "@/assets/services-bg.webp";

import productHvac from "@/assets/product-hvac.webp";
import productMep from "@/assets/product-mep.webp";
import productCivil from "@/assets/product-civil.webp";
import productInterior from "@/assets/product-interior.webp";
import productEnergy from "@/assets/product-energy.webp";
import productCleaning from "@/assets/product-cleaning.jpg";

const serviceImages: Record<string, string> = {
  hvac: productHvac,
  mep: productMep,
  "travaux-civils": productCivil,
  "design-interieur": productInterior,
  "energy-saving": productEnergy,
  "nettoyage": productCleaning,
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
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

      {/* Hero — same style as Produits */}
      <section className="relative py-32 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={servicesBg}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        </div>
        <motion.div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("Demander un devis", "Request a quote")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES — alternating layout like Produits ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-28">
          {servicesData.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="grid items-center gap-12 lg:grid-cols-2"
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
                    src={serviceImages[service.slug] || servicesBg}
                    alt={t(service.title, service.titleEn)}
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
                      {t(service.title, service.titleEn)}
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-lg"
                  >
                    <Icon className="h-6 w-6 text-primary" />
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
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {service.sections.slice(0, 3).map((s) => (
                      <span
                        key={s.title}
                        className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
                      >
                        {s.title.split(" ").slice(0, 2).join(" ")}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-2xl font-bold md:text-3xl">
                    {t(service.title, service.titleEn)}
                  </h2>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.intro}
                  </p>

                  {/* Key points */}
                  {service.sections[0]?.items?.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                        {t("Points clés", "Key points")}
                      </h4>
                      <ul className="space-y-2">
                        {service.sections[0].items.slice(0, 5).map((item, j) => (
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
                  )}

                  {/* Engagement banner */}
                  {service.engagement && service.engagement.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-semibold">{service.engagement[0]}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="group mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary"
                  >
                    {t("Découvrir en détail", "View details")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden bg-muted/50">
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

      {/* CTA */}
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
              className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-[60px]"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              {t("Un besoin spécifique ?", "A specific need?")}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t(
                "Nos experts analysent vos installations et vous proposent une solution adaptée sous 48h.",
                "Our experts analyze your facilities and propose a tailored solution within 48 hours."
              )}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("Nous contacter", "Contact us")}
              </Link>
              <a
                href="https://wa.me/971508054220"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-primary-foreground/30 px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
