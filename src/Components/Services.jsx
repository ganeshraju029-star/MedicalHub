import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Physiotherapy & Rehabilitation",
      image: "/Services/physiotherapy.png",
    },
    {
      title: "Pain Management",
      image: "/Services/pain-management.png",
    },
    {
      title: "Home Healthcare Services",
      image: "/Services/home-healthcare.png",
    },
    {
      title: "Surgical Recovery Care",
      image: "/Services/surgical-recovery.png",
    },
    {
      title: "Specialized Care Programs",
      image: "/Services/specialized-care.png",
    },
  ];

  return (
    <section className="services-modern" id="services">
      <div className="services-modern-top">
        <div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Quality Service
            <br />
            You Can Get
          </h2>
        </div>

        <p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We provide a wide range of healthcare services covering your recovery,
          pain relief, home care, and rehabilitation needs.
        </p>
      </div>

      <div className="services-modern-body">
        <div className="services-slider">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="modern-service-card"
              initial={{ opacity: 0, y: 55, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              <a href="tel:+919494403103" className="service-book-btn">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}