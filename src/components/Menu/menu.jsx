import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  ChevronRight,
  Sparkles,
  Phone,
} from "lucide-react";

function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "காலை டிபன்",
      emoji: "🥞",
      items: [
        "இட்லி",
        "தோசை",
        "நெய் ரோஸ்ட்",
        "வெண்பொங்கல்",
        "பூரி",
        "சப்பாத்தி",
        "வடை",
        "சாம்பார்",
        "தேங்காய் சட்னி",
        "தக்காளி சட்னி",
      ],
    },
    {
      title: "மதிய விருந்து",
      emoji: "🍛",
      items: [
        "சாதம்",
        "சாம்பார்",
        "ரசம்",
        "வத்தக்குழம்பு",
        "மோர்க்குழம்பு",
        "அவியல்",
        "காய்கறி பொரியல்",
        "உருளைக்கிழங்கு வறுவல்",
        "தயிர் சாதம்",
        "பாயாசம்",
      ],
    },
    {
      title: "இரவு உணவு",
      emoji: "🌙",
      items: [
        "சப்பாத்தி",
        "பரோட்டா",
        "நான்",
        "வெஜ் குருமா",
        "சிக்கன் குழம்பு",
        "பனீர் பட்டர் மசாலா",
        "வெஜ் பிரியாணி",
        "சிக்கன் பிரியாணி",
        "ரைட்டா",
        "இனிப்பு",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");

    if (element) {
      const navbarHeight = window.innerWidth < 768 ? 72 : 105;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const activeMenu = categories[activeCategory];

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        md:py-28
        px-4
        md:px-6
      "
    >
      {/* =====================================================
          GREEN BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-green-400
          blur-[110px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-green-700
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Subtle decorative leaf */}

      <div
        className="
          absolute
          right-[5%]
          top-24
          text-5xl
          md:text-7xl
          opacity-[0.06]
          pointer-events-none
        "
      >
        🍃
      </div>

      <div
        className="
          absolute
          left-[5%]
          bottom-20
          text-4xl
          md:text-6xl
          opacity-[0.05]
          pointer-events-none
        "
      >
        🍃
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

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
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >

          {/* Decorative symbol */}

          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles
              size={18}
              className="text-green-600"
              aria-hidden="true"
            />

            <p
              className="
                text-green-600
                tracking-[3px]
                font-semibold
                text-sm
              "
            >
              எங்கள் உணவு பட்டியல்
            </p>

            <Sparkles
              size={18}
              className="text-green-600"
              aria-hidden="true"
            />
          </div>

          {/* SEO-friendly heading */}

          <h2
            id="menu-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-gray-900
            "
          >
            சுவையின்{" "}
            <span className="text-[#166534]">
              சிறப்பு விருந்து
            </span>
          </h2>

          <p
            className="
              text-gray-600
              mt-5
              max-w-2xl
              mx-auto
              leading-7
              text-sm
              md:text-base
            "
          >
            பாரம்பரிய தமிழ் உணவுகளிலிருந்து சிறப்பு விருந்துகள் வரை,
            திருமணம், குடும்ப விழா, பிறந்தநாள் மற்றும் அனைத்து
            நிகழ்ச்சிகளுக்கும் ஏற்ற பல்வேறு சுவையான உணவு வகைகளை
            வழங்குகிறோம்.
          </p>

          {/* Animated green underline */}

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
              duration: 0.45,
            }}
            className="
              h-[3px]
              bg-green-500
              rounded-full
              mx-auto
              mt-6
            "
          />

        </motion.div>

        {/* =================================================
            CATEGORY BUTTONS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-2.5
            md:gap-3
            mt-10
            md:mt-12
          "
          role="tablist"
          aria-label="உணவு வகைகள்"
        >

          {categories.map((category, index) => (
            <motion.button
              key={category.title}
              type="button"
              role="tab"
              aria-selected={activeCategory === index}
              aria-controls={`menu-panel-${index}`}
              onClick={() => setActiveCategory(index)}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`
                flex
                items-center
                gap-2
                px-4
                md:px-5
                py-2.5
                md:py-3
                rounded-full
                font-semibold
                text-xs
                sm:text-sm
                md:text-base
                transition-all
                duration-200

                ${
                  activeCategory === index
                    ? "bg-[#166534] text-white shadow-lg shadow-green-900/20"
                    : "bg-white text-gray-700 border border-green-200 hover:border-green-400 hover:bg-green-50"
                }
              `}
            >
              <span aria-hidden="true">
                {category.emoji}
              </span>

              <span>
                {category.title}
              </span>
            </motion.button>
          ))}

        </motion.div>

        {/* =================================================
            MENU CARD
        ================================================== */}

        <div className="max-w-5xl mx-auto mt-10 md:mt-12">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeCategory}
              id={`menu-panel-${activeCategory}`}
              role="tabpanel"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div
                className="
                  relative
                  overflow-hidden
                  bg-white
                  rounded-[28px]
                  border
                  border-green-100
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                {/* ===========================================
                    CARD HEADER
                ============================================ */}

                <div
                  className="
                    relative
                    bg-[#166534]
                    px-5
                    md:px-8
                    py-6
                    md:py-7
                    text-white
                  "
                >

                  {/* Green glow */}

                  <div
                    className="
                      absolute
                      -top-16
                      -right-16
                      w-40
                      h-40
                      rounded-full
                      bg-green-300/20
                      blur-3xl
                      pointer-events-none
                    "
                  />

                  <div className="relative z-10 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-12
                          h-12
                          md:w-14
                          md:h-14
                          rounded-2xl
                          bg-green-400
                          flex
                          items-center
                          justify-center
                          text-2xl
                          shadow-lg
                        "
                      >
                        {activeMenu.emoji}
                      </div>

                      <div>

                        <p
                          className="
                            text-green-200
                            text-xs
                            md:text-sm
                            font-medium
                          "
                        >
                          இன்றைய சிறப்பு
                        </p>

                        <h3
                          className="
                            text-xl
                            md:text-3xl
                            font-bold
                            mt-1
                          "
                        >
                          {activeMenu.title}
                        </h3>

                      </div>

                    </div>

                    <UtensilsCrossed
                      size={28}
                      className="
                        hidden
                        sm:block
                        text-green-300
                      "
                      aria-hidden="true"
                    />

                  </div>

                </div>

                {/* ===========================================
                    FOOD ITEMS
                ============================================ */}

                <div
                  className="
                    p-5
                    md:p-8
                    bg-[#F8FFFA]
                  "
                >

                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-3
                      md:gap-4
                    "
                  >

                    {activeMenu.items.map((item, index) => (

                      <motion.div
                        key={`${activeCategory}-${item}`}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.045,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          bg-white
                          border
                          border-gray-100
                          hover:border-green-200
                          rounded-2xl
                          px-4
                          md:px-5
                          py-3.5
                          md:py-4
                          shadow-sm
                          hover:shadow-md
                          transition-all
                          duration-150
                        "
                      >

                        <div className="flex items-center gap-3 min-w-0">

                          <span
                            className="
                              flex-shrink-0
                              w-8
                              h-8
                              rounded-full
                              bg-green-50
                              text-green-600
                              flex
                              items-center
                              justify-center
                              text-sm
                              font-bold
                            "
                          >
                            {index + 1}
                          </span>

                          <span
                            className="
                              text-sm
                              md:text-base
                              font-medium
                              text-gray-700
                              group-hover:text-[#166534]
                              transition-colors
                            "
                          >
                            {item}
                          </span>

                        </div>

                        <ChevronRight
                          size={17}
                          className="
                            flex-shrink-0
                            text-green-500
                            opacity-40
                            group-hover:opacity-100
                            group-hover:translate-x-1
                            transition-all
                          "
                          aria-hidden="true"
                        />

                      </motion.div>

                    ))}

                  </div>

                </div>

                {/* ===========================================
                    BOTTOM ACCENT
                ============================================ */}

                <div
                  className="
                    h-1
                    bg-gradient-to-r
                    from-green-300
                    via-green-500
                    to-green-300
                  "
                />

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* =================================================
            CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            text-center
            mt-10
            md:mt-12
          "
        >

          <motion.button
            type="button"
            onClick={scrollToContact}
            aria-label="நளன் கேட்டரிங் சேவைக்கு இலவசமாக விலைப்பெறுங்கள்"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              bg-green-600
              hover:bg-green-500
              text-white
              px-7
              md:px-10
              py-3.5
              md:py-4
              rounded-full
              text-sm
              md:text-lg
              font-semibold
              shadow-[0_12px_35px_rgba(22,163,74,0.25)]
              transition-colors
            "
          >

            <Phone
              size={18}
              aria-hidden="true"
            />

            மேலும் அறிய 

            <ChevronRight
              size={18}
              className="
                group-hover:translate-x-1
                transition-transform
              "
              aria-hidden="true"
            />

          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}

export default Menu;