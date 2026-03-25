import { Link } from "react-router-dom";
import kfmLogo from "@/assets/kfm-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("Accueil", "Home") },
    { to: "/a-propos", label: t("À Propos", "About") },
    { to: "/projets", label: t("Projets", "Projects") },
    { to: "/services", label: t("Nos Services", "Our Services") },
    { to: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { to: "/services/hvac", label: t("HVAC & Climatisation", "HVAC & Air Conditioning") },
    { to: "/services/mep", label: t("Électricité & Plomberie", "Electrical & Plumbing") },
    { to: "/services/travaux-civils", label: t("Travaux Civils", "Civil Works") },
    { to: "/services/design-interieur", label: t("Design Intérieur", "Interior Design") },
    { to: "/services/energy-saving", label: "Energy Saving" },
  ];

  return (
    <footer className="bg-background border-t-2 border-primary">
      <div className="container mx-auto px-6 pt-16 pb-0">

        {/* Main grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 pb-14">

          {/* Brand */}
          <div>
            <img
              src={kfmLogo}
              alt="KFM"
              className="h-12 object-contain mb-6"
            />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-[260px] mb-7">
              {t(
                "Khayra Facilities Management, solutions d'excellence pour la gestion et la valorisation de vos espaces à Abu Dhabi.",
                "Khayra Facilities Management, excellence in facility management across Abu Dhabi and beyond."
              )}
            </p>

            {/* Green accent bar — same style as site */}
            

            {/* Icon buttons */}
            <div className="flex gap-2.5">
              {[
                { href: "mailto:contact@khayrafm.com", icon: <Mail className="h-3.5 w-3.5" /> },
                { href: "tel:+971508054220", icon: <Phone className="h-3.5 w-3.5" /> },
                { href: "https://maps.google.com", icon: <MapPin className="h-3.5 w-3.5" />, external: true },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary block mb-5">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary block mb-5">
              Services
            </span>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary block mb-5">
              Contact
            </span>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />, content: "contact@khayrafm.com", href: "mailto:contact@khayrafm.com" },
                { icon: <Phone className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />, content: "+971 50 805 4220", href: "tel:+971508054220" },
                { icon: <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />, content: "10th Floor, Corniche Building\nAl Hisn, Abu Dhabi, UAE" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-primary">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary leading-relaxed"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.content}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary border-b border-primary pb-0.5 transition-all hover:text-primary/70 hover:border-primary/70"
            >
              {t("Nous contacter", "Get in touch")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground tracking-wide">
            © 2026 KFM — Khayra Facilities Management. {t("Tous droits réservés.", "All rights reserved.")}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-[0.1em]">
            Abu Dhabi · {t("Émirats Arabes Unis", "United Arab Emirates")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
