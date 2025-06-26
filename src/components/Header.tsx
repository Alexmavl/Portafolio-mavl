import type { FC } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Header: FC = () => {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleDownloadCV = () => {
    // Aquí puedes enlazar a tu archivo PDF real
    window.open("/cv.pdf", "_blank");
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-yellow-300 transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition-colors duration-200"
        >
          <FaDownload /> Descargar CV
        </motion.button>
      </nav>
    </header>
  );
};

export default Header;
