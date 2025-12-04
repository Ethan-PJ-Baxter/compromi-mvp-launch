import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Compromi logo" className="w-8 h-8" />
            <span className="font-heading font-semibold text-foreground">
              Compromi
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Compromi. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#founders" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
