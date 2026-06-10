import { motion } from "framer-motion";

export default function Hero({ openInfo, openAppointment }) {
  const stats = [
    "500+ Happy Patients",
    "Expert Healthcare Team",
    "Home Care Support",
    "Personalized Treatment Plans",
  ];

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="happy-pill">★ Trusted Healthcare & Recovery Hub</div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Your Trusted Partner
          <br />
          in Health & Recovery
        </motion.h1>

        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          From advanced physiotherapy to specialized home healthcare, Dr.
          Jeelan&apos;s Medical Hub provides compassionate medical services that
          help patients recover, heal, and live healthier lives.
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((item) => (
            <div className="hero-stat" key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <button className="primary-btn" onClick={openAppointment}>
            Book Appointment
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              openInfo({
                tag: "Services",
                title: "Explore Services",
                description:
                  "Discover our physiotherapy, medical consultation, home care, and recovery support services.",
                items: [
                  "Online consultation",
                  "Home healthcare support",
                  "Recovery and physiotherapy guidance",
                ],
              })
            }
          >
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-box"
        initial={{ opacity: 0, scale: 0.92, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <img
        src="/DR.1.jpeg"
        alt="Dr. Jeelan"
      />
      </motion.div>
    </section>
  );
}