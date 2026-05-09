import { Shield, Lightbulb, RefreshCw, Users, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const values = [
  { icon: Shield, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: RefreshCw, label: "Adaptability" },
  { icon: Users, label: "Collaboration" },
  { icon: Award, label: "Excellence" },
];

const ValuesSection = () => (
  <SectionWrapper id="values">
    <div className="text-center mb-16">
      <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Core Values</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
        Pillars of <span className="gold-text">Roma Insight</span>
      </h2>
      <div className="section-divider mt-6" />
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      {values.map((v) => (
        <div
          key={v.label}
          className="flex flex-col items-center group"
        >
          <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
            <v.icon className="text-primary" size={28} />
          </div>
          <span className="font-medium text-foreground text-sm">{v.label}</span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ValuesSection;
