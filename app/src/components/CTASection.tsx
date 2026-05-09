import SectionWrapper from "./SectionWrapper";

const CTASection = () => (
  <SectionWrapper id="contact" className="bg-secondary/30">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Let's Connect</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
        Ready to Build Your Empire <span className="gold-text">with Data?</span>
      </h2>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        Partner with Roma Insight and transform your business challenges into strategic opportunities.
      </p>
      <a
        href="mailto:info@romainsight.com"
        className="inline-block gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
      >
        Work With Us
      </a>
    </div>
  </SectionWrapper>
);

export default CTASection;
