import { motion } from "framer-motion";
import { Wind, Zap, Wrench, Paintbrush, Lightbulb, SprayCan, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import productHvac from "@/assets/product-hvac.webp";
import productMep from "@/assets/product-mep.webp";
import productCivil from "@/assets/product-civil.webp";
import productInterior from "@/assets/product-interior.webp";
import productEnergy from "@/assets/product-energy.webp";
import productCleaning from "@/assets/product-cleaning.jpg";

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
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/3 blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t("Notre expertise", "Our expertise")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Nos ", "Our ")}<span className="text-gradient">{t("Services", "Services")}</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {t(
                "Des solutions complètes et sur mesure pour la gestion optimale de vos installations aux Émirats Arabes Unis.",
                "Complete and tailored solutions for optimal management of your facilities in the United Arab Emirates."
              )}
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3 font-display text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 self-start sm:self-auto"
          >
            {t("Tous nos services", "All our services")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* First featured card - large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link
            to={`/services/${services[0].slug}`}
            className="group card-premium flex flex-col lg:flex-row"
          >
            <div className="relative lg:w-3/5 h-64 lg:h-80 overflow-hidden">
              <img
                src={services[0].img}
                alt={t(services[0].titleFr, services[0].titleEn)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/10 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                {(() => { const Icon = services[0].icon; return <Icon className="h-6 w-6" />; })()}
              </div>
            </div>
            <div className="lg:w-2/5 p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {services[0].highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-primary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-lg font-bold">
                {t(services[0].titleFr, services[0].titleEn)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(services[0].shortFr, services[0].shortEn)}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                {t("Découvrir", "Discover")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining cards in grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(1).map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col h-full card-premium shine-effect"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.img}
                    alt={t(service.titleFr, service.titleEn)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display text-base font-bold leading-tight">
                    {t(service.titleFr, service.titleEn)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {t(service.shortFr, service.shortEn)}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-primary/8 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-semibold text-primary">
                    {t("En savoir plus", "Learn more")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-2" />
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
