import { Link } from "react-router-dom";
import kfmLogo from "@/assets/kfm-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

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
    { to: "/services/nettoyage", label: t("Nettoyage Industriel & Vitres", "Industrial & Window Cleaning") },
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
            

            {/* Social & contact icons */}
            <div className="flex gap-2.5 flex-wrap">
              {[
              {
                  href: "https://www.linkedin.com/company/106277180/",
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ),
                  external: true,
                },
                {
                  href: "https://www.instagram.com/kfm_uae",
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  ),
                  external: true,
                },
                {
                  href: "https://www.tiktok.com/@kfm_uae",
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  ),
                  external: true,
                },
                {
                  href: "https://www.snapchat.com/add/kfm_uae",
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg>
                  ),
                  external: true,
                },
                {
                  href: "https://www.facebook.com/share/18dPuvzsR3/",
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  ),
                  external: true,
                },
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
            © 2026 KFM, Khayra Facilities Management. {t("Tous droits réservés.", "All rights reserved.")}
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
