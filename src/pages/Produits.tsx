import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import productHvac from "@/assets/product-hvac.webp";
import productLighting from "@/assets/product-lighting.webp";
import productMep from "@/assets/product-mep.webp";
import productInterior from "@/assets/product-interior.webp";
import productCivil from "@/assets/product-civil.webp";
import productEnergy from "@/assets/product-energy.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const products = [
  {
    img: productHvac,
    title: "HVAC & Climatisation",
    desc: "Split Units, FCU, systèmes VRF/VRV, gainables, AHU, thermostats intelligents. Installation, maintenance et optimisation adaptées au climat des EAU.",
    features: ["Installation & Mise en Service", "Maintenance Préventive & Corrective", "Duct Cleaning & Qualité de l'Air", "Contrats Annuels (AMC)"],
  },
  {
    img: productMep,
    title: "Électricité & Plomberie (MEP)",
    desc: "Gestion complète des systèmes électriques et de plomberie : tableaux, éclairage, réseaux d'eau, drainage et détection de fuites.",
    features: ["Tableaux électriques (DB)", "Éclairage intérieur & extérieur", "Réseaux d'alimentation & drainage", "Diagnostic & dépannage rapide"],
  },
  {
    img: productCivil,
    title: "Travaux Civils & Rénovation",
    desc: "Rénovation complète de villas, appartements, espaces commerciaux. Maçonnerie, étanchéité, aménagements extérieurs.",
    features: ["Rénovation villas & appartements", "Maçonnerie & structure", "Étanchéité & protection", "Aménagements extérieurs"],
  },
  {
    img: productInterior,
    title: "Design Intérieur & Fit-Out",
    desc: "Conception et réalisation d'espaces intérieurs haut de gamme. Du concept à la livraison clé en main, résidentiel et commercial.",
    features: ["Visualisations 3D", "Cloisons & faux plafonds", "Menuiserie sur mesure", "Finitions haut de gamme"],
  },
  {
    img: productLighting,
    title: "Éclairage & Solutions Smart",
    desc: "Conversion LED, capteurs intelligents, systèmes d'éclairage d'urgence. Solutions modernes pour optimiser confort et efficacité.",
    features: ["Conversion LED", "Capteurs intelligents", "Éclairage d'urgence", "Automatisation"],
  },
  {
    img: productEnergy,
    title: "Energy Saving & Optimisation",
    desc: "Audit énergétique complet, optimisation HVAC, modernisation des installations pour réduire vos coûts et votre empreinte.",
    features: ["Audit & analyse énergétique", "Optimisation HVAC", "Isolation thermique", "Réduction des factures"],
  },
];

const Produits = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <section className="relative py-32 bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            Nos <span className="text-gradient">Produits</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Des solutions techniques complètes pour la gestion optimale de vos installations aux Émirats Arabes Unis.
          </motion.p>
        </div>
      </section>

      {/* Products grid - alternating layout */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {products.map((product, i) => (
            <div key={product.title} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`overflow-hidden rounded-2xl shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <motion.img
                  src={product.img}
                  alt={product.title}
                  className="h-[400px] w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{product.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{product.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {product.features.map((f, j) => (
                    <motion.li
                      key={f}
                      custom={j}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </motion.li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow"
                >
                  Demander un devis →
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Produits;
