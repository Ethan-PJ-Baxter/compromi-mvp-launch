import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="font-heading font-bold text-primary-foreground text-lg">C</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              Compromi
            </span>
          </a>

          {/* CTA */}
          <Button 
            variant="hero" 
            size="default"
            onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
