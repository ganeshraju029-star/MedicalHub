import { motion } from "framer-motion";

export default function Navbar({ openAppointment }) {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="navbar-left">
        <img
          src="/Logo.png"
          alt="Dr. Jeelan's Medical Hub"
          className="navbar-logo"
        />
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#how">How It Works</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="book-btn" onClick={openAppointment}>
        Book Appointment
      </button>
    </motion.nav>
  );
}