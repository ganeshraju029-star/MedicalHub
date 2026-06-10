import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top bar: dissolves in with a downward drift and blur */}
      <motion.div
        className="footer-top"
        initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="footer-brand">
          <img
            src="/Logo.png"
            alt="Dr. Jeelan's Medical Hub"
          />
        </div>

        <div className="footer-social">
          <span>Follow Us</span>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Facebook
          </a>
        </div>
      </motion.div>

      <div className="footer-line"></div>

      {/* Main content: contact slides from left, links fan in from right */}
      <div className="footer-main">
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, x: -55, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h4>Reach out to us</h4>

          <div className="telegram-card">
            <MessageCircle size={28} />

            <div>
              <strong>24/7 Medical Support</strong>

              <p>
                Our healthcare team is available to
                assist you whenever you need help.
              </p>
            </div>
          </div>

          <div className="telegram-card">
            <Mail size={28} />

            <div>
              <strong>Email Support</strong>

              <p>
                Contact us for appointments,
                consultations and general inquiries.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, x: 55, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <h4>Services</h4>

            <a>General Consultation</a>
            <a>Cardiology</a>
            <a>Dermatology</a>
            <a>Neurology</a>
          </div>

          <div>
            <h4>Explore</h4>

            <a>Home</a>
            <a>About Us</a>
            <a>Doctors</a>
            <a>FAQs</a>
          </div>

          <div>
            <h4>Support</h4>

            <a>Contact</a>
            <a>Appointments</a>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </motion.div>
      </div>

      {/* Watermark: swells up from below, very slow and ghostly */}
      <motion.h1
        className="footer-watermark"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Dr.Jeelan&apos;s Hub
      </motion.h1>

      <div className="footer-bottom">
        <p>
          © 2026 Dr. Jeelan&apos;s Medical Hub.
          All Rights Reserved.
        </p>

        <div>
          <a>Terms</a>
          <a>Privacy</a>
          <a>Cookies</a>
        </div>
      </div>
    </footer>
  );
}