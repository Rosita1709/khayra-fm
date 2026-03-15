import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kfmLogo from "@/assets/kfm-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-card/50 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-primary/3 blur-[100px]" />
      <div className="container relative mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={kfmLogo} alt="KFM" className="h-12 object-contain" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Khayra Facilities Management — Abu Dhabi, UAE.{" "}
              {t("Solutions premium de Facility Management.", "Premium Facility Management solutions.")}
            </p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:contact@khayrafm.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+971508054220" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("Accueil", "Home")}</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">{t("À Propos", "About")}</Link></li>
              <li><Link to="/projets" className="hover:text-primary transition-colors">{t("Projets", "Projects")}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">{t("Nos Services", "Our Services")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/services/hvac" className="hover:text-primary transition-colors">{t("HVAC & Climatisation", "HVAC & Air Conditioning")}</Link></li>
              <li><Link to="/services/mep" className="hover:text-primary transition-colors">{t("Électricité & Plomberie", "Electrical & Plumbing")}</Link></li>
              <li><Link to="/services/travaux-civils" className="hover:text-primary transition-colors">{t("Travaux Civils", "Civil Works")}</Link></li>
              <li><Link to="/services/design-interieur" className="hover:text-primary transition-colors">{t("Design Intérieur", "Interior Design")}</Link></li>
              <li><Link to="/services/energy-saving" className="hover:text-primary transition-colors">Energy Saving</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" />contact@khayrafm.com</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" />+971 50 805 4220</li>
              <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 text-primary mt-0.5" />10 Floor, Corniche Building, Al HISN, Abu Dhabi, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 KFM – Khayra Facilities Management. {t("Tous droits réservés.", "All rights reserved.")}</span>
          <span className="text-xs">Abu Dhabi, {t("Émirats Arabes Unis", "United Arab Emirates")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
