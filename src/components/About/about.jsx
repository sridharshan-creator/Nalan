import { motion } from "framer-motion";

import {
  UtensilsCrossed,
  Award,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import aboutImage from "../../assets/images/about.jpg";

function About() {
  const stats = [
    {
      icon: <UtensilsCrossed size={25} />,
      number: "500+",
      title: "வெற்றிகரமான நிகழ்வுகள்",
    },
    {
      icon: <Award size={25} />,
      number: "10+",
      title: "ஆண்டுகள் அனுபவம்",
    },
    {
      icon: <Users size={25} />,
      number: "100%",
      title: "வாடிக்கையாளர்களின் திருப்தி",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FFFDF9]
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        scroll-mt-[72px]
        md:scroll-mt-[105px]
      "
    >

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <div
        className="
          absolute
          right-[4%]
          sm:right-[8%]
          top-16
          sm:top-20
          text-4xl
          sm:text-5xl
          md:text-7xl
          opacity-10
          sm:opacity-15
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
          sm:left-[6%]
          bottom-12
          sm:bottom-16
          text-3xl
          sm:text-4xl
          md:text-6xl
          opacity-10
          sm:opacity-15
          pointer-events-none
          z-0
        "
      >
        ✨
      </div>


      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -left-32
          w-64
          h-64
          sm:w-80
          sm:h-80
          rounded-full
          bg-yellow-400
          blur-[90px]
          sm:blur-[100px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-[#741B1B]
          blur-[110px]
          sm:blur-[120px]
          pointer-events-none
        "
      />


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
          lg:px-8
        "
      >

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            sm:gap-12
            lg:gap-16
            items-center
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              amount: 0.2,
              once: false,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >

            {/* Section Label */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                amount: 0.5,
                once: false,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                mb-3
              "
            >

              <Sparkles
                size={16}
                className="
                  text-yellow-500
                  flex-shrink-0
                  sm:w-[18px]
                  sm:h-[18px]
                "
              />

              <p
                className="
                  text-yellow-600
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  font-semibold
                  text-xs
                  sm:text-sm
                "
              >
                எங்களை பற்றி
              </p>

            </motion.div>


            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.4,
                once: false,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[2rem]
                sm:text-4xl
                md:text-5xl
                font-bold
                leading-[1.2]
                text-gray-900
              "
            >
              தரமான உணவு
              <span className="text-[#741B1B]">
                {" "}•{" "}
              </span>
              சிறந்த சேவை
            </motion.h2>


            {/* Divider */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 75,
              }}
              viewport={{
                amount: 0.5,
                once: false,
              }}
              transition={{
                duration: 0.45,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                h-[3px]
                bg-yellow-500
                rounded-full
                mt-4
                sm:mt-5
              "
            />


            {/* Paragraph 1 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                mt-5
                sm:mt-7
                text-gray-600
                leading-7
                sm:leading-8
                text-sm
                sm:text-base
              "
            >
              Nalan Catering கடந்த 10+ ஆண்டுகளாக தமிழ்நாடு முழுவதும்
              திருமணங்கள், நிச்சயதார்த்தங்கள், பிறந்தநாள் விழாக்கள் மற்றும்
              Corporate Events ஆகியவற்றிற்கு தரமான உணவு மற்றும் சிறந்த
              சேவையை வழங்கி வருகிறது.
            </motion.p>


            {/* Paragraph 2 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="
                mt-3
                sm:mt-4
                text-gray-600
                leading-7
                sm:leading-8
                text-sm
                sm:text-base
              "
            >
              எங்கள் நோக்கம் சுவையான உணவை மட்டும் வழங்குவது அல்ல,
              உங்கள் விழாவை அனைவரும் நினைவில் வைத்திருக்கும் ஒரு
              அனுபவமாக மாற்றுவதாகும்.
            </motion.p>


            {/* CTA */}

            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.45,
                delay: 0.35,
              }}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                mt-6
                sm:mt-8
                w-full
                sm:w-auto
                bg-yellow-500
                hover:bg-yellow-400
                text-white
                px-6
                sm:px-7
                py-3
                sm:py-3.5
                rounded-full
                font-semibold
                text-sm
                sm:text-base
                shadow-[0_10px_30px_rgba(234,179,8,0.22)]
                transition-colors
                duration-150
                flex
                items-center
                justify-center
                gap-2
              "
            >
              மேலும் அறிய

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-150
                  group-hover:translate-x-1
                "
              />
            </motion.button>

          </motion.div>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              amount: 0.2,
              once: false,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              space-y-5
              sm:space-y-7
              min-w-0
            "
          >

            {/* =================================================
                IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                amount: 0.25,
                once: false,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                sm:rounded-[28px]
                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              "
            >

              <img
                src={aboutImage}
                alt="Nalan Catering"
                className="
                  w-full
                  h-[260px]
                  sm:h-[330px]
                  md:h-[420px]
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />


              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />


              {/* Image Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  amount: 0.3,
                  once: false,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.35,
                }}
                className="
                  absolute
                  bottom-3
                  left-3
                  right-3
                  sm:bottom-5
                  sm:left-5
                  sm:right-5
                  md:left-6
                  md:right-6
                  bg-black/45
                  backdrop-blur-md
                  border
                  border-white/20
                  rounded-xl
                  sm:rounded-2xl
                  px-3
                  py-2.5
                  sm:px-4
                  sm:py-3
                  text-white
                "
              >
                <p className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  font-medium
                ">
                  ✦ பாரம்பரிய சுவை • நவீன சேவை
                </p>
              </motion.div>

            </motion.div>


            {/* =================================================
                STATS
            ================================================== */}

            <div
              className="
                grid
                grid-cols-3
                gap-2
                sm:gap-3
                md:gap-5
              "
            >

              {stats.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    amount: 0.25,
                    once: false,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.025,
                    transition: {
                      duration: 0.16,
                      ease: "easeOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    min-w-0
                    w-full
                    bg-white
                    rounded-xl
                    sm:rounded-2xl
                    md:rounded-3xl
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    p-2.5
                    sm:p-4
                    md:p-6
                    text-center
                    border
                    border-transparent
                    hover:border-yellow-200
                    transition-shadow
                    duration-200
                  "
                >

                  {/* Hover Glow */}

                  <div
                    className="
                      absolute
                      -top-10
                      -right-10
                      w-24
                      h-24
                      rounded-full
                      bg-yellow-400/15
                      blur-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-200
                      pointer-events-none
                    "
                  />


                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: -5,
                    }}
                    transition={{
                      duration: 0.15,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      z-10
                      text-yellow-500
                      flex
                      justify-center
                      mb-1.5
                      sm:mb-3
                    "
                  >
                    {item.icon}
                  </motion.div>


                  {/* Number */}

                  <h3
                    className="
                      relative
                      z-10
                      text-base
                      sm:text-xl
                      md:text-3xl
                      font-bold
                      text-gray-900
                      leading-tight
                    "
                  >
                    {item.number}
                  </h3>


                  {/* Title */}

                  <p
                    className="
                      relative
                      z-10
                      mt-1.5
                      sm:mt-2
                      text-[8px]
                      sm:text-[10px]
                      md:text-sm
                      text-gray-600
                      leading-[1.35]
                      break-words
                    "
                  >
                    {item.title}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;

