import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="status-dot" />
          BIOLOGICAL INTELLIGENCE · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Engineering
          <br />
          <span>biology</span> for
          <br />
          a healthier tomorrow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          We combine biological science, computational intelligence,
          and molecular engineering to discover what comes next.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button className="primary-button">
            Explore our science
            <ArrowUpRight size={18} />
          </button>

          <button className="secondary-button">
            View research
          </button>
        </motion.div>

      </div>

      <motion.div
        className="molecule"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="molecule-core" />

        <div className="orbit orbit-one">
          <div className="particle particle-one" />
        </div>

        <div className="orbit orbit-two">
          <div className="particle particle-two" />
        </div>

        <div className="orbit orbit-three">
          <div className="particle particle-three" />
        </div>
      </motion.div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>

    </section>
  );
}