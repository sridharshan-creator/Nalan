import { motion } from "framer-motion";

import {
  UtensilsCrossed,
  Cake,
  Building2,
  Home,
  ArrowRight,
} from "lucide-react";

import marriageImage from "../../assets/images/marraigeserv.jpg";
import birthdayImage from "../../assets/images/birthday.jpg";
import corporateImage from "../../assets/images/corporate.jpg";
import houseImage from "../../assets/images/house.jpg";

function Services() {
  const services = [
    {
      image: marriageImage,
      icon: <UtensilsCrossed size={28} />,
      title: "💍 திருமண விழாக்கள்",
      subtitle: "Wedding Catering",
      description: "சிறப்பான திருமண விருந்திற்கு பாரம்பரிய சுவையுடன் சிறந்த சேவை.",
    },
    {
      image: birthdayImage,
      icon: <Cake size={28} />,
      title: "🎂 பிறந்தநாள் விழாக்கள்",
      subtitle: "Birthday Parties",
      description: "உங்கள் பிறந்தநாள் கொண்டாட்டத்தை சுவையான உணவுடன் மறக்க முடியாததாக மாற்றுங்கள்.",
    },
    {
      image: corporateImage,
      icon: <Building2 size={28} />,
      title: "🏢 நிறுவன நிகழ்வுகள்",
      subtitle: "Corporate Events",
      description: "Meetings, conferences மற்றும் corporate events-க்கு தரமான catering.",
    },
    {
      image: houseImage,
      icon: <Home size={28} />,
      title: "🏠 வீட்டு விழாக்கள்",
      subtitle: "Family Functions",
      description: "குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளுக்கு வீட்டுச் சுவையுடன் விருந்து.",
    },
  ];

  return (
    <section
  id="about"
  className="relative overflow-hidden ..."
>
  <div
  className="
    scroll-float
    absolute
    right-[8%]
    top-20
    text-5xl
    md:text-7xl
    opacity-20
    pointer-events-none
    z-0
  "
>
  <div
  className="
    scroll-float
    absolute
    left-[6%]
    bottom-16
    text-4xl
    md:text-6xl
    opacity-15
    pointer-events-none
    z-0
  "
>
  ✨
</div>
  🍃
</div>
      {/* Background decoration */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-yellow-500 text-lg mb-2"
          >
            ✨ ❖ ✨
          </motion.p>

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold text-sm md:text-base">
            எங்கள் சேவைகள்
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
            உங்கள் ஒவ்வொரு விழாவிற்கும்
            <span className="block text-[#741B1B] mt-2">
              சிறந்த Catering Solutions
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            சிறிய குடும்ப விழாவிலிருந்து பெரிய திருமண விழா வரை,
            அனைத்து நிகழ்வுகளுக்கும் தரமான உணவு மற்றும் சிறந்த
            சேவையை வழங்குகிறோம்.
          </p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">

          {services.map((service, index) => (

            <motion.div
              key={service.title}

              initial={{
                opacity: 0,
                y: 55,
                scale: 0.94,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                amount: 0.18,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -10,
                scale: 1.025,
                transition: {
                  duration: 0.16,
                  ease: "easeOut",
                },
              }}

              whileTap={{
                scale: 0.97,
                transition: {
                  duration: 0.1,
                },
              }}

              className="
                group
                relative
                overflow-hidden
                bg-[#FFF8F0]
                rounded-[28px]
                shadow-lg
                hover:shadow-2xl
                border
                border-transparent
                hover:border-yellow-200
                cursor-pointer
                transition-shadow
                duration-200
              "
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">

                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />

                {/* Image dark overlay */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                  pointer-events-none
                " />

                {/* Golden shine */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                  pointer-events-none
                " />

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: -6,
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.16,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    bottom-4
                    left-4
                    w-12
                    h-12
                    rounded-2xl
                    bg-yellow-500
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  "
                >
                  {service.icon}
                </motion.div>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-5 md:p-6">

                <h3 className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-bold
                  leading-tight
                  text-gray-900
                ">
                  {service.title}
                </h3>

                <p className="
                  text-yellow-600
                  font-semibold
                  mt-2
                  text-xs
                  sm:text-sm
                ">
                  {service.subtitle}
                </p>

                <p className="
                  text-gray-600
                  text-xs
                  sm:text-sm
                  leading-6
                  mt-3
                ">
                  {service.description}
                </p>

                {/* Learn more */}

                <div className="
                  flex
                  items-center
                  gap-2
                  mt-4
                  text-[#741B1B]
                  text-xs
                  sm:text-sm
                  font-semibold
                ">

                  <span>
                    மேலும் அறிய
                  </span>

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-150
                      group-hover:translate-x-1.5
                    "
                  />

                </div>

                {/* Animated bottom line */}

                <motion.div
                  initial={{ width: "20%" }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    h-[2px]
                    bg-yellow-500
                    mt-4
                    rounded-full
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;