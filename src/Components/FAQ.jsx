import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "Select your doctor, choose a time slot and confirm your appointment.",
    },
    {
      question: "Can I consult online?",
      answer: "Yes, we provide secure online consultations with specialists.",
    },
    {
      question: "Are doctors verified?",
      answer: "All doctors go through strict verification before joining.",
    },
    {
      question: "Do you provide home care support?",
      answer:
        "Yes, our team provides guided home healthcare and recovery support based on patient needs.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <motion.div
        className="faq-left"
        initial={{ opacity: 0, y: -35, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="section-pill">FAQs</div>

        <h2 className="faq-title">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h2>

        <p className="faq-subtitle">
          Find answers to the most common questions about appointments,
          consultations, doctors, and healthcare services.
        </p>
      </motion.div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => setActive(active === index ? null : index)}
            initial={{ opacity: 0, x: 60, clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
            transition={{
              delay: index * 0.12,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <strong>{active === index ? "−" : "+"}</strong>
            </div>

            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}