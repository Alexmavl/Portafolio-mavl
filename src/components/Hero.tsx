import type { FC } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-4 py-20"
    >
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
          ¡Hola! Soy Marvin Alexander Vásquez López
        </h1>
        <p className="mb-3 text-gray-700">
          Estudiante de Ingeniería en Sistemas con sólida formación previa en Contabilidad
          y experiencia como subgerente, auxiliar de Recursos Humanos y vendedor en el área de construcción.
        </p>
        <p className="text-lg font-medium text-indigo-600">Actualmente laborando como Desarrollador</p>
        <p className="text-gray-600">📧 marvinv708@gmail.com</p>
        <p className="text-gray-600">📍 Guazacapán, Santa Rosa, Guatemala</p>

        <div className="mt-5 flex gap-5 justify-center md:justify-start text-2xl text-indigo-700">
          <a href="https://www.linkedin.com/in/marvin-vasquez-27557397/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-indigo-400 transition" />
          </a>
          <a href="https://www.facebook.com/alexito.vasquez1/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/Alexmavl" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black transition" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/ImagenesPortafolio/FotoPerfil2.jpg"
          alt="Marvin Alexander Vásquez López"
          className="w-80 h-80 object-cover rounded-full border-4 border-indigo-700 shadow-lg mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
