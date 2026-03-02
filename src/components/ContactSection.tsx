import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-kfm-glow/5 blur-[150px]" />

      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Parlons ensemble</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Prêt à <span className="text-gradient">transformer</span> vos espaces ?
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Contactez-nous pour discuter de vos besoins en facility management. 
              Notre équipe est là pour vous accompagner.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, text: "contact@kfm-services.com" },
                { icon: Phone, text: "+33 1 23 45 67 89" },
                { icon: MapPin, text: "Paris, France" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 rounded-2xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-muted-foreground">Sujet</label>
              <input
                type="text"
                placeholder="Sujet de votre message"
                className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Décrivez votre projet..."
                className="w-full resize-none rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow hover:bg-primary/90"
            >
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
