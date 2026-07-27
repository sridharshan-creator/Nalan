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
      icon: <UtensilsCrossed size={32} />,
      title: "💍 திருமண விழாக்கள்",
      subtitle: "Wedding Catering",
    },
    {
      icon: <Cake size={32} />,
      title: "🎂 பிறந்தநாள் விழாக்கள்",
      subtitle: "Birthday Parties",
    },
    {
      icon: <Building2 size={32} />,
      title: "🏢 நிறுவன நிகழ்வுகள்",
      subtitle: "Corporate Events",
    },
    {
      icon: <PartyPopper size={32} />,
      title: "🍛 தமிழ் விருந்து",
      subtitle: "Traditional Tamil Meals",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-yellow-500 text-lg mb-2">
            ✨ ❖ ✨
          </p>

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            எங்கள் சேவைகள்
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
            உங்கள் ஒவ்வொரு விழாவிற்கும் சிறந்த Catering Solutions
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            சிறிய குடும்ப விழாவிலிருந்து பெரிய திருமண விழா வரை,
            அனைத்து நிகழ்வுகளுக்கும் தரமான உணவு மற்றும் சிறந்த
            சேவையை வழங்குகிறோம்.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FFF8F0] rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-2xl text-center"
            >
              <div className="text-yellow-500 mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-sm sm:text-base md:text-xl font-bold leading-tight">
                {service.title}
              </h3>

              <p className="text-yellow-500 font-medium mt-2 text-xs sm:text-sm md:text-base">
                {service.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;