import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">

      <img
        src={hero}
        alt="Nalan Catering"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="uppercase tracking-[6px] text-yellow-400"
          >
            Premium Catering Service
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="text-white text-6xl md:text-8xl font-bold mt-6"
          >
            Celebrate Every
            <br />
            Occasion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="text-gray-200 mt-8 text-xl max-w-2xl mx-auto"
          >
            Delicious food, elegant presentation and unforgettable memories
            crafted for weddings, birthdays and corporate events.
          </motion.p>

          <div className="mt-10 flex gap-6 justify-center flex-wrap">

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition">
              Book Now
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              View Menu
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;