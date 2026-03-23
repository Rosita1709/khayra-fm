import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import real1 from "@/assets/realisation-1.jpg";
import real2 from "@/assets/realisation-2.jpg";
import real3 from "@/assets/realisation-3.jpg";
import real4 from "@/assets/realisation-4.jpg";
import sandwichPanel from "@/assets/projects/sandwich-panel-1.jpg";

const RealisationsSection = () => {
  const { t } = useLanguage();

  const realisations = [
    {
      img: sandwichPanel,
      title: t("Installation Sandwich Panel", "Sandwich Panel Installation"),
      location: "Abu Dhabi",
      category: t("Travaux Civils", "Civil Works"),
      result: t("Livré avec succès", "Successfully delivered"),
    },
    {
      img: real1,
      title: t("Maintenance HVAC — Complexe Résidentiel", "HVAC Maintenance — Residential Complex"),
      location: "Al Reem Island",
      category: t("HVAC & Climatisation", "HVAC & Air Conditioning"),
      result: t("Économie de 28%", "28% savings"),
    },
    {
      img: real2,
      title: t("Rénovation Villa Saadiyat", "Saadiyat Villa Renovation"),
      location: "Saadiyat Island",
      category: t("Design Intérieur", "Interior Design"),
      result: t("Livré en 4 mois", "Delivered in 4 months"),
    },
    {
      img: real3,
      title: t("Mise aux Normes MEP", "MEP Compliance Upgrade"),
      location: "Abu Dhabi",
      category: t("Électricité & Plomberie", "Electrical & Plumbing"),
      result: t("Conformité 100%", "100% compliance"),
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
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Portfolio
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              {t("Nos ", "Our ")}
              <span className="text-gradient">{t("Réalisations", "Projects")}</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {t(
                "Des projets concrets qui illustrent notre savoir-faire à Abu Dhabi et aux Émirats.",
                "Concrete projects showcasing our expertise in Abu Dhabi and the UAE."
              )}
            </p>
          </div>
          <Link
            to="/projets"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 self-start sm:self-auto"
          >
            {t("Voir tous les projets", "View all projects")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {realisations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-premium shine-effect"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-bold leading-tight line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 text-primary" />
                  {item.location}
                </div>
                <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                  <CheckCircle className="h-3 w-3" />
                  {item.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsSection;
