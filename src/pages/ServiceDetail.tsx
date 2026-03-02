import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesBg from "@/assets/services-bg.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  const { t } = useLanguage();

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with background image */}
      <section className="relative py-28 overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={servicesBg}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40`} />
          <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        {/* Floating orb */}
        <motion.div
          className="absolute top-20 right-20 h-48 w-48 rounded-full bg-primary/10 blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container relative mx-auto px-6">
          <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {t("Tous les services", "All services")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              initial={{ rotate: -20, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <service.icon className="h-8 w-8" />
            </motion.div>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              {t(service.title, service.titleEn)}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{service.titleEn}</p>
            <motion.p
              className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {service.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {service.sections.map((section, i) => (
            <motion.div key={section.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
                >
                  {i + 1}
                </motion.div>
                <h2 className="font-display text-xl font-bold">{section.title}</h2>
              </div>
              {section.intro && <p className="mb-5 text-sm text-muted-foreground">{section.intro}</p>}
              <ul className="grid gap-3 sm:grid-cols-2">
                {section.items.map((item, j) => (
                  <motion.li key={item} custom={j} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex items-start gap-3 text-sm group">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              {section.benefits && (
                <motion.div
                  className="mt-6 rounded-xl bg-primary/5 p-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{t("Bénéfices", "Benefits")}</p>
                  <ul className="space-y-2">
                    {section.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />{b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement */}
      {service.engagement && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-muted/50" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="container relative mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold">
                {t("Notre ", "Our ")}<span className="text-gradient">{t("Engagement", "Commitment")}</span>
              </h2>
            </motion.div>
            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              {service.engagement.map((item, i) => (
                <motion.div key={item} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Link to={`/services/${prevService.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />{t(prevService.title, prevService.titleEn)}
              </Link>
            ) : <div />}
            {nextService ? (
              <Link to={`/services/${nextService.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                {t(nextService.title, nextService.titleEn)}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 text-center">
            <motion.div
              className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary-foreground/5 blur-[60px]"
              animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              {t("Besoin de ce service ?", "Need this service?")}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t(
                "Nos experts analysent vos installations et vous proposent une solution adaptée sous 48h.",
                "Our experts analyze your facilities and propose a tailored solution within 48 hours."
              )}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg hover:-translate-y-0.5">
                {t("Demander un devis", "Request a quote")}
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

export default ServiceDetail;
