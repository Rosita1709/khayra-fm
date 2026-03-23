import { Link } from "react-router-dom";
import kfmLogo from "@/assets/kfm-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & description */}
          <div>
            <img src={kfmLogo} alt="KFM" className="h-12 object-contain rounded-lg" />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Khayra Facilities Management — Abu Dhabi, UAE.{" "}
              {t("Solutions premium de Facility Management.", "Premium Facility Management solutions.")}
            </p>
            <div className="mt-5 flex gap-3">
              <a href="mailto:contact@khayrafm.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-gray-200">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+971508054220" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-gray-200">
                <Phone className="h-4 w-4" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-gray-200">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-900">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-gray-900 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3" />{t("Accueil", "Home")}</Link></li>
              <li><Link to="/a-propos" className="hover:text-gray-900 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3" />{t("À Propos", "About")}</Link></li>
              <li><Link to="/projets" className="hover:text-gray-900 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3" />{t("Projets", "Projects")}</Link></li>
              <li><Link to="/services" className="hover:text-gray-900 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3" />{t("Nos Services", "Our Services")}</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3" />Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link to="/services/hvac" className="hover:text-gray-900 transition-colors">{t("HVAC & Climatisation", "HVAC & Air Conditioning")}</Link></li>
              <li><Link to="/services/mep" className="hover:text-gray-900 transition-colors">{t("Électricité & Plomberie", "Electrical & Plumbing")}</Link></li>
              <li><Link to="/services/travaux-civils" className="hover:text-gray-900 transition-colors">{t("Travaux Civils", "Civil Works")}</Link></li>
              <li><Link to="/services/design-interieur" className="hover:text-gray-900 transition-colors">{t("Design Intérieur", "Interior Design")}</Link></li>
              <li><Link to="/services/energy-saving" className="hover:text-gray-900 transition-colors">Energy Saving</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 flex-shrink-0" />contact@khayrafm.com</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 flex-shrink-0" />+971 50 805 4220</li>
              <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />10 Floor, Corniche Building, Al HISN, Abu Dhabi, UAE</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span>© 2026 KFM – Khayra Facilities Management. {t("Tous droits réservés.", "All rights reserved.")}</span>
          <span className="text-xs">Abu Dhabi, {t("Émirats Arabes Unis", "United Arab Emirates")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;