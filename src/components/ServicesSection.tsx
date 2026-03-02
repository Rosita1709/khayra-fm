import { motion } from "framer-motion";
import { Building2, Wrench, Shield, Leaf, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Gestion Immobilière",
    description: "Administration complète de vos biens immobiliers avec suivi en temps réel et optimisation continue.",
  },
  {
    icon: Wrench,
    title: "Maintenance Technique",
    description: "Maintenance préventive et corrective assurée par nos experts certifiés, disponibles 24h/24.",
  },
  {
    icon: Shield,
    title: "Sécurité & Sûreté",
    description: "Systèmes de sécurité intégrés et surveillance avancée pour protéger vos installations.",
  },
  {
    icon: Leaf,
    title: "Solutions Vertes",
    description: "Stratégies de développement durable et optimisation énergétique pour un impact positif.",
  },
  {
    icon: Zap,
    title: "Smart Building",
    description: "Intégration de technologies IoT et automatisation intelligente de vos bâtiments.",
  },
  {
    icon: Users,
    title: "Services aux Occupants",
    description: "Conciergerie, accueil et services personnalisés pour le bien-être de vos collaborateurs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-kfm-teal/5 blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Ce que nous faisons</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Des solutions complètes et sur mesure pour la gestion optimale de vos espaces professionnels.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
