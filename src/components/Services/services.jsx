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
      title: "💍 திருமண விழாக்கள்",
      subtitle: "Wedding Catering",
      description:
        "திருமண விழாக்களுக்கான பாரம்பரிய மற்றும் நவீன உணவு வகைகள், சிறந்த பரிமாறும் சேவையுடன்.",
    },
    {
      icon: <Cake size={45} />,
      title: "🎂 பிறந்தநாள் விழாக்கள்",
      subtitle: "Birthday Parties",
      description:
        "பிறந்தநாள் விழாக்களுக்கு சுவையான உணவுகள், Snacks மற்றும் Dessert Special Menu.",
    },
    {
      icon: <Building2 size={45} />,
      title: "🏢 நிறுவன நிகழ்வுகள்",
      subtitle: "Corporate Events",
      description:
        "Office Meetings, Conferences மற்றும் Corporate Functions க்கான Professional Catering Service.",
    },
    {
      icon: <PartyPopper size={45} />,
      title: "🍛 தமிழ் விருந்து",
      subtitle: "Traditional Tamil Meals",
      description:
        "வீடு, Garden, Resort அல்லது Outdoor Venue எதுவாக இருந்தாலும் முழுமையான Catering ஏற்பாடுகள்.",
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
            எங்கள் சேவைகள்
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            உங்கள் ஒவ்வொரு விழாவிற்கும் சிறந்த Catering Solutions
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            சிறிய குடும்ப விழாவிலிருந்து பெரிய திருமண விழா வரை, அனைத்து நிகழ்வுகளுக்கும் தரமான உணவு மற்றும் சிறந்த சேவையை வழங்குகிறோம்.
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

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="text-yellow-600 font-medium mt-2">
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