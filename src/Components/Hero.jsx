import { motion } from "framer-motion";

export default function Hero({ openAppointment }) {
  const stats = [
    "500+ Happy Patients",
    "Expert Healthcare Team",
    "Home Care Support",
    "Personalized Treatment Plans",
  ];

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="happy-pill">★ Trusted Healthcare & Recovery Hub</div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Trusted Partner
          <br />
          in Health & Recovery
        </motion.h1>

        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          From advanced physiotherapy to specialized home healthcare, Dr.
          Jeelan&apos;s Medical Hub provides compassionate medical services that
          help patients recover, heal, and live healthier lives.
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
        >
          <button
          className="primary-btn"
          onClick={() => {
          window.location.href = "tel:+919494403103";
        }}
        >
           Book Appointment
          </button>

          <button className="secondary-btn" onClick={scrollToServices}>
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-box"
        initial={{ opacity: 0, scale: 0.88, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
      >
        <img
          src="/DR.1.png"
          alt="Dr. Jeelan"
          className="hero-doctor-image"
        />
      </motion.div>
    </section>
  );
}