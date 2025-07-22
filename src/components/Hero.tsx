import type { FC } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Variantes animadas para stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: FC = () => {
  return (
    <section id="inicio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-300/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-10 flex flex-col md:flex-row items-center justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* TEXTO */}
          <motion.div className="flex-1 text-center md:text-left" variants={containerVariants}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              ¡Hola! Soy Marvin Alexander Vásquez López
            </motion.h1>
            <motion.p
              className="mb-3 text-white/80"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              Estudiante de Ingeniería en Sistemas con sólida formación previa en Contabilidad
              y experiencia como subgerente, auxiliar de Recursos Humanos y vendedor en el área de construcción.
            </motion.p>
            <motion.p
              className="text-3xl font-bold text-center text-cyan-300 mb-10"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              Actualmente laborando como Desarrollador
            </motion.p>
            <motion.p className="text-white/70" variants={textVariants}>📧 marvinv708@gmail.com</motion.p>
            <motion.p className="text-white/70" variants={textVariants}>📍 Guazacapán, Santa Rosa, Guatemala</motion.p>

            {/* ICONOS REDES SOCIALES */}
            <motion.div
              className="mt-5 flex gap-5 justify-center md:justify-start text-2xl"
              variants={textVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/marvin-vasquez-27557397/"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#818cf8" }}
                className="text-cyan-400 transition"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/alexito.vasquez1/"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#60a5fa" }}
                className="text-blue-400 transition"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://github.com/Alexmavl"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#e5e7eb" }}
                className="text-gray-300 transition"
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* IMAGEN DE PERFIL */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 128, 128, 0.6)",
            }}
          >
            <img
              src="/ImagenesPortafolio/FotoPerfil2.jpg"
              alt="Marvin Alexander Vásquez López"
              className="w-80 h-80 object-cover rounded-full border-4 border-cyan-500 shadow-xl transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
