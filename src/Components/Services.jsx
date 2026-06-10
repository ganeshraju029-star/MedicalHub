import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services({ openAppointment }) {
  const [active, setActive] = useState(0);

  const services = [
    {
      title: "Physiotherapy & Rehabilitation",
      image: "/Services/physiotherapy.png",
      desc: "Advanced recovery-focused physiotherapy programs designed to improve mobility, strength, posture, and long-term function.",
      points: [
        "Advanced Physiotherapy",
        "Sports Injury Rehabilitation",
        "Neurological Rehabilitation",
        "Hemiplegia Rehabilitation",
        "Post-Stroke Recovery Programs",
        "Autism Therapy Support",
      ],
    },
    {
      title: "Pain Management",
      image: "/Services/pain-management.png",
      desc: "Personalized pain relief care for chronic pain, spine-related pain, joint discomfort, and musculoskeletal conditions.",
      points: [
        "Chronic Pain Management",
        "Cervical Neck Pain Management",
        "Lumbar Lower Back Pain Management",
        "Shoulder Pain Management",
        "Elbow Pain Management",
        "Knee Joint Pain Management",
      ],
    },
    {
      title: "Home Healthcare Services",
      image: "/Services/home-healthcare.png",
      desc: "Professional healthcare support delivered at home for patients who need comfort, monitoring, nursing, and recovery care.",
      points: [
        "Home Nursing Care",
        "Primary Healthcare Support",
        "Chronic Disease Monitoring",
        "Diabetic Care at Home",
        "Cancer Palliative Care",
        "Cancer Home Care Services",
      ],
    },
    {
      title: "Surgical Recovery Care",
      image: "/Services/surgical-recovery.png",
      desc: "Guided pre-surgical and post-surgical rehabilitation programs for smoother recovery and improved physical outcomes.",
      points: [
        "Pre-Surgical Physiotherapy",
        "Post-Surgical Rehabilitation",
        "Recovery Monitoring & Support",
      ],
    },
    {
      title: "Specialized Care Programs",
      image: "/Services/specialized-care.png",
      desc: "Focused wellness and rehabilitation programs for lifestyle improvement, posture correction, and long-term health support.",
      points: [
        "Chiropractic Care",
        "Nutrition & Lifestyle Guidance",
        "Personalized Wellness Programs",
      ],
    },
  ];

  const activeService = active !== null ? services[active] : null;

  return (
    <section className="services-modern" id="services">
      <div className="services-modern-top">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-pill">Services</div>

          <h2>
            Quality Service
            <br />
            You Can Get
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          We provide a wide range of healthcare services covering your recovery,
          pain relief, home care, and rehabilitation needs.
        </motion.p>
      </div>

      <div className="services-modern-body">
        <div className="services-slider">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`modern-service-card ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <span className="service-tag">{service.title}</span>

              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              <p>{service.desc}</p>

              <button type="button" className="service-arrow">
                ↗
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.title}
              className="service-detail-panel"
              initial={{ opacity: 0, x: 45, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 45, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                type="button"
                className="service-panel-close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>

              <span>Selected Service</span>

              <h3>{activeService.title}</h3>

              <p>{activeService.desc}</p>

              <div className="service-points">
                {activeService.points.map((point) => (
                  <div key={point}>✓ {point}</div>
                ))}
              </div>

              <button type="button" onClick={openAppointment}>
                Book Appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}