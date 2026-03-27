import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

import productHvac from "@/assets/hvac-detail-bg.png";
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
  const heroImage = serviceImages[service.slug];
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with service-specific image */}
      <section className="relative py-28 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <motion.div
          className="absolute top-20 right-20 h-64 w-64 rounded-full blur-[100px]"
          style={{ background: "hsl(var(--primary) / 0.15)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container relative mx-auto px-6">
          <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {t("Tous les services", "All services")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg"
              initial={{ rotate: -20, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
            <h1 className="font-display text-4xl font-bold text-background md:text-6xl">
              {t(service.title, service.titleEn)}
            </h1>
            <motion.p
              className="mt-6 max-w-3xl text-lg leading-relaxed text-background/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {service.intro}
            </motion.p>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="rounded-2xl bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("Demander un devis", "Request a quote")}
            </Link>
            <a
              href="https://wa.me/971508054220"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-background/25 bg-background/8 px-6 py-3 font-display text-sm font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/15"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {service.sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="card-premium p-8 md:p-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20"
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
                      <motion.li
                        key={item}
                        custom={j}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-sm group"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {section.benefits && (
                    <motion.div
                      className="mt-6 rounded-xl bg-primary/5 border border-primary/10 p-5"
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

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service image card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-premium overflow-hidden sticky top-24"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={heroImage} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold mb-2">{t("Besoin de ce service ?", "Need this service?")}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t("Contactez-nous pour un devis gratuit sous 48h.", "Contact us for a free quote within 48h.")}
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:contact@khayrafm.com"
                      className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm transition-all hover:border-primary/30 hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Email</div>
                        <div className="font-semibold text-sm">contact@khayrafm.com</div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/971508054220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm transition-all hover:border-primary/30 hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">WhatsApp</div>
                        <div className="font-semibold text-sm">+971 50 805 4220</div>
                      </div>
                    </a>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 block w-full rounded-xl bg-primary py-3 text-center font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                  >
                    {t("Demander un devis", "Request a quote")}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      {service.engagement && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-muted/50" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-[120px]"
            style={{ background: "hsl(var(--primary) / 0.05)" }}
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
                <motion.div
                  key={item}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-card-hover"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Link to={`/services/${prevService.slug}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t("Précédent", "Previous")}</div>
                  <div className="font-semibold">{t(prevService.title, prevService.titleEn)}</div>
                </div>
              </Link>
            ) : <div />}
            {nextService ? (
              <Link to={`/services/${nextService.slug}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group text-right">
                <div>
                  <div className="text-xs text-muted-foreground">{t("Suivant", "Next")}</div>
                  <div className="font-semibold">{t(nextService.title, nextService.titleEn)}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
