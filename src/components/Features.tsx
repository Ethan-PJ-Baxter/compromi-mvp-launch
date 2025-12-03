import { motion } from "framer-motion";
import { Target, Wallet, Camera, TrendingUp } from "lucide-react";
import appScreenshot2 from "@/assets/app-screenshot-2.jpg";
import appScreenshot3 from "@/assets/app-screenshot-3.jpg";
const features = [{
  icon: Target,
  title: "Set Your Goals",
  description: "Choose your workout frequency, session duration, and commitment period. Make it personal to your fitness journey."
}, {
  icon: Wallet,
  title: "Set Your Compro",
  description: "Put real money on your goals. Compros range from £5 to £50+. You only pay if you don't follow through."
}, {
  icon: Camera,
  title: "AI Verification",
  description: "Our AI automatically detects your workout environment and verifies session completion. No location tracking needed."
}, {
  icon: TrendingUp,
  title: "Track Progress",
  description: "Watch your consistency grow. Build unbreakable habits with financial accountability driving results."
}];
const Features = () => {
  return <section id="about" className="py-24 lg:py-32 bg-background relative">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="text-gradient-primary">Compromi</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Turn motivation into commitment. Our accountability system makes you accountable to your fitness goals.</p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group">
              <div className="card-gradient p-6 rounded-2xl border border-border/50 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>

        {/* App screenshots showcase */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-3xl" />
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-12">
            {/* Screenshot 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative phone-mockup bg-card rounded-[2rem] p-2 border border-border/50 transform lg:-rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <img src={appScreenshot2} alt="Create compro screen" className="w-56 h-auto rounded-[1.5rem]" />
              </div>
            </div>

            {/* Screenshot 2 - Center, larger */}
            <div className="relative group z-10">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative phone-mockup bg-card rounded-[2.5rem] p-2 border border-border/50 shadow-glow transform scale-110 group-hover:scale-115 transition-transform duration-500">
                <img src={appScreenshot3} alt="Commitment duration screen" className="w-64 h-auto rounded-[2rem]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Features;