import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Roma Insight" className="w-10 h-10 rounded-full" />
          <span className="font-display text-2xl font-bold gold-text">Roma Insight</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="gold-gradient text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="gold-gradient text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
