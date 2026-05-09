import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Roma Insight" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-display text-xl font-bold gold-text">Roma Insight</h3>
            <p className="text-muted-foreground text-sm">Building Empires with Data</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="mailto:info@romainsight.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} /> info@romainsight.com
          </a>
          <a href="tel:+2349169987037" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} /> +234 916 998 7037
          </a>
          <p className="flex items-center gap-2">
            Progressive Estate, Ojodu Berger
          </p>
        </div>
        <div className="flex gap-4 md:justify-end">
          {[
            { Icon: Twitter, href: "https://x.com/romaninsight" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/aderinsola-patrick-acipm-aphri-b60349183" },
            { Icon: Instagram, href: "https://www.instagram.com/hello.romainsight" },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="section-divider mt-10 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Roma Insight. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
