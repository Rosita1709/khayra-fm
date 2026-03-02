import { Link } from "react-router-dom";
import kfmLogo from "@/assets/kfm-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={kfmLogo} alt="KFM" className="h-12 object-contain" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Khayra Facilities Management — Abu Dhabi, UAE. 
              Solutions premium de Facility Management.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link to="/projets" className="hover:text-primary transition-colors">Projets</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Nos Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>HVAC & Climatisation</li>
              <li>Électricité & Plomberie</li>
              <li>Travaux Civils</li>
              <li>Design Intérieur</li>
              <li>Energy Saving</li>
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
          © 2026 KFM – Khayra Facilities Management. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
