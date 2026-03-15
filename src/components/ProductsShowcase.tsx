import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Star } from "lucide-react";

import hvacUnit from "@/assets/products/hvac-unit.webp";
import ledPanel from "@/assets/products/led-panel.webp";
import electricalPanel from "@/assets/products/electrical-panel.webp";
import smartThermostat from "@/assets/products/smart-thermostat.webp";
import vrfSystem from "@/assets/products/vrf-system.webp";
import ledDownlight from "@/assets/products/led-downlight.webp";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const ProductsShowcase = () => {
  const { t } = useLanguage();

  const products = [
    {
      img: hvacUnit,
      name: t("Split AC Unit", "Split AC Unit"),
      partner: "Takyeef Factory",
      partnerUrl: "https://www.takyeeffactory.com/",
      desc: t(
        "Unité murale haute performance, idéale pour les résidences et bureaux aux EAU.",
        "High-performance wall unit, ideal for residences and offices in the UAE."
      ),
      badge: t("Populaire", "Popular"),
    },
    {
      img: vrfSystem,
      name: t("Système VRF/VRV", "VRF/VRV System"),
      partner: "Takyeef Factory",
      partnerUrl: "https://www.takyeeffactory.com/",
      desc: t(
        "Système de climatisation centralisé pour grands bâtiments et complexes commerciaux.",
        "Centralized air conditioning system for large buildings and commercial complexes."
      ),
      badge: t("Pro", "Pro"),
    },
    {
      img: ledPanel,
      name: t("Panneau LED Encastré", "Recessed LED Panel"),
      partner: "Senben Lighting",
      partnerUrl: "https://www.senbenlighting.com/",
      desc: t(
        "Panneau LED professionnel pour faux plafonds, éclairage uniforme et économique.",
        "Professional LED panel for false ceilings, uniform and economical lighting."
      ),
      badge: "Energy A+",
    },
    {
      img: ledDownlight,
      name: t("Downlight LED", "LED Downlight"),
      partner: "MK Lights",
      partnerUrl: "https://www.mklights.com/",
      desc: t(
        "Spot encastré haute efficacité pour éclairage architectural et commercial.",
        "High-efficiency recessed spotlight for architectural and commercial lighting."
      ),
      badge: null,
    },
    {
      img: electricalPanel,
      name: t("Tableau Électrique DB", "Distribution Board"),
      partner: "Universal RBM",
      partnerUrl: "https://universal-rbm.com/",
      desc: t(
        "Tableau de distribution avec disjoncteurs MCB, conforme aux normes UAE.",
        "Distribution board with MCB breakers, compliant with UAE standards."
      ),
      badge: t("Certifié", "Certified"),
    },
    {
      img: smartThermostat,
      name: t("Thermostat Intelligent", "Smart Thermostat"),
      partner: "Takyeef Factory",
      partnerUrl: "https://www.takyeeffactory.com/",
      desc: t(
        "Thermostat digital connecté pour un contrôle précis de la température et des économies d'énergie.",
        "Connected digital thermostat for precise temperature control and energy savings."
      ),
      badge: "Smart",
    },
  ];

  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {t("Équipements", "Equipment")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            {t("Produits ", "Products from our ")}<span className="text-gradient">{t("Partenaires", "Partners")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t(
              "Nous installons et maintenons des équipements de qualité professionnelle provenant de nos partenaires de confiance.",
              "We install and maintain professional quality equipment from our trusted partners."
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group card-modern overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {product.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold leading-tight">{product.name}</h3>
                  <div className="flex gap-0.5 text-kfm-gold flex-shrink-0">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
                <a
                  href={product.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-accent"
                >
                  {product.partner}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
