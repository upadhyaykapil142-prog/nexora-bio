import { motion } from "framer-motion";
import {
  BrainCircuit,
  Dna,
  Microscope,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Dna,
    title: "Computational Biology",
    text: "Turning complex biological data into clear, actionable insight.",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Molecular Engineering",
    text: "Designing biological systems with precision at the molecular level.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI-Driven Discovery",
    text: "Combining intelligent systems with scientific research to accelerate discovery.",
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="innovation-section">
      <div className="innovation-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>01</span>
          OUR APPROACH
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Biology is the world's
          <br />
          <span>most sophisticated</span> technology.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
        >
          At Nexora Bio, we combine biological science, computation,
          and engineering to understand living systems and transform
          that understanding into meaningful innovation.
        </motion.p>
      </div>

      <motion.div
        className="science-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
      >
        <div className="science-grid" />

        <div className="dna-visual">
          <div className="dna-strand strand-one">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="dna-strand strand-two">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="dna-center-line" />
        </div>

        <div className="visual-caption">
          <span>LIVE SYSTEM</span>
          <strong>BIOLOGICAL NETWORK · 01</strong>
        </div>
      </motion.div>

      <div className="capability-grid">
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="capability-card"
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="card-top">
                <span>{item.number}</span>

                <div className="card-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="card-link">
                Explore
                <ArrowUpRight size={16} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}