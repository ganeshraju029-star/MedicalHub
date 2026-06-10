import { motion } from "framer-motion";

export default function Doctors({ openAppointment }) {
  const doctors = [
    {
      name: "Dr. Sarah Lee",
      role: "Cardiologist",
      experience: "12+ Years Experience",
      rating: "4.9",
      patients: "2.5k+ Patients",
      desc: "Specialist in heart care, cardiac checkups, and preventive treatment.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Michael Ray",
      role: "Neurologist",
      experience: "10+ Years Experience",
      rating: "4.8",
      patients: "1.9k+ Patients",
      desc: "Expert in brain, spine, nerve care, migraines, and neurological disorders.",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Anna Smith",
      role: "Dermatologist",
      experience: "8+ Years Experience",
      rating: "4.9",
      patients: "1.6k+ Patients",
      desc: "Advanced skin care, acne treatment, cosmetic dermatology, and hair care.",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="doctors" id="doctors">
      {/* Header: sweeps up from below with a bold scale */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="section-pill">Doctors</div>
        <h2 className="section-title">Meet trusted specialists.</h2>
      </motion.div>

      <div className="doctor-grid">
        {doctors.map((doctor, i) => (
          /* Cards: drop in from above with elastic spring — like falling into place */
          <motion.div
            className="doctor-card"
            key={doctor.name}
            initial={{ opacity: 0, y: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.18,
              duration: 0.9,
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
            viewport={{ once: true }}
          >
            <div className="doctor-flip">
              <div className="doctor-front">
                <img src={doctor.img} alt={doctor.name} />
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
              </div>

              <div className="doctor-back">
                <span className="doctor-speciality">{doctor.role}</span>
                <h3>{doctor.name}</h3>
                <h4>{doctor.experience}</h4>

                <div className="doctor-stats">
                  <div>
                    <strong>★ {doctor.rating}</strong>
                    <small>Rating</small>
                  </div>

                  <div>
                    <strong>{doctor.patients}</strong>
                    <small>Treated</small>
                  </div>
                </div>

                <p>{doctor.desc}</p>

                <button className="doctor-book-btn" onClick={openAppointment}>
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}