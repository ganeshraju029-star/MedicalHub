import { motion } from "framer-motion";

const equipments = [
  {
    name: "BTL",
    desc: "BTL is a leading rehabilitation device offering electrotherapy, laser therapy, and shockwave treatment to accelerate tissue healing, reduce pain, and improve muscle function.",
    img: "/BTL.png",
  },
  {
    name: "TENS Ultrasound",
    desc: "Combines Transcutaneous Electrical Nerve Stimulation with therapeutic ultrasound to provide deep tissue pain relief, reduce inflammation, and promote faster recovery.",
    img: "/TENS Ultrasound.png",
  },
  {
    name: "Comba",
    desc: "The Comba unit delivers combination therapy using ultrasound and electrotherapy simultaneously, enhancing treatment efficiency for musculoskeletal and soft tissue conditions.",
    img: "/Comba.png",
  },
  {
    name: "Rehes",
    desc: "Rehes is an advanced rehabilitation system designed for neuromuscular re-education, strength training, and post-surgical recovery with precision-controlled resistance.",
    img: "/Rehes.png",
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
                <img src={item.img} alt={item.name} />
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