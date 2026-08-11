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
      title: "சாத வகைகள்",
      emoji: "🍚",
      items: [
        "சாதம்",
        "நெய் சாதம்",
        "எலுமிச்சை சாதம்",
        "தக்காளி சாதம்",
        "தேங்காய் சாதம்",
        "தயிர் சாதம்",
        "ஜீரா சாதம்",
        "காய்கறி பிரியாணி",
      ],
    },
    {
      title: "குழம்பு வகைகள்",
      emoji: "🍛",
      items: [
        "சாம்பார்",
        "ரசம்",
        "வத்தக்குழம்பு",
        "மோர்க்குழம்பு",
        "காரக்குழம்பு",
        "காய்கறி குருமா",
        "பருப்பு",
        "பனீர் பட்டர் மசாலா",
      ],
    },
    {
      title: "காய்கறி வகைகள்",
      emoji: "🥬",
      items: [
        "அவியல்",
        "பீன்ஸ் பொரியல்",
        "முட்டைக்கோஸ் பொரியல்",
        "உருளைக்கிழங்கு வறுவல்",
        "கேரட் பீன்ஸ் பொரியல்",
        "கூட்டு",
        "கத்தரிக்காய் கறி",
        "காலிஃபிளவர் வறுவல்",
      ],
    },
    {
      title: "அசைவ உணவுகள்",
      emoji: "🍗",
      items: [
        "சிக்கன் பிரியாணி",
        "மட்டன் பிரியாணி",
        "சிக்கன் 65",
        "பெப்பர் சிக்கன்",
        "மீன் வறுவல்",
        "மட்டன் சுக்கா",
        "சிக்கன் குழம்பு",
        "இறால் வறுவல்",
      ],
    },
    {
      title: "காலை உணவு",
      emoji: "🥞",
      items: [
        "இட்லி",
        "தோசை",
        "நெய் ரோஸ்ட்",
        "வெண்பொங்கல்",
        "பூரி",
        "சப்பாத்தி",
        "வடை",
        "மினி டிபன்",
      ],
    },
    {
      title: "இனிப்பு வகைகள்",
      emoji: "🍨",
      items: [
        "குலாப் ஜாமூன்",
        "கேசரி",
        "ஜாங்கிரி",
        "ரசகுல்லா",
        "லட்டு",
        "பாயாசம்",
        "ஐஸ்கிரீம்",
        "பழ சாலட்",
      ],
    },
    {
      title: "பானங்கள்",
      emoji: "🥤",
      items: [
        "ரோஸ் மில்க்",
        "ஜிகர்தண்டா",
        "பாதாம் பால்",
        "எலுமிச்சை சாறு",
        "காபி",
        "தேநீர்",
        "மாம்பழச் சாறு",
        "தர்பூசணி சாறு",
      ],
    },
    {
      title: "சிற்றுண்டிகள்",
      emoji: "🍟",
      items: [
        "சமோசா",
        "கட்லெட்",
        "பஜ்ஜி",
        "போண்டா",
        "பகோடா",
        "ஸ்பிரிங் ரோல்",
        "பிரெஞ்ச் ஃப்ரைஸ்",
        "சாண்ட்விச்",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const activeMenu = categories[activeCategory];

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF4E5] py-20 md:py-28 px-4 md:px-6"
    >
      {/* Background decoration */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.06, 0.11, 0.06],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-400 blur-[110px] pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#741B1B] blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles size={18} className="text-yellow-500" />

            <p className="text-yellow-600 tracking-[3px] font-semibold text-sm">
              எங்கள் உணவு பட்டியல்
            </p>

            <Sparkles size={18} className="text-yellow-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            சுவையின்{" "}
            <span className="text-[#741B1B]">
              சிறப்பு விருந்து
            </span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-7 text-sm md:text-base">
            பாரம்பரிய தமிழ் உணவுகளிலிருந்து சிறப்பு விருந்துகள் வரை,
            உங்கள் விழாவிற்கேற்ற பல்வேறு சுவையான உணவு வகைகள்.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="h-[3px] bg-yellow-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Category buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3 mt-10 md:mt-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeCategory === index
                  ? "bg-[#741B1B] text-white shadow-lg"
                  : "bg-white text-gray-700 border border-yellow-200 hover:border-yellow-400 hover:bg-yellow-50"
              }`}
            >
              <span>{category.emoji}</span>
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu card */}

        <div className="max-w-5xl mx-auto mt-10 md:mt-12">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
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

              <div className="relative overflow-hidden bg-white rounded-[28px] border border-yellow-100 shadow-[0_20px_60px_rgba(0,0,0,0.09)]">

                {/* Card header */}

                <div className="relative bg-[#741B1B] px-5 md:px-8 py-6 md:py-7 text-white">

                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-2xl shadow-lg">
                        {activeMenu.emoji}
                      </div>

                      <div>
                        <p className="text-yellow-300 text-xs md:text-sm font-medium">
                          இன்றைய சிறப்பு
                        </p>

                        <h3 className="text-xl md:text-3xl font-bold mt-1">
                          {activeMenu.title}
                        </h3>
                      </div>

                    </div>

                    <UtensilsCrossed
                      size={28}
                      className="hidden sm:block text-yellow-400"
                    />

                  </div>
                </div>

                {/* Food items */}

                <div className="p-5 md:p-8 bg-[#FFFCF8]">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">

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
                        className="group flex items-center justify-between bg-white border border-gray-100 hover:border-yellow-200 rounded-2xl px-4 md:px-5 py-3.5 md:py-4 shadow-sm hover:shadow-md transition-all duration-150"
                      >

                        <div className="flex items-center gap-3 min-w-0">

                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>

                          <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-[#741B1B] transition-colors">
                            {item}
                          </span>

                        </div>

                        <ChevronRight
                          size={17}
                          className="flex-shrink-0 text-yellow-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        />

                      </motion.div>
                    ))}

                  </div>
                </div>

                {/* Bottom accent */}

                <div className="h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="text-center mt-10 md:mt-12"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white px-7 md:px-10 py-3.5 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-[0_12px_35px_rgba(234,179,8,0.25)] transition-colors"
          >
            <Phone size={18} />

            இலவசமாக விலைப்பெறுங்கள்

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default Menu;