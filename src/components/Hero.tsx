import type { FC } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section id="inicio" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* TEXTO */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¡Hola! Soy Marvin Alexander Vásquez López
            </h1>
            <p className="mb-3 text-white/80">
              Estudiante de Ingeniería en Sistemas con sólida formación previa en Contabilidad
              y experiencia como subgerente, auxiliar de Recursos Humanos y vendedor en el área de construcción.
            </p>
            <p className="text-lg font-medium text-indigo-300 mb-1">
              Actualmente laborando como Desarrollador
            </p>
            <p className="text-white/70">📧 marvinv708@gmail.com</p>
            <p className="text-white/70">📍 Guazacapán, Santa Rosa, Guatemala</p>

            <div className="mt-5 flex gap-5 justify-center md:justify-start text-2xl text-white">
              <a
                href="https://www.linkedin.com/in/marvin-vasquez-27557397/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-indigo-400 transition" />
              </a>
              <a
                href="https://www.facebook.com/alexito.vasquez1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-500 transition" />
              </a>
              <a
                href="https://github.com/Alexmavl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
            </div>
          </motion.div>

          {/* FOTO */}
          <motion.div
  className="flex-1 flex justify-center"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)",
  }}
>
  <img
    src="/ImagenesPortafolio/FotoPerfil2.jpg"
    alt="Marvin Alexander Vásquez López"
    className="w-80 h-80 object-cover rounded-full border-4 border-indigo-700 shadow-xl transition-transform duration-300"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
