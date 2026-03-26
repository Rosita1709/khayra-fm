import { motion } from "framer-motion";
import { Building2, Home, Briefcase, Factory, Landmark, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import partner1 from "@/assets/partners/partner1.png";
import partner2 from "@/assets/partners/partner2.jpeg";
import partner3 from "@/assets/partners/partner3.jpg";
import economat from "@/assets/partners/economat.png";
import ambassade from "@/assets/partners/ambassade.jpeg";
import partner6 from "@/assets/partners/partner6.png";

import takyeef from "@/assets/partners/takyeef.png";
import senben from "@/assets/partners/senben.png";
import universalRbm from "@/assets/partners/universal-rbm.png";
import mklights from "@/assets/partners/mklights.webp";

const clientTypes = [
  { icon: Home, label: "Villas & résidences haut de gamme", labelEn: "High-end villas & residences", sub: "Palm Jumeira, Saadiyat Beach, Al Reem Island…" },
  { icon: Building2, label: "Immeubles résidentiels", labelEn: "Residential buildings", sub: "Compounds & complexes résidentiels" },
  { icon: Briefcase, label: "Bâtiments commerciaux", labelEn: "Commercial buildings", sub: "Bureaux & espaces professionnels" },
  { icon: Factory, label: "Industries", labelEn: "Industries", sub: "Sites techniques & environnements sensibles" },
  { icon: Landmark, label: "Institutions", labelEn: "Institutions", sub: "Ambassades & organisations officielles" },
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
  { name: "Takyeef Factory", url: "https://www.takyeeffactory.com/", logo: takyeef },
  { name: "Senben Lighting", url: "https://www.senbenlighting.com/", logo: senben },
  { name: "Universal RBM", url: "https://universal-rbm.com/", logo: universalRbm },
  { name: "MK Lights", url: "https://www.mklights.com/", logo: mklights },
];

const clientLogos = [
  { src: partner1, name: "LLM Education" },
  { src: partner2, name: "MBDA Systems" },
  { src: partner3, name: "Huda Beauty" },
  { src: economat, name: "Économat des Armées" },
  { src: ambassade, name: "Ambassade de France" },
  { src: partner6, name: "Ambassade du Sénégal" },
];

const ClientsSection = () => {
  const { t } = useLanguage();

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
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {t("Nos interventions", "Our interventions")}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            {t("Nos ", "Our ")}<span className="text-gradient">{t("Clients", "Clients")}</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            {t(
              "KFM intervient pour un large spectre de clients aux Émirats Arabes Unis.",
              "KFM serves a wide range of clients in the United Arab Emirates."
            )}
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
                <div className="font-display text-sm font-semibold">{t(type.label, type.labelEn)}</div>
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
          <h3 className="font-display text-lg font-semibold mb-6">
            {t("Ils nous font confiance", "They trust us")}
          </h3>

          {/* Client logos */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-6">
            {clientLogos.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex h-24 items-center justify-center rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>

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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Partenaires", "Partners")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos ", "Our ")}<span className="text-gradient">{t("Partenaires", "Partners")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
            {partnerLinks.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 max-w-full object-contain"
                />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">{partner.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
