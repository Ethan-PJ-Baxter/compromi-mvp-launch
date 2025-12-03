import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const founders = [
  {
    name: "Ollie Sharpe",
    role: "Co-Founder & Engineering Lead",
    email: "ollie.sharpe@compromi.app",
    linkedin: "https://www.linkedin.com/in/ollie-sharpe-2ab8b0216/",
    initial: "OS"
  },
  {
    name: "Ethan Baxter",
    role: "Co-Founder & Software Developer",
    email: "ethan.baxter@compromi.app",
    linkedin: "https://www.linkedin.com/in/ethan-baxter-aa890a314/",
    initial: "EB"
  }
];

const Founders = () => {
  return (
    <section id="founders" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient-primary">Founders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built by fitness enthusiasts who understand the power of accountability in achieving lasting results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-heading font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {founder.initial}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {founder.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm group-hover/link:underline">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm group-hover/link:underline">{founder.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
