import { motion } from "framer-motion";
import servicesBg from "@/assets/services-bg.webp";

const AboutSection = () => {
  return (
    <section id="à-propos" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={servicesBg}
                alt="Expert KFM en maintenance technique"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl glow bg-primary p-6 font-display">
              <div className="text-3xl font-bold text-primary-foreground">15+</div>
              <div className="text-sm text-primary-foreground/80">Années d'expertise</div>
            </div>
          </motion.div>

          {/* Content */}
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
              Chez KFM, nous croyons que chaque espace mérite une attention exceptionnelle. 
              Notre équipe de professionnels passionnés combine expertise technique et innovation 
              pour offrir des services de facility management qui dépassent vos attentes.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              De la maintenance prédictive à la gestion énergétique intelligente, nous transformons 
              la façon dont les entreprises interagissent avec leurs espaces de travail.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { title: "Innovation", desc: "Technologies de pointe" },
                { title: "Fiabilité", desc: "Engagement sans faille" },
                { title: "Durabilité", desc: "Impact environnemental" },
                { title: "Proximité", desc: "Écoute et réactivité" },
              ].map((item) => (
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
