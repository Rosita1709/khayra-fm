import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.webp";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="à-propos" className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section: Des professionnels qualifiés */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutBg}
                alt="Équipe KFM en intervention à Abu Dhabi"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl glow bg-primary p-6 font-display shadow-lg">
              <div className="text-3xl font-bold text-primary-foreground">Abu Dhabi</div>
              <div className="text-sm text-primary-foreground/80">Émirats Arabes Unis</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">À propos</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Des professionnels qualifiés pour vos <span className="text-gradient">travaux</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              KFM est une entreprise spécialisée dans le facilities management basée à Abu Dhabi. Avec une solide
              expérience dans le secteur, elle offre des solutions personnalisées et innovantes pour répondre aux
              besoins spécifiques de ses clients.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              KFM offre une surveillance en temps réel des actifs grâce à la gestion de la maintenance assistée par
              ordinateur (GMAO). Cela encourage la confiance, la croissance et des avantages durables pour nos parties
              prenantes.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Maintenance préventive et curative des équipements",
                "Gestion des installations techniques",
                "Gestion des espaces de travail",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Notre Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Notre Vision</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Excellence <span className="text-gradient">opérationnelle</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              L'objectif principal de KFM est d'assurer le bon fonctionnement des installations de ses clients, en
              veillant à ce qu'elles soient entretenues de manière optimale, sécurisées et conformes aux normes
              réglementaires. Grâce à notre approche axée sur la qualité et le service client, KFM est reconnue pour son
              professionnalisme et sa capacité à offrir une excellence opérationnelle.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Que ce soit pour des entreprises, des institutions publiques, des centres commerciaux ou d'autres
              organisations, KFM est un partenaire fiable et de confiance pour la gestion complète et efficace des
              installations aux Émirats Arabes Unis.
            </p>
          </div>
        </motion.div>

        {/* Notre Approche - 4 piliers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="mb-10 text-center font-display text-lg font-bold">Notre Approche</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Prévention",
                desc: "Plans de maintenance structurés pour limiter les interruptions et prolonger la durée de vie des équipements.",
              },
              {
                num: "02",
                title: "Performance",
                desc: "Optimisation des systèmes techniques pour garantir un fonctionnement fiable et efficace.",
              },
              {
                num: "03",
                title: "Transparence",
                desc: "Reporting clair, suivi des interventions, communication structurée avec nos clients.",
              },
              {
                num: "04",
                title: "Sécurité",
                desc: "Respect strict des réglementations locales et des standards techniques en vigueur aux EAU.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                  {item.num}
                </div>
                <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
