import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const links = [
    { name: "முகப்பு", id: "home" },
    { name: "எங்களை பற்றி", id: "about" },
    { name: "சேவைகள்", id: "services" },
    { name: "உணவு பட்டியல்", id: "menu" },
    { name: "தருணங்கள்", id: "gallery" },
    { name: "தொடர்பு", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Maroon Bar */}
      <div className="hidden md:block bg-[#6B0F0F] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={13} />
              <span>+91 75488 95467</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={13} />
              <span>info@nalancatering.com</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={13} />
            <span>Serving Across Tamil Nadu</span>
          </div>

        </div>
      </div>

      {/* Main White Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-left"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-[#7A1F1F] leading-tight">
              நலன் கேட்டரிங்
            </h1>

            <p className="text-[10px] md:text-xs text-yellow-600 font-medium mt-1">
              தமிழ் பாரம்பரியம் • சுவையின் பெருமை
            </p>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition relative group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 rounded-full font-semibold text-sm shadow-md transition ml-8"
          >
            📞 பதிவு செய்யுங்கள்
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">

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
                className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold"
              >
                📞 பதிவு செய்யுங்கள்
              </button>
            </div>

          </div>
        )}
      </div>

    </header>
  );
}

export default Navbar;