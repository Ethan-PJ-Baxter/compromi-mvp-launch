import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import appScreenshot from "@/assets/app-screenshot-1.jpg";
const Hero = () => {
  const scrollToNewsletter = () => {
    document.getElementById("newsletter")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Glow overlay */}
      <div className="absolute inset-0 glow-overlay animate-pulse-glow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-center lg:text-left">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Coming Soon</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Commit</span>
              <br />
              <span className="text-gradient-primary">Yourself</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Set your fitness goals, place your wager, and let AI verify your workouts. 
              Miss your commitment? Your stake goes to charity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" onClick={scrollToNewsletter}>
                Get Early Access
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl" onClick={() => document.getElementById("about")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Learn More
              </Button>
            </div>

            {/* Social proof */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {String.fromCharCode(64 + i)}
                  </div>)}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">100+</span> early adopters
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div initial={{
          opacity: 0,
          x: 60
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 blur-3xl opacity-50 bg-primary/30 rounded-full scale-75" />
              
              {/* Phone frame */}
              <div className="relative phone-mockup bg-card rounded-[2.5rem] p-2 border border-border/50 animate-float">
                <div className="relative overflow-hidden rounded-[2rem] bg-background">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background/80 to-transparent z-10 flex items-center justify-center">
                    <div className="w-20 h-5 bg-foreground/20 rounded-full" />
                  </div>
                  
                  <img src={appScreenshot} alt="Compromi App - Track your fitness wagers" className="w-72 sm:w-80 h-auto" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>;
};
export default Hero;