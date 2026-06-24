import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-new.jpg";
import heroVideoAsset from "@/assets/hero-kfm.mp4.asset.json";
import { TrendingUp, PiggyBank, Heart, Rocket, ArrowRight, Shield, Clock, Headphones, Award } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useRef } from "react";

import ctaBg from "@/assets/cta-bg.webp";

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
import SEO from "@/components/SEO";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
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
        {count}
        {suffix}
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
    <CountUpStat end={20} suffix="+" label={t("Années", "Years")} />
    <div className="h-10 w-px bg-background/20 hidden md:block" />
    <div className="text-center">
      <div className="font-display text-3xl font-bold text-primary md:text-4xl">24/7</div>
      <div className="mt-2 text-sm tracking-wide text-background/60">{t("Support", "Support")}</div>
    </div>
  </motion.div>
);

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KFM - Khayra Facility Management',
  url: 'https://www.khayrafm.com',
  logo: 'https://www.khayrafm.com/kfm-logo.jpeg',
  telephone: '+971508054220',
  email: 'contact@khayrafm.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10th Floor, Corniche Building, Al Hisn',
    addressLocality: 'Abu Dhabi',
    addressCountry: 'AE'
  },
  areaServed: ['AE'],
  description: 'KFM, expert en Facility Management a Abu Dhabi. HVAC, renovation, travaux civils et services techniques.',
  sameAs: ['https://www.linkedin.com/company/kfm']
};

const Index = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const values = [
    {
      icon: TrendingUp,
      title: t("Excellence Opérationnelle", "Operational Excellence"),
      desc: t("Les plus hauts standards dans chaque intervention.", "The highest standards in every task."),
    },
    {
      icon: PiggyBank,
      title: t("Réduction des coûts", "Cost Reduction"),
      desc: t("Maintenance préventive et optimisation énergétique.", "Preventive maintenance and energy optimization."),
    },
    {
      icon: Heart,
      title: t("Engagement Client", "Customer Commitment"),
      desc: t(
        "Relations durables basées sur la confiance et la réactivité.",
        "Long-term relationships based on trust and responsiveness.",
      ),
    },
    {
      icon: Rocket,
      title: t("Innovation", "Innovation"),
      desc: t(
        "Technologies intelligentes pour améliorer les performances.",
        "Smart technologies to improve performance.",
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Facility Management Senegal | KFM"
        description="KFM, votre partenaire en Facility Management au Senegal. Nettoyage, securite, maintenance et services aux entreprises."
        keywords="facility management senegal, facility management dakar, KFM, Khayra"
        url="https://khayrafm.com"
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
/>
      {/* ===== HERO with parallax video ===== */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <video
            src={heroVideoAsset.url}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster={heroImg}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/25" />
        </motion.div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full blur-[180px]"
          style={{ background: "hsl(var(--primary) / 0.12)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full blur-[150px]"
          style={{ background: "hsl(var(--primary) / 0.08)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="container relative mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 inline-block rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-xs font-semibold tracking-widest uppercase text-primary backdrop-blur-sm"
            >
              Facility Management, Abu Dhabi, UAE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl text-background"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Khayra{" "}
              </motion.span>
              <motion.span
                className="text-gradient"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
              >
                Facility
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Management
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-background/75"
            >
              {t(
                "Khayra FM propose des services de Facilities Management digitalisés avec une application de GMAO et fournit des services et des solutions de qualité à une variété de clients dans différents secteurs.",
                "Khayra FM provides digitalized Facility Management services with a CMMS application and delivers quality services and solutions to a variety of clients across different sectors.",
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
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

            {/* Stats row */}
            <StatsCounter t={t} />
          </div>
        </motion.div>
      </section>

      {/* ===== POURQUOI CHOISIR KFM ===== */}
      <section className="py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Votre partenaire de confiance", "Your trusted partner")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Pourquoi choisir ", "Why choose ")}
              <span className="text-gradient">KFM</span> ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t(
                "Plus de 20 ans d'expérience, des équipes certifiées et une approche digitalisée pour une gestion optimale de vos installations aux Émirats.",
                "Over 20 years of experience, certified teams and a digitalized approach for optimal management of your facilities in the UAE.",
              )}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Award,
                title: t("20+ ans d'expérience", "20+ years of experience"),
                desc: t("Un savoir-faire éprouvé dans le facility management à l'international.", "Proven expertise in facility management internationally."),
              },
              {
                icon: Shield,
                title: t("Qualité garantie", "Guaranteed quality"),
                desc: t("Techniciens certifiés, équipements professionnels et normes strictes.", "Certified technicians, professional equipment and strict standards."),
              },
              {
                icon: Clock,
                title: t("Réactivité 24/7", "24/7 Responsiveness"),
                desc: t("Intervention rapide et support continu pour vos urgences.", "Fast intervention and continuous support for your emergencies."),
              },
              {
                icon: Headphones,
                title: t("Suivi digitalisé", "Digitalized tracking"),
                desc: t("GMAO intégrée pour un suivi en temps réel de toutes les interventions.", "Integrated CMMS for real-time tracking of all interventions."),
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <motion.div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/a-propos"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow hover:-translate-y-0.5"
            >
              {t("Découvrir KFM", "Discover KFM")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== NOS VALEURS ===== */}
      <section className="relative py-28 overflow-hidden bg-muted/40">
        <motion.div
          className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full blur-[150px]"
          style={{ background: "hsl(var(--primary) / 0.06)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Ce qui nous anime", "What drives us")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos ", "Our ")}
              <span className="text-gradient">{t("Valeurs", "Values")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t(
                "Elles définissent notre identité, notre culture et la manière dont nous interagissons avec nos clients et nos collaborateurs.",
                "They define our identity, our culture, and the way we interact with our clients and collaborators.",
              )}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <motion.div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                  whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.3 } }}
                >
                  <value.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ILS NOUS FONT CONFIANCE (Clients) ===== */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Confiance", "Trust")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Ils nous font ", "They trust ")}
              <span className="text-gradient">{t("confiance", "us")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t(
                "KFM intervient pour des villas haut de gamme, des immeubles résidentiels, des bâtiments commerciaux, des institutions et des industries aux Émirats.",
                "KFM serves high-end villas, residential buildings, commercial buildings, institutions and industries in the UAE.",
              )}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
          >
            {clientLogos.map((client, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25 } }}
                className="flex h-28 items-center justify-center rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-card-hover"
              >
                <img src={client.src} alt={client.name} className="max-h-16 max-w-full object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NOS PARTENAIRES ===== */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Partenaires", "Partners")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos ", "Our ")}
              <span className="text-gradient">{t("Partenaires", "Partners")}</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto"
          >
            {partnerLogos.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25 } }}
                className="flex h-28 items-center justify-center rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-card-hover"
              >
                <img src={partner.src} alt={partner.name} className="max-h-16 max-w-full object-contain" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0">
              <img src={ctaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-primary/88" />
            </div>
            <motion.div
              className="absolute top-0 left-0 h-full w-full"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent 60%)" }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative font-display text-3xl font-bold text-primary-foreground md:text-4xl"
            >
              {t("Prêt à transformer vos espaces ?", "Ready to transform your spaces?")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80"
            >
              {t(
                "Notre équipe est prête à vous accompagner pour vos projets techniques et de maintenance aux Émirats.",
                "Our team is ready to support you with your technical and maintenance projects in the UAE.",
              )}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mt-10 flex flex-wrap justify-center gap-4"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
