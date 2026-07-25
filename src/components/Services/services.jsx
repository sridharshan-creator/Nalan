import { motion } from "framer-motion";
import {
  Cake,
  Building2,
  PartyPopper,
  UtensilsCrossed,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <UtensilsCrossed size={45} />,
      title: "Wedding Catering",
      description:
        "Luxury buffet and traditional meals designed to make your wedding unforgettable.",
    },
    {
      icon: <Cake size={45} />,
      title: "Birthday Parties",
      description:
        "Customized menus and delicious dishes for birthdays of all ages.",
    },
    {
      icon: <Building2 size={45} />,
      title: "Corporate Events",
      description:
        "Professional catering services for meetings, conferences and office celebrations.",
    },
    {
      icon: <PartyPopper size={45} />,
      title: "Outdoor Catering",
      description:
        "Perfect food service for garden parties, beach events and destination functions.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Catering For Every Occasion
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We provide premium catering services with delicious food,
            professional staff and elegant presentation for every celebration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-[#FFF8F0] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;