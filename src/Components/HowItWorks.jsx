import { motion } from "framer-motion";

export default function HowItWorks({ openAppointment }) {
  const steps = [
    {
      num: "01",
      title: "Choose Service",
      desc: "Select the right medical service and share your health concerns with our team.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    },
    {
      num: "02",
      title: "Get Consultation",
      desc: "Receive clear medical guidance from trusted doctors and healthcare experts.",
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=900&auto=format&fit=crop",
    },
    {
      num: "03",
      title: "Start Treatment",
      desc: "Begin a personalized treatment plan designed for your recovery and comfort.",
      img: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=900&auto=format&fit=crop",
    },
    {
      num: "04",
      title: "Recover Better",
      desc: "Get follow-up support, progress tracking, and guidance for long-term wellness.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    },
  ];

  const handleBookAppointment = () => {
    if (typeof openAppointment === "function") {
      openAppointment();
    } else {
      console.error("openAppointment function is not passed to HowItWorks");
    }
  };

  return (
    <section className="how-premium" id="how">
      <div className="how-premium-top">
        {/* Heading: dramatic scale-up from small with a fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="how-label">HOW IT WORKS</span>

          <h2>
            Better Healthcare
            <br />
            in Four Steps
          </h2>
        </motion.div>

        {/* Description: slides in from the right */}
        <motion.p
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          A simple, guided process designed to make your care smooth,
          transparent, and stress-free.
        </motion.p>
      </div>

      <div className="how-premium-grid">
        {steps.map((step, index) => {
          /* Alternating: even cards slide from left, odd from right */
          const fromLeft = index % 2 === 0;
          return (
            <motion.div
              className="how-premium-card"
              key={step.num}
              initial={{
                opacity: 0,
                x: fromLeft ? -70 : 70,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <img src={step.img} alt={step.title} />

              <div className="how-card-overlay"></div>

              <span className="how-big-number">{step.num}</span>

              <div className="how-card-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA bottom: rises with a soft blur-to-clear feel via opacity + y */}
      <motion.div
        className="how-premium-bottom"
        initial={{ opacity: 0, y: 55, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div>
          <h4>READY TO GET STARTED?</h4>
          <p>
            Book your appointment and our team will guide you through the next
            step.
          </p>
        </div>

        <button type="button" onClick={handleBookAppointment}>
          Book Appointment
        </button>
      </motion.div>
    </section>
  );
}