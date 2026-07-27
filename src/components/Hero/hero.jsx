import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpg";
import {
  Users,
  Trophy,
  UtensilsCrossed,
  Leaf,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <img
        src={hero}
        alt="Nalan Catering"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-40 md:pt-48">
        
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="hidden md:block w-20 h-[2px] bg-yellow-500"></div>

            <p className="text-yellow-500 text-xs md:text-lg font-semibold tracking-wider">
              ✦ தமிழ் பாரம்பரியம் • சுவையின் பெருமை ✦
            </p>

            <div className="hidden md:block w-20 h-[2px] bg-yellow-500"></div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="leading-tight"
          >
            <span className="block text-white text-4xl md:text-7xl font-bold">
              உங்கள் விழா
            </span>

            <span className="block text-yellow-500 text-4xl md:text-7xl font-bold mt-2">
              எங்கள் அன்பான விருந்து
            </span>
          </motion.h1>

          {/* Divider */}
          <div className="flex justify-center mt-5">
            <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 mt-6 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            திருமணம், பிறந்தநாள் விழா, Corporate Events மற்றும்
            அனைத்து விசேஷ நிகழ்வுகளுக்கும் சுவையான உணவு,
            சிறந்த சேவை மற்றும் மறக்க முடியாத அனுபவம்.
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 mb-16 md:mb-20 flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-semibold shadow-xl transition"
            >
              📞 Book Your Event
            </button>

            <button
              onClick={() =>
                document.getElementById("menu")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              🍛 View Menu
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full max-w-6xl px-4">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              
              <div className="p-4 text-center border-r border-white/10">
                <Users
                  size={30}
                  className="mx-auto text-yellow-500 mb-2"
                />
                <h3 className="text-white text-2xl font-bold">
                  500+
                </h3>
                <p className="text-gray-300 text-xs">
                  வெற்றிகரமான நிகழ்வுகள்
                </p>
              </div>

              <div className="p-4 text-center border-r border-white/10">
                <Trophy
                  size={30}
                  className="mx-auto text-yellow-500 mb-2"
                />
                <h3 className="text-white text-2xl font-bold">
                  10+
                </h3>
                <p className="text-gray-300 text-xs">
                  ஆண்டுகள் அனுபவம்
                </p>
              </div>

              <div className="p-4 text-center border-r border-white/10">
                <UtensilsCrossed
                  size={30}
                  className="mx-auto text-yellow-500 mb-2"
                />
                <h3 className="text-white text-2xl font-bold">
                  100%
                </h3>
                <p className="text-gray-300 text-xs">
                  வாடிக்கையாளர் திருப்தி
                </p>
              </div>

              <div className="p-4 text-center">
                <Leaf
                  size={30}
                  className="mx-auto text-yellow-500 mb-2"
                />
                <p className="text-white text-sm font-semibold">
                  சுத்தமான & தரமான
                  <br />
                  பாரம்பரிய உணவு
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;