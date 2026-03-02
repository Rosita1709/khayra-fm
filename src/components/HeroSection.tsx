import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.6 }} />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-kfm-teal/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-kfm-green/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative mx-auto px-6 pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary">
              Facility Management d'Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Gérer vos{" "}
            <span className="text-gradient">espaces</span>
            <br />
            avec intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            KFM transforme la gestion de vos installations en une expérience fluide, 
            innovante et performante. Votre bâtiment mérite le meilleur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="group relative overflow-hidden rounded-lg bg-primary px-8 py-4 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:glow"
            >
              <span className="relative z-10">Découvrir nos services</span>
              <div className="absolute inset-0 bg-accent/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#à-propos"
              className="rounded-lg border border-border bg-card/50 px-8 py-4 font-display text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:bg-card"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "500+", label: "Projets Livrés" },
            { value: "98%", label: "Satisfaction Client" },
            { value: "24/7", label: "Support Continu" },
            { value: "15+", label: "Ans d'Expérience" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl px-6 py-5 text-center">
              <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-xs tracking-wide text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
