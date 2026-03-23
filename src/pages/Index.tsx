import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-new.jpg";
import { CheckCircle, TrendingUp, PiggyBank, Heart, Rocket, ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import aboutBg from "@/assets/about-bg.webp";
import visionBg from "@/assets/vision-bg.jpg";
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

const Index = () => {
  const { t } = useLanguage();

  const values = [
    { icon: TrendingUp, title: t("Retour sur Investissement", "Return on Investment"), desc: t("Optimisation de la valeur de vos actifs immobiliers.", "Optimizing the value of your real estate assets.") },
    { icon: PiggyBank, title: t("Réduction des coûts", "Cost Reduction"), desc: t("Maintenance préventive et optimisation énergétique.", "Preventive maintenance and energy optimization.") },
    { icon: Heart, title: t("Satisfaction client", "Client Satisfaction"), desc: t("Service d'excellence et écoute attentive.", "Service excellence and attentive listening.") },
    { icon: Rocket, title: t("Productivité", "Productivity"), desc: t("Environnements de travail optimisés.", "Optimized work environments.") },
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
              Facility Management — Abu Dhabi, UAE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl text-background"
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-background/30 flex justify-center pt-2">
            <motion.div
              className="h-2 w-1 rounded-full bg-background/50"
              animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 font-display shadow-premium"
              >
                <div className="text-3xl font-bold text-primary-foreground">GMAO</div>
                <div className="text-sm text-primary-foreground/80">{t("Maintenance digitalisée", "Digitalized maintenance")}</div>
              </motion.div>
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border-2 border-primary/20" />
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("À propos", "About")}</span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                {t("Des professionnels qualifiés pour vos ", "Qualified professionals for your ")}
                <span className="text-gradient">{t("travaux", "projects")}</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {t(
                  "KFM est une entreprise spécialisée dans le facilities management, la création d'un environnement de travail optimisé. Avec une solide expérience, elle offre des solutions personnalisées et innovantes pour répondre aux besoins spécifiques de ses clients.",
                  "KFM is a company specializing in facility management, creating optimized work environments. With solid experience, it offers personalized and innovative solutions to meet the specific needs of its clients."
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


      {/* ===== NOTRE VISION ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={visionBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/88" />
        </div>
        <div className="container relative mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl shadow-premium">
                <motion.img
                  src={visionBg}
                  alt={t("Technicien HVAC", "HVAC Technician")}
                  className="h-[420px] w-full object-cover"
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
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t("Notre Vision", "Our Vision")}</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                {t("Excellence ", "Operational ")}<span className="text-gradient">{t("opérationnelle", "Excellence")}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t(
                  "L'objectif principal de KFM est d'assurer le bon fonctionnement des installations de ses clients, en veillant à ce qu'elles soient entretenues de manière optimale, sécurisées et conformes aux normes réglementaires.",
                  "KFM's main objective is to ensure the smooth operation of its clients' facilities, ensuring they are optimally maintained, secure, and compliant with regulatory standards."
                )}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t(
                  "Que ce soit pour des entreprises, des institutions publiques, des centres commerciaux ou d'autres organisations, KFM est un partenaire fiable pour la gestion complète des installations.",
                  "Whether for businesses, public institutions, shopping centers, or other organizations, KFM is a reliable partner for complete facility management."
                )}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { num: "ISO", label: t("Normes certifiées", "Certified standards") },
                  { num: "GMAO", label: t("Suivi digital", "Digital tracking") },
                ].map((item) => (
                  <div key={item.num} className="rounded-xl border border-border bg-card p-4">
                    <div className="font-display text-lg font-bold text-primary">{item.num}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
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
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
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
                WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
