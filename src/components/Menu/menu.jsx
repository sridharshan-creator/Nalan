import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "🍚 Rice",
      items: [
        "White Rice",
        "Ghee Rice",
        "Lemon Rice",
        "Tomato Rice",
        "Coconut Rice",
        "Curd Rice",
        "Jeera Rice",
        "Veg Biryani",
      ],
    },
    {
      title: "🍛 Gravies",
      items: [
        "Sambar",
        "Rasam",
        "Vatha Kuzhambu",
        "Mor Kuzhambu",
        "Kara Kuzhambu",
        "Vegetable Kurma",
        "Dal Fry",
        "Paneer Butter Masala",
      ],
    },
    {
      title: "🥬 Vegetables",
      items: [
        "Aviyal",
        "Beans Poriyal",
        "Cabbage Poriyal",
        "Potato Fry",
        "Carrot Beans Poriyal",
        "Kootu",
        "Brinjal Curry",
        "Cauliflower Fry",
      ],
    },
    {
      title: "🍗 Non-Veg",
      items: [
        "Chicken Biryani",
        "Mutton Biryani",
        "Chicken 65",
        "Pepper Chicken",
        "Fish Fry",
        "Mutton Sukka",
        "Chicken Gravy",
        "Prawn Fry",
      ],
    },
    {
      title: "🥞 Tiffin",
      items: [
        "Idli",
        "Dosa",
        "Ghee Roast",
        "Pongal",
        "Poori",
        "Chapathi",
        "Vada",
        "Mini Tiffin",
      ],
    },
    {
      title: "🍨 Sweets",
      items: [
        "Gulab Jamun",
        "Kesari",
        "Jangiri",
        "Rasgulla",
        "Laddu",
        "Payasam",
        "Ice Cream",
        "Fruit Salad",
      ],
    },
    {
      title: "🥤 Drinks",
      items: [
        "Rose Milk",
        "Jigarthanda",
        "Badam Milk",
        "Fresh Lime",
        "Coffee",
        "Tea",
        "Mango Juice",
        "Watermelon Juice",
      ],
    },
    {
      title: "🍟 Snacks",
      items: [
        "Samosa",
        "Cutlet",
        "Bajji",
        "Bonda",
        "Pakoda",
        "Spring Roll",
        "French Fries",
        "Sandwich",
      ],
    },
  ];

  return (
    <section
      id="menu"
      className="py-24 px-4 bg-gradient-to-b from-[#fffaf2] to-[#fff3dc]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-yellow-500 text-lg">✨ ❖ ✨</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Menu
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Traditional South Indian, North Indian and Special Catering Menu
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeCategory === index
                  ? "bg-yellow-500 text-white shadow-lg"
                  : "bg-white border border-yellow-300 hover:bg-yellow-100"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Notebook */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeCategory}
    initial={{ rotateY: -90, opacity: 0 }}
    animate={{ rotateY: 0, opacity: 1 }}
    exit={{ rotateY: 90, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto"
  >
    <div className="bg-[#fffef7] rounded-xl shadow-2xl border-2 border-gray-300 overflow-hidden">

      {/* Top */}
      <div className="bg-red-700 text-white py-4 text-center text-3xl font-bold">
        {categories[activeCategory].title}
      </div>

      {/* Notebook Paper */}
      <div className="relative p-8">
        <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-red-400"></div>

        <div className="relative pl-10 grid md:grid-cols-2 gap-4">
          {categories[activeCategory].items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-lg text-gray-700 py-1"
            >
              🍽 {item}
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </motion.div>
</AnimatePresence>

        {/* Quote Button */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
          >
            📞 Get Free Quote
          </button>
        </div>

      </div>

    </section>
  );
}

export default Menu;