import { motion } from "framer-motion";

export default function MedicalEquipment() {
  const equipments = [
    {
      name: "Machine Name One",
      desc: "Advanced medical equipment for accurate diagnosis and patient care.",
      img: "/equipment/equipment-1.png",
    },
    {
      name: "Machine Name Two",
      desc: "Modern healthcare technology designed for safe and reliable treatment.",
      img: "/equipment/equipment-2.png",
    },
    {
      name: "Machine Name Three",
      desc: "High-quality medical system supporting professional clinical services.",
      img: "/equipment/equipment-3.png",
    },
  ];

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
            <span className="equipment-label">Technology</span>
            <h2>Medical equipment</h2>
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
                <img src={item.img} alt={item.name} />
              </div>

              <div className="equipment-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>

                <button type="button">
                  Read more <span>›</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}