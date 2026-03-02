import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Settings, ClipboardCheck, Headphones, ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesBg from "@/assets/services-bg.webp";

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
      {/* Hero with background image */}
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
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-accent/10 blur-[80px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
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
                className={`group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2`}
              >
                <div className={`relative flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br ${service.color} overflow-hidden`}>
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      backgroundImage: "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                  <h2 className="relative font-display text-xl font-bold">{t(service.title, service.titleEn)}</h2>
                  <p className="relative mt-1 text-xs text-muted-foreground">{service.titleEn}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {service.intro}
                  </p>
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
                className="relative text-center rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
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
            {/* Animated decoration */}
            <motion.div
              className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-[60px]"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary-foreground/5 blur-[60px]"
              animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
