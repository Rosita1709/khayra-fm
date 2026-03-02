import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutBg from "@/assets/about-bg.webp";
import heroImg from "@/assets/hero-light.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="container relative mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl font-bold md:text-6xl">
            À <span className="text-gradient">Propos</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Découvrez KFM – Khayra Facilities Management
          </motion.p>
        </div>
      </section>

      {/* About content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={aboutBg} alt="Équipe KFM" className="h-[500px] w-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                KFM – Khayra <span className="text-gradient">Facilities Management</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                KFM est une société spécialisée en Facility Management basée à Abu Dhabi, aux Émirats Arabes Unis. 
                Nous accompagnons les propriétaires d'actifs immobiliers, les entreprises, les industries, 
                les institutions et les résidences haut de gamme dans la gestion, la maintenance et l'optimisation 
                technique de leurs bâtiments.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                L'équipe d'experts de KFM est composée de professionnels qualifiés qui possèdent une expertise 
                approfondie dans leurs domaines respectifs. Ils travaillent en étroite collaboration avec les 
                clients pour comprendre leurs besoins et offrir des solutions sur mesure.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground font-medium text-foreground">
                Chez KFM, le Facility Management ne se limite pas à l'entretien. Il s'agit d'une approche 
                globale visant à garantir la performance, la sécurité et la durabilité des infrastructures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center font-display text-3xl font-bold md:text-4xl mb-12">
            Nos domaines d'<span className="text-gradient">expertise</span>
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "HVAC & Climatisation", items: ["Installation, maintenance, optimisation", "Amélioration de l'efficacité énergétique"] },
              { title: "MEP (Mechanical, Electrical & Plumbing)", items: ["Systèmes électriques, hydrauliques et mécaniques", "Bon fonctionnement des bâtiments"] },
              { title: "Travaux Civils & Rénovation", items: ["Modernisation d'espaces résidentiels et commerciaux", "Rénovation complète et finitions"] },
              { title: "Design Intérieur & Aménagement", items: ["Optimisation des espaces", "Solutions esthétiques et fonctionnelles"] },
              { title: "Energy Saving & Optimisation", items: ["Audit énergétique et réduction des consommations", "Durabilité des équipements"] },
            ].map((domain, i) => (
              <motion.div key={domain.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-semibold text-primary">{domain.title}</h3>
                <ul className="mt-4 space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 pillars */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center font-display text-3xl font-bold md:text-4xl mb-12">
            Notre <span className="text-gradient">Approche</span>
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Prévention", desc: "Plans de maintenance structurés pour limiter les interruptions et prolonger la durée de vie des équipements." },
              { num: "02", title: "Performance", desc: "Optimisation des systèmes techniques pour un fonctionnement fiable et efficace." },
              { num: "03", title: "Transparence", desc: "Reporting clair, suivi des interventions, communication structurée." },
              { num: "04", title: "Sécurité & Conformité", desc: "Respect strict des réglementations locales et standards techniques UAE." },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.num}
                </div>
                <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
