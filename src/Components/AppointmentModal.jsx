import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppointmentModal({ isOpen, onClose }) {
  const [selectedService, setSelectedService] = useState("Physiotherapy");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Jeelan");
  const [selectedSlot, setSelectedSlot] = useState("10:30 AM");

  const services = [
    "Physiotherapy",
    "Online Consultation",
    "Home Care",
    "Emergency Care",
    "General Checkup",
  ];

  const doctors = [
    "Dr. Jeelan",
    "Dr. Sarah Lee",
    "Dr. Michael Ray",
    "Dr. Anna Smith",
  ];

  const slots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:30 PM",
    "04:00 PM",
    "06:30 PM",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="appointment-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="appointment-modal"
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.92 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <button className="appointment-close" onClick={onClose}>
              ×
            </button>

            <div className="appointment-left">
              <span className="appointment-tag">Premium Booking</span>

              <h2>
                Book your
                <br />
                appointment
              </h2>

              <p>
                Choose your service, doctor, preferred date and available time
                slot. Our team will confirm your booking shortly.
              </p>

              <div className="appointment-benefits">
                <div>✓ Verified doctors</div>
                <div>✓ Fast confirmation</div>
                <div>✓ Flexible time slots</div>
                <div>✓ Follow-up support</div>
              </div>
            </div>

            <div className="appointment-form">
              <label>Choose Service</label>
              <div className="option-grid">
                {services.map((service) => (
                  <button
                    key={service}
                    className={selectedService === service ? "active" : ""}
                    onClick={() => setSelectedService(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <label>Select Doctor</label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                {doctors.map((doctor) => (
                  <option key={doctor}>{doctor}</option>
                ))}
              </select>

              <label>Preferred Date</label>
              <input type="date" />

              <label>Available Time Slots</label>
              <div className="slot-grid">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    className={selectedSlot === slot ? "active" : ""}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="patient-grid">
                <input type="text" placeholder="Patient name" />
                <input type="tel" placeholder="Phone number" />
              </div>

              <textarea placeholder="Describe your concern briefly"></textarea>

              <button className="confirm-appointment-btn">
                Confirm Appointment
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}