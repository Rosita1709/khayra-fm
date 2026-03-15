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
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <motion.div
          className="absolute top-20 right-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-6 text-center">
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
            className="font-display text-5xl font-bold md:text-6xl text-background"
          >
            {t("Nos ", "Our ")}<span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-background/80"
          >
            {t(
              "Des solutions sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.",
              "Tailored solutions for optimal management of your facilities in the United Arab Emirates."
            )}
          </motion.p>
        </div>
      </section>

      {/* Services cards with images */}
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
                className="group flex flex-col h-full card-modern overflow-hidden"
              >
                {/* Service image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={serviceImages[service.slug] || servicesBg}
                    alt={t(service.title, service.titleEn)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                    {t(service.title.split(" ")[0], service.titleEn.split(" ")[0])}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-display text-xl font-bold">{t(service.title, service.titleEn)}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {service.intro}
                  </p>

                  {/* Section count */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.sections.slice(0, 3).map((s) => (
                      <span key={s.title} className="rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {s.title.split(" ").slice(0, 2).join(" ")}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                    {t("Découvrir en détail", "View details")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-muted/50" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-6">
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative text-center rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-card-hover"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  {i + 1}
                </div>
                <motion.div 
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"
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
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">
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
                className="rounded-xl bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("Nous contacter", "Contact us")}
              </Link>
              <a
                href="https://wa.me/971508054220"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-primary-foreground/30 px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
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
