import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "../../assets/videos/hero.mp4";

import {
  Users,
  Trophy,
  UtensilsCrossed,
  Leaf,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Hero() {
  const { scrollY } = useScroll();

  /* =====================================================
     PARALLAX VALUES
  ====================================================== */

  const backgroundY = useTransform(
    scrollY,
    [0, 800],
    [0, 180]
  );

  const backgroundScale = useTransform(
    scrollY,
    [0, 800],
    [1, 1.12]
  );

  const contentY = useTransform(
    scrollY,
    [0, 700],
    [0, -120]
  );

  const contentOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0.15]
  );

  const floatingLeftY = useTransform(
    scrollY,
    [0, 700],
    [0, -210]
  );

  const floatingRightY = useTransform(
    scrollY,
    [0, 700],
    [0, -150]
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight =
        window.innerWidth < 768 ? 72 : 105;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
  id="home"
  className="
    relative
    min-h-[100svh]
    overflow-hidden
    bg-[#07150d]
    tamil-font
  "
>

      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="
          absolute
          inset-[-8%]
          z-0
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>


      {/* =====================================================
          CINEMATIC OVERLAY
      ====================================================== */}

      <div
       className="
  absolute
  inset-0
  z-[1]
  bg-black/10
"
      />

      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/50
via-black/10
to-[#07150d]/75
        "
      />


      {/* =====================================================
          GREEN ATMOSPHERIC GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-160px]
          left-1/2
          -translate-x-1/2
          w-[320px]
          h-[320px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-green-500/30
          blur-[100px]
          sm:blur-[130px]
          z-[2]
          pointer-events-none
        "
      />


      {/* =====================================================
          FLOATING DECORATION — LEFT
      ====================================================== */}

      <motion.div
        style={{ y: floatingLeftY }}
        animate={{
          rotate: [-4, 4, -4],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[3%]
          sm:left-[5%]
          md:left-[7%]
          top-[28%]
          z-[3]
          pointer-events-none
          hidden
          sm:block
        "
      >
        <div
          className="
            w-12
            h-12
            sm:w-16
            sm:h-16
            md:w-24
            md:h-24
            rounded-[20px]
            md:rounded-[28px]
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            shadow-2xl
            flex
            items-center
            justify-center
            text-2xl
            sm:text-3xl
            md:text-5xl
          "
        >
          🍃
        </div>
      </motion.div>


      {/* =====================================================
          FLOATING DECORATION — RIGHT
      ====================================================== */}

      <motion.div
        style={{ y: floatingRightY }}
        animate={{
          rotate: [4, -4, 4],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[3%]
          sm:right-[5%]
          md:right-[8%]
          top-[32%]
          z-[3]
          pointer-events-none
          hidden
          sm:block
        "
      >
        <div
          className="
            w-12
            h-12
            sm:w-16
            sm:h-16
            md:w-24
            md:h-24
            rounded-[20px]
            md:rounded-[28px]
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            shadow-2xl
            flex
            items-center
            justify-center
            text-2xl
            sm:text-3xl
            md:text-5xl
          "
        >
          🍛
        </div>
      </motion.div>


      {/* =====================================================
          FLOATING ORBS
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[14%]
          sm:right-[18%]
          top-[18%]
          w-3
          h-3
          sm:w-5
          sm:h-5
          md:w-7
          md:h-7
          rounded-full
          bg-yellow-400
          shadow-[0_0_30px_rgba(250,204,21,0.8)]
          z-[3]
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[15%]
          sm:left-[18%]
          bottom-[27%]
          w-2
          h-2
          sm:w-4
          sm:h-4
          md:w-5
          md:h-5
          rounded-full
          bg-green-400
          shadow-[0_0_25px_rgba(74,222,128,0.8)]
          z-[3]
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-10
          min-h-[100svh]
          flex
          items-center
          justify-center
          px-4
          sm:px-6
          pt-[92px]
          sm:pt-28
          pb-16
          sm:pb-20
        "
      >

        <div className="w-full max-w-6xl mx-auto">

          {/* =================================================
              TOP TAGLINE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              flex
              items-center
              justify-center
              gap-2
              sm:gap-3
              mb-5
              sm:mb-6
            "
          >

            <Sparkles
              size={14}
              className="text-green-400 shrink-0 sm:w-[17px] sm:h-[17px]"
            />

            <p
              className="
                text-green-300
                text-[10px]
                sm:text-sm
                md:text-base
                font-semibold
                tracking-[1px]
                sm:tracking-[2px]
                text-center
                leading-relaxed
              "
            >
              தமிழ் பாரம்பரியம் • சுவையின் பெருமை
            </p>

            <Sparkles
              size={14}
              className="text-green-400 shrink-0 sm:w-[17px] sm:h-[17px]"
            />

          </motion.div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <div className="text-center">

            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                leading-[1.08]
                sm:leading-[1.05]
                font-semibold
                tamil-font
              "
            >

              <span
                className="
                  block
                  text-white/90
                  text-[2.35rem]
                  leading-tight
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]
                "
              >
                உங்கள் விழா
              </span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  block
                  text-green-400/90
                  text-[2.15rem]
                  leading-tight
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  mt-2
                  sm:mt-3
                  drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]
                "
              >
                எங்கள் அன்பான விருந்து
              </motion.span>

            </motion.h1>


            {/* Divider */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 90,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="
                h-[2px]
                sm:h-[3px]
                bg-green-400
                rounded-full
                mx-auto
                mt-5
                sm:mt-7
                shadow-[0_0_15px_rgba(74,222,128,0.5)]
              "
            />

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.05,
            }}
            className="
              text-white
              text-xs
              sm:text-base
              md:text-lg
              max-w-3xl
              mx-auto
              mt-5
              sm:mt-7
              leading-[1.7]
              sm:leading-relaxed
              text-center
              drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]
              px-1
              sm:px-0
            "
          >
            திருமணம், பிறந்தநாள் விழா, நிறுவன நிகழ்வுகள் மற்றும்
            அனைத்து விசேஷ நிகழ்வுகளுக்கும் சுவையான உணவு,
            சிறந்த சேவை மற்றும் மறக்க முடியாத அனுபவம்.
          </motion.p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.2,
            }}
            className="
              mt-7
              sm:mt-9
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-3
              sm:gap-4
              px-2
              sm:px-0
            "
          >

            {/* BOOK EVENT */}

            <motion.button
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => scrollToSection("contact")}
              className="
                group
                w-full
                sm:w-auto
                min-h-[48px]
                sm:min-h-[56px]
                bg-green-600
                hover:bg-green-500
                text-white
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-full
                font-semibold
                text-sm
                sm:text-base
                shadow-[0_12px_40px_rgba(22,163,74,0.35)]
                transition-colors
                duration-200
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span>📞 Book Your Event</span>

              <ArrowRight
                size={17}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </motion.button>


            {/* MENU */}

            <motion.button
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => scrollToSection("menu")}
              className="
                w-full
                sm:w-auto
                min-h-[48px]
                sm:min-h-[56px]
                border
                border-white/70
                text-white
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-full
                font-semibold
                text-sm
                sm:text-base
                bg-black/20
                hover:bg-green-600/30
                backdrop-blur-md
                transition-all
                duration-200
                flex
                items-center
                justify-center
                gap-2
              "
            >
              🍛 View Menu
            </motion.button>

          </motion.div>


          {/* =================================================
              FLOATING STATS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.4,
            }}
            className="
              w-full
              max-w-5xl
              mx-auto
              mt-7
              sm:mt-10
            "
          >

            <div
              className="
                bg-black/35
                backdrop-blur-xl
                border
                border-white/15
                rounded-2xl
                sm:rounded-3xl
                overflow-hidden
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >

              <div className="grid grid-cols-2 md:grid-cols-4">

                {/* STAT 1 */}

                <motion.div
                  whileHover={{
                    y: -5,
                    backgroundColor:
                      "rgba(34,197,94,0.12)",
                  }}
                  className="
                    p-3
                    sm:p-4
                    md:p-5
                    text-center
                    border-r
                    border-b
                    md:border-b-0
                    border-white/10
                  "
                >

                  <Users
                    size={22}
                    className="
                      mx-auto
                      text-green-400
                      mb-1.5
                      sm:mb-2
                      sm:w-[27px]
                      sm:h-[27px]
                    "
                  />

                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    50,000+
                  </h3>

                  <p className="text-gray-200 text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                    வெற்றிகரமான நிகழ்வுகள்
                  </p>

                </motion.div>


                {/* STAT 2 */}

                <motion.div
                  whileHover={{
                    y: -5,
                    backgroundColor:
                      "rgba(34,197,94,0.12)",
                  }}
                  className="
                    p-3
                    sm:p-4
                    md:p-5
                    text-center
                    md:border-r
                    border-b
                    md:border-b-0
                    border-white/10
                  "
                >

                  <Trophy
                    size={22}
                    className="
                      mx-auto
                      text-green-400
                      mb-1.5
                      sm:mb-2
                      sm:w-[27px]
                      sm:h-[27px]
                    "
                  />

                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                      40+
                  </h3>

                  <p className="text-gray-200 text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                    ஆண்டுகள் அனுபவம்
                  </p>

                </motion.div>


                {/* STAT 3 */}

                <motion.div
                  whileHover={{
                    y: -5,
                    backgroundColor:
                      "rgba(34,197,94,0.12)",
                  }}
                  className="
                    p-3
                    sm:p-4
                    md:p-5
                    text-center
                    border-r
                    border-white/10
                  "
                >

                  <UtensilsCrossed
                    size={22}
                    className="
                      mx-auto
                      text-green-400
                      mb-1.5
                      sm:mb-2
                      sm:w-[27px]
                      sm:h-[27px]
                    "
                  />

                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    100%
                  </h3>

                  <p className="text-gray-200 text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                    வாடிக்கையாளர் திருப்தி
                  </p>

                </motion.div>


                {/* STAT 4 */}

                <motion.div
                  whileHover={{
                    y: -5,
                    backgroundColor:
                      "rgba(34,197,94,0.12)",
                  }}
                  className="
                    p-3
                    sm:p-4
                    md:p-5
                    text-center
                  "
                >

                  <Leaf
                    size={22}
                    className="
                      mx-auto
                      text-green-400
                      mb-1.5
                      sm:mb-2
                      sm:w-[27px]
                      sm:h-[27px]
                    "
                  />

                  <p className="
                    text-white
                    text-[9px]
                    sm:text-xs
                    md:text-sm
                    font-semibold
                    leading-relaxed
                  ">
                    சுத்தமான & தரமான
                    <br />
                    பாரம்பரிய உணவு
                  </p>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>


      {/* =====================================================
          EXTRA FLOATING ELEMENTS — DESKTOP ONLY
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -35, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          right-[10%]
          z-[4]
          hidden
          lg:block
          pointer-events-none
        "
      >

        <div
          className="
            px-5
            py-3
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            shadow-2xl
          "
        >
          <span className="text-2xl">🍽️</span>

          <span className="ml-2 text-sm font-semibold">
            பாரம்பரிய சுவை
          </span>
        </div>

      </motion.div>


      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[22%]
          left-[9%]
          z-[4]
          hidden
          lg:block
          pointer-events-none
        "
      >

        <div
          className="
            px-5
            py-3
            rounded-2xl
            bg-green-900/40
            backdrop-blur-xl
            border
            border-green-300/20
            text-white
            shadow-2xl
          "
        >
          <span className="text-2xl">🌿</span>

          <span className="ml-2 text-sm font-semibold">
            இயற்கையான பொருட்கள்
          </span>
        </div>

      </motion.div>


      {/* =====================================================
          BOTTOM GREEN FADE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          sm:h-32
          bg-gradient-to-t
          from-[#07150d]
          to-transparent
          z-[5]
          pointer-events-none
        "
      />


      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 0.7,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          z-20
          hidden
          md:flex
          flex-col
          items-center
          text-white/70
          cursor-pointer
        "
      >

        <span
          className="
            text-[9px]
            tracking-[4px]
            uppercase
            mb-1
          "
        >
          Explore
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={22} />
        </motion.div>

      </motion.button>

    </section>
  );
}

export default Hero;

