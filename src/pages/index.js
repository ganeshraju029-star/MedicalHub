import { useState } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import HowItWorks from "../Components/HowItWorks";
import Doctors from "../Components/Doctors";
import Marquee from "../Components/Marquee";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import InfoModal from "../Components/InfoModal";
import AppointmentModal from "../Components/AppointmentModal";
import SupportCard from "../Components/SupportCard";
import MedicalEquipment from "../components/MedicalEquipment";

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
        <MedicalEquipment />
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