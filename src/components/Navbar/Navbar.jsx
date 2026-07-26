import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
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
  { name: "முகப்பு", id: "home" },
  { name: "எங்களை பற்றி", id: "about" },
  { name: "சேவைகள்", id: "services" },
  { name: "உணவு பட்டியல்", id: "menu" },
  { name: "தருணங்கள்", id: "gallery" },
  { name: "தொடர்பு", id: "contact" },
];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full overflow-x-hidden z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection("home")}
          className="text-lg sm:text-xl md:text-3xl font-bold text-yellow-600 cursor-pointer whitespace-nowrap"
        >
          Nalan Catering
        </motion.button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative font-medium text-gray-800 hover:text-yellow-600 transition group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex-shrink-0"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-6 py-4 border-b hover:bg-yellow-50"
            >
              {link.name}
            </button>
          ))}

          <div className="p-4">
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