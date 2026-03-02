import kfmLogo from "@/assets/kfm-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <img src={kfmLogo} alt="KFM" className="h-8 object-contain" />
          <p className="text-sm text-muted-foreground">
            © 2026 KFM Facility Management Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
