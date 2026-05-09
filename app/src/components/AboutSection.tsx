import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Where Strategy Meets <span className="gold-text">Intelligence</span>
        </h2>
        <div className="section-divider !mx-0 mb-8" />
        <p className="text-muted-foreground leading-relaxed mb-6">
          Roma Insight was founded with a vision to be a leading force in the research and business intelligence industry, delivering strategic insights that empower organizations to make informed decisions.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Inspired by the Roman Empire and the book of Romans, the company blends strength, innovation, and timeless wisdom with modern methodologies to provide actionable solutions globally.
        </p>
      </div>
      <div className="glass-card p-8 md:p-10">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Our Story</p>
        <h3 className="font-display text-2xl font-bold mb-4 text-foreground">The Birth of Roma Insight</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The company was created from a passion for solving complex business challenges and uncovering deep consumer insights.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          It bridges the gap between raw data and impactful decision-making, drawing inspiration from Roman strategy, adaptability, and infrastructure.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
