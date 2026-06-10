import { motion } from "framer-motion";

export default function About({ openInfo }) {
  const stats = [
    { number: "10k+", label: "Happy Patients" },
    { number: "1.5k+", label: "Appointments" },
    { number: "24.1k+", label: "Treatments" },
  ];

  const cards = [
    {
      title: "Patient Care",
      desc: "Personalized treatment plans focused on comfort, trust, and long-term wellness.",
      active: true,
    },
    {
      title: "Expert Doctors",
      desc: "Consult qualified medical professionals with reliable diagnosis and care.",
    },
    {
      title: "About Us",
      desc: "Learn more about Dr. Jeelan's Medical Hub and our commitment to patient-centered healthcare.",
      wide: true,
    },
  ];

  const handleReadMore = (card) => {
    if (card.title === "About Us") {
      openInfo({
        tag: "About Us",
        title: "About Dr. Jeelan's Medical Hub",
        description:
          "Dr. Jeelan's Medical Hub is dedicated to providing the highest quality healthcare services with a patient-centered approach. We offer comprehensive medical and rehabilitation solutions designed to improve mobility, manage pain, enhance recovery, and promote overall well-being.",
        items: [
          "Advanced Physiotherapy Services",
          "Home Nursing Care",
          "Cancer Palliative Care",
          "Diabetic Care & Chronic Disease Monitoring",
          "Pre & Post Surgical Rehabilitation",
          "Pain Management & Recovery Programs",
        ],
      });
    } else {
      openInfo({
        tag: "About",
        title: card.title,
        description: card.desc,
        items: [
          "Patient-first care",
          "Professional medical guidance",
          "Trusted healthcare support",
        ],
      });
    }
  };

  return (
    <section className="about-pro" id="about">
      <div className="about-pro-top">
        <motion.div
          initial={{ opacity: 0, x: -60, skewX: -4 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="about-pro-label">About Our Clinic</p>

          <h2>
            Modern Healthcare
            <br />
            Designed Around You
          </h2>
        </motion.div>

        <div className="about-pro-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.18,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-pro-bottom">
        <motion.div
          className="about-pro-image"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <img src="/about-clinic.jpg" alt="Dr. Jeelan consulting patient" />

          <div className="about-image-badge">
            <span>✓</span>
            Real Patient Consultation
          </div>
        </motion.div>

        <div className="about-pro-cards">
          {cards.map((card, index) => (
            <motion.div
              className={`about-pro-card ${card.active ? "active" : ""} ${
                card.wide ? "wide" : ""
              }`}
              key={card.title}
              initial={{ opacity: 0, y: 55, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: index * 0.14,
                duration: 0.7,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              viewport={{ once: true }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              <button type="button" onClick={() => handleReadMore(card)}>
                Read More <span>›</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}