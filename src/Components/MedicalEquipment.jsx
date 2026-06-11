import { motion } from "framer-motion";

const equipments = [
  {
    name: "Physiotherapy Equipment",
    desc: "Advanced rehabilitation machines supporting recovery, mobility restoration, and muscle strengthening.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        <path d="M3 20h18"/>
      </svg>
    ),
  },
  {
    name: "Diagnostic Imaging",
    desc: "High-precision imaging systems for accurate diagnosis, nerve assessment, and clinical evaluations.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h10M7 12h6"/>
      </svg>
    ),
  },
  {
    name: "Home Care Devices",
    desc: "Portable medical equipment enabling professional-grade healthcare monitoring and therapy at home.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export default function MedicalEquipment() {
  return (
    <section className="equipment-section" id="equipment">
      <div className="equipment-container">
        <motion.div
          className="equipment-top"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <div className="section-pill">Equipment</div>
            <h2>Medical Equipment</h2>
          </div>

          <p>
            Premium diagnostic and care equipment supporting trusted healthcare
            services at Dr. Jeelan&apos;s Medical Hub.
          </p>
        </motion.div>

        <div className="equipment-grid">
          {equipments.map((item, index) => (
            <motion.div
              className="equipment-card"
              key={item.name}
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <div className="equipment-image">
                <div className="equipment-icon">{item.icon}</div>
              </div>

              <div className="equipment-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}