import type { FC } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header: FC = () => {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleDownloadCV = () => {
    window.open("/CVMarvinVasquez.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="bg-black/40 backdrop-blur-md text-white shadow-md fixed top-0 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        {/* Logotipo animado MV */}
        <motion.div
          className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center font-bold text-sm md:text-base rounded-full 
                     bg-gradient-to-tr from-cyan-400/30 to-indigo-500/20 ring-2 ring-cyan-400 text-white 
                     shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-cyan-500/30 transition-shadow duration-300 select-none"
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          MV
        </motion.div>

        {/* Navegación */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href.replace("#", "")}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-cyan-400"
                className="cursor-pointer hover:text-cyan-300 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de descarga */}
        <motion.button
          onClick={handleDownloadCV}
          aria-label="Descargar currículum en PDF"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#1f2937",
            borderColor: "#22d3ee",
            color: "#22d3ee",
            boxShadow: "0 0 12px 2px #22d3ee",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-xl font-semibold transition duration-300 hover:bg-slate-800"
        >
          <FaDownload className="text-lg" />
          <span>Descargar CV</span>
        </motion.button>
      </nav>
    </header>
  );
};

export default Header;
