import SectionWrapper from "./SectionWrapper";

const PositioningSection = () => (
  <SectionWrapper>
    <div className="max-w-4xl mx-auto text-center">
      <div className="glass-card p-10 md:p-14 border-primary/20">
        <div className="section-divider mb-8" />
        <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed italic">
          "At Roma Insight, we blend timeless strategy, adaptability, and innovation with modern technology and cultural sensitivity—empowering businesses to build their own empires of success."
        </blockquote>
        <div className="section-divider mt-8" />
      </div>
    </div>
  </SectionWrapper>
);

export default PositioningSection;
