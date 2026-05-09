import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`py-24 px-6 ${className}`}
  >
    <div className="container mx-auto max-w-6xl">{children}</div>
  </motion.section>
);

export default SectionWrapper;
