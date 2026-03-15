import { motion } from "framer-motion";
import { Building2, Home, Briefcase, Factory, GraduationCap, Landmark, ExternalLink } from "lucide-react";

import partner1 from "@/assets/partners/partner1.png";
import partner2 from "@/assets/partners/partner2.jpeg";
import partner3 from "@/assets/partners/partner3.jpg";
import economat from "@/assets/partners/economat.png";
import ambassade from "@/assets/partners/ambassade.jpeg";
import partner6 from "@/assets/partners/partner6.png";

const clientTypes = [
  { icon: Home, label: "Villas & résidences haut de gamme", sub: "Palm Jumeira, Saadiyat Beach, Al Reem Island…" },
  { icon: Building2, label: "Immeubles résidentiels", sub: "Compounds & complexes résidentiels" },
  { icon: Briefcase, label: "Bâtiments commerciaux", sub: "Bureaux & espaces professionnels" },
  { icon: Factory, label: "Industries", sub: "Sites techniques & environnements sensibles" },
  { icon: Landmark, label: "Institutions", sub: "Ambassades & organisations officielles" },
  { icon: GraduationCap, label: "Éducation", sub: "Établissements scolaires & formations" },
];

const clientLinks = [
  { name: "LLM Education", url: "https://llm.education/en/" },
  { name: "MBDA Systems", url: "https://www.mbda-systems.com/" },
  { name: "Ambassade de France (EAU)", url: "https://ae.diplomatie.gouv.fr/fr" },
  { name: "Ambassade du Sénégal", url: "http://ae-senegalembassy.com/" },
  { name: "Économat des Armées", url: "https://www.economat-armees.com" },
  { name: "Huda Beauty", url: "https://hudabeauty.com/en-ae" },
];

const partnerLinks = [
  { name: "Takyeef Factory", url: "https://www.takyeeffactory.com/" },
  { name: "Senben Lighting", url: "https://www.senbenlighting.com/" },
  { name: "Universal RBM", url: "https://universal-rbm.com/" },
  { name: "MK Lights", url: "https://www.mklights.com/" },
];

const partnerLogos = [
  { src: partner1, name: "Partenaire 1" },
  { src: partner2, name: "Partenaire 2" },
  { src: partner3, name: "Partenaire 3" },
  { src: economat, name: "Économat des Armées" },
  { src: ambassade, name: "Ambassade de France" },
  { src: partner6, name: "Partenaire 6" },
];

const ClientsSection = () => {
  return (
    <section id="projets" className="relative py-32">
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
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
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

        {/* Client references */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3 className="font-display text-xl font-semibold mb-6">Ils nous font confiance</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clientLinks.map((client, i) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md group"
              >
                <span className="text-sm font-medium">{client.name}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Confiance</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Nos <span className="text-gradient">Partenaires</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Nous travaillons en étroite collaboration avec un réseau de partenaires
              de confiance qui partagent notre engagement envers l'excellence.
            </p>
          </div>

          {/* Partner logos */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 mb-10">
            {partnerLogos.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex h-28 items-center justify-center rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain transition-all"
                />
              </motion.div>
            ))}
          </div>

          {/* Partner links */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerLinks.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md group"
              >
                <span className="text-sm font-medium">{partner.name}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
