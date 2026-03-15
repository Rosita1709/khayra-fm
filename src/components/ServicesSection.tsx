import { motion } from "framer-motion";
import { Wind, Zap, Wrench, Paintbrush, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import productHvac from "@/assets/product-hvac.webp";
import productMep from "@/assets/product-mep.webp";
import productCivil from "@/assets/product-civil.webp";
import productInterior from "@/assets/product-interior.webp";
import productEnergy from "@/assets/product-energy.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Wind,
    slug: "hvac",
    img: productHvac,
    titleFr: "HVAC & Climatisation",
    titleEn: "HVAC & Air Conditioning",
    shortFr: "Solutions complètes en chauffage, ventilation et climatisation adaptées au climat des EAU.",
    shortEn: "Complete heating, ventilation and air conditioning solutions adapted to the UAE climate.",
    highlights: ["Split & VRF/VRV", "Maintenance AMC", "Duct Cleaning"],
  },
  {
    icon: Zap,
    slug: "mep",
    img: productMep,
    titleFr: "Électricité & Plomberie",
    titleEn: "Electrical & Plumbing",
    shortFr: "Installation et maintenance des systèmes électriques et de plomberie.",
    shortEn: "Installation and maintenance of electrical and plumbing systems.",
    highlights: ["DB & Circuits", "Leak Detection", "Safety Compliance"],
  },
  {
    icon: Wrench,
    slug: "travaux-civils",
    img: productCivil,
    titleFr: "Travaux Civils & Rénovation",
    titleEn: "Civil Works & Renovation",
    shortFr: "Rénovation de villas, immeubles résidentiels et espaces commerciaux.",
    shortEn: "Renovation of villas, residential buildings and commercial spaces.",
    highlights: ["Villa Renovation", "Waterproofing", "Landscaping"],
  },
  {
    icon: Paintbrush,
    slug: "design-interieur",
    img: productInterior,
    titleFr: "Design Intérieur & Fit-Out",
    titleEn: "Interior Design & Fit-Out",
    shortFr: "Conception et réalisation d'espaces intérieurs alliant esthétique et fonctionnalité.",
    shortEn: "Design and creation of interior spaces combining aesthetics and functionality.",
    highlights: ["3D Visualization", "Custom Joinery", "Turnkey"],
  },
  {
    icon: Lightbulb,
    slug: "energy-saving",
    img: productEnergy,
    titleFr: "Energy Saving & Optimisation",
    titleEn: "Energy Efficiency Solutions",
    shortFr: "Réduction des coûts énergétiques et amélioration des performances.",
    shortEn: "Energy cost reduction and performance improvement.",
    highlights: ["LED Conversion", "Energy Audit", "Smart Controls"],
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-28">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {t("Notre expertise", "Our expertise")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            {t("Nos ", "Our ")}<span className="text-gradient">{t("Services", "Services")}</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            {t(
              "Des solutions complètes et sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.",
              "Complete and tailored solutions for optimal management of your facilities in the United Arab Emirates."
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col h-full card-modern overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={t(service.titleFr, service.titleEn)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display text-lg font-bold">
                    {t(service.titleFr, service.titleEn)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(service.shortFr, service.shortEn)}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                    {t("En savoir plus", "Learn more")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
