import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-5xl font-bold md:text-6xl"
          >
            <span className="text-gradient">Contact</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {t(
              "Notre équipe est prête à vous accompagner pour vos projets techniques et de maintenance.",
              "Our team is ready to support you with your technical and maintenance projects."
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-display text-3xl font-bold">
                {t("Parlons de votre ", "Let's discuss your ")}
                <span className="text-gradient">{t("projet", "project")}</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t(
                  "Contactez-nous pour discuter de vos besoins en facility management. Nous sommes disponibles pour vous accompagner dans tous vos projets aux Émirats.",
                  "Contact us to discuss your facility management needs. We are available to support you in all your projects in the UAE."
                )}
              </p>

              <div className="mt-10 space-y-6">
                <a href="mailto:contact@khayrafm.com" className="flex items-center gap-4 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">contact@khayrafm.com</div>
                  </div>
                </a>
                <a href="https://wa.me/971508054220" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t("Téléphone / WhatsApp", "Phone / WhatsApp")}</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">+971 50 805 4220</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t("Adresse", "Address")}</div>
                    <div className="font-semibold">10th Floor, Corniche Building, Al Hisn, Abu Dhabi, UAE</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">{t("Nom", "Name")}</label>
                  <input type="text" placeholder={t("Votre nom", "Your name")} className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">Email</label>
                  <input type="email" placeholder={t("votre@email.com", "your@email.com")} className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">{t("Sujet", "Subject")}</label>
                <input type="text" placeholder={t("Sujet de votre message", "Subject of your message")} className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Message</label>
                <textarea rows={5} placeholder={t("Décrivez votre projet...", "Describe your project...")} className="w-full resize-none rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow hover:bg-primary/90">
                {t("Envoyer le message", "Send message")}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
