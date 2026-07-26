import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src={hero}
        alt="Nalan Catering"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[2px] md:tracking-[6px] text-yellow-400 text-xs sm:text-sm md:text-base"
          >
            🌾 தமிழ் பாரம்பரியம் • சுவையின் பெருமை
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mt-5 leading-tight"
          >
            உங்கள் விழா
            <br />
            எங்கள் அன்பான விருந்து
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 mt-6 text-base md:text-xl max-w-md md:max-w-2xl mx-auto px-2 leading-relaxed"
          >
            திருமணம், பிறந்தநாள் விழா, Corporate Events மற்றும் அனைத்து
            விசேஷ நிகழ்வுகளுக்கும் சுவையான உணவு, சிறந்த சேவை மற்றும்
            மறக்க முடியாத அனுபவம்.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full"
>
  📞 Book Your Event
</button>

<button
  onClick={() =>
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="border border-white text-white w-64 py-3 rounded-full hover:bg-white hover:text-black transition"
>
  🍛 View Menu
</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;