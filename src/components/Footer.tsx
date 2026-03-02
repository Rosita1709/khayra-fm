import { Link } from "react-router-dom";
import kfmLogo from "@/assets/kfm-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={kfmLogo} alt="KFM" className="h-12 object-contain" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Khayra Facilities Management — Abu Dhabi, UAE.{" "}
              {t("Solutions premium de Facility Management.", "Premium Facility Management solutions.")}
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("Accueil", "Home")}</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">{t("À Propos", "About")}</Link></li>
              <li><Link to="/projets" className="hover:text-primary transition-colors">{t("Projets", "Projects")}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">{t("Nos Services", "Our Services")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/hvac" className="hover:text-primary transition-colors">{t("HVAC & Climatisation", "HVAC & Air Conditioning")}</Link></li>
              <li><Link to="/services/mep" className="hover:text-primary transition-colors">{t("Électricité & Plomberie", "Electrical & Plumbing")}</Link></li>
              <li><Link to="/services/travaux-civils" className="hover:text-primary transition-colors">{t("Travaux Civils", "Civil Works")}</Link></li>
              <li><Link to="/services/design-interieur" className="hover:text-primary transition-colors">{t("Design Intérieur", "Interior Design")}</Link></li>
              <li><Link to="/services/energy-saving" className="hover:text-primary transition-colors">Energy Saving</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@khayrafm.com</li>
              <li>+971 50 805 4220</li>
              <li>10 Floor, Corniche Building</li>
              <li>Al HISN, Abu Dhabi, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 KFM – Khayra Facilities Management. {t("Tous droits réservés.", "All rights reserved.")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
