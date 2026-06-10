import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "The experience was smooth, professional and stress-free. Booking a doctor was easier than ever. The entire process felt organized and patient-focused.",
      name: "Priya Sharma",
      role: "Verified Patient",
    },
    {
      text: "Excellent care and support from the entire team. The doctors were highly professional and genuinely concerned about my recovery journey.",
      name: "Ravi Kumar",
      role: "Physiotherapy Patient",
    },
    {
      text: "The online consultation process was extremely convenient. I received expert medical advice without leaving my home.",
      name: "Anjali Reddy",
      role: "Consultation Patient",
    },
    {
      text: "From appointment booking to follow-up care, everything was handled perfectly. Highly recommended for anyone seeking quality healthcare.",
      name: "Mohammed Arif",
      role: "General Checkup Patient",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-pill">Testimonials</div>

      <h2 className="section-title">
        Thousands trust Dr. Jeelan&apos;s Hub.
      </h2>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            className="testimonial-card"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="testimonial-quote">★★★★★</div>

            <p>{review.text}</p>

            <div className="testimonial-user">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}