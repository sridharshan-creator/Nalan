import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

const scrollToSection = (id) => {
  console.log("Navbar clicked:", id);

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setMenuOpen(false);
};
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "home", id: "home" },
    { name: "about", id: "about" },
    { name: "services", id: "services" },
    { name: "menu", id: "menu" },
    { name: "gallery", id: "gallery" },
    { name: "contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection("home")}
          className="text-3xl font-bold text-yellow-600 cursor-pointer"
        >
          Nalan Catering
        </motion.button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative font-medium text-gray-800 transition-colors duration-300 hover:text-yellow-600 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-full text-white font-semibold"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-8 py-5 border-b hover:bg-yellow-50"
            >
              {link.name}
            </button>
          ))}

          <div className="p-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full font-semibold transition"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;