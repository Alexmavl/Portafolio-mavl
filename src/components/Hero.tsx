import type { FC } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariants, staggerContainer } from "../motionVariants"; 

const Hero: FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen py-20 bg-transparent flex items-center" 
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AnimatePresence>
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-10 flex flex-col md:flex-row items-center justify-between gap-10"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* TEXTOS */}
            <motion.div
              className="flex-1 text-center md:text-left"
              variants={cardVariants}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-4 shimmer-text"
                variants={cardVariants}
              >
                ¡Hola! Soy Marvin Alexander Vásquez López
              </motion.h1>

              <motion.p className="mb-3 text-white/80" variants={cardVariants}>
                Estudiante de Ingeniería en Sistemas con sólida formación previa en Contabilidad y experiencia como subgerente, auxiliar de Recursos Humanos y vendedor en el área de construcción.
              </motion.p>

              <motion.p className="text-lg font-medium text-cyan-300 mb-1" variants={cardVariants}>
                Actualmente laborando como Desarrollador
              </motion.p>

              <motion.p className="text-white/70" variants={cardVariants}>
                📧 marvinv708@gmail.com
              </motion.p>
              <motion.p className="text-white/70" variants={cardVariants}>
                📍 Guazacapán, Santa Rosa, Guatemala
              </motion.p>

              <motion.div
                className="mt-5 flex gap-5 justify-center md:justify-start text-2xl"
                variants={cardVariants}
              >
                <motion.a
                  href="https://www.linkedin.com/in/marvin-vasquez-27557397/"
                  target="_blank"
                  whileHover={{ scale: 1.2, color: "#818cf8" }}
                  className="text-indigo-400 transition social-icon-space"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/alexito.vasquez1/"
                  target="_blank"
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                  className="text-blue-400 transition social-icon-space"
                >
                  <FaFacebook />
                </motion.a>

                <motion.a
                  href="https://github.com/Alexmavl"
                  target="_blank"
                  whileHover={{ scale: 1.2, color: "#e5e7eb" }}
                  className="text-gray-300 transition social-icon-space"
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center profile-aura"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)",
              }}
            >
              <img
                src="/ImagenesPortafolio/FotoPerfil2.jpg"
                alt="Marvin Alexander Vásquez López"
                className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-300 shadow-xl transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
