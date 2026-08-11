import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "../../assets/videos/hero.mp4";

import {
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
              className="
                text-green-400
                shrink-0
                sm:w-[17px]
                sm:h-[17px]
                drop-shadow-[0_2px_8px_rgba(74,222,128,0.5)]
              "
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
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
              "
            >
              தமிழ் பாரம்பரியம் • சுவையின் பெருமை
            </p>

            <Sparkles
              size={14}
              className="
                text-green-400
                shrink-0
                sm:w-[17px]
                sm:h-[17px]
                drop-shadow-[0_2px_8px_rgba(74,222,128,0.5)]
              "
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

              {/* FIRST LINE */}

              <span
                className="
                  block
                  text-white/90
                  text-[2.35rem]
                  leading-tight
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  drop-shadow-[0_5px_18px_rgba(0,0,0,0.75)]
                "
              >
                உங்கள் விழா
              </span>


              {/* SECOND LINE */}

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
                  drop-shadow-[0_5px_18px_rgba(0,0,0,0.75)]
                "
              >
                எங்கள் அன்பான விருந்து
              </motion.span>

            </motion.h1>


            {/* =================================================
                DIVIDER
            ================================================== */}

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
          ================================================== */}

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
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
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
          ================================================== */}

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
                shadow-[0_4px_15px_rgba(0,0,0,0.25)]
              "
            >
              🍛 View Menu
            </motion.button>

          </motion.div>

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
          drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
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

