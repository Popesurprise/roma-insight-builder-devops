import { Target, Eye, Globe, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    icon: Target,
    title: "Mission",
    text: "To provide comprehensive, culturally sensitive, and forward-thinking research solutions that drive sustainable growth.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To become the most trusted global partner for innovative and strategic business insights.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    text: "Deep understanding of African markets and cultural dynamics that unlock untapped potential.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    text: "Application of global best practices and advanced methodologies across international markets.",
  },
];

const MissionSection = () => (
  <SectionWrapper className="bg-secondary/30">
    <div className="text-center mb-16">
      <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Mission & Vision</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
        Driving <span className="gold-text">Purposeful</span> Growth
      </h2>
      <div className="section-divider mt-6" />
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="glass-card p-6 group hover:border-primary/40 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-md gold-gradient flex items-center justify-center mb-5">
            <card.icon className="text-primary-foreground" size={22} />
          </div>
          <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{card.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default MissionSection;
