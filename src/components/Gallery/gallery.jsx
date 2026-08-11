import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";

import backgroundImage from "../../assets/images/IMG-20260803-WA0010.jpg";
import photo1 from "../../assets/images/IMG-20260803-WA0011.jpg";
import photo2 from "../../assets/images/IMG-20260803-WA0014.jpg";

import video1 from "../../assets/videos/VID-20260803-WA0030.mp4";
import video2 from "../../assets/videos/VID-20260803-WA0024.mp4";

function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="
        relative
        overflow-hidden
        min-h-[850px]
        md:min-h-[900px]
        bg-gradient-to-b
        from-white
        via-[#F5FBF7]
        to-[#EAF7EE]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Nalan Catering wedding and event catering celebration"
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            scale-105
            opacity-[0.12]
          "
        />

        {/* Soft green overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-white/95
            via-[#F5FBF7]/90
            to-[#EAF7EE]/95
          "
        />
      </div>

      {/* =====================================================
          DECORATIVE GREEN GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-green-400
          blur-[130px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.05, 0.10, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-green-700
          blur-[130px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          min-h-[850px]
          md:min-h-[900px]
          px-5
          md:px-8
          flex
          items-center
          justify-center
        "
      >

        {/* =================================================
            CENTER TEXT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-30
            text-center
            max-w-2xl
            px-4
          "
        >

          {/* Label */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mb-5
            "
          >
            <Sparkles
              size={17}
              className="text-green-600"
            />

            <p
              className="
                text-green-700
                text-xs
                md:text-sm
                font-semibold
                tracking-[3px]
              "
            >
              எங்கள் நினைவுகள்
            </p>

            <Sparkles
              size={17}
              className="text-green-600"
            />
          </div>


          {/* Main Heading */}

          <h2
            id="gallery-heading"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-gray-900
              leading-tight
              drop-shadow-sm
            "
          >
            ஒவ்வொரு விழாவும்

            <br />

            <span className="text-[#166534]">
              ஒரு இனிய நினைவு
            </span>
          </h2>


          {/* SEO-friendly Description */}

          <p
            className="
              mt-6
              text-gray-600
              text-sm
              md:text-base
              leading-7
              max-w-xl
              mx-auto
            "
          >
            நளன் கேட்டரிங் வழங்கும் திருமணம், பிறந்தநாள்,
            குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளின்
            அழகான தருணங்களை காணுங்கள். தரமான உணவு,
            பாரம்பரிய சுவை மற்றும் சிறந்த catering service
            மூலம் உங்கள் விழாவை மறக்க முடியாத நினைவாக
            மாற்றுகிறோம்.
          </p>


          {/* Green divider */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 90,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              h-[3px]
              bg-green-500
              rounded-full
              mx-auto
              mt-6
            "
          />


          {/* Bottom text */}

          <p
            className="
              mt-6
              text-green-700/70
              text-xs
              md:text-sm
              font-medium
            "
          >
            ✦ தமிழ் பாரம்பரியம் • சுவையின் பெருமை ✦
          </p>

        </motion.div>


        {/* =================================================
            FLOATING IMAGE 1 — LEFT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            rotate: -8,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: -5,
          }}
          viewport={{
            once: true,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [-5, -3, -5],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 40,
          }}
          className="
            absolute
            z-20
            left-4
            md:left-8
            lg:left-16
            top-[15%]
            w-32
            sm:w-40
            md:w-52
            lg:w-60
            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-200
            shadow-2xl
            bg-white
            group
          "
        >

          <img
            src={photo1}
            alt="Nalan Catering wedding celebration and catering service"
            loading="lazy"
            className="
              w-full
              h-40
              sm:h-48
              md:h-60
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-3
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          >
            <p className="text-white text-[10px] md:text-xs font-semibold">
              இனிய தருணங்கள்
            </p>
          </div>

        </motion.div>


        {/* =================================================
            FLOATING VIDEO 1 — RIGHT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            rotate: 7,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 5,
          }}
          viewport={{
            once: true,
          }}
          animate={{
            y: [0, 18, 0],
            rotate: [5, 3, 5],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 40,
          }}
          className="
            absolute
            z-20
            right-4
            md:right-8
            lg:right-16
            top-[13%]
            w-36
            sm:w-44
            md:w-56
            lg:w-64
            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-200
            shadow-2xl
            bg-white
            group
          "
        >

          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Nalan Catering event catering video"
            className="
              w-full
              h-44
              sm:h-52
              md:h-64
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Play badge */}

          <div
            className="
              absolute
              top-3
              right-3
              w-8
              h-8
              rounded-full
              bg-green-700/70
              backdrop-blur-md
              border
              border-white/40
              flex
              items-center
              justify-center
              text-white
            "
          >
            <Play
              size={13}
              fill="currentColor"
            />
          </div>

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-3
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          >
            <p className="text-white text-[10px] md:text-xs font-semibold">
              விழா தருணங்கள்
            </p>
          </div>

        </motion.div>


        {/* =================================================
            FLOATING IMAGE 2 — BOTTOM LEFT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            rotate: 6,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 4,
          }}
          viewport={{
            once: true,
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [4, 6, 4],
          }}
          transition={{
            y: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 40,
          }}
          className="
            absolute
            z-20
            left-[8%]
            md:left-[16%]
            bottom-[10%]
            w-32
            sm:w-40
            md:w-52
            lg:w-56
            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-200
            shadow-2xl
            bg-white
            group
          "
        >

          <img
            src={photo2}
            alt="Traditional Tamil food catering by Nalan Catering"
            loading="lazy"
            className="
              w-full
              h-36
              sm:h-44
              md:h-56
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-3
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          >
            <p className="text-white text-[10px] md:text-xs font-semibold">
              பாரம்பரிய சுவை
            </p>
          </div>

        </motion.div>


        {/* =================================================
            FLOATING VIDEO 2 — BOTTOM RIGHT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            rotate: -6,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -4,
          }}
          viewport={{
            once: true,
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [-4, -6, -4],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 40,
          }}
          className="
            absolute
            z-20
            right-[8%]
            md:right-[16%]
            bottom-[9%]
            w-36
            sm:w-44
            md:w-56
            lg:w-60
            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-200
            shadow-2xl
            bg-white
            group
          "
        >

          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Nalan Catering celebration and food service video"
            className="
              w-full
              h-40
              sm:h-48
              md:h-60
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              top-3
              right-3
              w-8
              h-8
              rounded-full
              bg-green-700/70
              backdrop-blur-md
              border
              border-white/40
              flex
              items-center
              justify-center
              text-white
            "
          >
            <Play
              size={13}
              fill="currentColor"
            />
          </div>

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-3
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          >
            <p className="text-white text-[10px] md:text-xs font-semibold">
              கொண்டாட்ட தருணங்கள்
            </p>
          </div>

        </motion.div>


        {/* =================================================
            DECORATIVE GREEN DOTS
        ================================================== */}

        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[40%]
            left-[28%]
            w-2
            h-2
            rounded-full
            bg-green-500
            hidden
            md:block
          "
        />

        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
          className="
            absolute
            top-[45%]
            right-[28%]
            w-2
            h-2
            rounded-full
            bg-green-500
            hidden
            md:block
          "
        />

      </div>


      {/* =====================================================
          MOBILE / SECTION BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-1
          bg-gradient-to-r
          from-green-300
          via-green-600
          to-green-300
        "
      />

    </section>
  );
}

export default Gallery;