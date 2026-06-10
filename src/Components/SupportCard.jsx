import { motion } from "framer-motion";
import { Headphones, MessageCircle, Mail, MapPin } from "lucide-react";

export default function SupportCard() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Dr%20Jeelan%20Medical%20Hub";

  return (
    <section className="support-section" id="contact">
      <motion.div
        className="support-card"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3>Contact Us</h3>

        <div className="support-info">
          <Headphones size={22} />
          <div>
            <strong>Hotline:</strong>
            <p>+91 63040 82935</p>
          </div>
        </div>

        <div className="support-info">
          <MessageCircle size={22} />
          <div>
            <strong>SMS / WhatsApp</strong>
            <p>+91 63040 82935</p>
          </div>
        </div>

        <div className="support-info">
          <Mail size={22} />
          <div>
            <strong>Email:</strong>
            <p>support@drjeelanshub.com</p>
          </div>
        </div>

        <div className="support-line"></div>

        <h4>Connect with us</h4>

        <div className="support-socials">
          <a>f</a>
          <a>◎</a>
          <a>𝕏</a>
          <a>▶</a>
        </div>
      </motion.div>

      <motion.div
        className="location-card"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="location-heading">
          <span>Our Clinic</span>
          <h3>Location</h3>
        </div>

        <a
          className="map-preview"
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="map-grid-bg"></div>

          <div className="map-pin-card">
            <MapPin size={34} />
            <div>
              <strong>Dr. Jeelan&apos;s Medical Hub</strong>
              <p>Click to open in Google Maps</p>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}