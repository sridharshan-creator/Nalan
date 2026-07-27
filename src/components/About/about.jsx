import { motion } from "framer-motion";
import { UtensilsCrossed, Award, Users } from "lucide-react";

function About() {
  const stats = [
    {
      icon: <UtensilsCrossed size={28} />,
      number: "500+",
      title: "வெற்றிகரமான நிகழ்வுகள்",
    },
    {
      icon: <Award size={28} />,
      number: "10+",
      title: "ஆண்டுகள் அனுபவம்",
    },
    {
      icon: <Users size={28} />,
      number: "100%",
      title: "வாடிக்கையாளர்களின் திருப்தி",
    },
  ];

  return (
    <section id="about" className="bg-[#FFF8F0] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-500 text-lg mb-2">
            ✨ ❖ ✨
          </p>

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            எங்களை பற்றி
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-5 text-gray-900">
            தரமான உணவு • சிறந்த சேவை
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Nalan Catering கடந்த 10+ ஆண்டுகளாக தமிழ்நாடு முழுவதும்
            திருமணங்கள், நிச்சயதார்த்தங்கள், பிறந்தநாள் விழாக்கள் மற்றும்
            Corporate Events ஆகியவற்றிற்கு தரமான உணவு மற்றும் சிறந்த
            சேவையை வழங்கி வருகிறது.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            எங்கள் நோக்கம் சுவையான உணவை மட்டும் வழங்குவது அல்ல,
            உங்கள் விழாவை அனைவரும் நினைவில் வைத்திருக்கும் ஒரு
            அனுபவமாக மாற்றுவதாகும்.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-yellow-500 hover:bg-amber-800 text-white px-8 py-4 rounded-full transition"
          >
            மேலும் அறிய
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 md:gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-3xl shadow-xl p-4 md:p-8 text-center"
            >
              <div className="text-amber-700 flex justify-center mb-3">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-4xl font-bold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-2 text-xs md:text-base text-gray-600">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;