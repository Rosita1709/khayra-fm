import { motion } from "framer-motion";
import kfmLogo from "@/assets/kfm-logo.jpeg";

const navLinks = ["Services", "À Propos", "Expertise", "Contact"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <img src={kfmLogo} alt="KFM Facility Management" className="h-10 object-contain" />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="line-accent pb-1 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          Nous Contacter
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
