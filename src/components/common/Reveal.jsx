import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 24, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const StaggerGroup = ({ children, className = "", delayChildren = 0, stagger = 0.08 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren } } }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", y = 22 }) => (
  <motion.div
    className={className}
    variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
  >
    {children}
  </motion.div>
);
