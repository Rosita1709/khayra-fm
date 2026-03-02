import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-new.jpg";
import { CheckCircle, TrendingUp, PiggyBank, Heart, Rocket } from "lucide-react";
import aboutBg from "@/assets/about-bg.webp";
import visionBg from "@/assets/vision-bg.jpg";
import valuesBg from "@/assets/values-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

import partner1 from "@/assets/partners/partner1.png";
import partner2 from "@/assets/partners/partner2.jpeg";
import partner3 from "@/assets/partners/partner3.jpg";
import economat from "@/assets/partners/economat.png";
import ambassade from "@/assets/partners/ambassade.jpeg";
import partner6 from "@/assets/partners/partner6.png";

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

const partnerLogos = [
  { src: partner1, name: "Partenaire" },
  { src: partner2, name: "Partenaire" },
  { src: partner3, name: "Partenaire" },
  { src: economat, name: "Économat des Armées" },
  { src: ambassade, name: "Ambassade de France" },
  { src: partner6, name: "Partenaire" },
];

const values = [
  { icon: TrendingUp, title: "Retour sur Investissement", desc: "Optimisation de la valeur de vos actifs immobiliers." },
  { icon: PiggyBank, title: "Réduction des coûts", desc: "Maintenance préventive et optimisation énergétique." },
  { icon: Heart, title: "Satisfaction client", desc: "Service d'excellence et écoute attentive." },
  { icon: Rocket, title: "Productivité", desc: "Environnements de travail optimisés." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary"
            >
              Facility Management — Abu Dhabi, UAE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
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
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Khayra FM propose des services de Facilities Management digitalisés avec une application 
              de GMAO et fournit des services et des solutions de qualité à une variété de clients 
              dans différents secteurs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="rounded-lg bg-primary px-8 py-4 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:glow hover:shadow-lg"
              >
                En savoir plus
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-border bg-card px-8 py-4 font-display text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:shadow-md"
              >
                Nous contacter
              </Link>
            </motion.div>
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
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={aboutBg} alt="Équipe KFM" className="h-[480px] w-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 rounded-xl glow bg-primary p-6 font-display shadow-xl"
              >
                <div className="text-3xl font-bold text-primary-foreground">GMAO</div>
                <div className="text-sm text-primary-foreground/80">Maintenance digitalisée</div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">À propos</span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Des professionnels qualifiés pour vos{" "}
                <span className="text-gradient">travaux</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                KFM est une entreprise spécialisée dans le facilities management, la création d'un 
                environnement de travail optimisé. Avec une solide expérience, elle offre des solutions 
                personnalisées et innovantes pour répondre aux besoins spécifiques de ses clients.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                KFM offre une surveillance en temps réel des actifs grâce à la GMAO. Cela encourage 
                la confiance, la croissance et des avantages durables pour nos parties prenantes.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Maintenance préventive et curative des équipements",
                  "Gestion des installations techniques",
                  "Gestion des espaces de travail",
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
                className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow"
              >
                En savoir plus →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NOTRE VISION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={visionBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container relative mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img src={visionBg} alt="Technicien HVAC" className="h-[400px] w-full object-cover" />
            </motion.div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Notre Vision</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Excellence <span className="text-gradient">opérationnelle</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                L'objectif principal de KFM est d'assurer le bon fonctionnement des installations de ses clients, 
                en veillant à ce qu'elles soient entretenues de manière optimale, sécurisées et conformes aux 
                normes réglementaires.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Que ce soit pour des entreprises, des institutions publiques, des centres commerciaux ou d'autres 
                organisations, KFM est un partenaire fiable pour la gestion complète des installations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NOS VALEURS ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={valuesBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Ce qui nous anime</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Nos <span className="text-gradient">Valeurs</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Elles définissent notre identité, notre culture et la manière dont nous interagissons 
              avec nos clients et nos collaborateurs.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOS PARTENAIRES ===== */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Confiance</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Nos <span className="text-gradient">Partenaires</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Nous travaillons en étroite collaboration avec un réseau de partenaires de confiance 
              qui partagent notre engagement envers l'excellence en Facility Management.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((partner, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex h-28 items-center justify-center rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
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
              <div className="absolute inset-0 bg-primary/80" />
            </div>
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              Prêt à transformer vos espaces ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Notre équipe est prête à vous accompagner pour vos projets techniques et de maintenance aux Émirats.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-background px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:shadow-lg"
              >
                Nous contacter
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

export default Index;
