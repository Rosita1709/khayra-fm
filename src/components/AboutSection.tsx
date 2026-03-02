import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.webp";

const pillars = [
  { title: "Prévention", desc: "Plans de maintenance structurés pour prolonger la durée de vie des équipements." },
  { title: "Performance", desc: "Optimisation des systèmes techniques pour un fonctionnement fiable et efficace." },
  { title: "Transparence", desc: "Reporting clair, suivi des interventions, communication structurée." },
  { title: "Sécurité", desc: "Respect strict des réglementations locales et standards techniques UAE." },
];

const AboutSection = () => {
  return (
    <section id="à-propos" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutBg}
                alt="Équipe KFM en intervention sur un toit à Abu Dhabi"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl glow bg-primary p-6 font-display">
              <div className="text-3xl font-bold text-primary-foreground">Abu Dhabi</div>
              <div className="text-sm text-primary-foreground/80">Émirats Arabes Unis</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Qui sommes-nous</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              L'excellence au service de vos{" "}
              <span className="text-gradient">bâtiments</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              KFM – Khayra Facilities Management est une société spécialisée en Facility Management 
              basée à Abu Dhabi. Nous accompagnons les propriétaires d'actifs immobiliers, les entreprises, 
              les industries et les résidences haut de gamme dans la gestion, la maintenance et l'optimisation 
              technique de leurs bâtiments.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Chez KFM, le Facility Management ne se limite pas à l'entretien. Il s'agit d'une approche 
              globale visant à garantir la performance, la sécurité et la durabilité des infrastructures.
            </p>

            <h3 className="mt-8 font-display text-lg font-semibold text-foreground">Notre Approche</h3>
            <div className="mt-4 grid grid-cols-2 gap-6">
              {pillars.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/40 pl-4">
                  <div className="font-display font-semibold">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
