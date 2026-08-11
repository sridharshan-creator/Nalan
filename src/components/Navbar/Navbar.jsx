import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = window.innerWidth < 768 ? 72 : 105;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }

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

      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}

      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="hidden md:block bg-[#07150D] text-white text-xs"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">

            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2"
            >
              <Phone size={13} className="text-green-400" />
              <span>+91 89250 59589    +91 94427 83393</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2"
            >
              <Mail size={13} className="text-green-400" />
              <span>nalancateringtrichy@gmail.com</span>
            </motion.div>

          </div>

          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2"
          >
            <MapPin size={13} className="text-green-400" />
            <span>Serving Across Tamil Nadu</span>
          </motion.div>

        </div>
      </motion.div>


      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <motion.div
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.65,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          bg-white/95
          backdrop-blur-xl
          border-b
          border-green-100
          shadow-[0_5px_30px_rgba(0,0,0,0.08)]
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-3
            sm:px-4
            md:px-8
            py-2
            sm:py-2.5
            flex
            items-center
            justify-between
            gap-3
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="text-left group min-w-0 shrink"
          >

            <h1
              className="
                text-[20px]
                xs:text-[21px]
                sm:text-2xl
                md:text-3xl
                font-bold
                text-[#166534]
                leading-tight
                whitespace-nowrap
              "
            >
              நளன் கேட்டரிங்
            </h1>

            <p
              className="
                text-[8px]
                sm:text-[10px]
                md:text-xs
                text-green-600
                font-medium
                mt-0.5
                sm:mt-1
                whitespace-nowrap
                block
              "
            >
              உணவில் தரம்  • என்றும் நிரந்தரம்
            </p>

          </motion.button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">

            {links.map((link, index) => (

              <motion.button
                key={link.id}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.18 + index * 0.045,
                  ease: "easeOut",
                }}
                onClick={() => scrollToSection(link.id)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  relative
                  group
                  text-sm
                  font-medium
                  text-gray-700
                  hover:text-[#166534]
                  transition-colors
                  duration-150
                  whitespace-nowrap
                "
              >

                {link.name}

                <motion.span
                  initial={{
                    width: 0,
                    left: "50%",
                  }}
                  whileHover={{
                    width: "100%",
                    left: "0%",
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    -bottom-2
                    h-[2px]
                    rounded-full
                    bg-green-500
                  "
                />

              </motion.button>

            ))}

          </nav>


          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{
              scale: 1.035,
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.15,
            }}
            className="
              group
              hidden
              lg:flex
              items-center
              gap-2
              bg-green-600
              hover:bg-green-500
              text-white
              px-5
              xl:px-6
              py-2.5
              xl:py-3
              rounded-full
              font-semibold
              text-sm
              shadow-[0_8px_25px_rgba(22,163,74,0.25)]
              transition-colors
              duration-150
              whitespace-nowrap
              shrink-0
            "
          >

            <span>📞 பதிவு செய்யுங்கள்</span>

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-150
                group-hover:translate-x-1
              "
            />

          </motion.button>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            whileTap={{
              scale: 0.88,
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              lg:hidden
              w-10
              h-10
              sm:w-11
              sm:h-11
              shrink-0
              rounded-full
              flex
              items-center
              justify-center
              bg-green-50
              text-green-700
              border
              border-green-100
              shadow-sm
            "
          >

            <AnimatePresence mode="wait">

              {menuOpen ? (

                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.15,
                    ease: "easeOut",
                  }}
                >
                  <X size={23} />
                </motion.div>

              ) : (

                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.15,
                    ease: "easeOut",
                  }}
                >
                  <Menu size={23} />
                </motion.div>

              )}

            </AnimatePresence>

          </motion.button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================== */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:hidden
                overflow-hidden
                bg-white
                border-t
                border-green-100
                shadow-lg
              "
            >

              <div className="px-3 sm:px-4 py-2 sm:py-3">

                {links.map((link, index) => (

                  <motion.button
                    key={link.id}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.035,
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      justify-between
                      text-left
                      px-3
                      sm:px-4
                      py-3
                      sm:py-3.5
                      border-b
                      border-gray-100
                      text-gray-700
                      text-sm
                      sm:text-base
                      font-medium
                      hover:bg-green-50
                      hover:text-green-700
                      transition-colors
                      duration-150
                    "
                  >

                    <span>{link.name}</span>

                    <ArrowRight
                      size={15}
                      className="
                        text-green-500
                        transition-transform
                        duration-150
                        group-hover:translate-x-1
                      "
                    />

                  </motion.button>

                ))}


                {/* Mobile CTA */}

                <div className="pt-3 sm:pt-4 pb-1 sm:pb-2">

                  <motion.button
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    onClick={() => scrollToSection("contact")}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-green-600
                      hover:bg-green-500
                      text-white
                      py-3
                      sm:py-3.5
                      rounded-full
                      font-semibold
                      text-sm
                      sm:text-base
                      shadow-[0_8px_25px_rgba(22,163,74,0.2)]
                      transition-colors
                      duration-150
                    "
                  >

                    <span>📞 பதிவு செய்யுங்கள்</span>

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-150
                        group-hover:translate-x-1
                      "
                    />

                  </motion.button>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </header>
  );
}

export default Navbar;

