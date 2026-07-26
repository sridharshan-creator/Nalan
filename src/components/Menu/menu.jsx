import { motion } from "framer-motion";

function Menu() {
  const categories = [
    {
      title: "🍛 திருமண சாப்பாடு",
      description:
        "சக்கரை பொங்கல், சாம்பார், ரசம், அவியல், பொரியல், அப்பளம், பாயாசம் மற்றும் வாழையிலை விருந்து.",
    },
    {
      title: "🥞 டிபன் வகைகள்",
      description:
        "இட்லி, தோசை, நெய் ரோஸ்ட், பொங்கல், பூரி மசால், வடை மற்றும் மினி டிபன்.",
    },
    {
      title: "🍗 செட்டிநாடு சிறப்புகள்",
      description:
        "செட்டிநாடு சிக்கன், பெப்பர் சிக்கன், மட்டன் சுக்கா, சிக்கன் கிரேவி மற்றும் பிரியாணி.",
    },
    {
      title: "🥤 வரவேற்பு பானங்கள்",
      description:
        "ரோஸ் மில்க், பாதாம் பால், ஜிகர்தண்டா, எலுமிச்சை சாறு மற்றும் பழச்சாறுகள்.",
    },
    {
      title: "🍨 இனிப்புகள்",
      description:
        "குலாப் ஜாமுன், ஜாங்கிரி, லட்டு, ரசகுல்லா, ஐஸ்கிரீம் மற்றும் பழச்சலாட்.",
    },
    {
      title: "☕ மாலை நேர சிற்றுண்டி",
      description:
        "சமோசா, கட்லெட், பஜ்ஜி, போண்டா, தேநீர் மற்றும் காபி.",
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-24 px-4 md:px-6 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
            உணவு பட்டியல்
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            பாரம்பரிய சுவை, நவீன தரம்
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            எங்கள் உணவு பட்டியலில் பாரம்பரிய தமிழ் உணவுகள் முதல் நவீன
            Special Dishes வரை அனைத்தும் கிடைக்கும்.
          </p>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-yellow-500 text-white rounded-3xl p-6 md:p-8 text-center shadow-xl"
        >
          <h3 className="text-xl md:text-3xl font-bold">
            🌿 வாழையிலையில் பரிமாறப்படும் பாரம்பரிய தமிழ் உணவுகள்
          </h3>

          <p className="mt-3 text-sm md:text-lg">
            Authentic Tamil Nadu Catering Experience for Weddings & Special Events
          </p>
        </motion.div>

        {/* Menu Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-16">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-base md:text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 md:mt-4 text-xs md:text-base leading-6 md:leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Menu;