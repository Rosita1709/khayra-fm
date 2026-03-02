import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

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
              Premium Facility Management — Abu Dhabi, UAE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Performance,{" "}
            <span className="text-gradient">sécurité</span>
            <br />
            & durabilité
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            KFM – Khayra Facilities Management accompagne les propriétaires d'actifs immobiliers, 
            entreprises et résidences haut de gamme dans la gestion, la maintenance et l'optimisation 
            technique de leurs bâtiments aux Émirats Arabes Unis.
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
              href="https://wa.me/971508054220"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 font-display text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:shadow-md"
            >
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "HVAC", label: "Climatisation" },
            { value: "MEP", label: "Électricité & Plomberie" },
            { value: "24/7", label: "Support Continu" },
            { value: "UAE", label: "Abu Dhabi & Émirats" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl px-6 py-5 text-center shadow-sm">
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
