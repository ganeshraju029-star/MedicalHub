import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Doctors from "../components/Doctors";
import Marquee from "../components/Marquee";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import InfoModal from "../components/InfoModal";
import AppointmentModal from "../components/AppointmentModal";
import SupportCard from "../components/SupportCard";

export default function Home() {
  const [activeInfo, setActiveInfo] = useState(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const openInfo = (info) => {
    setActiveInfo(info);
  };

  const closeInfo = () => {
    setActiveInfo(null);
  };

  const openAppointment = () => {
    setAppointmentOpen(true);
  };

  const closeAppointment = () => {
    setAppointmentOpen(false);
  };

  return (
    <main className="site-bg">
      <div className="website-card">
        <Navbar openInfo={openInfo} openAppointment={openAppointment} />
        <Hero openInfo={openInfo} openAppointment={openAppointment} />
        <About openInfo={openInfo} />
        <Services openInfo={openInfo} openAppointment={openAppointment} />
        <HowItWorks openAppointment={openAppointment} />
        <Doctors openInfo={openInfo} openAppointment={openAppointment} />
        <Marquee />
        <Testimonials />
        <FAQ />
        <SupportCard />
        <Footer openInfo={openInfo} />
      </div>

      <InfoModal activeInfo={activeInfo} onClose={closeInfo} />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={closeAppointment}
      />
    </main>
  );
}