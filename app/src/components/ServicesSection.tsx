import { BarChart3, MonitorSmartphone, Brain, Palette, FlaskConical, UserSearch } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const services = [
  { icon: BarChart3, title: "Market Research", desc: "In-depth analysis of market trends, consumer behavior, and competitive landscapes." },
  { icon: MonitorSmartphone, title: "UX Research", desc: "User-centered research to optimize digital experiences and product design." },
  { icon: Brain, title: "Business Intelligence", desc: "Data-driven insights that transform raw information into strategic advantage." },
  { icon: Palette, title: "Brand Strategy", desc: "Building powerful brand identities that resonate across markets and cultures." },
  { icon: FlaskConical, title: "Customized Research", desc: "Tailored research solutions designed to address your unique business challenges." },
  { icon: UserSearch, title: "Recruitment", desc: "Strategic recruitment of quality participants for research projects." },
];

const ServicesSection = () => (
  <SectionWrapper id="services" className="bg-secondary/30">
    <div className="text-center mb-16">
      <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">What We Do</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
        Our <span className="gold-text">Services</span>
      </h2>
      <div className="section-divider mt-6" />
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="glass-card p-7 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-11 h-11 rounded-md gold-gradient flex items-center justify-center mb-5">
            <s.icon className="text-primary-foreground" size={20} />
          </div>
          <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
