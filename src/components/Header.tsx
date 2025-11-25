import { useEffect, useState } from "react";
import type { FC } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { navItems } from "../data";

const Header: FC = () => {
  const handleDownloadCV = () => {
    window.open("/CVMarvinVasquezDev.pdf", "_blank", "noopener,noreferrer");
  };

  // Estados
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Control del scroll del header
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Cerrar menú móvil cuando se hace clic en un link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Variantes de animación
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.header
        className="bg-black/40 backdrop-blur-md text-white shadow-lg fixed top-0 inset-x-0 z-50 transition-transform duration-500"
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ type: "tween" as const }}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-sm sm:text-base rounded-full 
                         bg-gradient-to-tr from-cyan-400/30 to-indigo-500/20 ring-2 ring-cyan-400 text-white 
                         shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-cyan-500/30 transition-shadow duration-300 select-none cursor-pointer"
              initial={{ y: 0 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
              whileHover={{ scale: 1.1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              MV
            </motion.div>


            <ul className="hidden md:flex items-center gap-2 lg:gap-4 text-base font-medium bg-white/5 px-2 py-1.5 rounded-full border border-white/10">
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onSetActive={() => setActiveSection(item.href.replace("#", ""))}
                    className={`relative z-10 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${activeSection === item.href.replace("#", "") ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </Link>
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cyan-500/20 rounded-full border border-cyan-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">


              <motion.button
                onClick={handleDownloadCV}
                aria-label="Descargar currículum en PDF"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1f2937",
                  borderColor: "#22d3ee",
                  color: "#22d3ee",
                  boxShadow: "0 0 12px 2px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                className="hidden sm:flex items-center gap-2 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 text-sm"
              >
                <FaDownload className="text-sm" />
                <span className="hidden lg:inline">Descargar CV</span>
                <span className="lg:hidden">CV</span>
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                aria-label="Descargar CV"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="sm:hidden w-10 h-10 flex items-center justify-center border border-cyan-400 text-cyan-300 rounded-lg transition-all duration-300 hover:bg-slate-800"
              >
                <FaDownload className="text-sm" />
              </motion.button>


              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir menú"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-cyan-300 transition-colors duration-200"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menú */}
            <motion.div
              className="fixed top-16 left-4 right-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] z-50 md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <nav className="p-6">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <motion.li key={item.href} variants={menuItemVariants}>
                      <Link
                        to={item.href.replace("#", "")}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        activeClass="text-cyan-400 bg-cyan-400/10"
                        className="block w-full text-left px-4 py-3 text-white hover:text-cyan-300 hover:bg-white/5 rounded-xl transition-all duration-200 cursor-pointer font-medium"
                        onClick={handleLinkClick}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></span>
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* BOTÓN CV EN MENÚ MÓVIL */}
                <motion.div
                  className="mt-6 pt-6 border-t border-white/10"
                  variants={menuItemVariants}
                >
                  <motion.button
                    onClick={() => {
                      handleDownloadCV();
                      handleLinkClick();
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  >
                    <FaDownload className="text-sm" />
                    Descargar CV
                  </motion.button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
