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
    window.open("/CVMarvinVasquez.pdf", "_blank");

  };

  return (
    <header className="bg-black/40 backdrop-blur-md text-white shadow-md fixed top-0 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Navegación */}
        <ul className="flex gap-6 text-lg font-medium">
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

        {/* Botón estilizado con animación */}
        <motion.button
          onClick={handleDownloadCV}
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
