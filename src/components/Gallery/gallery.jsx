import { motion } from "framer-motion";

function Gallery() {
  const galleryItems = [
    {
      image:
        "https://i.pinimg.com/originals/5f/a6/2a/5fa62a8da71bcd7e7b80d15624724f6a.jpg",
      title: "💍 திருமண விழாக்கள்",
      description: "Traditional Wedding Catering",
    },
    {
      image:
        "https://www.srilakshmicaterer.in/assets/images/dishes/banner4.jpg",
      title: "🍛 வாழையிலை விருந்து",
      description: "Authentic Tamil Nadu Feast",
    },
    {
      image:
        "https://dhilipstudio.com/images/1768832427_birthday-party-photography-porur-chennai-dhilipstudio.webp",
      title: "🎂 பிறந்தநாள் விழாக்கள்",
      description: "Birthday Party Catering",
    },
    {
      image:
        "https://www.coriander.co.in/wp-content/uploads/elementor/thumbs/IMG_20231027_111839-scaled-r76v4dwscrzuf2shauzu5bqob37b0t9hax61mxdn5c.jpg",
      title: "🏢 நிறுவன நிகழ்வுகள்",
      description: "Corporate Event Catering",
    },
    {
      image:
        "https://www.babulcaterer.com/wp-content/uploads/2025/01/kolkata-live-catering-babul-caterer.jpg",
      title: "🔥 Live Food Counter",
      description: "Dosa • Chaat • BBQ Station",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/071/461/597/small/assorted-indian-sweets-platter-jalebi-gulab-jamun-barfi-and-more-appetizing-free-photo.jpg",
      title: "🍨 இனிப்பு வகைகள்",
      description: "Sweet & Dessert Specials",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-[#FFF8F0]">
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
            எங்கள் நிகழ்வுகள்
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            எங்கள் சேவையின் சில சிறப்பான தருணங்கள்
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            திருமணங்கள், பிறந்தநாள் விழாக்கள், நிறுவன நிகழ்வுகள் மற்றும்
            பாரம்பரிய விருந்து நிகழ்ச்சிகளின் புகைப்படங்கள்.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold text-gray-800">
            ⭐ 500+ வெற்றிகரமான நிகழ்வுகளில் நம்பிக்கையுடன் சேவை
            வழங்கியுள்ளோம்.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;