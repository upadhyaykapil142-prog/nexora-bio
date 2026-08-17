import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo">
        NEXORA<span>BIO</span>
      </div>

      <div className="nav-links">
        <a href="#innovation">Innovation</a>
        <a href="#technology">Technology</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#impact">Impact</a>
      </div>

      <button className="nav-button">
        Explore Research
      </button>
    </motion.nav>
  );
}