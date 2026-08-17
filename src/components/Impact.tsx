import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Dna, FlaskConical, Brain } from "lucide-react";

const stats = [
  {
    number: "10.8M",
    label: "DATA POINTS",
    description: "Biological signals processed across research systems.",
    icon: Activity,
  },
  {
    number: "4.2K",
    label: "MOLECULES",
    description: "Molecular structures explored through computational models.",
    icon: Dna,
  },
  {
    number: "92%",
    label: "MODEL ACCURACY",
    description: "Prediction accuracy across validated research models.",
    icon: Brain,
  },
  {
    number: "36+",
    label: "RESEARCH SYSTEMS",
    description: "Intelligent systems supporting biological discovery.",
    icon: FlaskConical,
  },
];

function Impact() {
  return (
    <section id="impact" className="impact-section">
      {/* HEADER */}
      <motion.div
        className="impact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-label">
          <span>04</span>
          OUR IMPACT
        </div>

        <h2>
          Measuring progress
          <br />
          through <span>biological intelligence.</span>
        </h2>

        <p>
          We believe scientific progress should be measurable, transparent,
          and designed for meaningful outcomes. Our systems turn biological
          complexity into measurable progress.
        </p>
      </motion.div>

      {/* IMPACT VISUAL */}
      <motion.div
        className="impact-dashboard"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      >
        <div className="impact-grid-bg" />

        {/* TOP STATUS */}
        <div className="impact-status">
          <span className="status-dot" />
          RESEARCH NETWORK ACTIVE
        </div>

        <div className="impact-code">
          BIOLOGICAL INTELLIGENCE · 04
        </div>

        {/* SIGNAL VISUAL */}
        <div className="signal-system">
          <div className="signal-line signal-one" />
          <div className="signal-line signal-two" />
          <div className="signal-line signal-three" />

          <div className="signal-node node-one" />
          <div className="signal-node node-two" />
          <div className="signal-node node-three" />
          <div className="signal-node node-four" />
          <div className="signal-node node-five" />

          <div className="signal-core">
            <span />
          </div>
        </div>

        <div className="dashboard-caption">
          <span>LIVE ANALYTICS</span>
          <strong>BIOLOGICAL SIGNAL NETWORK</strong>
        </div>
      </motion.div>

      {/* STATISTICS */}
      <div className="impact-stats">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.article
              className="impact-stat"
              key={stat.label}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
            >
              <div className="impact-stat-top">
                <span>0{index + 1}</span>

                <div className="impact-icon">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="impact-number">{stat.number}</div>

              <div className="impact-label">{stat.label}</div>

              <p>{stat.description}</p>

              <div className="impact-link">
                Explore
                <ArrowUpRight size={15} />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* BOTTOM STRIP */}
      <motion.div
        className="impact-strip"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>RESEARCH</span>
        <span>DISCOVERY</span>
        <span>PRECISION</span>
        <span>INTELLIGENCE</span>
        <span>IMPACT</span>
      </motion.div>
    </section>
  );
}

export default Impact;