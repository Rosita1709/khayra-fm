import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-new.jpg";
import { CheckCircle, TrendingUp, PiggyBank, Heart, Rocket, ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import aboutBg from "@/assets/about-bg.webp";

import ctaBg from "@/assets/cta-bg.jpg";

// Client logos (they trust us)
import partner1 from "@/assets/partners/partner1.png";
import partner2 from "@/assets/partners/partner2.jpeg";
import partner3 from "@/assets/partners/partner3.jpg";
import economat from "@/assets/partners/economat.png";
import ambassade from "@/assets/partners/ambassade.jpeg";
import partner6 from "@/assets/partners/partner6.png";

// Partner logos (we work with)
import takyeef from "@/assets/partners/takyeef.png";
import senben from "@/assets/partners/senben.png";
import universalRbm from "@/assets/partners/universal-rbm.png";
import mklights from "@/assets/partners/mklights.webp";

import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const clientLogos = [
  { src: partner1, name: "LLM Education" },
  { src: partner2, name: "MBDA Systems" },
  { src: partner3, name: "Huda Beauty" },
  { src: economat, name: "Économat des Armées" },
  { src: ambassade, name: "Ambassade de France" },
  { src: partner6, name: "Ambassade du Sénégal" },
];

const partnerLogos = [
  { src: takyeef, name: "Takyeef Factory", url: "https://www.takyeeffactory.com/" },
  { src: senben, name: "Senben Lighting", url: "https://www.senbenlighting.com/" },
  { src: universalRbm, name: "Universal RBM", url: "https://universal-rbm.com/" },
  { src: mklights, name: "MK Lights", url: "https://www.mklights.com/" },
];

const CountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl font-bold text-primary md:text-4xl"
      >
        {count}{suffix}
      </motion.div>
      <div className="mt-2 text-sm tracking-wide text-background/60">{label}</div>
    </div>
  );
};

const StatsCounter = ({ t }: { t: (fr: string, en: string) => string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.1 }}
    className="mt-16 flex flex-wrap items-center justify-between gap-8"
  >
    <CountUpStat end={150} suffix="+" label={t("Projets", "Projects")} />
    <div className="h-10 w-px bg-background/20 hidden md:block" />
    <CountUpStat end={98} suffix="%" label={t("Satisfaction", "Satisfaction")} />
    <div className="h-10 w-px bg-background/20 hidden md:block" />
    <CountUpStat end={15} suffix="+" label={t("Années", "Years")} />
    <div className="h-10 w-px bg-background/20 hidden md:block" />
    <div className="text-center">
      <div className="font-display text-3xl font-bold text-primary md:text-4xl">24/7</div>
      <div className="mt-2 text-sm tracking-wide text-background/60">{t("Support", "Support")}</div>
    </div>
  </motion.div>
);

const Index = () => {
  const { t } = useLanguage();

  const values = [
    { icon: TrendingUp, title: t("Excellence Opérationnelle", "Operational Excellence"), desc: t("Les plus hauts standards dans chaque intervention.", "The highest standards in every task.") },
    { icon: PiggyBank, title: t("Réduction des coûts", "Cost Reduction"), desc: t("Maintenance préventive et optimisation énergétique.", "Preventive maintenance and energy optimization.") },
    { icon: Heart, title: t("Engagement Client", "Customer Commitment"), desc: t("Relations durables basées sur la confiance et la réactivité.", "Long-term relationships based on trust and responsiveness.") },
    { icon: Rocket, title: t("Innovation", "Innovation"), desc: t("Technologies intelligentes pour améliorer les performances.", "Smart technologies to improve performance.") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/25" />
        </div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full blur-[180px]"
          style={{ background: "hsl(var(--primary) / 0.12)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-xs font-semibold tracking-widest uppercase text-primary backdrop-blur-sm"
            >
              Facility Management, Abu Dhabi, UAE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl text-background"
            >
              Khayra{" "}
              <span className="text-gradient">Facility</span>
              <br />
              Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-background/75"
            >
              {t(
                "Khayra FM propose des services de Facilities Management digitalisés avec une application de GMAO et fournit des services et des solutions de qualité à une variété de clients dans différents secteurs.",
                "Khayra FM provides digitalized Facility Management services with a CMMS application and delivers quality services and solutions to a variety of clients across different sectors."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="group rounded-2xl bg-primary px-8 py-4 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  {t("Nos services", "Our services")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="rounded-2xl border border-background/25 bg-background/8 px-8 py-4 font-display text-sm font-semibold tracking-wide text-background backdrop-blur-md transition-all hover:bg-background/15 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("Nous contacter", "Contact us")}
              </Link>
            </motion.div>

            {/* Stats row - counting animation */}
            <StatsCounter t={t} />
          </div>
        </div>
      </section>

      {/* ===== DES PROFESSIONNELS QUALIFIÉS ===== */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl shadow-premium">
                <motion.img
                  src={aboutBg}
                  alt={t("Équipe KFM", "KFM Team")}
                  className="h-[500px] w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("À propos", "About")}</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                {t("Des professionnels qualifiés pour vos ", "Qualified professionals for your ")}
                <span className="text-gradient">{t("travaux", "projects")}</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {t(
                  "KFM est votre partenaire de confiance pour des solutions complètes et innovantes en facility management. Fondée par M. Inadone Fall, un leader visionnaire avec plus de 15 ans d'expérience internationale.",
                  "KFM is your trusted partner in delivering comprehensive and innovative facility management solutions. Founded by Mr. Inadone Fall, a visionary leader with over 15 years of international experience."
                )}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(
                  "KFM offre une surveillance en temps réel des actifs grâce à la GMAO. Cela encourage la confiance, la croissance et des avantages durables pour nos parties prenantes.",
                  "KFM provides real-time asset monitoring through CMMS. This fosters trust, growth, and sustainable benefits for our stakeholders."
                )}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  t("Maintenance préventive et curative des équipements", "Preventive and corrective equipment maintenance"),
                  t("Gestion des installations techniques", "Technical facilities management"),
                  t("Gestion des espaces de travail", "Workspace management"),
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/a-propos"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow hover:-translate-y-0.5"
              >
                {t("En savoir plus", "Learn more")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ===== NOS VALEURS ===== */}
      <section className="relative py-28 overflow-hidden bg-muted/40">
        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Ce qui nous anime", "What drives us")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos ", "Our ")}<span className="text-gradient">{t("Valeurs", "Values")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t(
                "Elles définissent notre identité, notre culture et la manière dont nous interagissons avec nos clients et nos collaborateurs.",
                "They define our identity, our culture, and the way we interact with our clients and collaborators."
              )}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ILS NOUS FONT CONFIANCE (Clients) ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Confiance", "Trust")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Ils nous font ", "They trust ")}<span className="text-gradient">{t("confiance", "us")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t(
                "KFM intervient pour des villas haut de gamme, des immeubles résidentiels, des bâtiments commerciaux, des institutions et des industries aux Émirats.",
                "KFM serves high-end villas, residential buildings, commercial buildings, institutions and industries in the UAE."
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((client, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex h-28 items-center justify-center rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-card-hover"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOS PARTENAIRES ===== */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Partenaires", "Partners")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos ", "Our ")}<span className="text-gradient">{t("Partenaires", "Partners")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
            {partnerLogos.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex h-28 items-center justify-center rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-card-hover"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0">
              <img src={ctaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-primary/88" />
            </div>
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              {t("Prêt à transformer vos espaces ?", "Ready to transform your spaces?")}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t(
                "Notre équipe est prête à vous accompagner pour vos projets techniques et de maintenance aux Émirats.",
                "Our team is ready to support you with your technical and maintenance projects in the UAE."
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
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
