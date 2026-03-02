import { motion } from "framer-motion";
import { Building2, Home, Briefcase, Factory, GraduationCap, Landmark } from "lucide-react";

const clientTypes = [
  { icon: Home, label: "Villas & résidences haut de gamme", sub: "Palm Jumeira, Saadiyat Beach, Al Reem Island…" },
  { icon: Building2, label: "Immeubles résidentiels", sub: "Compounds & complexes résidentiels" },
  { icon: Briefcase, label: "Bâtiments commerciaux", sub: "Bureaux & espaces professionnels" },
  { icon: Factory, label: "Industries", sub: "Sites techniques & environnements sensibles" },
  { icon: Landmark, label: "Institutions", sub: "Ambassades & organisations officielles" },
  { icon: GraduationCap, label: "Éducation", sub: "Établissements scolaires & formations" },
];

const clients = [
  { name: "LLM Education", url: "https://llm.education/en/" },
  { name: "MBDA Systems", url: "https://www.mbda-systems.com/" },
  { name: "Ambassade de France", url: "https://ae.diplomatie.gouv.fr/fr" },
  { name: "Ambassade du Sénégal", url: "http://ae-senegalembassy.com/" },
  { name: "Économat des Armées", url: "https://www.economat-armees.com" },
  { name: "Huda Beauty", url: "https://hudabeauty.com/en-ae" },
];

const partners = [
  { name: "Takyeef Factory", url: "https://www.takyeeffactory.com/" },
  { name: "Senben Lighting", url: "https://www.senbenlighting.com/" },
  { name: "Universal RBM", url: "https://universal-rbm.com/" },
  { name: "MK Lights", url: "https://www.mklights.com/" },
];

const ClientsSection = () => {
  return (
    <section id="projets" className="relative py-32">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-kfm-green/5 blur-[150px]" />

      <div className="container mx-auto px-6">
        {/* Client types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Nos interventions</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            KFM intervient pour un large spectre de clients aux Émirats Arabes Unis.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map((type, i) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <type.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold">{type.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{type.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="mb-8 font-display text-2xl font-bold">Ils nous font confiance</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
              >
                {client.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3 className="mb-8 font-display text-2xl font-bold">Nos Partenaires</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
