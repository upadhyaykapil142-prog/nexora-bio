import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-grid" />

      <motion.div
        className="final-cta-orbit orbit-one"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="final-cta-orbit orbit-two"
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="final-cta-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>05</span>
          THE NEXT FRONTIER
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Biology is only
          <br />
          the <span>beginning.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          We are building the systems that help humanity understand,
          engineer, and work with biology in entirely new ways.
        </motion.p>

        <motion.a
          href="#innovation"
          className="final-cta-button"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Explore our science</span>

          <ArrowUpRight size={18} />
        </motion.a>
      </div>

      <div className="final-cta-meta">
        <span>NEXORA BIO</span>
        <span>BIOLOGICAL INTELLIGENCE · 2026</span>
      </div>
    </section>
  );
}

export default FinalCTA;