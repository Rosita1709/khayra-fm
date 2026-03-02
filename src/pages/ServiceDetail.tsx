import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

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
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto px-6">
          <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {t("Tous les services", "All services")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <service.icon className="h-8 w-8" />
            </div>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              {t(service.title, service.titleEn)}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{service.titleEn}</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{service.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {service.sections.map((section, i) => (
            <motion.div key={section.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">{i + 1}</div>
                <h2 className="font-display text-xl font-bold">{section.title}</h2>
              </div>
              {section.intro && <p className="mb-5 text-sm text-muted-foreground">{section.intro}</p>}
              <ul className="grid gap-3 sm:grid-cols-2">
                {section.items.map((item, j) => (
                  <motion.li key={item} custom={j} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              {section.benefits && (
                <div className="mt-6 rounded-xl bg-primary/5 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{t("Bénéfices", "Benefits")}</p>
                  <ul className="space-y-2">
                    {section.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement */}
      {service.engagement && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold">
                {t("Notre ", "Our ")}<span className="text-gradient">{t("Engagement", "Commitment")}</span>
              </h2>
            </motion.div>
            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              {service.engagement.map((item, i) => (
                <motion.div key={item} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
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
              <Link to={`/services/${prevService.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />{t(prevService.title, prevService.titleEn)}
              </Link>
            ) : <div />}
            {nextService ? (
              <Link to={`/services/${nextService.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t(nextService.title, nextService.titleEn)}<ArrowRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl bg-primary p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              {t("Besoin de ce service ?", "Need this service?")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t(
                "Nos experts analysent vos installations et vous proposent une solution adaptée sous 48h.",
                "Our experts analyze your facilities and propose a tailored solution within 48 hours."
              )}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg">
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
