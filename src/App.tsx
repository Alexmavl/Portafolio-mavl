import React from 'react';
import { motion } from "framer-motion"; 
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      {/* Efectos visuales espaciales */}
      <div className="space-meteors"></div>
      <div className="meteor-extra"></div>
      <div className="star-particles"></div>

      {/* Contenedor principal animado */}
      <motion.div
        id="root"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "spring" as const,
          stiffness: 150,
          damping: 10,
          duration: 0.8,
        }}
        className="pt-28 md:pt-24 relative z-20" // <- espacio suficiente para el header fijo
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />

        {/* Footer */}
        <motion.footer
          className="text-center text-white/60 text-sm py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} Marvin Alexander Vásquez López. Todos los derechos reservados.
        </motion.footer>
      </motion.div>
    </>
  );
};

export default App;
