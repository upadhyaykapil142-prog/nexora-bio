import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Dna,
  FlaskConical,
  Network,
} from "lucide-react";

const technologies = [
  {
    number: "01",
    title: "Computational Biology",
    text: "We transform complex biological datasets into actionable scientific insight through advanced computational models.",
    icon: BrainCircuit,
    metric: "10.8M",
    label: "DATA POINTS",
  },
  {
    number: "02",
    title: "Molecular Engineering",
    text: "We design and analyze molecular systems to understand biological behavior and unlock new possibilities.",
    icon: Dna,
    metric: "4.2K",
    label: "MOLECULES",
  },
  {
    number: "03",
    title: "AI Discovery",
    text: "Intelligent systems accelerate hypothesis generation, pattern recognition, and scientific discovery.",
    icon: Network,
    metric: "92%",
    label: "MODEL ACCURACY",
  },
];

function Technology() {
  return (
    <section id="technology" className="technology-section">
      <div className="technology-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>02</span>
          TECHNOLOGY / RESEARCH
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Turning biological
          <br />
          <span>complexity into clarity.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Our technology combines computational science, molecular engineering,
          and artificial intelligence to understand biological systems at a
          deeper level.
        </motion.p>
      </div>

      <motion.div
        className="research-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9 }}
      >
        <div className="research-grid" />
        <div className="research-glow" />

        <div className="research-orbit orbit-one" />
        <div className="research-orbit orbit-two" />
        <div className="research-orbit orbit-three" />

        <motion.div
          className="research-core"
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 25px rgba(156,232,140,0.2)",
              "0 0 55px rgba(156,232,140,0.4)",
              "0 0 25px rgba(156,232,140,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Dna size={42} strokeWidth={1} />
        </motion.div>

        <motion.div
          className="research-node node-one"
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Activity size={17} />
        </motion.div>

        <motion.div
          className="research-node node-two"
          animate={{ y: [8, -8, 8] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FlaskConical size={17} />
        </motion.div>

        <motion.div
          className="research-node node-three"
          animate={{ x: [-7, 7, -7] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Network size={17} />
        </motion.div>

        <div className="research-line line-one" />
        <div className="research-line line-two" />
        <div className="research-line line-three" />

        <div className="research-data data-one">
          <span>GENOME</span>
          <strong>ACTIVE</strong>
        </div>

        <div className="research-data data-two">
          <span>MOLECULAR SIGNAL</span>
          <strong>98.4%</strong>
        </div>

        <div className="research-caption">
          <span>LIVE RESEARCH SYSTEM</span>
          <strong>BIOLOGICAL INTELLIGENCE · 02</strong>
        </div>
      </motion.div>

      <div className="technology-grid">
        {technologies.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="technology-card"
              key={item.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="technology-card-top">
                <span>{item.number}</span>

                <div className="technology-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="technology-metric">
                <strong>{item.metric}</strong>
                <span>{item.label}</span>
              </div>

              <div className="technology-link">
                Explore research
                <ArrowUpRight size={15} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Technology;