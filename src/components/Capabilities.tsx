import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Microscope,
  Network,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Biological Intelligence",
    description:
      "We combine biological data, computational models, and scientific reasoning to reveal hidden patterns across complex systems.",
    icon: Microscope,
    tag: "BIOLOGY",
  },
  {
    number: "02",
    title: "Precision Engineering",
    description:
      "Our molecular engineering approach enables precise exploration and design of biological systems at microscopic scale.",
    icon: Network,
    tag: "ENGINEERING",
  },
  {
    number: "03",
    title: "Discovery Systems",
    description:
      "AI-powered research systems help scientists move from observation to hypothesis and from hypothesis to discovery.",
    icon: ScanSearch,
    tag: "DISCOVERY",
  },
  {
    number: "04",
    title: "Research Intelligence",
    description:
      "We build reliable scientific infrastructure that turns biological complexity into useful knowledge and measurable outcomes.",
    icon: ShieldCheck,
    tag: "INTELLIGENCE",
  },
];

function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-section">
      <div className="capabilities-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>03</span>
          OUR CAPABILITIES
        </motion.div>

        <div className="capabilities-heading-row">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            From biological
            <br />
            <span>questions to possibility.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Our capabilities connect science, engineering, and computation to
            create new ways of understanding and working with biology.
          </motion.p>
        </div>
      </div>

      <div className="capabilities-layout">
        <motion.div
          className="capabilities-system"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="capabilities-grid-bg" />

          <div className="system-ring ring-one" />
          <div className="system-ring ring-two" />
          <div className="system-ring ring-three" />

          <motion.div
            className="system-core"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="core-dot" />
          </motion.div>

          <motion.div
            className="system-pulse"
            animate={{
              scale: [0.8, 1.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <div className="system-label system-label-one">
            <span>01</span>
            BIOLOGY
          </div>

          <div className="system-label system-label-two">
            <span>02</span>
            COMPUTATION
          </div>

          <div className="system-label system-label-three">
            <span>03</span>
            ENGINEERING
          </div>

          <div className="system-status">
            <span className="status-dot" />
            SYSTEM ACTIVE
          </div>

          <div className="system-caption">
            <span>NEXORA BIO</span>
            <strong>CAPABILITY ENGINE · 03</strong>
          </div>
        </motion.div>

        <div className="capabilities-list">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="capability-row"
                key={item.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="capability-number">{item.number}</div>

                <div className="capability-main">
                  <div className="capability-title">
                    <div className="capability-icon">
                      <Icon size={19} strokeWidth={1.4} />
                    </div>

                    <h3>{item.title}</h3>
                  </div>

                  <p>{item.description}</p>

                  <div className="capability-bottom">
                    <span>{item.tag}</span>

                    <div className="capability-explore">
                      Explore
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;