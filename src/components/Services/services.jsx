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
      icon: <UtensilsCrossed size={24} />,
      title: "💍 திருமண விழாக்கள்",
      subtitle: "Wedding Catering",
      description:
        "சிறப்பான திருமண விருந்திற்கு பாரம்பரிய சுவையுடன் சிறந்த சேவை.",
    },
    {
      image: birthdayImage,
      icon: <Cake size={24} />,
      title: "🎂 பிறந்தநாள் விழாக்கள்",
      subtitle: "Birthday Parties",
      description:
        "உங்கள் பிறந்தநாள் கொண்டாட்டத்தை சுவையான உணவுடன் மறக்க முடியாததாக மாற்றுங்கள்.",
    },
    {
      image: corporateImage,
      icon: <Building2 size={24} />,
      title: "🏢 நிறுவன நிகழ்வுகள்",
      subtitle: "Corporate Events",
      description:
        "Meetings, conferences மற்றும் corporate events-க்கு தரமான catering.",
    },
    {
      image: houseImage,
      icon: <Home size={24} />,
      title: "🏠 வீட்டு விழாக்கள்",
      subtitle: "Family Functions",
      description:
        "குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளுக்கு வீட்டுச் சுவையுடன் விருந்து.",
    },
  ];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[280px]
          sm:w-[400px]
          md:w-[500px]
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          bg-yellow-400/10
          blur-[90px]
          md:blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      {/* Floating decorations */}

      <div
        className="
          absolute
          right-[4%]
          top-20
          text-4xl
          sm:text-5xl
          md:text-7xl
          opacity-10
          pointer-events-none
          z-0
        "
      >
        🍃
      </div>

      <div
        className="
          absolute
          left-[4%]
          bottom-16
          text-3xl
          sm:text-4xl
          md:text-6xl
          opacity-10
          pointer-events-none
          z-0
        "
      >
        ✨
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-8
        "
      >

        {/* =================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.2,
            once: false,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-center
            mb-10
            sm:mb-12
            md:mb-16
          "
        >

          {/* Decorative symbol */}

          <motion.p
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              amount: 0.5,
              once: false,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              text-yellow-500
              text-base
              sm:text-lg
              mb-2
            "
          >
            ✨ ❖ ✨
          </motion.p>

          {/* Label */}

          <p
            className="
              text-yellow-500
              uppercase
              tracking-[2px]
              sm:tracking-[4px]
              font-semibold
              text-xs
              sm:text-sm
              md:text-base
            "
          >
            எங்கள் சேவைகள்
          </p>

          {/* Heading */}

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl
              font-bold
              leading-tight
              mt-3
              sm:mt-4
              text-gray-900
            "
          >
            உங்கள் ஒவ்வொரு விழாவிற்கும்

            <span
              className="
                block
                text-[#741B1B]
                mt-1.5
                sm:mt-2
              "
            >
              சிறந்த Catering Solutions
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-gray-600
              mt-4
              sm:mt-6
              max-w-3xl
              mx-auto
              leading-7
              sm:leading-8
              text-sm
              sm:text-base
              px-1
            "
          >
            சிறிய குடும்ப விழாவிலிருந்து பெரிய திருமண விழா வரை,
            அனைத்து நிகழ்வுகளுக்கும் தரமான உணவு மற்றும் சிறந்த
            சேவையை வழங்குகிறோம்.
          </p>

        </motion.div>


        {/* =================================================
            SERVICE CARDS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-5
            md:gap-7
          "
        >

          {services.map((service, index) => (

            <motion.div
              key={service.title}

              initial={{
                opacity: 0,
                y: 45,
                scale: 0.97,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                amount: 0.15,
                once: false,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.16,
                  ease: "easeOut",
                },
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                group
                relative
                overflow-hidden
                bg-[#FFF8F0]
                rounded-[22px]
                sm:rounded-[26px]
                md:rounded-[28px]
                shadow-lg
                hover:shadow-2xl
                border
                border-transparent
                hover:border-yellow-200
                cursor-pointer
                transition-shadow
                duration-200
                min-w-0
              "
            >

              {/* ===========================================
                  IMAGE
              ============================================ */}

              <div
                className="
                  relative
                  h-52
                  sm:h-56
                  md:h-56
                  overflow-hidden
                "
              >

                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />

                {/* Dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* Golden shine */}

                <div
                  className="
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
                  "
                />

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: -6,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.16,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    bottom-3
                    left-3
                    sm:bottom-4
                    sm:left-4
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    rounded-xl
                    sm:rounded-2xl
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


              {/* ===========================================
                  CONTENT
              ============================================ */}

              <div
                className="
                  p-4
                  sm:p-5
                  md:p-6
                "
              >

                {/* Title */}

                <h3
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    font-bold
                    leading-snug
                    text-gray-900
                  "
                >
                  {service.title}
                </h3>

                {/* Subtitle */}

                <p
                  className="
                    text-yellow-600
                    font-semibold
                    mt-1.5
                    sm:mt-2
                    text-xs
                    sm:text-sm
                  "
                >
                  {service.subtitle}
                </p>

                {/* Description */}

                <p
                  className="
                    text-gray-600
                    text-xs
                    sm:text-sm
                    leading-6
                    mt-2.5
                    sm:mt-3
                  "
                >
                  {service.description}
                </p>

                {/* Learn more */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-4
                    text-[#741B1B]
                    text-xs
                    sm:text-sm
                    font-semibold
                  "
                >
                  <span>
                    மேலும் அறிய
                  </span>

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-150
                      group-hover:translate-x-1.5
                    "
                  />
                </div>

                {/* Bottom line */}

                <motion.div
                  initial={{
                    width: "20%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    h-[2px]
                    bg-yellow-500
                    mt-3
                    sm:mt-4
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

