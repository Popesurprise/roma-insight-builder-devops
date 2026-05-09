import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Decorative pillar lines */}
      <div className="pillar-line left-[10%] top-0 bottom-0 opacity-20" />
      <div className="pillar-line right-[10%] top-0 bottom-0 opacity-20" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Building Empires with Data
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gold-text">Roma</span>{" "}
            <span className="text-foreground">Insight</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering Businesses with Strategic Insights for Smarter Decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="border border-primary/30 text-primary px-8 py-3.5 rounded-md font-semibold hover:bg-primary/10 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
