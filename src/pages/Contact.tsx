import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ctaBg from "@/assets/cta-bg.jpg";


interface FormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

type Status = null | "loading" | "success" | "error";

const Contact = () => {
  const { t } = useLanguage();



  const [form, setForm] = useState<FormData>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ nom: "", email: "", sujet: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const features = [
    { icon: Clock, text: t("Réponse sous 24h", "Response within 24h") },
    { icon: Shield, text: t("Devis gratuit", "Free quote") },
    { icon: Send, text: t("Suivi personnalisé", "Personalized follow-up") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with background */}
      <section className="relative py-20 overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={ctaBg}
            alt=""
            className="h-full w-full object-cover"

            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        </div>
        <motion.div
          className="absolute top-10 left-10 h-48 w-48 rounded-full bg-primary/10 blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
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
          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm"
              >
                <f.icon className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{f.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
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
                {[
                  {
                    href: "mailto:contact@khayrafm.com",
                    icon: Mail,
                    label: "Email",
                    value: "contact@khayrafm.com",
                    external: false,
                  },
                  {
                    href: "https://wa.me/971508054220",
                    icon: Phone,
                    label: t("Téléphone / WhatsApp", "Phone / WhatsApp"),
                    value: "+971 50 805 4220",
                    external: true,
                  },
                ].map((contact, i) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground"
                      whileHover={{ rotate: 10 }}
                    >
                      <contact.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="font-semibold group-hover:text-primary transition-colors">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t("Adresse", "Address")}</div>
                    <div className="font-semibold">10th Floor, Corniche Building, Al Hisn, Abu Dhabi, UAE</div>
                  </div>
                </motion.div>
              </div>

              {/* Map embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 overflow-hidden rounded-2xl border border-border shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8!2d54.35!3d24.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI5JzI0LjAiTiA1NMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KFM Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative space-y-5 rounded-2xl border border-border bg-card p-8 shadow-lg overflow-hidden"
              onSubmit={handleSubmit}
            >
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-[60px]" />
              <div className="grid relative gap-5 sm:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">{t("Nom", "Name")}</label>
                  <input type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder={t("Votre nom", "Your name")} className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t("votre@email.com", "your@email.com")} className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </motion.div>
              </div>
              <motion.div className="relative" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">{t("Sujet", "Subject")}</label>
                <input type="text" name="sujet" value={form.sujet} onChange={handleChange} required placeholder={t("Sujet de votre message", "Subject of your message")} className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
              </motion.div>
              <motion.div className="relative" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder={t("Décrivez votre projet...", "Describe your project...")} className="w-full resize-none rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
              </motion.div>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-500"
                >
                  {t("Message envoyé avec succès !", "Message sent successfully!")}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-500"
                >
                  {t("Erreur lors de l'envoi.", "Error sending message.")}
                </motion.p>
              )}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="relative w-full rounded-lg bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  {status === "loading"
                    ? t("Envoi en cours...", "Sending...")
                    : t("Envoyer le message", "Send message")}
                </span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
