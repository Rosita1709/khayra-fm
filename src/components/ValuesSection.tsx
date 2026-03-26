import { motion } from "framer-motion";
import { TrendingUp, PiggyBank, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Retour sur Investissement",
    desc: "Nous optimisons vos coûts d'exploitation pour maximiser la valeur de vos actifs immobiliers.",
  },
  {
    icon: PiggyBank,
    title: "Réduction des coûts",
    desc: "Grâce à nos solutions de maintenance préventive et d'optimisation énergétique.",
  },
  {
    icon: Heart,
    title: "Satisfaction client",
    desc: "Notre priorité absolue : offrir un service d'excellence et une écoute attentive à chaque client.",
  },
  {
    icon: Rocket,
    title: "Augmentation de la productivité",
    desc: "Des environnements de travail optimisés pour une meilleure performance de vos équipes.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Ce qui nous anime</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Nos <span className="text-gradient">Valeurs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Chez nous, les valeurs qui nous animent sont au cœur de tout ce que nous faisons. 
            Elles définissent notre identité, notre culture et la manière dont nous interagissons 
            avec nos clients et nos collaborateurs.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
